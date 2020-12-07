import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
