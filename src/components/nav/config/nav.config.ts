import { resurcesUrl, settingsUrl } from '@/utils/appUrls';
import { BsFillGearFill } from 'react-icons/bs';
import { FaFolderOpen } from 'react-icons/fa6';

type NavItem = { title: string; icon: React.ElementType<React.SVGProps<SVGSVGElement>>; path: string };

// Конфигурация навигации
export const navConfig: NavItem[] = [
    { title: 'Настройки', icon: BsFillGearFill, path: settingsUrl },
    { title: 'Ресурсы', icon: FaFolderOpen, path: resurcesUrl },
];
