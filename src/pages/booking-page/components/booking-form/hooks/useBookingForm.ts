import { useWatch } from 'react-hook-form';
import type { FormValues } from '../BookingForm';
import type { Control } from 'react-hook-form';
import { useAllResourceBooking } from '@/queries/booking/useAllResourceBooking.queries';
import { useParams } from 'react-router-dom';

type Inputs = { label: string; name: keyof FormValues; required: string };
type Args = { control: Control<FormValues> };

// Хук для управления состоянем формы бронирования
export const useBookingForm = ({ control }: Args) => {
    const { id } = useParams();
    const { data } = useAllResourceBooking(id ?? '');
    const startTime = useWatch({ control, name: 'startTime' });
    const endTime = useWatch({ control, name: 'endTime' });

    const inputsConfig = [
        { label: 'Начало', name: 'startTime', required: 'Выберите время начала' },
        { label: 'Окончание', name: 'endTime', required: 'Выберите время окончания' },
    ] as Inputs[];

    const validateBooking = () => {
        if (!startTime || !endTime) return true;

        const start = new Date(startTime);
        const end = new Date(endTime);
        const now = new Date();

        if (start >= end) return 'Время начала должно быть раньше времени окончания';
        if (start < now) return 'Нельзя выбрать дату в прошлом';

        // Проверка пересечения с уже существующими бронированиями
        if (
            data?.bookings?.some(b => {
                // игнорируем отмененные бронирования
                if (b.status === 'Cancelled') return false;

                const bStart = new Date(b.startTime);
                const bEnd = new Date(b.endTime);

                // Пересечение интервалов
                return start < bEnd && end > bStart;
            })
        ) {
            return 'Пересечение бронирований';
        }

        return true;
    };

    return { inputsConfig, validateBooking };
};
