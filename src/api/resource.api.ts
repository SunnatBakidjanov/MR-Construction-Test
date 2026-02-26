import type { FormValues } from '@/pages/create-resource-page/componentns/create-resource-form/CreateResourceForm';
import axios from 'axios';
import { apiCreateResourceUrl, apiGetAllResourcesUrl } from '@/utils/apiUrls';
import type { CreateResourceRes, GetAllResourcesRes } from '@/types/resources.type';

// Запрос для создания ресурса
export const createResource = async (data: FormValues) => {
    const res = await axios.post<CreateResourceRes>(apiCreateResourceUrl, data);
    return res.data;
};

// Запрос для получения всех ресурсов
export const getAllResources = async () => {
    const res = await axios.get<GetAllResourcesRes>(apiGetAllResourcesUrl);
    return res.data;
};
