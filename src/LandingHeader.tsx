'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Layanan", href: "/layanan" },
  { name: "Join Us", href: "/join" },
  { name: "Blog", href: "/blog" },
];

const socialIcons = [
  { alt: 'Facebook', src: '/icon-facebook.svg', href: '#' },
  { alt: 'Twitter', src: '/icon-twitter.svg', href: '#' },
  { alt: 'Instagram', src: '/icon-instagram.svg', href: '#' },
];

const LandingHeader = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b">
      {/* Bar atas */}
      <div className="w-full bg-white border-b border-gray-100 text-xs text-gray-500 flex items-center justify-between px-4 py-1">
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-1"><span role="img" aria-label="phone">📞</span> 081297984971</span>
          <span className="hidden sm:flex items-center gap-1"><span role="img" aria-label="mail">✉️</span> cs@cleansheet.id</span>
          <span className="hidden sm:flex items-center gap-1"><span role="img" aria-label="location">📍</span> Tangerang Selatan</span>
        </div>
        <div className="flex items-center gap-3">
          {socialIcons.map((icon) => (
            <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer">
              <Image src={icon.src} alt={icon.alt} width={16} height={16} className="opacity-70 hover:opacity-100 transition" />
            </a>
          ))}
          <span className="flex items-center gap-1 ml-2"><Image src="/uk-flag.svg" alt="EN" width={16} height={16} />EN</span>
        </div>
      </div>
      {/* Bar utama */}
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/logo-placeholder.svg" alt="Clean Sheet Logo" width={32} height={32} />
          </Link>
        </div>
        {/* Menu */}
        <nav className="flex items-center gap-6">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={
                (pathname === item.href || (item.href === '/' && pathname === '/'))
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                  : 'text-gray-700 hover:text-blue-500'
              }
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold ml-2 hover:bg-blue-600 transition">Unduh Aplikasi</button>
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader; 