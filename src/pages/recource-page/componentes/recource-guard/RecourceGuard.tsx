import { resurcesUrl } from '@/utils/appUrls';
import { Outlet, Navigate, useParams } from 'react-router-dom';
import { useResource } from '@/queries/useRecource.queries';
import { RoundedLoader } from '@/components/loaders/rounded-loader/RoundedLoader';

// Гуард для ресурса
export const RecourceGuard = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useResource({ id: id ?? '' });

    if (isLoading) {
        return (
            <div className="w-full block">
                <div className="w-full h-full flex items-center justify-center py-40">
                    <RoundedLoader className="w-26 h-26" />
                </div>
            </div>
        );
    }

    // если ошибка или ресурса нет
    if (isError || !data?.resource) {
        return <Navigate to={resurcesUrl} replace />;
    }

    return <Outlet />;
};
