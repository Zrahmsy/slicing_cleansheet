import Image from "next/image";

const stories = [
  {
    name: 'Ibu Ina',
    role: 'Cleansheet Heroes Bogor',
    img: '/placeholder-image.svg',
    text: 'Saya senang bisa membantu anak-anak muda yang membutuhkan pekerjaan di sekitar saya. Sekaligus saya dapat memperkenalkan Cleansheet dengan visi misinya kepada orang-orang sekitar saya',
  },
  {
    name: 'Shahnaz Haque',
    role: 'Public Figure',
    img: '/placeholder-image.svg',
    text: 'Cleansheet heroes merupakan program gotong royong luar biasa dalam membantu anak-anak muda yang ingin mendapatkan pekerjaan, penghasilan sekaligus melanjutkan pendidikan. Selain itu, kita bisa membantu temen2 kita yg sedang kesusahan dalam urusan kebersihan',
  },
  {
    name: 'Ibu Somia',
    role: 'Cleansheet Heroes',
    img: '/placeholder-image.svg',
    text: 'Saya merupakan pensiunan PNS, dengan Cleansheet Heroes saya dapat menambah penghasilan dan kegiatan saya.',
  },
];

export default function JoinUsStoriesSection() {
  return (
    <section className="w-full bg-blue-700 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-10">Cerita Cleansheet Heroes</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {stories.map((s, idx) => (
            <div key={idx} className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center min-w-[260px] max-w-md mx-auto">
              <Image src={s.img} alt={s.name} width={80} height={80} className="h-20 w-20 rounded-full object-cover mb-4 border-4 border-blue-100" />
import Image from "next/image";
              <div className="font-bold text-lg mb-1">{s.name}</div>
              <div className="text-xs text-gray-500 mb-3">{s.role}</div>
              <div className="text-gray-700 text-sm">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 