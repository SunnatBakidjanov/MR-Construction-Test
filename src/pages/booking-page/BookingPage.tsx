import { BookingHero } from './components/blocks/booking-hero/BookingHero';
import { BookingMain } from './components/blocks/booking-main/BookingMain';

export const BookingPage = () => {
    return (
        <div className="w-full">
            <BookingHero />

            <BookingMain />
        </div>
    );
};
