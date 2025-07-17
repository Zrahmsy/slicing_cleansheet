import React from "react";

interface SubscriptionCardProps {
  title: string;
  image: string;
  bestSeller?: boolean;
  features: string[];
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ title, image, bestSeller, features }) => (
  <div style={{ position: 'relative', border: '2px solid #e5e7eb', borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 8px #0001', minWidth: 220, maxWidth: 320, display: 'flex', flexDirection: 'column', height: '100%' }}>
    {bestSeller && (
      <div style={{ position: 'absolute', top: 12, left: 12, background: '#FFD700', color: '#222', fontWeight: 700, borderRadius: 8, padding: '2px 10px', fontSize: 12, zIndex: 2 }}>
        BEST SELLER
      </div>
    )}
    <img src={image} alt={title} style={{ width: '100%', height: 120, objectFit: 'cover' }} />
    <div style={{ padding: 16, flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>{title}</div>
      <ul style={{ paddingLeft: 18, margin: 0, marginBottom: 16, color: '#334155', fontSize: 14 }}>
        {features.map((f, i) => (
          <li key={i} style={{ marginBottom: 4 }}>{f}</li>
        ))}
      </ul>
      <button style={{ marginTop: 'auto', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 24, width: '100%', padding: '8px 0', fontWeight: 500, fontSize: 16, cursor: 'pointer' }}>
        Berlangganan
      </button>
    </div>
  </div>
);

export default SubscriptionCard; 