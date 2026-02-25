import { Container } from '@/components/container/Container';
import { Title } from '@/components/title/Title';
import { Link } from 'react-router-dom';

export type Config = { [key in 'link' | 'title' | 'subtitle']?: string };
type Props = { linkTo?: string; linkInner?: React.ReactNode; config: Config };

// Первый блок на страницах
export const HeroBlock = ({ linkTo, linkInner, config }: Props) => {
    return (
        <section className="pt-5 md:pt-10 lg:pt-14 w-full">
            <Container styleVariant={'inner'}>
                <div className="flex justify-between flex-wrap gap-x-8 gap-y-4 border-(--border-color) border-b pb-5">
                    <div>
                        <Title as={'h1'} styleVariant={'2xl'}>
                            {config.title}
                        </Title>

                        <Title as={'h2'} styleVariant={'sm'} className="text-(--text-main) font-bold tracking-wide">
                            {config.subtitle}
                        </Title>
                    </div>

                    {linkTo && (
                        <Link
                            to={linkTo}
                            className="flex justify-center items-center gap-1 relative h-fit py-2 sm:py-2.5 px-12 bg-(--bg-accent) text-(--both-white) shadow-[0_4px_4px_var(--shadow-main-color)] cursor-pointer rounded-lg mt-2 shrink-0 active:top-1 active:shadow-[0_2px_2px_var(--shadow-main-color)] hover:bg-(--hover-accent-color) transition-all duration-200 ease-out"
                        >
                            {linkInner}
                            {config.link}
                        </Link>
                    )}
                </div>
            </Container>
        </section>
    );
};
