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

            <main className="flex flex-1">
                <div className="hidden md:block">
                    <Nav />
                </div>
                <Outlet />
            </main>

            <Footer />
        </Container>
    );
};
