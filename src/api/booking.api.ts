import type { FormValues } from '@/pages/booking-page/components/booking-form/BookingForm';
import type { GetAllResourceBookings, Resource, BookingStatus, CreateBookingRes } from '@/types/resources.type';
import { apiCreateBookingUrl, apiGetAllBookingsUrl, apiUpdateBookingStatusUrl } from '@/utils/apiUrls';
import axios from 'axios';

// Запрос для создания бронирования
export const createBooking = async (resourceId: Resource['id'], data: FormValues) => {
    if (!resourceId || !data) return;

    const res = await axios.post(apiCreateBookingUrl(resourceId), data);
    return res.data;
};

// Запрос для получения всех бронирований ресусра
export const getAllResourceBookings = async (resourceId: Resource['id']) => {
    if (!resourceId) return;

    const res = await axios.get<GetAllResourceBookings>(`${apiGetAllBookingsUrl(resourceId)}`);
    return res.data;
};

// Запрос для изменения статуса бронирования
export const updateBookingStatus = (bookingId: CreateBookingRes['id'], status: BookingStatus) => {
    return axios.patch(`${apiUpdateBookingStatusUrl(bookingId)}`, {
        status,
    });
};
