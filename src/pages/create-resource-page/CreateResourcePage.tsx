import { CreateResourceMain } from './componentns/blocks/crate-resource-main/CreateResourceMain';
import { CreateResourceHero } from './componentns/blocks/create-resource-hero/CreateResourceHero';

// Страница создания ресурса
export const CreateResourcePage = () => {
    return (
        <div className="w-full pb-6 md:pb-10 lg:mb-14">
            <CreateResourceHero />

            <CreateResourceMain />
        </div>
    );
};
