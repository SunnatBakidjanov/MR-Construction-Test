import { Title } from '../title/Title';

// Заголовок для Main блоков страниц
export const TitleMain = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-(--bg-card) px-3 py-2 rounded-lg border border-(--border-color)">
            <Title as={'h2'} styleVariant={'lg'}>
                {children}
            </Title>
        </div>
    );
};
