import React from "react";

interface WhyUsItemProps {
  icon: string;
  title: string;
  description: string;
}

const WhyUsItem: React.FC<WhyUsItemProps> = ({ icon, title, description }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
    <img src={icon} alt="icon" style={{ width: 36, height: 36, flexShrink: 0 }} />
    <div>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>{title}</div>
      <div style={{ color: '#475569', fontSize: 14 }}>{description}</div>
    </div>
  </div>
);

export default WhyUsItem; 