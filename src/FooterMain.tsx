import React from "react";
import Image from "next/image";

const menus = [
  "Tentang Kami",
  "Hubungi Kami",
  "Kantor Cabang",
  "Layanan Kami",
  "Sitemap",
];

const FooterMain = () => (
  <footer style={{ background: '#181e23', color: '#fff', padding: '44px 0 0 0', width: '100%' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'row', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 220 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Image src="/logo-placeholder.svg" alt="CleanSheet Logo" width={54} height={54} />
        </div>
        <div style={{ color: '#fff', fontWeight: 400, fontSize: 13, opacity: 0.9, marginBottom: 24 }}>
          Clean, Passion, and Contribution
        </div>
        <div style={{ color: '#fff', fontWeight: 400, fontSize: 13, opacity: 0.9, marginBottom: 24 }}>
          Hak Cipta © 2022 <b>CleanSheet Indonesia</b>. Semua Hak Dilindungi Undang-Undang. Merek kata CleanSheet adalah merek dagang terdaftar dari Kementerian Hukum dan HAM RI Direktorat Jenderal Hak Kekayaan Intelektual.
        </div>
      </div>
      <div style={{ flex: 2, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 32, marginBottom: 16, flexWrap: 'wrap' }}>
          {menus.map((menu, idx) => (
            <a key={idx} href="#" style={{ color: '#fff', fontWeight: 400, fontSize: 15, textDecoration: 'none', opacity: 0.95 }}>
              {menu}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginBottom: 24 }}>
          <a href="#" aria-label="Facebook"><Image src="/icon-facebook.svg" alt="Facebook" width={28} height={28} style={{ opacity: 0.9 }} /></a>
          <a href="#" aria-label="Instagram"><Image src="/icon-instagram.svg" alt="Instagram" width={28} height={28} style={{ opacity: 0.9 }} /></a>
          <a href="#" aria-label="Twitter"><Image src="/icon-twitter.svg" alt="Twitter" width={28} height={28} style={{ opacity: 0.9 }} /></a>
        </div>
      </div>
    </div>
    <div style={{ height: 18 }} />
  </footer>
);

export default FooterMain; 