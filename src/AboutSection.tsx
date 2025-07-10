import React from "react";
import VideoCard from "./VideoCard";

const AboutSection = () => (
  <section style={{ background: '#f8fafc', padding: '48px 0 0 0' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      {/* Sejarah Kami */}
      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', marginBottom: 80 }}>
        <div style={{ flex: 1 }}>
          <VideoCard />
        </div>
        <div style={{ flex: 1, minWidth: 320 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#111', marginBottom: 8 }}>Sejarah Kami</h2>
          <div style={{ color: '#4b5563', fontSize: 16, lineHeight: 1.7 }}>
            Bermula dari pengalaman pribadinya menjadi mahasiswa penerima beasiswa Bidikmisi di IPB & kesulitan mencari penghasilan tambahan di sela-sela kesibukannya sehari-hari, Dhiqon juga ingin membantu sesama mahasiswa Bidikmisi yang mengalami permasalahan yang sama. Maka Dhiqon menciptakan usaha “Cleansheet”. Selengkapnya ada di video berikut
          </div>
        </div>
      </div>
      {/* Tentang Kami */}
      <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ flex: 2 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#111', marginBottom: 0, display: 'inline-block', borderBottom: '4px solid #2196f3', paddingBottom: 4 }}>Tentang Kami</h2>
          <div style={{ color: '#4b5563', fontSize: 16, lineHeight: 1.7, marginTop: 24, maxWidth: 700 }}>
            Cleansheet merupakan Startup Cleaning Service Profesional berbasis sociotechnopreneur yang memberdayakan mahasiswa/pelajar prasejahtera dan anak putus sekolah dengan menggunakan teknologi modern dan canggih untuk menyelesaikan berbagai macam permasalahan kebersihan.<br /><br />
            Untuk saat ini Cleansheet melayani pembersihan di area Jakarta, Bogor, Depok, Tangerang, Tangerang Selatan dan Bekasi (Jabodetabek). Misi kami adalah untuk memberikan kesempatan bagi setiap individu menjadi lebih baik dari segi ekonomi, pendidikan, dan masa depan.
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 320 }}>
          <VideoCard />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 