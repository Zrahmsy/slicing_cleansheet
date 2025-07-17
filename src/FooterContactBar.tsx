import React from "react";

const items = [
  {
    icon: "/icon-clock.svg",
    label: "Waktu operasi",
    value: "Senin - Jumat 06.00 - 21.00",
  },
  {
    icon: "/icon-phone.svg",
    label: "CS 1 (07:00-17:00):\nSiti - 081297984971",
    value: "",
  },
  {
    icon: "/icon-location.svg",
    label: "Gd. Balai Inkubator Teknologi,\nTangerang Selatan",
    value: "",
  },
];

const FooterContactBar = () => (
  <div style={{ background: '#1656a8', padding: '24px 0 20px 0', width: '100%', borderTop: '4px solid #fff', display: 'flex', justifyContent: 'center' }}>
    <div style={{ maxWidth: 1200, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, padding: '0 24px', flexWrap: 'wrap' }}>
      {items.map((item, idx) => (
        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#fff', fontSize: 16, minWidth: 220 }}>
          <img src={item.icon} alt="icon" style={{ width: 28, height: 28, opacity: 0.9 }} />
          <div>
            <div style={{ fontWeight: 500, fontSize: 15, opacity: 0.95, whiteSpace: 'pre-line' }}>{item.label}</div>
            {item.value && <div style={{ fontSize: 15, opacity: 0.85 }}>{item.value}</div>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FooterContactBar; 