import React from "react";
import PromoCard from "./PromoCard";

const promos = [
  { image: "/placeholder-image.svg" },
  { image: "/placeholder-image.svg" },
  { image: "/placeholder-image.svg" },
];

const PromoSection = () => (
  <section style={{ padding: '48px 0', background: '#f8fafc' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 32 }}>
        Lebih Hemat Pakai Promo dan Voucher
      </h2>
      <div
        style={{
          display: 'flex',
          gap: 32,
          overflowX: 'auto',
          paddingBottom: 8,
          justifyContent: 'center',
        }}
      >
        {promos.map((promo, idx) => (
          <PromoCard key={idx} {...promo} />
        ))}
      </div>
    </div>
  </section>
);

export default PromoSection; 