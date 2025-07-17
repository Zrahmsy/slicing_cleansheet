import React from "react";

interface PromoCardProps {
  image: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ image }) => (
  <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 2px 12px #0002', background: '#fff', minWidth: 340, maxWidth: 380 }}>
    <img src={image} alt="Promo" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
  </div>
);

export default PromoCard; 