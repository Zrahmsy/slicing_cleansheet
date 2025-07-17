import React from "react";
import OrderStepCard from "./OrderStepCard";

const steps = [
  {
    image: "/howtoorder-step1.svg",
    title: "Masuk ke Halaman Pemesanan",
    description: "Login ke website cleansheet. Kemudian pilih paket jasa yang kamu butuhkan.",
    button: true,
  },
  {
    image: "/howtoorder-step2.svg",
    title: "Isi Data dan Jadwal",
    description: "Lengkapi data dan jadwal sesuai kebutuhanmu.",
  },
  {
    image: "/howtoorder-step3.svg",
    title: "Konfirmasi dan Pembayaran",
    description: "Cek kembali pesananmu, lalu lakukan pembayaran.",
  },
  {
    image: "/howtoorder-step4.svg",
    title: "Tim Kami Datang",
    description: "Tim CleanSheet akan datang sesuai jadwal yang kamu pilih.",
  },
];

const activeStep = 0;

const OrderStepsSection = () => (
  <section style={{ padding: '64px 0', background: '#fff' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
      <div style={{ color: '#64748b', fontSize: 15, fontWeight: 500, marginBottom: 8 }}>CARA PESAN</div>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
        Ikuti 4 langkah mudah memesan jasa kami
      </h2>
      <div style={{ width: 80, height: 4, background: '#2563eb', borderRadius: 2, margin: '0 auto 40px auto' }} />
      <div style={{ display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'center', marginBottom: 32 }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <OrderStepCard image={step.image} step={idx + 1} active={idx === activeStep} />
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: idx === activeStep ? '#2563eb' : '#fff',
              border: '2px solid #2563eb',
              color: idx === activeStep ? '#fff' : '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 18,
              marginTop: -18,
              zIndex: 1,
              boxShadow: idx === activeStep ? '0 2px 8px #2563eb33' : undefined,
            }}>
              {idx + 1}
            </div>
            {idx < steps.length - 1 && (
              <div style={{ height: 2, width: 80, background: '#2563eb', margin: '-19px 0 0 0' }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
        Langkah 1: {steps[activeStep].title}
      </div>
      <div style={{ color: '#334155', fontSize: 16, marginBottom: 24 }}>
        {steps[activeStep].description}
      </div>
      <button style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 24, padding: '12px 32px', fontWeight: 600, fontSize: 18, cursor: 'pointer', boxShadow: '0 2px 8px #2563eb22' }}>
        Pesan Sekarang
      </button>
    </div>
  </section>
);

export default OrderStepsSection; 