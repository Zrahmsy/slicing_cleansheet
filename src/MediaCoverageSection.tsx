import React from "react";
import Image from "next/image";

const mediaLogos = [
  "/media-mandiri.svg",
  "/media-dompet.svg",
  "/media-katadata.svg",
  "/media-jica.svg",
  "/media-asy-syifa.svg",
];

const MediaCoverageSection = () => (
  <section style={{ background: '#fff' }} className="responsive-padding">
    <div style={{ maxWidth: 1100, margin: '0 auto' }} className="responsive-padding">
      <h2 className="responsive-title" style={{ fontWeight: 700, textAlign: 'center', marginBottom: 40 }}>
        Liputan Media
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 56, flexWrap: 'wrap' }}>
        {mediaLogos.map((logo, idx) => (
          <Image key={idx} src={logo} alt="Media Logo" width={160} height={48} style={{ objectFit: 'contain' }} />
        ))}
      </div>
    </div>
  </section>
);

export default MediaCoverageSection; 