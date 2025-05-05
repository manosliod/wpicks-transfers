'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-open-sans), Arial, Helvetica, sans-serif',
    allVariants: {
      fontSize: '15px',
      lineHeight: 1,
      letterSpacing: '0px',
    },
    h1: {
      fontSize: '32px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '30px',
      fontWeight: 700,
    },
    h3: {
      fontSize: '28px',
      fontWeight: 700,
    },
    h4: {
      fontSize: '26px',
      fontWeight: 700,
    },
    h5: {
      fontSize: '24px',
      fontWeight: 700,
    },
    h6: {
      fontSize: '22px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '18px',
    },
    body2: {
      fontSize: '16px',
    },
    subtitle1: {
      fontSize: '14px',
    },
    subtitle2: {
      fontSize: '12px',
    },
    caption: {
      fontSize: '10px',
      letterSpacing: '0.9px',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          transition: 'background-color 0.3s ease, color 0.3s ease',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
          '&.Mui-selected': {
            backgroundColor: '#50D8A5',
            color: '#fff',
            '& svg': {
              color: '#fff',
            },
            '&.submenu-item': {
              backgroundColor: '#E5F9F2',
              color: '#50D8A5',
            },
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#50D8A5',
            '&.submenu-item': {
              backgroundColor: '#E5F9F2',
              color: '#50D8A5',
            },
          },
        },
      },
    },
  },
});

export default theme;
