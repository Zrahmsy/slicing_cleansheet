import Image from "next/image";

const articles = [
  {
    date: '26 Juli 2022',
    title: 'Fogging Asap dan Embun, Mana yang Lebih Aman?',
    desc: 'Fogging bukan merupakan cara mencegah perkembangbiakan nyamuk di sekitar kita, atau mensterilkan ruangan dengan desinfektan. Selain itu, fogging nyamuk hanya mematikan nyamuk dewasa saja, sedangkan telu...'
  },
  {
    date: '26 Juli 2022',
    title: 'Fogging Asap dan Embun, Mana yang Lebih Aman?',
    desc: 'Fogging bukan merupakan cara mencegah perkembangbiakan nyamuk di sekitar kita, atau mensterilkan ruangan dengan desinfektan. Selain itu, fogging nyamuk hanya mematikan nyamuk dewasa saja, sedangkan telu...'
  },
  {
    date: '26 Juli 2022',
    title: 'Fogging Asap dan Embun, Mana yang Lebih Aman?',
    desc: 'Fogging bukan merupakan cara mencegah perkembangbiakan nyamuk di sekitar kita, atau mensterilkan ruangan dengan desinfektan. Selain itu, fogging nyamuk hanya mematikan nyamuk dewasa saja, sedangkan telu...'
  },
];

export default function BlogSideArticles() {
  return (
    <div className="flex flex-col gap-4">
      {articles.map((a, idx) => (
        <article key={idx} className="flex gap-3 bg-white rounded-lg shadow p-2">
          <Image src="/placeholder-image.svg" alt={a.title} width={96} height={64} className="w-24 h-16 object-cover rounded-md" />
          <div className="flex flex-col justify-between flex-1">
            <span className="text-xs text-gray-400">{a.date}</span>
            <h3 className="text-sm font-bold leading-tight mb-1">{a.title}</h3>
            <p className="text-xs text-gray-600 line-clamp-2">{a.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
} 