// Типы ресурсов
export type CreateResourceRes = { message: string };

export type Resource = { id: string; name: string };
export type GetAllResourcesRes = { resources: Resource[] };
export type GetResourceRes = { resource: Resource };

// Типы бронирования
export type CreateBookingRes = { startTime: string; endTime: string };
