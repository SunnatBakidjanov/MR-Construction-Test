import { cn } from '@/utils/cn';

type StyleVariant = 'xs' | 'sm' | 'md';
type Props = { className?: string; styleVariant?: StyleVariant } & Omit<React.ComponentPropsWithoutRef<'p'>, 'className'>;

// Компонент текста
export const Text = ({ className, styleVariant, ...rest }: Props) => {
    return (
        <p
            className={cn(
                'leading-relaxed',
                {
                    'text-xs md:text-sm': styleVariant === 'xs',
                    'text-sm md:text-base': styleVariant === 'sm',
                    'md:text-lg lg:text-xl': styleVariant === 'md',
                },
                className
            )}
            {...rest}
        ></p>
    );
};
