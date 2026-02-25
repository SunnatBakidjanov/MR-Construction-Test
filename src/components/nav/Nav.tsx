import { Text } from '../text/Text';
import { navConfig } from './config/nav.config';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNav } from './hooks/useNav';
import { cn } from '@/utils/cn';

type StyleVariant = 'mobile' | 'desktop';
type Props = { styleVariant?: StyleVariant };

// Компонент навигациии
export const Nav = ({ styleVariant = 'desktop' }: Props) => {
    const { isOpen, toggleMenu, path } = useNav();
    const isMobile = styleVariant === 'mobile';

    return (
        <div className="relative h-full">
            {isMobile && (
                <button type="button" onClick={toggleMenu} className="grid place-items-center w-7 h-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <span key={i} className="block w-full h-0.75 bg-(--bg-main)" />
                    ))}
                </button>
            )}

            <motion.nav
                initial={{ x: isMobile ? '100%' : 0 }}
                animate={{ x: isOpen ? 0 : isMobile ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                    'bg-(--bg-secondary) border-(--border-color)',
                    isMobile ? 'fixed w-5/6 h-screen top-0 right-0 border-l-2' : 'w-fit border-r-2 h-full pt-5'
                )}
            >
                {isMobile && (
                    <div className="flex justify-end w-full py-3.5 pr-3">
                        <button type="button" onClick={toggleMenu} className="relative w-5.5 h-5.5">
                            {Array.from({ length: 2 }).map((_, i) => (
                                <span key={i} className={cn('absolute block w-full h-1 rotate-45 bg-(--bg-accent)', i % 2 === 0 && '-rotate-45')} />
                            ))}
                        </button>
                    </div>
                )}

                <ul className={cn('border-y border-(--border-color) overflow-auto', isMobile ? 'h-[calc(100vh-48px)]' : 'h-full')}>
                    {navConfig.map(item => (
                        <li key={item.path} className="relative border-(--border-color) border-b overflow-hidden">
                            <Text styleVariant={'sm'} className="font-bold">
                                <Link
                                    to={item.path}
                                    className={cn('flex items-center gap-3 py-4 px-8 md:px-20', {
                                        'bg-(--bg-accent) text-(--text-accent)': item.path.includes(path),
                                    })}
                                >
                                    {item.path.includes(path) && (
                                        <span className={cn('absolute w-4.5 h-4.5 bg-(--both-white) rotate-45', isMobile ? '-left-3' : '-right-3')} />
                                    )}

                                    {item.icon && <item.icon className="text-lg md:text-xl" />}
                                    {item.text}
                                </Link>
                            </Text>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </div>
    );
};
