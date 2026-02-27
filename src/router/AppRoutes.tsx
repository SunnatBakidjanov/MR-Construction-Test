import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/main-layout/MainLayout';
import { createResourceUrl, homeUrl, resurcesUrl, settingsUrl } from '@utils/appUrls';
import { ResourcesPage } from '@/pages/resources-page/ResourcesPage';
import { CreateResourcePage } from '@/pages/create-resource-page/CreateResourcePage';
import { RecourcePage } from '@/pages/recource-page/RecourcePage';
import { RecourceGuard } from '@/pages/recource-page/componentes/recource-guard/RecourceGuard';
import { BookingPage } from '@/pages/booking-page/BookingPage';

// Роуты приложения
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={homeUrl} element={<Navigate to={resurcesUrl} />}></Route>

            <Route element={<MainLayout />}>
                <Route path={resurcesUrl} element={<ResourcesPage />} />

                <Route path={createResourceUrl} element={<CreateResourcePage />} />

                <Route path={`${resurcesUrl}/:id`} element={<RecourceGuard />}>
                    <Route index element={<RecourcePage />} />
                    <Route path="booking" element={<BookingPage />} />
                </Route>

                <Route path={settingsUrl} element={<div>Настройки</div>} />
            </Route>
        </Routes>
    );
};
