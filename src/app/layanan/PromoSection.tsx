// NOTE: Siapkan gambar promo1.png, promo2.png, promo3.png di folder public/
export default function PromoSection() {
  return (
    <section className="flex flex-row gap-6 justify-center w-full max-w-6xl px-4 overflow-x-auto">
      {[1,2,3].map((i) => (
        <div key={i} className="bg-white rounded-xl shadow-md min-w-[340px] max-w-xs flex-shrink-0">
          <img src={`/promo${i}.png`} alt={`Promo ${i}`} className="rounded-t-xl w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Promo {i} Title</h3>
            <p className="text-sm text-gray-600 mb-2">Deskripsi singkat promo {i} di sini. Berlaku untuk pelanggan baru dan lama.</p>
            <span className="text-blue-600 font-semibold">Lihat Detail</span>
          </div>
        </div>
      ))}
    </section>
  );
} 