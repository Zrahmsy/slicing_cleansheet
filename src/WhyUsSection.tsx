import React from "react";
import WhyUsItem from "./WhyUsItem";

const whyUsList = [
  { icon: "/icon-garansi.svg", title: "Garansi", description: "Kami memberikan garansi di setiap pekerjaan yang sudah kami lakukan." },
  { icon: "/icon-cepat.svg", title: "Cepat", description: "Kami selalu memberikan layanan dengan waktu seefektif dan seefisien mungkin." },
  { icon: "/icon-harga.svg", title: "Harga Terjangkau", description: "Kami selalu memberikan harga penawaran terbaik untuk setiap jasa." },
  { icon: "/icon-tim.svg", title: "Tim Ahli dan Profesional", description: "Kami selalu memberikan layanan dengan waktu pengerjaan yang tepat." },
  { icon: "/icon-ramah.svg", title: "Ramah Lingkungan", description: "Kami selalu menggunakan bahan-bahan yang ramah lingkungan." },
  { icon: "/icon-vaksin.svg", title: "Tim Sudah Divaksin", description: "Tim kami sudah melalui proses vaksinasi sebelum melakukan setiap pekerjaan." },
  { icon: "/icon-apd.svg", title: "Pakai APD Lengkap", description: "Kami selalu memakai alat pelindung diri yang lengkap dalam setiap pekerjaan." },
  { icon: "/icon-klien.svg", title: "Ribuan Klien", description: "Sudah ribuan klien kami tangani di seluruh Indonesia." },
];

const WhyUsSection = () => (
  <section style={{ padding: '64px 0', background: '#fff' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 48 }}>
      <div style={{ flex: 2 }}>
        <div style={{ color: '#64748b', fontSize: 15, fontWeight: 500, marginBottom: 8 }}>PARTNER TERBAIK</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32 }}>
          Kenapa Harus <span style={{ color: '#2563eb' }}>CleanSheet</span>?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {whyUsList.map((item, idx) => (
            <WhyUsItem key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 260, display: 'flex', justifyContent: 'center' }}>
        <img src="/profile-placeholder.svg" alt="CleanSheet Person" style={{ width: 280, maxWidth: '100%', borderRadius: 24 }} />
      </div>
    </div>
  </section>
);

export default WhyUsSection; 