import type { BookingStatus } from '@/types/resources.type';
import type { CreateBookingRes } from '@/types/resources.type';
import { useState, useMemo } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export type ChangeStatusBtnsTypes = Extract<BookingStatus, 'Confirmed' | 'Cancelled'>;
export type ChangeStatusBtnsConfig = { type: ChangeStatusBtnsTypes; icon: React.ElementType<React.SVGProps<SVGSVGElement>> };

export type FilterListType = 'status' | 'date' | 'actions';
export type FilterListConfig = { title: string; type: FilterListType; fn?: () => void };

export type SortType = 'status' | 'date';
export type SortOrder = 'asc' | 'desc';

// Хук для обработки бронирований
export const useRecourceMain = ({ bookings }: { bookings: CreateBookingRes[] | undefined }) => {
    const [sort, setSort] = useState<{ type: SortType | null; orders: Record<SortType, SortOrder> }>({
        type: null,
        orders: { date: 'asc', status: 'asc' },
    });

    const handleSort = (type: SortType) => {
        setSort(prev => ({
            type,
            orders: {
                ...prev.orders,
                [type]: prev.orders[type] === 'asc' ? 'desc' : 'asc',
            },
        }));
    };

    const sortBookings = (bookings: CreateBookingRes[], type: SortType, order: SortOrder) => {
        const statusOrder: Record<BookingStatus, number> = {
            Created: 1,
            Confirmed: 2,
            Expired: 3,
            Cancelled: 4,
        };

        return [...bookings].sort((a, b) => {
            let result = 0;

            if (type === 'date') {
                result = new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
            }

            if (type === 'status') {
                result = statusOrder[a.status] - statusOrder[b.status];
            }

            return order === 'asc' ? result : -result;
        });
    };

    const sortedBookings = useMemo(() => {
        if (!bookings) return [];
        if (!sort.type) return bookings;

        return sortBookings(bookings, sort.type, sort.orders[sort.type]);
    }, [bookings, sort]);

    const filterListConfig: FilterListConfig[] = [
        { title: 'Статус', type: 'status', fn: () => handleSort('status') },
        { title: 'Дата', type: 'date', fn: () => handleSort('date') },
        { title: 'Действия', type: 'actions' },
    ];

    const chageStatusBtnsConfig: ChangeStatusBtnsConfig[] = [
        { icon: FaCheck, type: 'Confirmed' },
        { icon: ImCross, type: 'Cancelled' },
    ];

    const formatBookingDate = (isoDate: string) => {
        const date = new Date(isoDate).toLocaleString('ru-RU', {
            day: '2-digit',
            month: 'short',
            year: '2-digit',
        });

        return date;
    };

    return { sort, filterListConfig, chageStatusBtnsConfig, formatBookingDate, sortedBookings };
};
