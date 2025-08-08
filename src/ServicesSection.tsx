import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  { title: "Daily Cleaning", image: "/General-Cleaning.jpg", bestSeller: true },
  { title: "Deep Cleaning", image: "/Deep-Cleaning.jpg" },
  { title: "Deep Cleaning Lite (Per Jam)", image: "/Deep-Cleaning.jpg", bestSeller: true },
  { title: "Hydro Vacuum", image: "/hydroovacuum.jpg" },
  { title: "Cuci Soft Furniture", image: "/cuci.jpg" },
  { title: "Deep Cleaning Toilet", image: "/Toilet-General-Cleaning.jpg" },
];

const ServicesSection = () => (
  <section style={{ background: 'linear-gradient(180deg, #f8fafc 60%, #e0e7ef 100%)' }} className="responsive-padding">
    <div style={{ maxWidth: 1200, margin: '0 auto' }} className="responsive-padding">
      <h2 className="responsive-title" style={{ fontWeight: 700, textAlign: 'center', marginBottom: 8, color: '#222' }}>
        Layanan yang ditawarkan <span style={{ color: '#2563eb' }}>CleanSheet</span>
      </h2>
      <p style={{ textAlign: 'center', color: '#222', marginBottom: 40 }}>
        Prioritas kami adalah melayani Anda dengan sepenuh hati.
      </p>
      <div className="responsive-grid" style={{ justifyItems: 'center', marginBottom: 32 }}>
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