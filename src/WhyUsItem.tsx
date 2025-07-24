import React from "react";
import Image from "next/image";

interface WhyUsItemProps {
  icon: string;
  title: string;
  description: string;
}

const WhyUsItem: React.FC<WhyUsItemProps> = ({ icon, title, description }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
    <Image src={icon} alt="icon" width={36} height={36} style={{ flexShrink: 0 }} />
    <div>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>{title}</div>
      <div style={{ color: '#475569', fontSize: 14 }}>{description}</div>
    </div>
  </div>
);

export default WhyUsItem; 