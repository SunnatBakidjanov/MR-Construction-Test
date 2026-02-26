// Типы ресурсов
export type CreateResourceRes = { message: string };

export type Resource = { id: number; name: string };
export type GetAllResourcesRes = { resources: Resource[] };
