import React from "react";

interface WhyUsItemProps {
  icon: string;
  title: string;
  desc: string;
}

const WhyUsItem: React.FC<WhyUsItemProps> = ({ icon, title, desc }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
    <img src={icon} alt={title} style={{ width: 36, height: 36, flexShrink: 0 }} />
    <div>
      <div style={{ fontWeight: 700, fontSize: 18, color: '#111', marginBottom: 2 }}>{title}</div>
      <div style={{ color: '#444', fontSize: 15 }}>{desc}</div>
    </div>
  </div>
);

export default WhyUsItem; 