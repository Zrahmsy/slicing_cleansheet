import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  service: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, date, rating, text, service }) => (
  <div className="responsive-card" style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 12px #0001', padding: 24, minWidth: 320, maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 12 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Image src={avatar} alt={name} width={44} height={44} style={{ borderRadius: '50%', objectFit: 'cover' }} />
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>{name}</div>
        <div style={{ color: '#64748b', fontSize: 13 }}>{date}</div>
        <div style={{ color: '#fbbf24', fontSize: 15, marginTop: 2 }}>
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
      </div>
    </div>
    <div style={{ color: '#334155', fontSize: 15, margin: '8px 0' }}>{text}</div>
    <div style={{ display: 'flex', gap: 8 }}>
      <span style={{ background: '#e0e7ef', color: '#2563eb', borderRadius: 12, padding: '2px 12px', fontSize: 13, fontWeight: 500 }}>{service}</span>
    </div>
  </div>
);

export default TestimonialCard; 