import Image from 'next/image';

export default function FoundationSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12 my-12">
      {/* Kiri: Judul dan deskripsi */}
      <div className="md:w-2/3 w-full mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-[#2196f3]">Clean</span><span className="text-black">Sheet</span> Foundation
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Tingginya angka anak putus sekolah di Indonesia menjadi alasan utama kami untuk melakukan perubahan. Lahir lah gerakan &quot;KAWAN DEWANTARA&quot; yang bertujuan untuk memberikan kesempatan kepada anak putus sekolah untuk melanjutkan pendidikan dan mempelajari berbagai bidang yang diinginkan agar memiliki masa depan yang lebih cerah. Kami juga akan memberikan kesempatan untuk bekerja bersama Cleansheet bersamaan dengan dilanjutkannya pendidikan. Setelah 5 tahun belajar dan berkembang bersama Cleansheet, kami akan meluluskan mereka dan membantu menyalurkan minat & bakat dengan merekomendasikan ke berbagai relasi dan perusahaan yang bekerja sama dengan Cleansheet.
        </p>
        <p className="text-gray-700 text-base md:text-lg">
          Dalam 5 tahun kami akan berusaha untuk menyekolahkan 1000 anak putus sekolah, serta menyalurkan minat bakat mereka. Ayo bergerak bersama kami dan jadilah jembatan untuk masa depan mereka!
        </p>
      </div>
      {/* Kanan: Gambar logo dan target */}
      <div className="md:w-1/3 w-full flex flex-col items-center gap-6">
        <Image
          src="/logo-placeholder.svg"
          alt="CleanSheet Foundation Logo"
          width={180}
          height={120}
          className="object-contain mb-4"
        />
        <Image
          src="/placeholder-image.svg"
          alt="Target 5 Tahun"
          width={220}
          height={60}
          className="object-contain"
        />
      </div>
    </section>
  );
} 