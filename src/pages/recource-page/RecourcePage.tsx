import { RecourceHero } from './componentes/blocks/recource-hero/RecourceHero';
import { RecourceMain } from './componentes/blocks/recource-main/RecourceMain';

// Страница ресурса
export const RecourcePage = () => {
    return (
        <div className="w-full pb-10 md:pb-14 lg:pb-18">
            <RecourceHero />

            <RecourceMain />
        </div>
    );
};
