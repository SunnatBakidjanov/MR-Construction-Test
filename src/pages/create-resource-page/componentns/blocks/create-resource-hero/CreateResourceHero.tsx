import { HeroBlock, type Config } from '@/components/hero-block/HeroBlock';
import { resurcesUrl } from '@/utils/appUrls';

// Блок Hero для CreateResource
export const CreateResourceHero = () => {
    const config = { title: 'Создание ресурса', subtitle: 'Создайте свой ресурс', link: 'К ресурсам' } as Config;

    return <HeroBlock config={config} linkTo={resurcesUrl} />;
};
