import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { FormValues } from '@/pages/create-resource-page/componentns/create-resource-form/CreateResourceForm';
import type { UseFormReset, UseFormSetError } from 'react-hook-form';
import { createResource } from '@/api/resource.api';
import { resourcesKey } from '@/utils/queryKeys';
import { useNavigate } from 'react-router-dom';
import { resurcesUrl } from '@/utils/appUrls';
import type { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type Args<T extends FormValues> = { reset: UseFormReset<T>; setError: UseFormSetError<T> };
type ApiError = { message: string };

// Запрос для создания ресурса
export const useCreateResource = ({ reset, setError }: Args<FormValues>) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: createResource,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: resourcesKey.all });

            toast.success('Ресурс создан');
            reset?.();
            navigate(resurcesUrl);
        },

        onError: error => {
            const err = error as AxiosError<ApiError>;

            if (err.response?.data?.message === 'Name is required' && err.status === 400) {
                setError('name', { type: 'custom', message: 'Название обязательно' });
            }

            if (err.status === 500) {
                setError('name', { type: 'custom', message: 'Что-то пошло не так' });
            }
        },
    });
};
