import React from "react";
import ClientTestimonialCard from "./ClientTestimonialCard";

const testimonials = [
  {
    name: "Babe Cabita",
    role: "Artis",
    avatar: "/client-avatar1.svg",
    title: "Pelayanannya Cleansheet, cepat, bersih, rapih, dan aman. Jasa membersihkan rumah recomended",
    text: "Jujur deh, ini baru pertama kali aku pakai CleanSheet. Beneran bisa dipegang banget kualitasnya. Akhirnya langsung aku tawarin ke temen-temenku juga. Jujur deh, ini baru pertama kali aku pakai CleanSheet. Beneran bisa dipegang banget kualitasnya. Akhirnya langsung aku tawarin ke temen-temenku juga.",
  },
  // Tambah testimoni lain jika perlu
];

const ClientTestimonialSection = () => (
  <section style={{ background: '#fff', padding: '72px 0 0 0', position: 'relative' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, margin: 0, color: '#111', marginBottom: 32 }}>
        Testimoni Klien CleanSheet
      </h2>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center', marginBottom: 32 }}>
        {/* Gambar orang */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 0, minWidth: 320 }}>
          <img src="/client-testimonial-person1.svg" alt="Person 1" style={{ width: 120, height: 220, objectFit: 'contain', marginLeft: 0 }} />
          <img src="/client-testimonial-person2.svg" alt="Person 2" style={{ width: 140, height: 240, objectFit: 'contain', marginLeft: -24, zIndex: 1 }} />
          <img src="/client-testimonial-person3.svg" alt="Person 3" style={{ width: 120, height: 220, objectFit: 'contain', marginLeft: -24 }} />
        </div>
        {/* Card testimoni */}
        <div style={{ flex: 1.2, minWidth: 340, position: 'relative' }}>
          <ClientTestimonialCard {...testimonials[0]} />
          <img src="/quote-icon.svg" alt="Quote" style={{ position: 'absolute', left: -48, top: -32, width: 56, height: 56, background: '#1565c0', borderRadius: '50%', padding: 8 }} />
          {/* Navigasi */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Sebelumnya">
              <img src="/arrow-left.svg" alt="Prev" style={{ width: 32, height: 32 }} />
            </button>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#2196f3' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#bbdefb' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#bbdefb' }} />
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Selanjutnya">
              <img src="/arrow-right.svg" alt="Next" style={{ width: 32, height: 32 }} />
            </button>
            <a href="#" style={{ color: '#2196f3', fontWeight: 500, fontSize: 16, marginLeft: 'auto', textDecoration: 'none' }}>
              Testimoni lengkap klien kami &rarr;
            </a>
          </div>
        </div>
      </div>
      {/* Dekorasi garis */}
      <img src="/testimonial-decor.svg" alt="Decor" style={{ position: 'absolute', left: 0, bottom: 0, width: 340, opacity: 0.2, zIndex: 0 }} />
    </div>
  </section>
);

export default ClientTestimonialSection; 