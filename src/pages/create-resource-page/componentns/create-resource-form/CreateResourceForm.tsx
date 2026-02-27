import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useShowCounter } from './hooks/useShowCounter';
import { RiFileListLine } from 'react-icons/ri';
import { Text } from '@/components/text/Text';
import { Btn } from '@/components/btn/Btn';
import { useCreateResource } from '@/queries/useCreateResource.queries';
import { DottedLoader } from '@/components/loaders/dotted-loader/DottedLoader';

export type FormValues = { name: string };

// Форма для создания ресурса
export const CreateResourceForm = () => {
    const {
        register,
        handleSubmit,
        control,
        setError,
        formState: { errors },
        reset,
    } = useForm<FormValues>({ mode: 'onSubmit' });

    const { showCounter, maxLength, length } = useShowCounter({ control });
    const { mutate, isPending } = useCreateResource({ reset, setError });

    return (
        <form onSubmit={handleSubmit(data => mutate(data))} className="grid gap-4 sm:gap-6">
            <div className="flex flex-col gap-1">
                <label className="grid gap-2 md:gap-2.5 sm:max-w-xl">
                    <Text styleVariant={'md'}>Название ресурса</Text>

                    <div className="flex items-center pl-2 gap-2 border-2 border-(--border-color) focus-within:border-(--hover-accent-color) rounded-md">
                        <RiFileListLine className="text-2xl" />

                        <input
                            {...register('name', {
                                required: 'Название обязательно',
                                minLength: {
                                    value: 3,
                                    message: 'Минимум 3 символа',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Максимум 20 символов',
                                },
                            })}
                            id="name"
                            maxLength={20}
                            autoComplete="off"
                            placeholder="Введите название"
                            className="py-1.5 md:py-2 w-full outline-none"
                        />
                    </div>
                </label>

                <AnimatePresence mode="wait">
                    {errors.name ? (
                        <motion.span
                            key="name-error"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="text-red-500 text-sm ml-1"
                        >
                            {errors.name.message}
                        </motion.span>
                    ) : (
                        showCounter && (
                            <motion.span
                                key="name-counter"
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                className="text-sm font-bold"
                            >
                                {length} / {maxLength}
                            </motion.span>
                        )
                    )}
                </AnimatePresence>
            </div>

            <Btn type="submit" disabled={isPending}>
                {isPending ? <DottedLoader /> : 'Создать'}
            </Btn>
        </form>
    );
};
