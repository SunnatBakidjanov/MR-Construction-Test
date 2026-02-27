import { useQueryClient, useMutation } from '@tanstack/react-query';
import { bookingsKey } from '@/utils/queryKeys';
import type { BookingStatus, CreateBookingRes } from '@/types/resources.type';
import { updateBookingStatus } from '@/api/booking.api';

// Запрос для изменения статуса бронирования
export const useUpdateBookingStatus = (resourceId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ bookingId, status }: { bookingId: CreateBookingRes['id']; status: BookingStatus }) => updateBookingStatus(bookingId, status),

        onSuccess: (_, { bookingId, status }) => {
            queryClient.setQueryData(bookingsKey.resource(resourceId), (old: { bookings: CreateBookingRes[] } | undefined) => {
                if (!old) return old;

                return {
                    ...old,
                    bookings: old.bookings.map(booking => (booking.id === bookingId ? { ...booking, status } : booking)),
                };
            });
        },
    });
};
