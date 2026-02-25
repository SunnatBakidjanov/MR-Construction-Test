import { cn } from '@/utils/cn';

type StyleVariant = 'main' | 'inner';
type Props = { className?: string; styleVariant?: StyleVariant } & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>;

// Компонент конетйнера
export const Container = ({ className, styleVariant, ...rest }: Props) => {
    return (
        <div
            className={cn(
                {
                    'px-4 md:px-6': styleVariant === 'inner',
                    'min-h-screen min-w-xs flex flex-col': styleVariant === 'main',
                },
                className
            )}
            {...rest}
        ></div>
    );
};
