import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Клиент для серверный заппросов
const queryClient = new QueryClient();

// Провайдер для Tanstaqk Query
export const QueryProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
