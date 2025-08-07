
import React from "react";
import Image from "next/image";

const LandingHero = () => (
  <section style={{ background: '#f8fafc', padding: '56px 0 32px 0' }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 1200,
      margin: '0 auto',
      gap: 48,
      padding: '0 24px'
    }}>
      {/* Kiri: Judul, deskripsi, tombol */}
      <div style={{ flex: 1, minWidth: 320 }}>
        <h1 style={{
          fontSize: 54,
          fontWeight: 800,
          marginBottom: 18,
          lineHeight: 1.1,
          color: '#111',
          letterSpacing: '-1px'
        }}>
          Jasa Bersih <br />
          <span style={{ fontWeight: 800, textDecoration: 'underline', textDecorationColor: '#2196f3' }}>Rumah</span> dan <br />
          <span style={{
            fontWeight: 800,
            borderBottom: '4px solid #2196f3',
            paddingBottom: 2
          }}>Kantor</span>
        </h1>
        <p style={{ fontSize: 17, marginBottom: 28, color: '#222', maxWidth: 480 }}>
          Menyelesaikan permasalahan kebersihan sekaligus mengurangi anak putus sekolah, pengangguran, dan ujungnya pada pengentasan kemiskinan.<br />
          Cleansheet telah memberdayakan 250+ anak muda dan akan semakin berkembang. Semakin banyak yang order, semakin banyak yang dibantu.<br />
          <b style={{ color: '#000' }}>#BusinessForHelpingPeople</b>
        </p>
        <button style={{
          background: '#2196f3',
          color: '#fff',
          border: 'none',
          borderRadius: 999,
          padding: '14px 40px',
          fontWeight: 700,
          fontSize: 20,
          marginBottom: 14,
          boxShadow: '0 2px 8px 0 rgba(33,150,243,0.10)'
        }}>
          Pesan Sekarang
        </button>
        <div>
          <a href="#" style={{
            color: '#2196f3',
            fontWeight: 500,
            textDecoration: 'none',
            fontSize: 16,
            marginLeft: 4
          }}>Lihat Layanan &rarr;</a>
        </div>
      </div>
      {/* Kanan: Foto orang dan dekorasi */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minWidth: 340
      }}>
        {/* Dekorasi garis biru */}
        <svg width="320" height="400" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', zIndex: 0 }}>
          <g>
            <ellipse cx="160" cy="200" rx="120" ry="120" fill="none" stroke="#2196f3" strokeDasharray="6 6" strokeWidth="2" />
          </g>
        </svg>
        {/* Gambar orang */}
        <div style={{
          width: 1200,
          height: 400,
          background: '#e5e7eb',
          borderRadius: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
          boxShadow: '0 4px 24px 0 rgba(33,150,243,0.08)'
        }}>
          <Image
            src="/hero-orang.png"
            alt="Tim CleanSheet"
            width={400}
            height={400}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default LandingHero;