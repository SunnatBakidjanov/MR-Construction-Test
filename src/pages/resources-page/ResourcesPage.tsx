import { ResourcesHero } from './componentns/blocks/resources-hero/ResourcesHero';
import { ResourcesMain } from './componentns/blocks/resources-main/ResourcesMain';

// Страница ресурсов
export const ResourcesPage = () => {
    return (
        <div className="w-full pb-6 md:pb-10 lg:pb-14">
            <ResourcesHero />

            <ResourcesMain />
        </div>
    );
};
