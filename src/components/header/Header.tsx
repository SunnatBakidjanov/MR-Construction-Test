import { Title } from '../title/Title';
import { Container } from '../container/Container';
import { FaGear } from 'react-icons/fa6';

export const Header = () => {
    return (
        <header className="bg-(--bg-accent) shadow-[0_4px_4px_var(--shadow-main-color)] py-2.5 md:py-3.5 lg:py-4">
            <Container styleVariant={'inner'}>
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                    <FaGear className="text-(--text-accent) text-xl md:text-2xl lg:text-3xl mt-px lg:mt-0.5" />

                    <Title as={'h2'} styleVariant={'xl'} className="text-(--text-accent)">
                        MR Construction
                    </Title>
                </div>
            </Container>
        </header>
    );
};
