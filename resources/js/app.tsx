import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles'; // Importamos ThemeProvider de MUI
import theme from './theme'; // Importamos el tema personalizado
import { ComponentType, lazy, Suspense } from 'react';

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx');
        const page = pages[`./Pages/${name}.tsx`];
        if (!page) {
            throw new Error(`Página no encontrada: ${name}`);
        }

        return lazy(() => page().then((module) => ({ default: module as { default: ComponentType<any> } }).default));
    },
   
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Envolvemos la aplicación con el ThemeProvider para aplicar el tema
        root.render(
            <Suspense fallback={<div>Cargando...</div>}>
                <ThemeProvider theme={theme}>
                    <App {...props} />
                </ThemeProvider>
            </Suspense>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
