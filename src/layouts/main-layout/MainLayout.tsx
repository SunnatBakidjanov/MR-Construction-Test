import { Outlet } from 'react-router-dom';
import { Header } from '@components/header/Header';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/footer/Footer';
import { Container } from '@/components/container/Container';

// Лейаут основного контента
export const MainLayout = () => {
    return (
        <Container styleVariant={'main'}>
            <Header />

            <main className="flex-1">
                <Nav />
                <Outlet />
            </main>

            <Footer />
        </Container>
    );
};
