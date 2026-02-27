import { Container } from '@/components/container/Container';
import { Link, useParams } from 'react-router-dom';
import { resurcesUrl, bookingUrl } from '@/utils/appUrls';

export const RecourceMain = () => {
    const { id } = useParams();

    return (
        <section className="pt-6 lg:pt-8">
            <Container styleVariant={'inner'}>
                <div>
                    <Link
                        to={`${resurcesUrl}/${id}/${bookingUrl}`}
                        className="flex items-center justify-center tracking-wide bg-(--bg-accent) text-(--both-white) shadow-[0_4px_4px_var(--shadow-main-color)] hover:bg-(--hover-accent-color) transition-all duration-200 ease-out py-2 md:py-2.5 px-6 sm:px-8 md:px-12 rounded-lg sm:w-fit"
                    >
                        Бронирование
                    </Link>

                    <div>
                        <ul></ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};
