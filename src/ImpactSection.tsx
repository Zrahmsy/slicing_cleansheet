import React from "react";
import ImpactScholarshipStat from "./ImpactScholarshipStat";

const stats = [
  { value: "+50", label: "Paket Biaya Pendidikan Kuliah" },
  { value: "+190", label: "Paket Bantuan Biaya Hidup" },
  { value: "+10", label: "Paket Pelatihan dan Vokasi" },
];

const ImpactSection = () => (
  <section style={{ padding: '96px 0 0 0', background: '#f8fafc' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 0, alignItems: 'stretch' }}>
      <div style={{ flex: 2, padding: '0 0 0 0' }}>
        <div style={{ fontWeight: 700, fontSize: 28, marginBottom: 8, marginTop: 0 }}>
          Impact Cleansheet<br />
          <span style={{ fontWeight: 400 }}>We Are Socialtechno<span style={{ color: '#2563eb', fontWeight: 700 }}>preneurship</span></span>
        </div>
        <div style={{ color: '#64748b', fontSize: 17, marginBottom: 24 }}>
          Penyerahan Beasiswa Pendidikan 2025 di IPB University untuk mewujudkan cita-cita anak bangsa.
        </div>
        <div style={{ borderRadius: 20, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px #0001', marginBottom: 24, maxWidth: 520 }}>
          <img src="/impact-video-cover.svg" alt="Impact Cleansheet" style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', gap: 8, marginLeft: 8, marginBottom: 0 }}>
          <span style={{ width: 48, height: 8, borderRadius: 4, background: '#2563eb', display: 'inline-block' }} />
          <span style={{ width: 16, height: 8, borderRadius: 4, background: '#e0e7ef', display: 'inline-block' }} />
          <span style={{ width: 16, height: 8, borderRadius: 4, background: '#e0e7ef', display: 'inline-block' }} />
        </div>
      </div>
      <div style={{ flex: 1.2, background: '#1656a8', borderRadius: '0 24px 0 0', padding: '40px 32px 32px 32px', marginLeft: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 320, position: 'relative' }}>
        <div style={{ color: '#fff', fontWeight: 700, fontSize: 24, marginBottom: 32 }}>
          Penerima Beasiswa 2025
        </div>
        {stats.map((s, i) => (
          <ImpactScholarshipStat key={i} {...s} />
        ))}
        <div style={{ position: 'absolute', right: 0, bottom: 0, width: 120, height: 80, background: '#2563eb', borderTopLeftRadius: 80, zIndex: 0 }} />
      </div>
    </div>
  </section>
);

export default ImpactSection; 