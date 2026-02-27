import { Container } from '@/components/container/Container';
import { Title } from '@/components/title/Title';
import { BookingForm } from '../../booking-form/BookingForm';

export const BookingMain = () => {
    return (
        <section className="pt-4 md:pt-6">
            <Container styleVariant={'inner'}>
                <Title as={'h2'} styleVariant={'xl'}>
                    Выберите дату
                </Title>

                <div className="mt-2 md:mt-3">
                    <BookingForm />
                </div>
            </Container>
        </section>
    );
};
