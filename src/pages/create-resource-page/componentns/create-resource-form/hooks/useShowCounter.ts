import { useWatch, type Control } from 'react-hook-form';
import type { FormValues } from '../CreateResourceForm';

type Args = { control: Control<FormValues> };

// Хук для показа счетчика символов в поле ввода
export const useShowCounter = ({ control }: Args) => {
    const nameValue = useWatch({ control, name: 'name' });
    const maxLength = 20;
    const length = nameValue?.length || 0;
    const percent = (length / maxLength) * 100;

    const showCounter = percent >= 70;

    return { showCounter, maxLength, length };
};
