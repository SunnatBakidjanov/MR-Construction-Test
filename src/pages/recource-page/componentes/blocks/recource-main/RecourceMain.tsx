import { Container } from '@/components/container/Container';
import { Link, useParams } from 'react-router-dom';
import { resurcesUrl, bookingUrl } from '@/utils/appUrls';
import { IoMdArrowDropdown } from 'react-icons/io';
import { cn } from '@/utils/cn';
import { useAllResourceBooking } from '@/queries/booking/useAllResourceBooking.queries';
import { Text } from '@/components/text/Text';
import { BtnRefetch } from '@/components/btn-refetch/BtnRefetch';
import { RoundedLoader } from '@/components/loaders/rounded-loader/RoundedLoader';
import { TitleMain } from '@/components/title-main/TitleMain';
import { useUpdateBookingStatus } from '@/queries/booking/useUpdateBookingStatus.queries';
import { useRecourceMain } from './hooks/useRecourceMain';
import type { FilterListConfig, ChangeStatusBtnsConfig } from './hooks/useRecourceMain';
import { DottedLoader } from '@/components/loaders/dotted-loader/DottedLoader';

export const RecourceMain = () => {
    const { id } = useParams();

    const { data, refetch, isLoading, isFetching } = useAllResourceBooking(id ? id : '');
    const { mutate, isPending } = useUpdateBookingStatus(id ? id : '');
    const { bookings } = data || {};
    const { sort, filterListConfig, chageStatusBtnsConfig, formatBookingDate, sortedBookings } = useRecourceMain({ bookings });

    return (
        <section className="pt-6 lg:pt-8">
            <Container styleVariant={'inner'}>
                <div>
                    <div className="flex items-center justify-between flex-wrap gap-x-5 gap-y-3">
                        <TitleMain>Список бронирований</TitleMain>

                        <Link
                            to={`${resurcesUrl}/${id}/${bookingUrl}`}
                            className="flex items-center justify-center tracking-wide bg-(--bg-accent) text-(--both-white) shadow-[0_4px_4px_var(--shadow-main-color)] hover:bg-(--hover-accent-color) transition-all duration-200 ease-out py-2 md:py-2.5 h-fit px-6 sm:px-8 md:px-12 rounded-lg sm:w-fit"
                        >
                            Бронирование
                        </Link>
                    </div>

                    <div className="mt-7 md:mt-10">
                        <div>
                            <BtnRefetch refetch={refetch} />
                        </div>

                        <span className="block w-full h-px bg-(--border-color) mt-2 mb-7"></span>

                        {isLoading || isFetching ? (
                            <div className="mt-20 md:mt-25 lg:mt-30 flex justify-center w-full">
                                <RoundedLoader className="w-24 h-24" />
                            </div>
                        ) : bookings?.length > 0 ? (
                            <div className="space-y-3 md:space-y-5">
                                <ul className="grid grid-cols-3 border border-(--border-color)">
                                    {filterListConfig.map(({ title, type, fn }: FilterListConfig) => {
                                        const isActions = type === 'actions';

                                        return (
                                            <li key={title} className={cn('w-full', !isActions && 'border-r border-(--border-color)')}>
                                                <button
                                                    type="button"
                                                    onClick={() => fn?.()}
                                                    className={cn(
                                                        'flex items-center font-bold w-full py-2 md:py-2.5 h-full bg-(--bg-secondary)',
                                                        !isActions
                                                            ? 'cursor-pointer pl-1 md:pl-2 justify-between hover:bg-(--bg-accent) hover:text-(--both-white) transition-all duration-200 ease-out'
                                                            : 'justify-end pr-1 md:pr-2'
                                                    )}
                                                >
                                                    {title}

                                                    {!isActions && (
                                                        <IoMdArrowDropdown
                                                            className={cn('w-6 h-6 md:h-7 md:w-7 shrink-0 mt-0.5 transition-transform duration-200', {
                                                                'opacity-0': isActions,
                                                                'rotate-180': type === sort.type && sort.orders[type] === 'desc',
                                                                'rotate-0': type === sort.type && sort.orders[type] === 'asc',
                                                            })}
                                                        />
                                                    )}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <ul className="space-y-2 md:space-y-2.5">
                                    {sortedBookings?.map(booking => {
                                        return (
                                            <li
                                                key={booking.id}
                                                className="flex justify-center items-center overflow-auto border border-(--border-color) py-1 md:py-1.5 lg:py-2"
                                            >
                                                <div className="flex w-full max-w-40 mx-1 md:mx-2 py-2 lg:py-1">
                                                    <Text
                                                        styleVariant={'sm'}
                                                        className={cn(
                                                            'flex items-center justify-center w-full h-full px-2 md:px-5 py-1 md:py-2 font-medium text-(--both-white) rounded-sm',
                                                            {
                                                                'bg-(--status-created)': booking.status === 'Created',
                                                                'bg-(--status-confirmed)': booking.status === 'Confirmed',
                                                                'bg-(--status-cancelled)': booking.status === 'Cancelled',
                                                                'bg-(--status-expired)': booking.status === 'Expired',
                                                            }
                                                        )}
                                                    >
                                                        {booking.status.toUpperCase()}
                                                    </Text>
                                                </div>

                                                <div className="pl-1 md:pl-2 border-x border-(--border-color) w-full">
                                                    <Text
                                                        styleVariant={'xs'}
                                                        className="flex flex-col h-full lg:flex-row gap-x-3 gap-y-1 font-medium w-full overflow-hidden"
                                                    >
                                                        <span className="block mb-0.5">{formatBookingDate(booking.startTime)}</span>
                                                        <span>{formatBookingDate(booking.endTime)}</span>
                                                    </Text>
                                                </div>

                                                <div className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-3 mx-1 md:mx-2 h-full w-full max-w-sm">
                                                    {booking.status === 'Created' ? (
                                                        isPending ? (
                                                            <DottedLoader classNames={{ dot: 'bg-(--bg-accent)' }} />
                                                        ) : (
                                                            chageStatusBtnsConfig.map(({ icon: Icon, type }: ChangeStatusBtnsConfig) => (
                                                                <button
                                                                    className={cn(
                                                                        'flex items-center justify-center h-full rounded-sm py-2.5 transition-all duration-200 ease-out cursor-pointer w-full',
                                                                        type === 'Confirmed'
                                                                            ? 'bg-(--status-created) shadow-[0_2px_2px_var(--shadow-main-color)] hover:bg-(--hover-accent-color)'
                                                                            : 'bg-(--status-cancelled) shadow-[0_2px_2px_var(--shadow-red-color)] hover:bg-(--shadow-red-color)'
                                                                    )}
                                                                    key={type}
                                                                    type="button"
                                                                    onClick={() => mutate({ bookingId: booking.id, status: type })}
                                                                >
                                                                    <Icon className="text-(--both-white)" />
                                                                </button>
                                                            ))
                                                        )
                                                    ) : (
                                                        <Text styleVariant={'sm'} className="font-medium shrink-0">
                                                            Действий нет
                                                        </Text>
                                                    )}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ) : (
                            <Text styleVariant={'md'} className="font-bold lg:text-2xl xl:text-3xl">
                                У вас пока нет бронирований
                            </Text>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};
