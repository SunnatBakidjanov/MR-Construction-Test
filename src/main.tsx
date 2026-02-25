import { createRoot } from 'react-dom/client';
import { App } from './App';

// Рендер приложения
const rootElemet = document.getElementById('root') as HTMLElement;
const reactRoot = createRoot(rootElemet);

reactRoot.render(<App />);
