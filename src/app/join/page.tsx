import JoinUsLayout from './JoinUsLayout';
import JoinUsHeroSection from './JoinUsHeroSection';
import JoinUsAboutSection from './JoinUsAboutSection';
import JoinUsBenefitsSection from './JoinUsBenefitsSection';
import JoinUsStoriesSection from './JoinUsStoriesSection';
import JoinUsCtaSection from './JoinUsCtaSection';
import FooterSection from '../layanan/FooterSection';

export default function JoinUsPage() {
  return (
    <JoinUsLayout>
      <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
        <JoinUsHeroSection />
        <JoinUsAboutSection />
        <JoinUsBenefitsSection />
        <JoinUsStoriesSection />
        <JoinUsCtaSection />
      </main>
      <FooterSection />
    </JoinUsLayout>
  );
} 