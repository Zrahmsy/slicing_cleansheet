import Image from 'next/image';

export default function DownloadAppSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 px-4 md:px-16 bg-[#f5faff]">
      {/* Kiri: Teks dan tombol */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <div className="text-gray-600 text-sm mb-2 font-semibold tracking-wide">UNDUH APP</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Pesan Layanan Kebersihan Dalam Genggaman</h2>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Mempermudah layanan dengan menghadirkan solusi aplikasi mobile untuk Anda. Pilih tombol di bawah, dan klik tombol download.
        </p>
        <div className="flex gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/google-play-badge.png" alt="Google Play" width={150} height={48} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/app-store-badge.png" alt="App Store" width={150} height={48} />
          </a>
        </div>
      </div>
      {/* Kanan: Gambar handphone */}
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src="/download-app-phone.svg"
          alt="Download App Phone"
          width={300}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
} 