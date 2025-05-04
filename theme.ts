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
});

export default theme;
