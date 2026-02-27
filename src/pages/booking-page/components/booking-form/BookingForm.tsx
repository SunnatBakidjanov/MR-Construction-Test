import { Text } from '@/components/text/Text';
import { useForm } from 'react-hook-form';
import { useBookingForm } from './hooks/useBookingForm';
import { Btn } from '@/components/btn/Btn';
import { AnimatePresence, motion } from 'framer-motion';
import { useCreateBooking } from '@/queries/booking/useCreateBooking.queries';
import { useParams } from 'react-router-dom';
import { DottedLoader } from '@/components/loaders/dotted-loader/DottedLoader';

export type FormValues = { startTime: string; endTime: string };

export const BookingForm = () => {
    const {
        register,
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormValues>();

    const { id } = useParams();
    const { mutate, isPending } = useCreateBooking({ resourceId: id ? id : '', setError });
    const { inputsConfig, validateBooking } = useBookingForm({ control });

    return (
        <form
            onSubmit={handleSubmit(data => {
                const validation = validateBooking();

                if (validation !== true) {
                    setError('root', { type: 'custom', message: validation });

                    return;
                }

                mutate(data);
            })}
            className="space-y-5 max-w-md lg:max-w-xl"
        >
            <div className="space-y-4 md:space-y-5">
                {inputsConfig.map(({ label, name, required }) => (
                    <div key={name} className="space-y-1">
                        <label className="block space-y-1 md:space-y-1.5">
                            <Text styleVariant={'md'}>{label}</Text>
                            <input
                                type="datetime-local"
                                {...register(name, { required })}
                                className="border border-(--border-color) rounded px-2 py-1 md:py-2 lg:py-2.5 w-full outline-none focus-visible:border-(--hover-accent-color)"
                            />
                        </label>

                        <AnimatePresence mode="wait">
                            {errors[name] && (
                                <motion.p
                                    key={name}
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    className="text-red-500 text-sm ml-0.5"
                                >
                                    {errors[name]?.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <div className="space-y-3">
                <AnimatePresence mode="wait">
                    {errors.root?.message && (
                        <motion.p
                            key="booking-error"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="text-red-500 text-sm ml-1"
                        >
                            {errors.root.message}
                        </motion.p>
                    )}
                </AnimatePresence>

                <Btn type="submit" className="w-full sm:max-w-none">
                    {isPending ? <DottedLoader /> : 'Забронировать'}
                </Btn>
            </div>
        </form>
    );
};
