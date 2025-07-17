import React from "react";

interface OrderStepCardProps {
  image: string;
  step: number;
  active?: boolean;
}

const OrderStepCard: React.FC<OrderStepCardProps> = ({ image, step, active }) => (
  <div style={{
    background: '#fff',
    borderRadius: 20,
    boxShadow: active ? '0 4px 24px #2563eb22' : '0 2px 12px #0001',
    padding: 20,
    minWidth: 180,
    minHeight: 140,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: active ? '2px solid #2563eb' : '2px solid #e5e7eb',
    transition: 'box-shadow 0.2s, border 0.2s',
  }}>
    <img src={image} alt={`Langkah ${step}`} style={{ width: 90, height: 90, objectFit: 'contain' }} />
  </div>
);

export default OrderStepCard; 