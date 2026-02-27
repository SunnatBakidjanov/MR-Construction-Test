import { HeroBlock, type Config } from '@/components/hero-block/HeroBlock';

export const SettingHero = () => {
    const config = { title: 'Настройки', subtitle: 'Настройки приложения' } as Config;

    return <HeroBlock config={config} />;
};
