import { getAllResourceBookings } from '@/api/booking.api';
import type { Resource } from '@/types/resources.type';
import { bookingsKey } from '@/utils/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useAllResourceBooking = (id: Resource['id']) => {
    return useQuery({
        queryKey: bookingsKey.resource(id),
        queryFn: () => getAllResourceBookings(id),
        retry: 1,
        enabled: !!id,
        staleTime: Infinity,
    });
};
