import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { FormValues } from '@/pages/create-resource-page/componentns/create-resource-form/CreateResourceForm';
import type { UseFormReset } from 'react-hook-form';
import { createResource } from '@/api/resource.api';
import { resourcesKey } from '@/utils/queryKeys';

type Args = { reset: UseFormReset<FormValues> };

// Запрос для создания ресурса
export const useCreateResource = ({ reset }: Args) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createResource,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: resourcesKey });

            reset?.();
        },
    });
};
