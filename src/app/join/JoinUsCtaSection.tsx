export default function JoinUsCtaSection() {
  return (
    <section className="w-full max-w-6xl px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          Tertarik Bergabung Menjadi <span className="text-blue-500">Cleansheet</span> Heroes?
        </h2>
        <p className="text-gray-700 max-w-md text-sm">Ratusan Cleansheet Heroes Sudah Bergabung! Saatnya Kamu Bergabung Dan Berkontribusi Bersama Untuk Indonesia Yang Lebih Baik</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold w-max">Daftar Heroes Sekarang</button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="/placeholder-image.svg" alt="App" className="h-64 w-auto object-contain" />
      </div>
    </section>
  );
} 