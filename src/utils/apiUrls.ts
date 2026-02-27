import type { CreateBookingRes, Resource } from '@/types/resources.type';

// URL для запросов к API
const APP_URL = 'http://localhost:8000/api';

// Ресурсы
export const apiCreateResourceUrl = `${APP_URL}/resources/create`;
export const apiGetAllResourcesUrl = `${APP_URL}/resources/all`;
export const apiGetResourceUrl = `${APP_URL}/resources`;

// Бронирование
export const apiCreateBookingUrl = (id: Resource['id']) => `${APP_URL}/resources/${id}/booking`;
export const apiGetAllBookingsUrl = (id: Resource['id']) => `${APP_URL}/resources/${id}/bookings`;
export const apiUpdateBookingStatusUrl = (id: CreateBookingRes['id']) => `${APP_URL}/resources/bookings/${id}`;
