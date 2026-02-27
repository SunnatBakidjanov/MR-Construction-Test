// Типы ресурсов
export type CreateResourceRes = { message: string };

export type Resource = { id: string; name: string };
export type GetAllResourcesRes = { resources: Resource[] };
export type GetResourceRes = { resource: Resource };

// Типы бронирования
export type BookingStatus = 'Created' | 'Expired' | 'Confirmed' | 'Cancelled';
export type CreateBookingRes = { id: string; startTime: string; endTime: string; status: BookingStatus };
export type GetAllResourceBookings = { bookings: CreateBookingRes[] };
