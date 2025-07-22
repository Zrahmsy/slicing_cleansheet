import React from "react";
import LandingHeader from "../../../LandingHeader";
import FooterSection from "../../../FooterMain";
import PromoDetailInfo from "../promo detail/PromoDetailInfo";
import PromoDetailTerms from "../promo detail/PromoDetailTerms";

export default function PromoDetailPage({ params }: { params: { code: string } }) {
  // Dummy data, bisa diganti dengan fetch API atau database
  const promos = [
    {
      image: "/placeholder-image.svg",
      title: "30% Off",
      desc: "Cashback 30% s.d Rp 5.000",
      code: "CXS6DF",
      valid: "Valid until August 17, 2022",
      period: "1 - 31 Okt 2022",
      minTrans: "Rp50.000"
    }
    // Tambah promo lain jika perlu
  ];
  const promo = promos.find(p => p.code === params.code) || promos[0];

  return (
    <>
      <LandingHeader />
      <main className="flex flex-col items-center w-full min-h-screen bg-[#f8fafc] pt-8 pb-16">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl px-4">
          {/* Left: Promo Image & Main Info */}
          <div className="flex-1 bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <div className="w-48 h-48 mb-4 flex items-center justify-center">
              <img src={promo.image} alt="Promo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Raih Untung</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">{promo.title}</h2>
              <span className="text-gray-600 mb-2">Gunakan kode kupon</span>
              <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg mb-4">{promo.code}</div>
              <span className="text-lg font-semibold mb-2">{promo.desc}</span>
            </div>
          </div>
          {/* Right: Promo Info Box */}
          <div className="w-full md:w-80 bg-white rounded-xl shadow p-6 flex flex-col gap-4 h-fit">
            <h3 className="font-semibold text-center">Informasi Promo</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span>Periode Promo</span>
                <span className="font-semibold">{promo.period}</span>
              </div>
              <div className="flex justify-between">
                <span>Minimum Transaksi</span>
                <span className="font-semibold">{promo.minTrans}</span>
              </div>
              <div className="flex justify-between">
                <span>Kode Promo</span>
                <span className="font-semibold text-blue-600">{promo.code}</span>
              </div>
            </div>
            <button className="w-full py-2 rounded bg-blue-100 text-blue-700 font-semibold">Salin Kode Promo</button>
            <button className="w-full py-2 rounded bg-blue-500 text-white font-bold">Pesan Sekarang</button>
          </div>
        </div>
        {/* Description & Terms */}
        <div className="w-full max-w-5xl px-4 mt-8">
          <PromoDetailTerms />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
