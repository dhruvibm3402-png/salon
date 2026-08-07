'use client';

import dynamic from 'next/dynamic';

// All client-only, browser-only components loaded with ssr:false
const LoadingScreen   = dynamic(() => import('./LoadingScreen'),   { ssr: false });
const CustomCursor    = dynamic(() => import('./CustomCursor'),    { ssr: false });
const Navbar          = dynamic(() => import('./Navbar'),          { ssr: false });
const FloatingWidgets = dynamic(() => import('./FloatingWidgets'), { ssr: false });

export default function ClientShell() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <FloatingWidgets />
    </>
  );
}
