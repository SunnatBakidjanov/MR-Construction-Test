import { useQuery } from '@tanstack/react-query';
import { resourcesKey } from '@utils/queryKeys';
import { getResource as getApiRecource } from '@/api/resource.api';
import type { Resource } from '@/types/resources.type';

type Args = { id: Resource['id'] };

// Запрос на получение ресурса
export const useResource = ({ id }: Args) => {
    const staleTime = 1000 * 60 * 5; // 5 мин

    return useQuery({
        queryKey: resourcesKey.byId(id),
        queryFn: () => getApiRecource(id),
        retry: 1,
        enabled: !!id,
        staleTime,
    });
};
