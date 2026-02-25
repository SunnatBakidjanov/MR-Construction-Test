import { Container } from '@/components/container/Container';
import { CreateResourceForm } from '../../create-resource-form/CreateResourceForm';
import { TitleMain } from '@/components/title-main/TitleMain';

// Основной блок для CreateResource
export const CreateResourceMain = () => {
    return (
        <section className="pt-5 lg:pt-7">
            <Container styleVariant={'inner'}>
                <TitleMain>Создайте ресурс</TitleMain>

                <div className="mt-4">
                    <CreateResourceForm />
                </div>
            </Container>
        </section>
    );
};
