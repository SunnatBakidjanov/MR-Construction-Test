import { cn } from '@/utils/cn';

type Props = { className?: string } & Omit<React.ComponentPropsWithoutRef<'button'>, 'className'>;

// Компонент кнопки
export const Btn = ({ className, ...rest }: Props) => {
    return (
        <button
            className={cn(
                'bg-(--bg-accent) text-(--text-accent) h-10 sm:h-11 sm:max-w-sm rounded-lg shadow-[0_4px_4px_var(--shadow-main-color)] cursor-pointer hover:bg-(--hover-accent-color) transition-all duration-200 ease-out',
                className
            )}
            {...rest}
        ></button>
    );
};
