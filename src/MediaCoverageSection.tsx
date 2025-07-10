import React from "react";

const media = [
  { name: "Mandiri Syariah", logo: "/media-mandiri.svg" },
  { name: "Dompet Dhuafa", logo: "/media-dompet.svg" },
  { name: "Katadata", logo: "/media-katadata.svg" },
  { name: "JICA", logo: "/media-jica.svg" },
  { name: "Asy Syifa", logo: "/media-asy-syifa.svg" },
];

const MediaCoverageSection = () => (
  <section style={{ background: '#fff', padding: '56px 0 56px 0' }}>
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
      <h3 style={{ fontSize: 22, fontWeight: 700, color: '#222', marginBottom: 32 }}>Liputan Media</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
        {media.map((m) => (
          <img key={m.name} src={m.logo} alt={m.name} style={{ height: 40, width: 'auto', objectFit: 'contain', opacity: 0.9 }} />
        ))}
      </div>
    </div>
  </section>
);

export default MediaCoverageSection; 