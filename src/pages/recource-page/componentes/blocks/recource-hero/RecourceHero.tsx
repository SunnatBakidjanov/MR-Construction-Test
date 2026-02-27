import { HeroBlock, type Config } from '@/components/hero-block/HeroBlock';
import { resurcesUrl } from '@/utils/appUrls';
import { useRecourceData } from '@/pages/recource-page/hooks/useRecourceData';

// Блок Hero для Recource
export const RecourceHero = () => {
    const { data } = useRecourceData();
    const config = { title: `${data?.resource?.name}`, subtitle: `№ ${data?.resource?.id}`, link: 'К ресурсам' } as Config;

    return <HeroBlock config={config} linkTo={resurcesUrl} />;
};
