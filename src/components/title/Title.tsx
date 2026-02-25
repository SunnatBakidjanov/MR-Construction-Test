import { cn } from '@/utils/cn';

type ComponentExtendsTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type StyleVariant = 'sm' | 'md' | 'lg' | 'xl';
type Props<T extends React.ElementType> = {
    as: T;
    styleVariant?: StyleVariant;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'className'>;

// Компонет для заголовков
export const Title = ({ as, styleVariant, className, ...rest }: Props<ComponentExtendsTypes>) => {
    const TitleComponent = as || 'h2';

    return (
        <TitleComponent
            className={cn(
                'text-(--text-heading)',
                {
                    'text-sm md:text-base': styleVariant === 'sm',
                    'md:text-lg lg:text-xl': styleVariant === 'md',
                    'text-lg md:text-xl lg:text-2xl font-bold': styleVariant === 'lg',
                    'text-xl md:text-2xl lg:text-3xl font-bold': styleVariant === 'xl',
                },
                className
            )}
            {...rest}
        />
    );
};
