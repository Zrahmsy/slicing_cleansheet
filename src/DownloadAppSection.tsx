import React from "react";
import Image from "next/image";

const DownloadAppSection = () => (
  <section style={{ background: 'linear-gradient(180deg, #f8fafc 60%, #e0f2fe 100%)', position: 'relative' }} className="responsive-padding">
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', minHeight: 380, position: 'relative' }} className="responsive-padding">
      <div style={{ flex: 1.2, padding: '64px 0 64px 0' }}>
        <div style={{ color: '#64748b', fontSize: 15, fontWeight: 500, marginBottom: 8 }}>UNDUH APP</div>
        <h2 className="responsive-title" style={{ fontWeight: 700, marginBottom: 16, color: '#222', textAlign: 'left' }}>
          Pesan Layanan Kebersihan Dalam Genggaman
        </h2>
        <div style={{ color: '#334155', fontSize: 18, marginBottom: 32, textAlign: 'left', maxWidth: 520 }}>
          Mempermudah layanan dengan menghadirkan solusi aplikasi mobile untuk Anda. Pilih tombol di bawah, dan klik tombol download.
        </div>
        <div style={{ display: 'flex', gap: 18, marginBottom: 24 }}>
          <Image src="/google-play-placeholder.svg" alt="Google Play" width={180} height={54} style={{ objectFit: 'contain', borderRadius: 8, background: '#fff', boxShadow: '0 2px 8px #0001' }} />
          <Image src="/app-store-placeholder.svg" alt="App Store" width={180} height={54} style={{ objectFit: 'contain', borderRadius: 8, background: '#fff', boxShadow: '0 2px 8px #0001' }} />
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'relative', minHeight: 340 }}>
        <Image src="/download-app-phone.svg" alt="App Phone" width={320} height={320} style={{ maxWidth: '100%', position: 'absolute', right: 0, bottom: 0 }} />
        <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={56} height={56} style={{ position: 'absolute', right: 24, bottom: 24, zIndex: 2 }} />
      </div>
    </div>
  </section>
);

export default DownloadAppSection; 