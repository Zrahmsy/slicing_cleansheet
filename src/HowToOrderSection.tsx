'use client';
import React, { useState } from "react";
import HowToOrderStepCard from "./HowToOrderStepCard";

const steps = [
  {
    title: "Masuk ke Halaman Pemesanan",
    image: "/howtoorder-step1.svg",
    desc: "Download aplikasi Cleansheet melalui Playstore. Kemudian pilih paket jasa yang kamu butuhkan.",
  },
  {
    title: "Isi Data dan Pilih Jadwal",
    image: "/howtoorder-step2.svg",
    desc: "Isi data diri, alamat, dan pilih jadwal sesuai kebutuhanmu.",
  },
  {
    title: "Konfirmasi & Pembayaran",
    image: "/howtoorder-step3.svg",
    desc: "Cek kembali pesananmu, lakukan pembayaran sesuai instruksi.",
  },
  {
    title: "Tim Datang & Pengerjaan",
    image: "/howtoorder-step4.svg",
    desc: "Tim Cleansheet akan datang sesuai jadwal dan melakukan pengerjaan.",
  },
];

const HowToOrderSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <section style={{ background: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 16, color: '#444', fontSize: 16, letterSpacing: 1 }}>CARA PESAN</div>
        <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, margin: 0, color: '#111', marginBottom: 8 }}>
          Ikuti 4 langkah mudah memesan jasa kami
        </h2>
        <div style={{ width: 120, height: 4, background: '#2196f3', margin: '16px auto 32px auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 32 }}>
          {steps.map((step, idx) => (
            <HowToOrderStepCard
              key={idx}
              image={step.image}
              active={activeStep === idx}
              onClick={() => setActiveStep(idx)}
            />
          ))}
        </div>
        {/* Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 32 }}>
          {steps.map((_, idx) => (
            <React.Fragment key={idx}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: activeStep === idx ? '#1565c0' : '#fff',
                  color: activeStep === idx ? '#fff' : '#1565c0',
                  border: '2px solid #1565c0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 20,
                  boxShadow: activeStep === idx ? '0 2px 8px #bdbdbd' : undefined,
                  zIndex: 1,
                }}
              >
                {idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div style={{ height: 4, width: 80, background: '#e3e3e3', margin: '0 -2px' }} />
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Deskripsi langkah aktif */}
        <div style={{ textAlign: 'center', marginBottom: 8, fontWeight: 700, fontSize: 20, color: '#111' }}>
          Langkah {activeStep + 1}: {steps[activeStep].title}
        </div>
        <div style={{ textAlign: 'center', color: '#444', fontSize: 16, marginBottom: 24, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', borderBottom: '4px solid #2196f3', paddingBottom: 8 }}>
          {steps[activeStep].desc}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={{ background: '#2196f3', color: '#fff', border: 'none', borderRadius: 20, padding: '12px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>
            Hubungi
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToOrderSection; 