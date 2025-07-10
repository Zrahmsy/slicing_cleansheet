import React from "react";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, role }) => (
  <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 8px #e5e7eb', padding: 16, width: 200, minWidth: 180, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <img src={image} alt={name} style={{ width: 160, height: 180, objectFit: 'cover', borderRadius: 20, marginBottom: 16 }} />
    <div style={{ fontWeight: 700, fontSize: 20, color: '#111', marginBottom: 4, textAlign: 'center' }}>{name}</div>
    <div style={{ color: '#888', fontSize: 15, textAlign: 'center' }}>{role}</div>
  </div>
);

export default TeamMemberCard; 