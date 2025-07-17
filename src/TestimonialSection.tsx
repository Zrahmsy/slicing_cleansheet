import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    avatar: "/client-testimonial-person1.svg",
    name: "Adam Damascus",
    date: "14 Agustus 2023",
    rating: 5,
    text: "Jujur deh, ini baru pertama kali aku pakai CleanSheet. Beneran bisa dipegang banget kualitasnya. Akhirnya langsung aku tawarin ke temen-temenku juga. Jujur deh, ini baru pertama kali aku pakai CleanSheet. Beneran bisa dipegang banget kualitasnya. Akhirnya langsung aku tawarin ke temen-temenku juga.",
    service: "Deep Cleaning",
  },
  {
    avatar: "/client-testimonial-person2.svg",
    name: "Rizal Karunia",
    date: "1 Juli 2023",
    rating: 5,
    text: "Pelayanan baik dan memuaskan. Mantap Cleansheet!",
    service: "Toilet Cleaning",
  },
  {
    avatar: "/client-testimonial-person1.svg",
    name: "Adam Damascus",
    date: "14 Agustus 2023",
    rating: 5,
    text: "Jujur deh, ini baru pertama kali aku pakai CleanSheet. Beneran bisa dipegang banget kualitasnya. Akhirnya langsung aku tawarin ke temen-temenku juga. Jujur deh, ini baru pertama kali aku pakai CleanSheet. Beneran bisa dipegang banget kualitasnya. Akhirnya langsung aku tawarin ke temen-temenku juga.",
    service: "Deep Cleaning",
  },
];

const TestimonialSection = () => (
  <section style={{ padding: '64px 0 0 0', background: '#f8fafc', position: 'relative' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
      <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: 'left', marginBottom: 40 }}>
        Testimoni Pelanggan
      </h2>
      <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 32 }}>
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 16, marginBottom: 24 }}>
        <button style={{ background: '#fff', border: '2px solid #2563eb', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 22, color: '#2563eb' }}>&larr;</button>
        <button style={{ background: '#fff', border: '2px solid #2563eb', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 22, color: '#2563eb' }}>&rarr;</button>
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 24 }}>
        <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#2563eb', display: 'inline-block' }} />
        <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#e0e7ef', display: 'inline-block' }} />
        <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#e0e7ef', display: 'inline-block' }} />
      </div>
      <div style={{ textAlign: 'right', marginBottom: 0 }}>
        <a href="#" style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none', fontSize: 16 }}>
          Testimoni lengkap pelanggan kami &rarr;
        </a>
      </div>
    </div>
    <div style={{ position: 'absolute', left: 0, bottom: 0, width: 340, height: 140, background: '#bae6fd', borderTopRightRadius: 120, zIndex: 0 }} />
  </section>
);

export default TestimonialSection; 