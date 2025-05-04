'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-open-sans), Arial, Helvetica, sans-serif',
    allVariants: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: 1,
      letterSpacing: '0px',
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
