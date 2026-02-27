// Ключи для запросов
export const resourcesKey = {
    all: ['resources'] as const,
    byId: (id: string | number) => ['resources', id] as const,
};

export const bookingsKey = {
    all: ['bookings'] as const,
    resource: (resourceId: string) => ['bookings', 'resource', resourceId] as const,
};
