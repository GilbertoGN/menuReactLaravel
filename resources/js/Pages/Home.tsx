

import React from 'react';
import { Button, Typography } from '@mui/material'; // Importar componentes de MUI
import Header from './Header';

interface HomeProps {
    title: string;
}
const Home: React.FC<HomeProps> = ({ title }) => {
    return (
        <>
            <Header />
            <div style={{ padding: '20px' }}>
                {/* Título personalizado */}
                <Typography variant="h1" style={{ color: 'white' }}>
                    {title}
                </Typography >
                <p style={{ color: 'primary' }}>
                    ¡Bienvenido a tu app Laravel 12 con React, TypeScript e Inertia!
                </p>
                
                {/* Botones con colores personalizados */}
                <Button
                    variant="contained"
                    color="primary" // Usando el color primario del tema
                    style={{ margin: '10px' }}
                >
                    Botón Primario
                </Button>
                <Button
                    variant="contained"
                    color="secondary" // Usando el color secundario del tema
                    style={{ margin: '10px' }}
                >
                    Botón Secundario
                </Button>
                {/* <Button
                    variant="contained"
                    color="error" // Usando el color de error del tema
                    style={{ margin: '10px' }}
                >
                    Botón de Error
                </Button> */}
            </div>
        </>
    );
};

export default Home;
