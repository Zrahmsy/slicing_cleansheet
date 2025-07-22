import React from "react";

export default function PromoDetailInfo() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Raih Untung</span>
      </div>
      <h2 className="text-3xl font-bold mb-2">30% Off</h2>
      <span className="text-gray-600 mb-2">Gunakan kode kupon</span>
      <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg mb-4">CX6SDF</div>
      <span className="text-lg font-semibold mb-2">Cashback 30% s.d Rp 5.000</span>
    </div>
  );
}
