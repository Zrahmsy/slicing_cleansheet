import Image from "next/image";

export default function JoinUsHeroSection() {
  return (
    <section className="w-full max-w-6xl px-4 mt-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-50 rounded-2xl py-8">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
          {`Dapatkan Penghasilan Dan`}<br />
          Jadilah <span className="text-blue-500">Pahlawan</span>{` Untuk`}<br />
          {`Mereka Yang Membutuhkan`}
        </h1>
        <p className="text-gray-700 max-w-md">Menyelesaikan Masalah Kebersihan, Mengurangi Anak-Anak Putus Sekolah Serta Pengangguran Dan Ujungnya Pada Pengentasan Kemiskinan.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold w-max">Daftar Heroes Sekarang</button>
      </div>
      <div className="flex-1 flex justify-center">
        <Image src="/placeholder-image.svg" alt="Heroes" width={128} height={256} className="h-64 w-auto object-contain" />
import Image from "next/image";
      </div>
    </section>
  );
} 