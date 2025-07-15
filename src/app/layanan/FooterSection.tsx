// NOTE: Logo gunakan logo-placeholder.svg, ikon sosmed gunakan icon-facebook.svg, icon-instagram.svg, icon-twitter.svg, dan icon-whatsapp.svg di public/
import Link from 'next/link';

const menus = [
  { label: 'Tentang Kami', href: '#' },
  { label: 'Hubungi Kami', href: '#' },
  { label: 'Kantor Cabang', href: '#' },
  { label: 'Layanan Kami', href: '#' },
  { label: 'Sitemap', href: '#' },
];

const sosmed = [
  { alt: 'Facebook', src: '/icon-facebook.svg', href: '#' },
  { alt: 'Instagram', src: '/icon-instagram.svg', href: '#' },
  { alt: 'Twitter', src: '/icon-twitter.svg', href: '#' },
];

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-[#181e20] text-white pt-8 pb-4 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <img src="/logo-placeholder.svg" alt="Clean Sheet Logo" className="h-10 mb-1" />
            <span className="text-xs text-gray-300">Clean, Passion, and Contribution</span>
          </div>
          <div className="flex-1 md:ml-8">
            <p className="text-xs text-gray-300 mb-2 mt-2 md:mt-0">
              Hak Cipta © 2022 CleanSheet Indonesia. Semua Hak Dilindungi Undang-Undang. Merek kata CleanSheet adalah merek dagang terdaftar dari Kementerian Hukum dan HAM RI Direktorat Jenderal Hak Kekayaan Intelektual.
            </p>
            <hr className="border-gray-600 my-2" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-6 text-xs">
                {menus.map((m) => (
                  <Link key={m.label} href={m.href} className="hover:underline">
                    {m.label}
                  </Link>
                ))}
              </div>
              <div className="flex gap-4 items-center mt-2 md:mt-0">
                {sosmed.map((s) => (
                  <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer">
                    <img src={s.src} alt={s.alt} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <a href="#" className="fixed bottom-6 right-6 z-50 bg-white rounded-full shadow-lg p-2 border-2 border-green-500 flex items-center justify-center hover:scale-105 transition">
        <img src="/icon-whatsapp.svg" alt="WhatsApp" className="h-8 w-8" />
      </a>
    </footer>
  );
} 