import Image from "next/image";

const article = {
  date: '26 Juli 2022',
  title: 'Fogging Asap dan Embun, Mana yang Lebih Aman?',
  desc: 'Fogging bukan merupakan cara mencegah perkembangbiakan nyamuk di sekitar kita, atau mensterilkan ruangan dengan desinfektan. Selain itu, fogging nyamuk hanya mematikan nyamuk dewasa saja, sedangkan telu...',
  img: '/placeholder-image.svg',
};

export default function BlogMainArticle() {
  return (
    <article className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow p-4">
      <Image src={article.img} alt={article.title} width={256} height={160} className="w-full md:w-64 h-44 md:h-40 object-cover rounded-lg" />
import Image from "next/image";
      <div className="flex flex-col justify-between flex-1">
        <div>
          <span className="text-xs text-gray-400">{article.date}</span>
          <h2 className="text-xl font-bold mt-1 mb-2">{article.title.replace(/"/g, "&quot;")}</h2>
          <p className="text-gray-600 text-sm mb-2">{article.desc.replace(/"/g, "&quot;")}</p>
        </div>
        <button className="self-start bg-blue-500 text-white px-4 py-1 rounded-lg font-semibold mt-2">Baca Selengkapnya</button>
      </div>
    </article>
  );
} 