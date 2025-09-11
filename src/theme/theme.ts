import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#667eea',
      light: '#8b9cff',
      dark: '#4c63d2',
    },
    secondary: {
      main: '#764ba2',
      light: '#9c7bb8',
      dark: '#5a3a7a',
    },
    background: {
      default: '#0a0e27',
      paper: '#1a1f3a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b3c8',
    },
    success: {
      main: '#00d4aa',
      light: '#4ddbb8',
      dark: '#00a085',
    },
    error: {
      main: '#ff6b6b',
      light: '#ff8e8e',
      dark: '#e55555',
    },
    warning: {
      main: '#ffd93d',
      light: '#ffe066',
      dark: '#e6c235',
    },
    info: {
      main: '#4dabf7',
      light: '#7bc0f9',
      dark: '#339af0',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.8) 0%, rgba(10, 14, 39, 0.9) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 24px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});


