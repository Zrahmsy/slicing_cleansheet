// NOTE: Gambar gunakan placeholder-image.svg dari public/
const packages = [
  {
    title: 'One Home One Hope - All You Can Clean',
    best: true,
    features: [
      'Jadwal Visit 26 hari/ bulan',
      'All Layanan Cleansheet',
      'Sudah sekaligus membantu pendidikan 1 anak',
    ],
  },
  {
    title: 'One Corp Many Hope - All You Can Clean',
    best: false,
    features: [
      'Jadwal Visit 26 hari/ bulan',
      'All Layanan Cleansheet',
      'Sudah sekaligus membantu pendidikan 1 anak',
    ],
  },
  {
    title: 'One Home One Hope',
    best: false,
    features: [
      'Jadwal 1x per minggu',
      '2 jam perkedatangan',
      'Sudah sekaligus membantu pendidikan 1 anak',
    ],
  },
  {
    title: 'One Corp Many Hope',
    best: false,
    features: [
      'Jadwal 5x visit per minggu',
      '2 jam perkedatangan',
      '12x per bulan',
      'Mulai 900 ribuan per bulan',
    ],
  },
];

export default function SubscriptionSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Paket Berlangganan</h2>
      <p className="text-gray-500 text-center mb-8">Lebih hemat dengan berlangganan</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {packages.map((pkg, idx) => (
          <div key={pkg.title} className="relative bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden">
            {pkg.best && (
              <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded z-10">BEST SELLER</span>
            )}
            <img src="/placeholder-image.svg" alt={pkg.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-base mb-2">{pkg.title}</h3>
              <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                {pkg.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button className="mt-auto bg-blue-500 text-white rounded-full py-2 font-semibold hover:bg-blue-600 transition">Berlangganan</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 