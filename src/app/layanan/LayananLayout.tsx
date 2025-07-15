'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Join Us', href: '/join' },
  { label: 'Blog', href: '/blog' },
];

export default function LayananLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      <header className="w-full flex flex-col items-center py-4 border-b bg-white">
        <div className="flex items-center w-full max-w-6xl px-4 justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-placeholder.svg" alt="Clean Sheet Logo" className="h-8" />
            <span className="font-bold text-lg">Clean Sheet</span>
          </div>
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-500'
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold ml-4">Unduh Aplikasi</button>
        </div>
      </header>
      {children}
    </div>
  );
} 