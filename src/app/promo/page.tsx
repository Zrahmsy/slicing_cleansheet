'use client';

import React, { useState } from "react";
import PromoCard from "../../PromoCard";
import FooterSection from "../layanan/FooterSection";
import LandingHeader from "../../LandingHeader";

const promos = Array(9).fill({
  image: "/placeholder-image.svg",
  title: "30% Off",
  desc: "Cashback 30% s.d Rp 5.000",
  code: "CXS6DF",
  valid: "Valid until August 17, 2022",
});

export default function PromoPage() {
  const [page, setPage] = useState(1);
  const promosPerPage = 9;
  const totalPages = 5;

  return (
    <>
      <LandingHeader />
      <main className="flex flex-col items-center w-full min-h-screen bg-[#f8fafc] pt-8 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Promo</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-4 mb-8">
          {promos.map((promo, idx) => (
            <PromoCard key={idx} {...promo} />
          ))}
        </div>
        {/* Pagination */}
        <div className="flex items-center gap-2 mt-4">
          <button
            className="px-3 py-1 rounded border bg-white text-gray-600 disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            &lt;
          </button>
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              className={`px-3 py-1 rounded border ${p === page ? "bg-blue-500 text-white" : "bg-white text-gray-600"}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded border bg-white text-gray-600 disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            &gt;
          </button>
        </div>
      </main>
      <FooterSection />
    </>
  );
} 