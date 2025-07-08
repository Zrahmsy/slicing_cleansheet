import React from "react";
import LandingHeader from "./LandingHeader";
import LandingHero from "./LandingHero";
import LandingTestimoniArtikel from "./LandingTestimoniArtikel";

const LandingPage = () => (
  <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
    <LandingHeader />
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', maxWidth: 1200, margin: '0 auto', gap: 40, padding: '32px 24px' }}>
      <div style={{ flex: 2 }}>
        <LandingHero />
      </div>
      <div style={{ flex: 1, minWidth: 340 }}>
        <LandingTestimoniArtikel />
      </div>
    </div>
  </div>
);

export default LandingPage; 