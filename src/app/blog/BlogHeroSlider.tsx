const hero = {
  title: 'Fogging Asap dan Embun, Mana yang Lebih Aman?',
  desc: 'Fogging bukan merupakan cara mencegah perkembangbiakan nyamuk di sekitar kita, atau mensterilkan ruangan dengan desinfektan. Selain itu, fogging nyamuk hanya mematikan nyamuk dewasa saja, sedangkan telu...',
  img: '/placeholder-image.svg',
};

export default function BlogHeroSlider() {
  return (
    <section className="w-full h-[380px] md:h-[420px] flex items-center justify-center relative bg-black/60 overflow-hidden">
      <img src={hero.img} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center mb-4 drop-shadow-lg max-w-2xl">{hero.title}</h1>
        <p className="text-white text-base md:text-lg text-center mb-6 max-w-xl drop-shadow-lg">{hero.desc}</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold mb-6">Baca Selengkapnya</button>
        <div className="flex gap-2 mt-2">
          <span className="w-6 h-2 rounded-full bg-blue-500" />
          <span className="w-2 h-2 rounded-full bg-white/70" />
          <span className="w-2 h-2 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
} 