import { Outlet } from 'react-router-dom';
import { Header } from '@components/header/Header';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/footer/Footer';
import { Container } from '@/components/container/Container';
import { ToastContainer } from 'react-toastify';

// Лейаут основного контента
export const MainLayout = () => {
    return (
        <Container styleVariant={'main'}>
            <Header />

            <main className="flex flex-1">
                <ToastContainer
                    position="bottom-left"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <div className="hidden md:block">
                    <Nav />
                </div>

                <Outlet />
            </main>

            <Footer />
        </Container>
    );
};
