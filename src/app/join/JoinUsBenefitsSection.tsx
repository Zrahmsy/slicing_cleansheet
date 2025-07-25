import Image from "next/image";

const benefits = [
  { icon: '/placeholder-image.svg', label: 'Mendapatkan Penghasilan' },
  { icon: '/placeholder-image.svg', label: 'Membantu Pendidikan Anak Muda Putus Sekolah' },
  { icon: '/placeholder-image.svg', label: 'Mendapatkan Berbagai Layanan Cleansheet' },
  { icon: '/placeholder-image.svg', label: 'Relasi Cleansheet Heroes Se-Jabodetabek' },
  { icon: '/placeholder-image.svg', label: 'Turut Memberdayakan Anak-Anak Muda' },
];

export default function JoinUsBenefitsSection() {
  return (
    <section className="w-full max-w-6xl px-4 mt-8 mb-16">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Kenapa Harus Bergabung Dengan <span className="text-blue-500">Cleansheet</span> Heroes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {benefits.map((b, idx) => (
          <div key={idx} className="flex flex-col items-center text-center gap-3">
            <Image src={b.icon} alt={b.label} width={48} height={48} className="h-12 w-12 object-contain mb-2" />
            <span className="text-base font-medium">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 