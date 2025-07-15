import PromoSection from './PromoSection';
import ServicesSection from './ServicesSection';
import SubscriptionSection from './SubscriptionSection';
import FooterSection from './FooterSection';
import LayananLayout from './LayananLayout';

export default function LayananPage() {
  return (
    <LayananLayout>
      <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-12 mb-8">Promo dan Voucher Pilihan</h2>
        <PromoSection />
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-16 mb-8">Layanan</h2>
        <ServicesSection />
        <SubscriptionSection />
      </main>
      <FooterSection />
    </LayananLayout>
  );
} 