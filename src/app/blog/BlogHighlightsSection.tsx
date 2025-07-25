import Image from "next/image";

const highlights = Array(6).fill({
  date: '26 Juli 2022',
  title: 'Fogging Asap dan Embun, Mana yang Lebih Aman?',
  desc: 'Fogging bukan merupakan cara mencegah perkembangbiakan nyamuk di sekitar kita, atau mensterilkan ruangan dengan desinfektan. Selain itu, fogging nyamuk hanya mematikan nyamuk dewasa saja, sedangkan telu...'
});

export default function BlogHighlightsSection() {
  return (
    <section className="w-full max-w-6xl px-4 mt-16 mb-8">
      <h2 className="text-lg font-semibold mb-6">Sorotan Hari Ini</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {highlights.map((a, idx) => (
          <article key={idx} className="flex flex-col bg-white rounded-xl shadow p-3">
            <Image src="/placeholder-image.svg" alt={a.title} width={320} height={144} className="w-full h-36 object-cover rounded-md mb-2" />
            <span className="text-xs text-gray-400">{a.date}</span>
            <h3 className="text-base font-bold mt-1 mb-1 leading-tight">{a.title}</h3>
            <p className="text-xs text-gray-600 line-clamp-2">{a.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
} 