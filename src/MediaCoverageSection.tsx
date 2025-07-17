import React from "react";

const mediaLogos = [
  "/media-mandiri.svg",
  "/media-dompet.svg",
  "/media-katadata.svg",
  "/media-jica.svg",
  "/media-asy-syifa.svg",
];

const MediaCoverageSection = () => (
  <section style={{ padding: '80px 0 0 0', background: '#fff' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 40 }}>
        Liputan Media
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 56, flexWrap: 'wrap' }}>
        {mediaLogos.map((logo, idx) => (
          <img key={idx} src={logo} alt="Media Logo" style={{ height: 48, objectFit: 'contain', maxWidth: 160 }} />
        ))}
      </div>
    </div>
  </section>
);

export default MediaCoverageSection; 