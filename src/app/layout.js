import './globals.css'; // Make sure this path matches

import Header from '@/components/Header';
import GlobalScripts from '@/components/GlobalScripts';
import React from 'react'; // ✅ Required in some older setups

export const metadata = {
  title: 'Auto History Reports',
  description: 'Check your vehicle history instantly',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <GlobalScripts />
        {children}
      </body>
    </html>
  );
}
