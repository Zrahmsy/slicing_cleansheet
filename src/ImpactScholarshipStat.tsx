import React from "react";

interface ImpactScholarshipStatProps {
  value: string;
  label: string;
}

const ImpactScholarshipStat: React.FC<ImpactScholarshipStatProps> = ({ value, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
    <div style={{ width: 4, height: 48, background: '#fff', borderRadius: 2 }} />
    <div>
      <div style={{ color: '#fff', fontWeight: 700, fontSize: 36, lineHeight: 1 }}>{value}</div>
      <div style={{ color: '#fff', fontSize: 18 }}>{label}</div>
    </div>
  </div>
);

export default ImpactScholarshipStat; 