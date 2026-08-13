'use client';

import dynamic from 'next/dynamic';

// All client-only, browser-only components loaded with ssr:false
const LoadingScreen = dynamic(() => import('./LoadingScreen'), { ssr: false });
// CustomCursor removed to avoid conflict
// Removing Navbar to avoid conflict with page.tsx new navbar
const FloatingWidgets = dynamic(() => import('./FloatingWidgets'), { ssr: false });

export default function ClientShell() {
  return (
    <>
      <LoadingScreen />
      {/* CustomCursor omitted */}
      {/* Navbar omitted, using page.tsx navbar */}
      <FloatingWidgets />
    </>
  );
}
