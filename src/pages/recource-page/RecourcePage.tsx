import { RecourceHero } from './componentes/blocks/recource-hero/RecourceHero';
import { RecourceMain } from './componentes/blocks/recource-main/RecourceMain';

// Страница ресурса
export const RecourcePage = () => {
    return (
        <div className="w-full pb-6 md:pb-10 lg:pb-14">
            <RecourceHero />

            <RecourceMain />
        </div>
    );
};
