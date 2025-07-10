import React from "react";

interface HowToOrderStepCardProps {
  image: string;
  active?: boolean;
  onClick?: () => void;
}

const HowToOrderStepCard: React.FC<HowToOrderStepCardProps> = ({ image, active, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: '#fff',
      borderRadius: 24,
      boxShadow: '0 2px 12px #e3e3e3',
      border: active ? '3px solid #2196f3' : '2px solid #e3e3e3',
      padding: 16,
      width: 180,
      height: 140,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s, border 0.2s',
      outline: active ? 'none' : undefined,
    }}
  >
    <img src={image} alt="Step" style={{ width: 100, height: 100, objectFit: 'contain' }} />
  </div>
);

export default HowToOrderStepCard; 