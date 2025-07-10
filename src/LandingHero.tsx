import React from "react";

const LandingHero = () => (
  <section style={{ background: '#f8fafc', padding: '48px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 1200, margin: '0 auto', gap: 40, padding: '0 24px' }}>
      {/* Kiri: Judul, deskripsi, tombol */}
      <div style={{ flex: 1, minWidth: 320 }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16, lineHeight: 1.1, color: '#000' }}>
          Jasa Bersih <br />
          <span style={{ textDecoration: 'underline', textDecorationColor: '#2196f3' }}>Rumah</span> dan <br />
          <span style={{ textDecoration: 'underline', textDecorationColor: '#2196f3' }}>Kantor</span>
        </h1>
        <p style={{ fontSize: 16, marginBottom: 24, color: '#000' }}>
          Menyelesaikan permasalahan kebersihan sekaligus mengurangi anak putus sekolah, pengangguran, dan ujungnya Pada Pengentasan Kemiskinan. <br />
          Cleansheet telah memberdayakan 250+ anak muda dan akan semakin berkembang. Semakin banyak yang order, semakin banyak yang dibantu.<br />
          <b style={{ color: '#000' }}>#BusinessForHelpingPeople</b>
        </p>
        <button style={{ background: '#2196f3', color: '#fff', border: 'none', borderRadius: 20, padding: '12px 32px', fontWeight: 600, fontSize: 18, marginBottom: 12 }}>
          Pesan Sekarang
        </button>
        <div>
          <a href="#" style={{ color: '#2196f3', fontWeight: 500, textDecoration: 'none', fontSize: 16 }}>Lihat Layanan &rarr;</a>
        </div>
      </div>
      {/* Kanan: Foto orang */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div className="foto-orang-placeholder" style={{ width: 320, height: 400, background: '#e5e7eb', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#888' }}>
          Foto Orang
        </div>
      </div>
    </div>
  </section>
);

export default LandingHero; 