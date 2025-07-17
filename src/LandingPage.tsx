import React from "react";
import LandingHeader from "./LandingHeader";
import LandingHero from "./LandingHero";
import LandingTestimoniArtikel from "./LandingTestimoniArtikel";
import ServicesSection from "./ServicesSection";
import SubscriptionSection from "./SubscriptionSection";
import PromoSection from "./PromoSection";
import WhyUsSection from "./WhyUsSection";
import OrderStepsSection from "./OrderStepsSection";
import TestimonialSection from "./TestimonialSection";
import ImpactSection from "./ImpactSection";
import SocialSection from "./SocialSection";
import MediaCoverageSection from "./MediaCoverageSection";
import DownloadAppSection from "./DownloadAppSection";
import FooterContactBar from "./FooterContactBar";
import FooterMain from "./FooterMain";

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
    <SubscriptionSection />
    <PromoSection />
    <WhyUsSection />
    <OrderStepsSection />
    <TestimonialSection />
    <ImpactSection />
    <SocialSection />
    <MediaCoverageSection />
    <DownloadAppSection />
    <FooterContactBar />
    <FooterMain />
  </div>
);

export default LandingPage; 