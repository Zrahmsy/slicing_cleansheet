import React from "react";
import Image from "next/image";

interface PromoCardProps {
  image: string;
  title: string;
  desc: string;
  code: string;
  valid: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ image, title, desc, code, valid }) => (
  <div className="responsive-card" style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 2px 12px #0002', background: '#fff', minWidth: 340, maxWidth: 380, display: 'flex', flexDirection: 'column' }}>
    <Image src={image} alt="Promo" width={400} height={180} style={{ width: '100%', objectFit: 'cover', display: 'block' }} />
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={{ marginBottom: 8, fontWeight: 700, color: '#2196f3', fontSize: 20 }}>{title}</div>
      <div style={{ marginBottom: 8, fontWeight: 500, fontSize: 15 }}>{desc}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ background: '#e3f0ff', color: '#2196f3', borderRadius: 8, padding: '2px 10px', fontWeight: 700, fontSize: 14 }}>{code}</span>
        <button style={{ fontSize: 13, border: '1px solid #2196f3', color: '#2196f3', borderRadius: 8, padding: '2px 10px', background: 'white', cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(code)}>Salin Kode Promo</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#666', marginBottom: 16 }}>
        <span role="img" aria-label="calendar">📅</span>
        <span>{valid}</span>
      </div>
      <button style={{ marginTop: 'auto', background: '#2196f3', color: 'white', border: 'none', borderRadius: 12, padding: '10px 0', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
        Lihat Detail
      </button>
    </div>
  </div>
);

export default PromoCard; 