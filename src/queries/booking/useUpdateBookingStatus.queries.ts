import { useQueryClient, useMutation } from '@tanstack/react-query';
import { bookingsKey } from '@/utils/queryKeys';
import type { BookingStatus, CreateBookingRes } from '@/types/resources.type';
import { updateBookingStatus } from '@/api/booking.api';

// Запрос для изменения статуса бронирования
export const useUpdateBookingStatus = (resourceId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ bookingId, status }: { bookingId: CreateBookingRes['id']; status: BookingStatus }) => updateBookingStatus(bookingId, status),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: bookingsKey.resource(resourceId),
            });
        },
    });
};
