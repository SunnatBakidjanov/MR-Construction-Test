import { HeroBlock, type Config } from '@/components/hero-block/HeroBlock';
import { useRecourceData } from '@/pages/recource-page/hooks/useRecourceData';
import { resurcesUrl } from '@/utils/appUrls';

export const BookingHero = () => {
    const { data } = useRecourceData();

    const conifg = { title: 'Бронирование', subtitle: `Ресурс: ${data?.resource?.name}`, link: 'К ресурсу' } as Config;

    return <HeroBlock config={conifg} linkTo={`${resurcesUrl}/${data?.resource?.id}`} />;
};
