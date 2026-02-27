import { Title } from '@/components/title/Title';
import { useTheme } from './hooks/useTheme';
import { cn } from '@/utils/cn';

// Кнопка для смены темы
export const ChangeThemeBtn = () => {
    const { isDark, toggle } = useTheme();

    return (
        <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
            <Title as={'h3'} styleVariant={'md'} className="font-semibold">
                Изменить тему
            </Title>

            <button type="button" onClick={toggle} className="relative w-12 h-6 rounded-full bg-(--bg-accent) transition-colors cursor-pointer">
                <span
                    className={cn(
                        'absolute top-1 left-1 w-4 h-4 rounded-full bg-(--text-accent) transition-transform duration-300',
                        isDark && 'translate-x-6'
                    )}
                />
            </button>
        </div>
    );
};
