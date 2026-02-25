import { resurcesUrl, settingsUrl } from '@/utils/appUrls';
import { BsFillGearFill } from 'react-icons/bs';
import { FaFolderOpen } from 'react-icons/fa6';

type NavItem = { text: string; icon: React.ElementType<React.SVGProps<SVGSVGElement>>; path: string };

// Конфигурация навигации
export const navConfig: NavItem[] = [
    { text: 'Ресурсы', icon: FaFolderOpen, path: resurcesUrl },
    { text: 'Настройки', icon: BsFillGearFill, path: settingsUrl },
];
