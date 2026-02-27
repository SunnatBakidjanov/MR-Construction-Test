import { useQuery } from '@tanstack/react-query';
import { getAllResources } from '@/api/resource.api';
import { resourcesKey } from '@/utils/queryKeys';

// Запрос на получение всех ресурсов
export const useAllResources = () => {
    const staleTime = Infinity; // Запросы на обновление ресурсов идут только если ресурс создался или пользователь обновил данные через кнопку

    return useQuery({
        queryKey: resourcesKey.all,
        queryFn: getAllResources,
        retry: 1,
        staleTime,
    });
};
