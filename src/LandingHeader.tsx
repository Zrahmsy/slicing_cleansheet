'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Beranda", href: "/landing" },
  { name: "Layanan", href: "/layanan" },
  { name: "Tentang", href: "/tentang" },
  { name: "Blog", href: "/blog" },
];

const LandingHeader = () => {
  const pathname = usePathname();

  return (
    <header style={{ padding: '8px 0', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Kontak kiri */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 14, color: '#000' }}>📞 081297984971</span>
          <span style={{ fontSize: 14, color: '#000' }}>✉️ cs@cleansheet.id</span>
          <span style={{ fontSize: 14, color: '#000' }}>📍 Tangerang Selatan</span>
        </div>
        {/* Logo tengah */}
        <div className="logo-placeholder" style={{ width: 60, height: 40, background: '#e5e7eb', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/" style={{ color: '#000' }}>Logo</Link>
        </div>
        {/* Menu kanan */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                color:
                  pathname === item.href || (item.href === '/' && pathname === '/landing')
                    ? '#0070f3'
                    : '#000',
                fontWeight: pathname === item.href ? 600 : undefined,
              }}
            >
              {item.name}
            </Link>
          ))}
          <button style={{ background: '#2196f3', color: '#fff', border: 'none', borderRadius: 20, padding: '8px 20px', fontWeight: 600, marginLeft: 8 }}>Unduh Aplikasi</button>
          <span role="img" aria-label="EN" style={{ marginLeft: 8, color: '#000' }}>🇬🇧 EN</span>
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader; 