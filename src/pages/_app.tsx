import React from 'react';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css'
import MainLayout from '@app/layouts/MainLayout';

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default App;
