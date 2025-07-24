import React from "react";
import Image from "next/image";

interface SocialProgramCardProps {
  title: string;
  description: string;
  image: string;
  imageRight?: boolean;
}

const SocialProgramCard: React.FC<SocialProgramCardProps> = ({ title, description, image, imageRight }) => (
  <div style={{
    display: 'flex',
    flexDirection: imageRight ? 'row-reverse' : 'row',
    alignItems: 'center',
    gap: 40,
    background: imageRight ? '#fff' : 'linear-gradient(90deg, #e0f2fe 60%, #fff 100%)',
    borderRadius: 24,
    padding: '40px 32px',
    marginBottom: 48,
    boxShadow: '0 2px 12px #0001',
  }}>
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: 700, fontSize: 28, marginBottom: 12 }}>{title}</div>
      <div style={{ color: '#334155', fontSize: 17 }}>{description}</div>
    </div>
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
      <Image src={image} alt={title} width={320} height={180} style={{ maxWidth: '100%', borderRadius: 18, objectFit: 'cover' }} />
    </div>
  </div>
);

export default SocialProgramCard; 