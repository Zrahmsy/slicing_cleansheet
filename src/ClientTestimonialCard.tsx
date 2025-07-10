import React from "react";

interface ClientTestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  title: string;
  text: string;
}

const ClientTestimonialCard: React.FC<ClientTestimonialCardProps> = ({ avatar, name, role, title, text }) => (
  <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 12px #e3e3e3', padding: 32, minWidth: 320, maxWidth: 480 }}>
    <div style={{ fontWeight: 700, fontSize: 20, color: '#111', marginBottom: 8 }}>{title}</div>
    <div style={{ color: '#444', fontSize: 16, marginBottom: 24 }}>{text}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
      <img src={avatar} alt={name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
      <div>
        <div style={{ fontWeight: 700, fontSize: 16, color: '#111' }}>{name}</div>
        <div style={{ color: '#888', fontSize: 14 }}>{role}</div>
      </div>
    </div>
  </div>
);

export default ClientTestimonialCard; 