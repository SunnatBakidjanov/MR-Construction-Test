import { Container } from '@/components/container/Container';
import { TitleMain } from '@/components/title-main/TitleMain';
import { ChangeThemeBtn } from '../../change-theme-btn/ChangeThemeBtn';

export const MainSettings = () => {
    return (
        <section className="pt-5 md:pt-7">
            <Container styleVariant={'inner'}>
                <TitleMain>Основные настройки</TitleMain>

                <div className="mt-4 md:mt-6 pl-1 pr-0.5 w-full">
                    <ChangeThemeBtn />
                </div>
            </Container>
        </section>
    );
};
