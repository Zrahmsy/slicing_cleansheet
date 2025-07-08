import React from "react";

const LandingHeader = () => (
  <header style={{ borderBottom: '1px solid #e5e7eb', padding: '8px 0', background: '#fff' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      {/* Kontak kiri */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: 14 }}>📞 081297984971</span>
        <span style={{ fontSize: 14 }}>✉️ cs@cleansheet.id</span>
        <span style={{ fontSize: 14 }}>📍 Tangerang Selatan</span>
      </div>
      {/* Logo tengah */}
      <div className="logo-placeholder" style={{ width: 60, height: 40, background: '#e5e7eb', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
        Logo
      </div>
      {/* Menu kanan */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <a href="#" style={{ color: '#0070f3', fontWeight: 600 }}>Beranda</a>
        <a href="#">Layanan</a>
        <a href="#">Tentang</a>
        <a href="#">Blog</a>
        <button style={{ background: '#2196f3', color: '#fff', border: 'none', borderRadius: 20, padding: '8px 20px', fontWeight: 600, marginLeft: 8 }}>Unduh Aplikasi</button>
        <span role="img" aria-label="EN" style={{ marginLeft: 8 }}>🇬🇧 EN</span>
      </nav>
    </div>
  </header>
);

export default LandingHeader; 