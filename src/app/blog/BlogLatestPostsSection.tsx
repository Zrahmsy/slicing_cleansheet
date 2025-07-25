import Image from "next/image";

const posts = Array(5).fill({
  date: '26 Juli 2022',
  title: 'Fogging Asap dan Embun, Mana yang Lebih Aman?',
  desc: 'Fogging bukan merupakan cara mencegah perkembangbiakan nyamuk di sekitar kita, atau mensterilkan ruangan dengan desinfektan. Selain itu, fogging nyamuk hanya mematikan nyamuk dewasa saja, sedangkan telur dan larva tetap hidup dan berkembang menjadi nyamuk dewasa dalam 2-6 hari.'
});

export default function BlogLatestPostsSection() {
  return (
    <section className="w-full max-w-6xl px-4 mt-16 mb-16">
      <h2 className="text-lg font-semibold mb-6">Postingan Terbaru</h2>
      <div className="flex flex-col gap-8">
        {posts.map((a, idx) => (
          <article key={idx} className="flex flex-row gap-6 bg-white rounded-xl shadow p-4">
            <Image src="/placeholder-image.svg" alt={a.title} width={160} height={112} className="w-40 h-28 object-cover rounded-md" />
import Image from "next/image";
            <div className="flex flex-col justify-between flex-1">
              <span className="text-xs text-gray-400">{a.date}</span>
              <h3 className="text-lg font-bold mt-1 mb-1 leading-tight">{a.title}</h3>
              <p className="text-sm text-gray-600">{a.desc}</p>
            </div>
          </article>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-end mt-8">
        <nav className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400" disabled>{'<'}</button>
          {[1,2,3,4,5].map((n) => (
            <button key={n} className={`w-8 h-8 flex items-center justify-center rounded-full border ${n===1 ? 'bg-blue-500 text-white border-blue-500' : 'border-gray-300 text-gray-700'}`}>{n}</button>
          ))}
          <span className="mx-1 text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-700">10</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-700">{'>'}</button>
        </nav>
      </div>
    </section>
  );
} 