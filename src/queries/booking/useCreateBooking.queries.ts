import { createBooking } from '@/api/booking.api';
import type { FormValues } from '@/pages/booking-page/components/booking-form/BookingForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingsKey } from '@/utils/queryKeys';
import type { Resource } from '@/types/resources.type';
import type { UseFormSetError } from 'react-hook-form';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import type { CreateBookingRes } from '@/types/resources.type';
import { toast } from 'react-toastify';

type Args = { resourceId: Resource['id']; setError: UseFormSetError<FormValues> };
type ApiError = { message?: string };

export const useCreateBooking = ({ resourceId, setError }: Args) => {
    const queryClient = useQueryClient();
    const naviagate = useNavigate();

    return useMutation({
        mutationFn: (data: FormValues) => createBooking(resourceId, data),

        onSuccess: data => {
            queryClient.setQueryData(bookingsKey.resource(resourceId), (old: { bookings: CreateBookingRes[] } | undefined) => {
                if (!old) return old;

                return {
                    ...old,
                    bookings: [...old.bookings, data.booking],
                };
            });

            toast.success('Бронирование создано');
            naviagate(`/resources/${resourceId}`);
        },

        onError: (error: Error) => {
            const err = error as AxiosError<ApiError>;

            if (err?.response?.data?.message === 'Booking overlaps' && err.status === 409) {
                setError('root', { type: 'custom', message: 'Пересечение бронирований' });
            }

            if (err.status === 500) {
                setError('root', { type: 'custom', message: 'Что-то пошло не так' });
            }
        },
    });
};
