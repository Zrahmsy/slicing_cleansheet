import Image from 'next/image';

const testimonis = [
  {
    name: 'Arto Biantoro',
    role: 'Advisor',
    image: '/profile-placeholder.svg',
    text: 'Cleansheet merupakan perusahaan yang tidak hanya berfokus bagaimana untuk mencari profit namun juga berfokus untuk memberikan dampak. Tidak hanya memberikan jasa cleaning, tetapi cleansheet juga berfokus pada visi besarnya yaitu membantu anak-anak muda yang terkendala biaya untuk melanjutkan ke jenjang pendidikan yang lebih tinggi. Kita bisa bergerak bersama, tidak hanya dengan menggunakan jasa kebersihan dari Cleansheet tetapi juga membantu anak-anak indonesia untuk mendapatkan kesempatan bersekolah'
  },
  {
    name: 'Shahnaz Haque',
    role: 'Brand Ambassador',
    image: '/team-person2.svg',
    text: 'Tim Rangers Biru mempunyai attitude yang sangat baik. Tidak hanya itu, hasil membersihannya pun sangat memuaskan. Tidak hanya mendapatkan layanan kebersihan yang terpercaya dan melebihi dari standar, namun dengan menggunakan jasa dari Cleansheet, kita dapat memberikan satu cercah harapan bagi satu anak muda Indonesia'
  },
  {
    name: 'Dhiqon Nadaamist',
    role: 'Founder',
    image: '/team-person3.svg',
    text: 'Bermula dari pengalaman pribadi saya, saya dan cleansheet ingin terus membuka lapangan kerja, memberikan harapan untuk anak-anak muda Indonesia untuk melanjutkan pendidikannya serta mengubah masa depannya menjadi lebih baik lagi. Maka cleansheet hadir untuk menyelesaikan permasalahan kebersihan, mengurangi pengangguran, dan anak putus sekolah serta ujungnya di pengentasan kemiskinan'
  },
];

export default function KataMerekaSection() {
  return (
    <section className="relative py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #1565c0 0%, #f5faff 40%)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-12">Kata Mereka</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonis.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md flex-1 p-8 flex flex-col items-center text-center min-w-[260px]">
              <Image src={t.image} alt={t.name} width={72} height={72} className="rounded-full mb-4 object-cover" />
              <div className="font-bold text-lg mb-1">{t.name}</div>
              <div className="text-gray-500 text-sm mb-4">{t.role}</div>
              <div className="text-gray-700 text-base">{t.text}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Dekorasi garis kanan bawah */}
      <div className="hidden md:block absolute right-0 bottom-0 w-64 h-32" style={{zIndex:0}}>
        <svg width="100%" height="100%" viewBox="0 0 260 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            {[...Array(8)].map((_,i) => (
              <line key={i} x1={i*32} y1="0" x2={i*32} y2="80" stroke="#1565c0" strokeWidth="4" />
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
} 