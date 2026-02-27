import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router/AppRoutes';
import './styles/main.css';

// Комппонент приложения
export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};
