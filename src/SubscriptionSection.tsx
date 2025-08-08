import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const subscriptions = [
  {
    title: "One Home One Hope - All You Can Clean",
    image: "/placeholder-image.svg",
    bestSeller: true,
    features: [
      "Jadwal Visit 26 hari/ bulan",
      "All Layanan Cleansheet",
      "Sudah sekaligus membantu pendidikan 1 anak",
    ],
  },
  {
    title: "One Corp Many Hope - All You Can Clean",
    image: "/placeholder-image.svg",
    features: [
      "Jadwal Visit 26 hari/ bulan",
      "All Layanan Cleansheet",
      "Sudah sekaligus membantu pendidikan 1 anak",
    ],
  },
  {
    title: "One Home One Hope",
    image: "/placeholder-image.svg",
    features: [
      "Jadwal 1x per minggu",
      "2 jam per kedatangan",
      "Sudah sekaligus membantu pendidikan 1 anak",
    ],
  },
  {
    title: "One Corp Many Hope",
    image: "/placeholder-image.svg",
    features: [
      "Jadwal 5x visit per minggu",
      "2 jam per kedatangan",
      "12x per bulan",
      "Mulai 900 ribuan per bulan",
    ],
  },
];

const SubscriptionSection = () => (
  <section style={{ background: 'linear-gradient(180deg, #e0e7ef 60%, #f8fafc 100%)' }} className="responsive-padding">
    <div style={{ maxWidth: 1200, margin: '0 auto' }} className="responsive-padding">
      <h2 className="responsive-title" style={{ fontWeight: 700, textAlign: 'center', marginBottom: 8 }}>
        Paket Berlangganan <span style={{ color: '#2563eb' }}>CleanSheet</span>
      </h2>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 40 }}>
        Lebih hemat dengan berlangganan
      </p>
      <div className="responsive-grid" style={{ marginBottom: 32 }}>
        {subscriptions.map((sub) => (
          <SubscriptionCard key={sub.title} {...sub} />
        ))}
      </div>
      <div style={{ textAlign: 'right' }}>
        <a href="#" style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none', fontSize: 16 }}>
          Lihat Semua Paket &rarr;
        </a>
      </div>
    </div>
  </section>
);

export default SubscriptionSection; 