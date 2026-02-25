import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Утилита для объединения классов с учетом Tailwind CSS
export const cn = (...classNames: ClassValue[]) => {
    return twMerge(clsx(classNames));
};
