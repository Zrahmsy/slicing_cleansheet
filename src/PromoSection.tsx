'use client';

import React from "react";
import PromoCard from "./PromoCard";
import { useRouter } from "next/navigation";

const promos = [
  { image: "/placeholder-image.svg", title: "30% Off", desc: "Cashback 30% s.d Rp 5.000", code: "CXS6DF", valid: "Valid until August 17, 2022" },
  { image: "/placeholder-image.svg", title: "30% Off", desc: "Cashback 30% s.d Rp 5.000", code: "CXS6DF", valid: "Valid until August 17, 2022" },
  { image: "/placeholder-image.svg", title: "30% Off", desc: "Cashback 30% s.d Rp 5.000", code: "CXS6DF", valid: "Valid until August 17, 2022" },
];

const PromoSection = () => {
  const router = useRouter();
  return (
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
            <div key={idx} style={{ cursor: 'pointer' }} onClick={() => router.push('/promo')}>
              <PromoCard {...promo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection; 