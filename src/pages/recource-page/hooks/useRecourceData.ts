import { useParams } from 'react-router-dom';
import { useResource } from '@/queries/useRecource.queries';

export const useRecourceData = () => {
    const params = useParams();
    const { data } = useResource({ id: params.id ? params.id : '' });

    return { data };
};
