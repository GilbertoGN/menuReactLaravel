import { createTheme } from '@mui/material/styles';

// Crear el tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#6e1e44', // Color principal (500) de $custom-primary-sco
      light: '#9a627c', // Color más claro (300)
      dark: '#3f0a1f', // Color más oscuro (900)
      contrastText: '#ffffff', // Color de texto contrastante (para el fondo oscuro)
    },
    secondary: {
      main: '#cf1e4e', // Color principal (500) de $custom-accent-sco
      light: '#e78fa7', // Color más claro (200)
      dark: '#b20a25', // Color más oscuro (900)
      contrastText: '#ffffff', // Color de texto contrastante
    },
    error: {
      main: '#f44336', // Color para estados de error
    },
    background: {
      default: '#fafafa', // Color de fondo predeterminado
      paper: '#fff', // Color de fondo para los papeles (contenedores)
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fuente principal
    h1: {
      fontSize: '2rem', // Tamaño de fuente de encabezado h1
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem', // Tamaño de texto principal
    },
  },
  spacing: 8, // Espaciado global de MUI (en píxeles)
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Actualizamos el gradiente a tonos guinda
          background: 'linear-gradient(to right, #6e1e44, #cf1e4e)', 
          color: '#fff', // Texto en blanco para que resalte sobre el gradiente
        },
      },
    },
  },
});

export default theme;
