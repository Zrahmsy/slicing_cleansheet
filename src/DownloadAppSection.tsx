import React from "react";

const DownloadAppSection = () => (
  <section style={{ padding: '0', background: 'linear-gradient(180deg, #f8fafc 60%, #e0f2fe 100%)', position: 'relative' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', minHeight: 380, position: 'relative' }}>
      <div style={{ flex: 1.2, padding: '64px 0 64px 0' }}>
        <div style={{ color: '#64748b', fontSize: 15, fontWeight: 500, marginBottom: 8 }}>UNDUH APP</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#222', textAlign: 'left' }}>
          Pesan Layanan Kebersihan Dalam Genggaman
        </h2>
        <div style={{ color: '#334155', fontSize: 18, marginBottom: 32, textAlign: 'left', maxWidth: 520 }}>
          Mempermudah layanan dengan menghadirkan solusi aplikasi mobile untuk Anda. Pilih tombol di bawah, dan klik tombol download.
        </div>
        <div style={{ display: 'flex', gap: 18, marginBottom: 24 }}>
          <img src="/google-play-placeholder.svg" alt="Google Play" style={{ height: 54, width: 180, objectFit: 'contain', borderRadius: 8, background: '#fff', boxShadow: '0 2px 8px #0001' }} />
          <img src="/app-store-placeholder.svg" alt="App Store" style={{ height: 54, width: 180, objectFit: 'contain', borderRadius: 8, background: '#fff', boxShadow: '0 2px 8px #0001' }} />
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'relative', minHeight: 340 }}>
        <img src="/download-app-phone.svg" alt="App Phone" style={{ width: 320, maxWidth: '100%', position: 'absolute', right: 0, bottom: 0 }} />
        <img src="/whatsapp-icon.svg" alt="WhatsApp" style={{ width: 56, height: 56, position: 'absolute', right: 24, bottom: 24, zIndex: 2 }} />
      </div>
    </div>
  </section>
);

export default DownloadAppSection; 