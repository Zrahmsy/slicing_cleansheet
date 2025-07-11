import Image from 'next/image';

export default function SejarahSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#f5faff] rounded-xl p-6 md:p-12 my-12">
      {/* Video/Gambar kiri */}
      <div className="relative w-full md:w-1/2 max-w-md aspect-video mb-6 md:mb-0">
        <Image
          src="/video-placeholder.svg"
          alt="Video Sejarah Kami"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 rounded-full p-3 shadow-md">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#2196f3"/>
              <polygon points="16,13 28,20 16,27" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      {/* Deskripsi kanan */}
      <div className="md:w-1/2 w-full md:pl-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Sejarah Kami</h2>
        <p className="text-gray-600 text-base md:text-lg">
          Bermula dari pengalaman pribadinya menjadi mahasiswa penerima beasiswa Bidikmisi di IPB & kesulitan mencari penghasilan tambahan di sela-sela kesibukannya sehari-hari, Dhjon juga ingin membantu sesama mahasiswa Bidikmisi yang mengalami permasalahan yang sama. Maka Dhjon menciptakan usaha "Cleansheet". Selengkapnya ada di video berikut
        </p>
      </div>
    </section>
  );
} 