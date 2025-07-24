import React from "react";
import Image from "next/image";
import LandingHeader from "../../../LandingHeader";
import FooterSection from "../../../FooterMain";
import PromoDetailInfo from "./PromoDetailInfo";
import PromoDetailTerms from "./PromoDetailTerms";

export default function PromoDetailPage() {
  return (
    <>
      <LandingHeader />
      <main className="flex flex-col items-center w-full min-h-screen bg-[#f8fafc] pt-8 pb-16">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl px-4">
          {/* Left: Promo Image & Main Info */}
          <div className="flex-1 bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <div className="w-48 h-48 mb-4 flex items-center justify-center">
              <Image src="/placeholder-image.svg" alt="Promo" width={400} height={180} style={{ objectFit: 'contain', borderRadius: '0.5rem' }} />
            </div>
            <PromoDetailInfo />
          </div>
          {/* Right: Promo Info Box */}
          <div className="w-full md:w-80 bg-white rounded-xl shadow p-6 flex flex-col gap-4 h-fit">
            <h3 className="font-semibold text-center">Informasi Promo</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span>Periode Promo</span>
                <span className="font-semibold">1 - 31 Okt 2022</span>
              </div>
              <div className="flex justify-between">
                <span>Minimum Transaksi</span>
                <span className="font-semibold">Rp50.000</span>
              </div>
              <div className="flex justify-between">
                <span>Kode Promo</span>
                <span className="font-semibold text-blue-600">CX6SDF</span>
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
