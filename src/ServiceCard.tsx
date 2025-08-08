import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  bestSeller?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, bestSeller }) => (
  <div className="responsive-card" style={{ position: 'relative', border: '2px solid #e5e7eb', borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 8px #0001', minWidth: 220 }}>
    {bestSeller && (
      <div style={{ position: 'absolute', top: 12, left: 12, background: '#FFD700', color: '#222', fontWeight: 700, borderRadius: 8, padding: '2px 10px', fontSize: 12, zIndex: 2 }}>
        BEST SELLER
      </div>
    )}
    <Image src={image} alt={title} width={400} height={120} style={{ width: '100%', objectFit: 'cover' }} />
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
      <div style={{ fontWeight: 600, fontSize: 18, color: '#222' }}>{title}</div>
      <button style={{ marginTop: 8, alignSelf: 'flex-end', background: '#e0e7ef', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
        <span style={{ fontSize: 20, color: '#2563eb' }}>&rarr;</span>
      </button>
    </div>
  </div>
);

export default ServiceCard; 