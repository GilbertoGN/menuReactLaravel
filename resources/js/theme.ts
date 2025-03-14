import { createTheme } from '@mui/material/styles';

// 🎨 Definir paleta primaria
const primaryColor = {
    50: '#eee4e9',
    100: '#d4bcc7',
    200: '#b78fa2',
    300: '#9a627c',
    400: '#844060',
    500: '#6e1e44',
    600: '#661a3e',
    700: '#5b1635',
    800: '#51122d',
    900: '#3f0a1f',
    A100: '#ff77a5',
    A200: '#ff4484',
    A400: '#ff1162',
    A700: '#f60054',
};

const primaryContrast = {
    50: '#000000',
    100: '#000000',
    200: '#000000',
    300: '#ffffff',
    400: '#ffffff',
    500: '#ffffff',
    600: '#ffffff',
    700: '#ffffff',
    800: '#ffffff',
    900: '#ffffff',
    A100: '#000000',
    A200: '#000000',
    A400: '#ffffff',
    A700: '#ffffff',
};

// 🌈 Definir paleta de acento
const accentColor = {
    50: '#f9e4ea',
    100: '#f1bcca',
    200: '#e78fa7',
    300: '#dd6283',
    400: '#d64069',
    500: '#cf1e4e',
    600: '#ca1a47',
    700: '#c3163d',
    800: '#bd1235',
    900: '#b20a25',
    A100: '#ffdee2',
    A200: '#ffabb5',
    A400: '#ff7888',
    A700: '#ff5e72',
};

const accentContrast = {
    50: '#000000',
    100: '#000000',
    200: '#000000',
    300: '#000000',
    400: '#ffffff',
    500: '#ffffff',
    600: '#ffffff',
    700: '#ffffff',
    800: '#ffffff',
    900: '#ffffff',
    A100: '#000000',
    A200: '#000000',
    A400: '#000000',
    A700: '#000000',
};

// 🚨 Crear el tema personalizado
const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor[500],
            light: primaryColor[200],
            dark: primaryColor[800],
            contrastText: primaryContrast[500],
        },
        secondary: {
            main: accentColor[500],
            light: accentColor[200],
            dark: accentColor[800],
            contrastText: accentContrast[500],
        },
        error: {
            main: '#f44336', // Color 'warn' por defecto
        },
    },
    typography: {
        fontFamily: 'Montserrat, Arial, sans-serif',
    },
});

export default theme;
