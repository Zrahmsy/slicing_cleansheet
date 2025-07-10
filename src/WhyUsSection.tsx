import React from "react";
import WhyUsItem from "./WhyUsItem";

const whyUsList = [
  { icon: "/icon-garansi.svg", title: "Garansi", desc: "Kami memberikan garansi disetiap pekerjaan yang sudah kami lakukan." },
  { icon: "/icon-cepat.svg", title: "Cepat", desc: "Kami selalu memberikan layanan dengan waktu seefektif dan seefisien." },
  { icon: "/icon-harga.svg", title: "Harga Terjangkau", desc: "Kami selalu memberikan harga penawaran terbaik untuk setiap jasa" },
  { icon: "/icon-tim.svg", title: "Tim Ahli dan Profesional", desc: "Kami selalu memberikan layanan dengan waktu pengerjaan" },
  { icon: "/icon-ramah.svg", title: "Ramah Lingkungan", desc: "Kami selalu menggunakan bahan-bahan yang ramah lingkungan" },
  { icon: "/icon-vaksin.svg", title: "Tim Sudah Divaksin", desc: "Tim kami sudah melalui proses vaksinasi sebelum melakukan setiap pekerjaan" },
  { icon: "/icon-apd.svg", title: "Pakai APD Lengkap", desc: "Kami selalu memakai alat pelindung diri yang lengkap dalam setiap pekerjaan" },
  { icon: "/icon-klien.svg", title: "Ribuan Klien", desc: "Sudah ribuan klien kami tangani di seluruh Indonesia" },
];

const WhyUsSection = () => (
  <section style={{ background: '#fff', padding: '48px 0' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 40 }}>
      {/* Kiri: Judul dan list */}
      <div style={{ flex: 2 }}>
        <div style={{ fontSize: 18, color: '#222', marginBottom: 8, letterSpacing: 1 }}>PARTNER TERBAIK</div>
        <h2 style={{ fontSize: 36, fontWeight: 700, margin: 0, marginBottom: 24, color: '#111' }}>
          Kenapa Harus <span style={{ color: '#2196f3' }}>Clean</span>Sheet?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {whyUsList.map((item) => (
            <WhyUsItem key={item.title} {...item} />
          ))}
        </div>
      </div>
      {/* Kanan: Gambar orang */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img src="/person-whyus.svg" alt="Person" style={{ width: 320, maxWidth: '100%', borderRadius: 24 }} />
      </div>
    </div>
  </section>
);

export default WhyUsSection; 