import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Daily Cleaning",
    description: "",
    image: "/placeholder-image.svg",
    highlight: true,
  },
  {
    title: "Deep Cleaning",
    description:
      "Layanan jasa pembersihan secara mendetail spesial untuk ruangan / rumah pasca renovasi, pasca banjir, dan telah lama ditinggalkan. Pembersihan meliputi pembersihan seluruh lantai, dinding, langit-langit, kaca",
    image: "/placeholder-image.svg",
    highlight: false,
  },
  {
    title: "Toilet Cleaning",
    description:
      "Layanan jasa membersihkan kerak membandel, bakteri, hingga kuman akan hilang dari kamar mandi",
    image: "/placeholder-image.svg",
    highlight: false,
  },
];

const ServicesSection = () => (
  <section style={{ padding: "48px 0", background: "#f8fafc" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>
          <span role="img" aria-label="thumbs-up">👍</span>
        </div>
        <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: 2, marginBottom: 8 }}>
          LAYANAN KAMI
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>
          Program layanan yang ditawarkan <span style={{ color: "#2196f3" }}>Clean</span>Sheet
        </h2>
        <div style={{ color: "#888", fontSize: 16, marginTop: 8 }}>
          Prioritas kami adalah meyani Anda dengan sepenuh hari. Jangan lupa klik tombol subscribe dan share
        </div>
      </div>
      <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 32 }}>
        {services.map((service, idx) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div style={{ textAlign: "right", marginTop: 32 }}>
        <a href="#" style={{ color: "#2196f3", fontWeight: 500, fontSize: 16, textDecoration: "none" }}>
          Lihat Semua Program dan Layanan &rarr;
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection; 