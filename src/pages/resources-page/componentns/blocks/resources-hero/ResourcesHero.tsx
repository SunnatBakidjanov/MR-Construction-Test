import { HeroBlock, type Config } from '@/components/hero-block/HeroBlock';
import { createResourceUrl } from '@/utils/appUrls';
import { cn } from '@/utils/cn';

// Блок Hero для Resources
export const ResourcesHero = () => {
    const config = { title: 'Ресурсы', subtitle: 'Управляйте вашими ресурсами', link: 'Создать ресурс' } as Config;

    return (
        <HeroBlock
            config={config}
            linkTo={createResourceUrl}
            linkInner={
                <span className="flex items-center w-4 h-4">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <span key={i} className={cn('absolute block w-0.5 h-4 bg-(--both-white) mt-px', i % 2 === 0 && 'rotate-90')} />
                    ))}
                </span>
            }
        />
    );
};
