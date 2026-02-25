import { useState } from 'react';
import { useLocation } from 'react-router-dom';

// хук для управления состоянием навигации
export const useNav = () => {
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    const toggleMenu = () => setOpen(!isOpen);

    return { isOpen, toggleMenu, path };
};
