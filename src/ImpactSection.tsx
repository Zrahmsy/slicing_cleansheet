import React from "react";
import ImpactTestimonialCard from "./ImpactTestimonialCard";

const testimonials = [
  {
    name: "Sanusi",
    subtitle: "Rangers Biru Cleansheet",
    quote:
      "Saya sangat senang saat mendapatkan beasiswa untuk melanjutkan pendidikan saya ke jenjang perkuliahan. Terlebih lagi orang tua turut berbahagia anaknya dapat melanjutkan pendidikannya untuk meraih kesuksesan",
    photo: "/profile-placeholder.svg",
  },
  {
    name: "Fajri",
    subtitle: "Rangers Biru Cleansheet",
    quote:
      'Senang bisa dapat kesempatan kembali menuntut ilmu karena tidak ada kekayaan seperti pengetahuan, tidak ada kemiskinan seperti ketidaktahuan',
    photo: "/profile-placeholder.svg",
  },
  {
    name: "Bagus",
    subtitle: "Alumni Cleansheet",
    quote:
      'Cleansheet merupakan salah satu faktor yang berimpact pada karir saya untuk mewujudkan cita-cita saya menjadi PNS',
    photo: "/profile-placeholder.svg",
  },
];

const ImpactSection = () => (
  <section style={{ background: 'linear-gradient(180deg, #1565c0 0%, #f8fafc 60%)', padding: '72px 0 72px 0' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 700, marginBottom: 40 }}>Dampak Cleansheet</h2>
      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
        {/* Kiri: Video/cover card */}
        <div style={{ flex: 1, minWidth: 340 }}>
          <div style={{ background: '#e3f2fd', borderRadius: 24, overflow: 'hidden', boxShadow: '0 2px 12px #bdbdbd', position: 'relative', width: '100%', height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/impact-video-cover.svg" alt="Impact Video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <button style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #bdbdbd', cursor: 'pointer', padding: 0 }} aria-label="Play Video">
              <img src="/play-icon.svg" alt="Play" style={{ width: 32, height: 32 }} />
            </button>
            <div style={{ position: 'absolute', left: 24, top: 24, color: '#222', fontWeight: 700, fontSize: 24, textAlign: 'left' }}>
              Terima Kasih,<br />Sobat Cleansheet
              <div style={{ fontWeight: 400, fontSize: 16, marginTop: 12, color: '#222' }}>
                Berkat kalian, kami bisa mendapatkan kualitas hidup yang lebih baik
              </div>
              <div style={{ fontSize: 12, color: '#222', marginTop: 8, background: '#fff', borderRadius: 8, display: 'inline-block', padding: '2px 10px', fontWeight: 500 }}>
                #businessforhelpingpeople
              </div>
            </div>
            <img src="/logo-placeholder.svg" alt="CleanSheet" style={{ position: 'absolute', right: 24, top: 24, width: 80 }} />
          </div>
        </div>
        {/* Kanan: Testimoni */}
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {testimonials.map((t, i) => (
            <ImpactTestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ImpactSection; 