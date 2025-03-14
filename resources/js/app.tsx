import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles'; // Importamos ThemeProvider de MUI
import theme from './styles/theme'; // Importamos el tema personalizado

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: () => `${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Envolvemos la aplicación con el ThemeProvider para aplicar el tema
        root.render(
            <ThemeProvider theme={theme}> 
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
