import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  { title: "Daily Cleaning", image: "/placeholder-image.svg", bestSeller: true },
  { title: "Deep Cleaning", image: "/placeholder-image.svg" },
  { title: "Deep Cleaning Lite (Per Jam)", image: "/placeholder-image.svg", bestSeller: true },
  { title: "Hydro Vacuum", image: "/placeholder-image.svg" },
  { title: "Cuci Soft Furniture", image: "/placeholder-image.svg" },
  { title: "Deep Cleaning Toilet", image: "/placeholder-image.svg" },
];

const ServicesSection = () => (
  <section style={{ padding: '48px 0', background: 'linear-gradient(180deg, #f8fafc 60%, #e0e7ef 100%)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: 'center', marginBottom: 8 }}>
        Layanan yang ditawarkan <span style={{ color: '#2563eb' }}>CleanSheet</span>
      </h2>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 40 }}>
        Prioritas kami adalah melayani Anda dengan sepenuh hati.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          justifyItems: 'center',
          marginBottom: 32,
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div style={{ textAlign: 'right' }}>
        <a href="#" style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none', fontSize: 16 }}>
          Lihat Semua Layanan &rarr;
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection; 