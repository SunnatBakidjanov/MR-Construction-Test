import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/main-layout/MainLayout';
import { createResourceUrl, homeUrl, resurcesUrl, settingsUrl } from '@utils/appUrls';
import { ResourcesPage } from '@/pages/resources-page/ResourcesPage';
import { CreateResourcePage } from '@/pages/create-resource-page/CreateResourcePage';

// Роуты приложения
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={homeUrl} element={<Navigate to={resurcesUrl} />}></Route>

            <Route element={<MainLayout />}>
                <Route path={resurcesUrl} element={<ResourcesPage />}></Route>

                <Route path={createResourceUrl} element={<CreateResourcePage />}></Route>

                <Route path={settingsUrl} element={<div>Настройки</div>}></Route>
            </Route>
        </Routes>
    );
};
