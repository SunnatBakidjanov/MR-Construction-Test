import type { FormValues } from '@/pages/create-resource-page/componentns/create-resource-form/CreateResourceForm';
import axios from 'axios';
import { apiCreateResourceUrl, apiGetAllResourcesUrl, apiGetResourceUrl } from '@/utils/apiUrls';
import type { CreateResourceRes, GetAllResourcesRes, GetResourceRes } from '@/types/resources.type';
import type { Resource } from '@/types/resources.type';

// Запрос для создания ресурса
export const createResource = async (data: FormValues) => {
    if (!data) return;

    const res = await axios.post<CreateResourceRes>(apiCreateResourceUrl, data);
    return res.data;
};

// Запрос для получения всех ресурсов
export const getAllResources = async () => {
    const res = await axios.get<GetAllResourcesRes>(apiGetAllResourcesUrl);
    return res.data;
};

// Запрос для получения ресурса
export const getResource = async (id: Resource['id']) => {
    if (!id) return;

    const res = await axios.get<GetResourceRes>(`${apiGetResourceUrl}/${id}`);
    return res.data;
};
