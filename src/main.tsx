import { createRoot } from 'react-dom/client';
import { App } from './App';
import { QueryProvider } from './providers/QueryProvider';

// Рендер приложения
const rootElemet = document.getElementById('root') as HTMLElement;
const reactRoot = createRoot(rootElemet);

reactRoot.render(
    <QueryProvider>
        <App />
    </QueryProvider>
);
