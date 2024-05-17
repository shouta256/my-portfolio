'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import { LanguageProvider } from './hooks/useLanguage';

const inter = Inter({ subsets: ['latin'] });

const theme = extendTheme({
  fonts: {
    heading: `'Freeman',  sans-serif`, // 正しいクオートの使用
    body: `'Freeman', sans-serif`, // 正しいクオートの使用
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Freeman&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <LanguageProvider>
          <ChakraProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </ChakraProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
