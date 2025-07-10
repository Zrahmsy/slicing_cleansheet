import React from "react";
import LandingHeader from "./LandingHeader";
import LandingHero from "./LandingHero";
import LandingTestimoniArtikel from "./LandingTestimoniArtikel";
import ServicesSection from "./ServicesSection";
import WhyUsSection from "./WhyUsSection";
import AboutSection from "./AboutSection";
import ImpactSection from "./ImpactSection";
import HowToOrderSection from "./HowToOrderSection";
import TeamSection from "./TeamSection";
import ClientTestimonialSection from "./ClientTestimonialSection";
import MediaCoverageSection from "./MediaCoverageSection";
import DownloadAppSection from "./DownloadAppSection";
import BlogSection from "./BlogSection";

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
    <ServicesSection />
    <WhyUsSection />
    <AboutSection />
    <div style={{ marginBottom: 56 }} />
    <div style={{ marginTop: 56 }} />
    <ImpactSection />
    <div style={{ marginBottom: 56 }} />
    <div style={{ marginTop: 56 }} />
    <HowToOrderSection />
    <div style={{ marginBottom: 56 }} />
    <div style={{ marginTop: 56 }} />
    <TeamSection />
    <div style={{ marginBottom: 56 }} />
    <div style={{ marginTop: 56 }} />
    <ClientTestimonialSection />
    <div style={{ marginBottom: 56 }} />
    <div style={{ marginTop: 56 }} />
    <MediaCoverageSection />
    <div style={{ marginBottom: 56 }} />
    <div style={{ marginTop: 56 }} />
    <DownloadAppSection />
    <div style={{ marginBottom: 56 }} />
    <div style={{ marginTop: 56 }} />
    <BlogSection />
  </div>
);

export default LandingPage; 