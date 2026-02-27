import { createBooking } from '@/api/booking.api';
import type { FormValues } from '@/pages/booking-page/components/booking-form/BookingForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingsKey } from '@/utils/queryKeys';
import type { Resource } from '@/types/resources.type';
import type { UseFormSetError } from 'react-hook-form';
import type { AxiosError } from 'axios';

type Args = { resourceId: Resource['id']; setError: UseFormSetError<FormValues> };
type ApiError = { message?: string };

export const useCreateBooking = ({ resourceId, setError }: Args) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: FormValues) => createBooking(resourceId, data),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: bookingsKey.resource(resourceId),
            });
        },

        onError: (error: Error) => {
            const err = error as AxiosError<ApiError>;
            console.log('response:', err?.response);
            console.log('data:', err?.response?.data);

            if (err?.response?.data?.message === 'Booking overlaps' && err.status === 409) {
                setError('root', { type: 'custom', message: 'Пересечение бронирований' });
            }

            if (err.status === 500) {
                setError('root', { type: 'custom', message: 'Что-то пошло не так' });
            }
        },
    });
};
