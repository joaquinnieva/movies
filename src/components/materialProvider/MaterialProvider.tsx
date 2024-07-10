'use client';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 1,
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          padding: `10 10`,
        },
      },
    },
  },
});

export function MaterialProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <main className={`container mx-auto`}>{children}</main>
    </ThemeProvider>
  );
}
