// NOTE: Siapkan gambar layanan-daily.png, layanan-deep.png, layanan-deep-lite.png, layanan-hydro.png, layanan-soft.png, layanan-toilet.png di folder public/
import Image from "next/image";
const services = [
  { title: 'Daily Cleaning', img: '/layanan-daily.png', best: true },
  { title: 'Deep Cleaning', img: '/layanan-deep.png', best: false },
  { title: 'Deep Cleaning Lite (Per Jam)', img: '/layanan-deep-lite.png', best: true },
  { title: 'Hydro Vacuum', img: '/layanan-hydro.png', best: false },
  { title: 'Cuci Soft Furniture', img: '/layanan-soft.png', best: false },
  { title: 'Deep Cleaning Toilet', img: '/layanan-toilet.png', best: false },
];

export default function ServicesSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
      {services.map((svc) => (
        <div key={svc.title} className="relative bg-white rounded-xl shadow-md overflow-hidden group">
          {svc.best && (
            <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded z-10">BEST SELLER</span>
          )}
          <Image src={svc.img} alt={svc.title} width={400} height={160} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
          <div className="p-4 flex flex-col justify-between h-28">
            <h4 className="font-semibold text-lg mb-2">{svc.title}</h4>
            <button className="mt-auto self-end bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
} 