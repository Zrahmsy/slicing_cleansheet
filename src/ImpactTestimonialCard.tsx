import React from "react";

interface ImpactTestimonialCardProps {
  photo: string;
  name: string;
  subtitle: string;
  quote: string;
}

const ImpactTestimonialCard: React.FC<ImpactTestimonialCardProps> = ({ photo, name, subtitle, quote }) => (
  <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 8px #e5e7eb', padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
    <img src={photo} alt={name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
    <div>
      <div style={{ fontWeight: 700, fontSize: 18, color: '#111', marginBottom: 2 }}>{name}</div>
      <div style={{ color: '#4b5563', fontSize: 14, marginBottom: 8 }}>{subtitle}</div>
      <div style={{ color: '#222', fontSize: 15, fontStyle: 'italic', lineHeight: 1.6 }}>&quot;{quote}&quot;</div>
    </div>
  </div>
);

export default ImpactTestimonialCard; 