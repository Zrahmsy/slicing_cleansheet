import React from "react";

const LandingTestimoniArtikel = () => (
  <aside style={{ maxWidth: 360, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
    {/* Artikel */}
    <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e5e7eb', padding: 20 }}>
      <div style={{ color: '#2196f3', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Artikel</div>
      <div style={{ fontWeight: 700, fontSize: 15, color: '#000' }}>Inspiratif!</div>
      <div style={{ fontSize: 14, color: '#000' }}>
        Pemuda Ini Bantu Mahasiswa Dan Anak Putus Sekolah Melalui Usaha Home & Office Cleaning Service
      </div>
    </div>
    {/* Testimoni 1 */}
    <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e5e7eb', padding: 20, display: 'flex', gap: 12 }}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>Img</div>
      <div>
        <div style={{ fontSize: 14, marginBottom: 4, color: '#000' }}>
          Mantap nih, sofa sedekil apapun jadi kayak baru lagi. Jasa cuci springbed dan sofa paling oke
        </div>
        <div style={{ fontWeight: 700, fontSize: 14, color: '#000' }}>Soraya Haque - Artis</div>
      </div>
    </div>
    {/* Testimoni 2 */}
    <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e5e7eb', padding: 20, display: 'flex', gap: 12 }}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>Img</div>
      <div>
        <div style={{ fontSize: 14, marginBottom: 4, color: '#000' }}>
          Pelayanannya Cleansheet, cepat, bersih, rapih, dan aman. Jasa membersihkan rumah recomended
        </div>
        <div style={{ fontWeight: 700, fontSize: 14, color: '#000' }}>Babe Cabita - Artis</div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: 8 }}>
      <a href="#" style={{ color: '#2196f3', fontWeight: 500, textDecoration: 'none', fontSize: 15 }}>Testimoni Lain</a>
    </div>
  </aside>
);

export default LandingTestimoniArtikel; 