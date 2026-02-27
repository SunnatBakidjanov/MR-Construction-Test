import type { FormValues } from '@/pages/booking-page/components/booking-form/BookingForm';
import type { Resource } from '@/types/resources.type';
import { apiCreateBookingUrl } from '@/utils/apiUrls';
import axios from 'axios';

// Запрос для создания бронирования
export const createBooking = async (resourceId: Resource['id'], data: FormValues) => {
    if (!resourceId || !data) return;

    const res = await axios.post(apiCreateBookingUrl(resourceId), data);
    return res.data;
};
