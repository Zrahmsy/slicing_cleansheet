export default function BlogNewsletterSection() {
  return (
    <section className="w-full max-w-6xl px-4 mt-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1 flex flex-col gap-3">
        <h4 className="text-xs font-semibold text-gray-500">IKUTI KAMI</h4>
        <h2 className="text-xl md:text-2xl font-bold">Berlangganan berita update kami</h2>
        <div className="bg-blue-400 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          <div className="flex-1 text-white">
            <p className="mb-2 text-sm">Ikuti berita terupdate dari kami dengan memasukkan email Anda pada kolom yang telah kami sediakan. Kami menyarankan Anda untuk membaca syarat dan ketentuan yang berlaku pada webkami melalui <a href="#" className="underline font-semibold">link ini</a></p>
            <form className="flex gap-2 mt-2">
              <input type="email" placeholder="Alamat Email Anda" className="rounded px-3 py-2 text-gray-700 w-60 max-w-full" />
              <button type="submit" className="bg-white text-blue-500 font-semibold rounded px-4 py-2">Berlangganan</button>
            </form>
          </div>
          <div className="flex-1 flex justify-end items-end">
            <img src="/placeholder-image.svg" alt="Newsletter Person" className="h-40 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
} 