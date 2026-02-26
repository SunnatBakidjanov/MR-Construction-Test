import { cn } from '@/utils/cn';

type Props = { className?: string; animationDuration?: number };

export const RoundedLoader = ({ className, animationDuration = 1 }: Props) => {
    return (
        <span
            className={cn('block w-20 h-20 animate-spin border-t-2 border-(--bg-accent) rounded-full', className)}
            style={{ animationDuration: `${animationDuration}s` }}
        ></span>
    );
};
