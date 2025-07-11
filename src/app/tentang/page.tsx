import Image from 'next/image';
import LandingHeader from '../../LandingHeader';
import SejarahSection from './SejarahSection';

export default function TentangPage() {
  return (
    <>
      <LandingHeader />
      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-12 md:py-24 bg-white min-h-[80vh]">
        <section className="md:w-1/2 w-full mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Cleansheet merupakan Startup Cleaning Service Profesional berbasis sociotechpreneur yang memberdayakan mahasiswa/pelajar prasejahtera dan anak putus sekolah dengan menggunakan teknologi modern dan canggih untuk menyelesaikan berbagai macam permasalahan kebersihan.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            Untuk saat ini Cleansheet melayani pembersihan di area Jakarta, Bogor, Depok, Tangerang, Tangerang Selatan dan Bekasi (Jabodetabek). Misi kami adalah untuk memberikan kesempatan bagi setiap individu menjadi lebih baik dari segi ekonomi, pendidikan, dan masa depan.
          </p>
        </section>
        <section className="md:w-1/2 w-full flex justify-center">
          <Image
            src="/profile-placeholder.svg"
            alt="Cleansheet Team"
            width={400}
            height={400}
            className="object-contain drop-shadow-xl"
          />
        </section>
      </main>
      <SejarahSection />
    </>
  );
} 