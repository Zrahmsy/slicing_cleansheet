import Image from 'next/image';

export default function SertifikasiSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 px-4 md:px-16 bg-white">
      {/* Kiri: Judul dan deskripsi */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Lisensi dan Sertifikasi</h2>
        <div className="w-16 h-1 bg-[#2196f3] mb-4" />
        <p className="text-gray-700 text-base md:text-lg">
          Cleansheet merupakan Startup Cleaning Service Profesional berbasis sociotechpreneur yang memberdayakan mahasiswa/pelajar prasejahtera dan anak putus sekolah dengan menggunakan teknologi modern dan canggih untuk menyelesaikan berbagai macam permasalahan kebersihan.
        </p>
      </div>
      {/* Kanan: Sertifikat */}
      <div className="md:w-1/2 w-full flex gap-8 justify-center items-start">
        {[1,2].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-[#2196f3] text-white text-xs font-semibold px-4 py-1 rounded-t-md mb-0.5">SERTIFIKASI</div>
            <div className="border-2 border-[#2196f3] rounded-b-md rounded-t-none overflow-hidden bg-white">
              <Image
                src="/placeholder-image.svg"
                alt={`Sertifikat ${i}`}
                width={180}
                height={260}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 