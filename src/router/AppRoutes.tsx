import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/main-layout/MainLayout';
import { homeUrl, resurcesUrl } from '@utils/appUrls';

// Роуты приложения
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={homeUrl} element={<Navigate to={resurcesUrl} />}></Route>

            <Route element={<MainLayout />}>
                <Route path={resurcesUrl} element={<div>Ресурсы</div>}></Route>
            </Route>
        </Routes>
    );
};
