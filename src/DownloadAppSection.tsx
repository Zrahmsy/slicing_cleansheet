import React from "react";

const DownloadAppSection = () => (
  <section style={{ background: 'linear-gradient(90deg, #e3f2fd 0%, #fff 100%)', padding: '56px 0' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 40 }}>
      {/* Kiri: Teks */}
      <div style={{ flex: 1, minWidth: 320 }}>
        <div style={{ color: '#888', fontSize: 14, marginBottom: 8, letterSpacing: 1 }}>UNDUH APP</div>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111', marginBottom: 16 }}>
          Pesan Layanan Kebersihan Dalam Genggaman
        </h2>
        <div style={{ color: '#222', fontSize: 16, marginBottom: 24 }}>
          Mempermudah layanan dengan menghadirkan solusi aplikasi mobile untuk Anda. Pilih tombol di bawah, dan klik tombol download.
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="#" style={{ display: 'inline-block' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: 44 }} />
          </a>
          <a href="#" style={{ display: 'inline-block' }}>
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: 44 }} />
          </a>
        </div>
      </div>
      {/* Kanan: Gambar handphone */}
      <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center' }}>
        <img src="/download-app-phone.svg" alt="Download App" style={{ width: 260, height: 'auto' }} />
      </div>
    </div>
  </section>
);

export default DownloadAppSection; 