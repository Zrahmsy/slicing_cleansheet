export default function BlogDownloadAppSection() {
  return (
    <section className="w-full max-w-6xl px-4 mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1">
        <h4 className="text-xs font-semibold text-gray-500 mb-1">UNDUH APP</h4>
        <h2 className="text-xl md:text-2xl font-bold mb-2">Pesan Layanan Kebersihan Dalam Genggaman</h2>
        <p className="text-gray-700 mb-4">Mempermudah layanan dengan menghadirkan solusi aplikasi mobile untuk Anda. Pilih tombol di bawah, dan klik tombol download.</p>
        <div className="flex gap-3">
          <img src="/placeholder-image.svg" alt="Google Play" className="h-10 w-auto rounded shadow" />
          <img src="/placeholder-image.svg" alt="App Store" className="h-10 w-auto rounded shadow" />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="/placeholder-image.svg" alt="Phone App" className="h-64 w-auto object-contain" />
      </div>
    </section>
  );
} 