import { Container } from '../container/Container';
import { Text } from '../text/Text';

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-(--bg-accent) shadow-[0_-2px_2px_var(--shadow-main-color)] p-2.5">
            <Container styleVariant={'inner'}>
                <div className="gird place-items-center">
                    <Text styleVariant={'xs'} className="text-(--text-accent)">
                        © MR Construction {year} г.
                    </Text>
                </div>
            </Container>
        </footer>
    );
};
