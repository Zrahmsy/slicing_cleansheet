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
    <section style={{ background: '#f8fafc' }} className="responsive-padding">
      <div style={{ maxWidth: 1200, margin: '0 auto' }} className="responsive-padding">
        <h2 className="responsive-title" style={{ fontWeight: 700, textAlign: 'center', marginBottom: 32 }}>
          Lebih Hemat Pakai Promo dan Voucher
        </h2>
        <div style={{ display: 'flex', gap: 32, overflowX: 'auto', paddingBottom: 8, justifyContent: 'center' }}>
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