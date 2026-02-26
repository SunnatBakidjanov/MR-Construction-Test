import { cn } from '@/utils/cn';
import style from './index.module.css';

type Animation = { [key in 'delay' | 'duration']?: number };
type ClassNames = { [key in 'container' | 'dot']?: string };
type Props = { animation?: Animation; classNames?: ClassNames };

// Лоадер с точками
export const DottedLoader = ({ animation = { delay: 0.2, duration: 1.2 }, classNames = {} }: Props) => {
    return (
        <span className={cn('flex gap-2 items-center justify-center', classNames.container)}>
            {Array.from({ length: 3 }).map((_, i) => (
                <span
                    key={i}
                    className={cn('block w-3 h-3 rounded-full bg-(--both-white)', classNames.dot, style.dottedLoaderAnimation)}
                    style={{
                        animationDuration: `${animation.duration}s`,
                        animationDelay: `${i * animation.delay! - animation.duration!}s`,
                    }}
                ></span>
            ))}
        </span>
    );
};
