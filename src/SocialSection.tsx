import React from "react";
import SocialProgramCard from "./SocialProgramCard";

const programs = [
  {
    title: "Pembersihan Tempat Ibadah, Sekolah dan Fasilitas Umum Gratis",
    description:
      "Program ini bertujuan agar tempat ibadah sekolah dan fasilitas jadi lebih nyaman dan sehat. Target tahun 2025 berdampak di 1.000 titik rumah ibadah, fasum, dan rumah guru.",
    image: "/placeholder-image.svg",
    imageRight: true,
  },
  {
    title: "Pesantren Cleansheet : Santri Clean",
    description:
      "Program ini merupakan program pesantren Cleansheet yang bekerjasama  dengan Masjid Daarut Tauhiid Jakarta yang ditujukan bagi para rangers  cleansheet yang ingin nyantri dan sekaligus bekerja. Anak-anak yang  disini harapannya bisa lebih baik dari segi ibadahnya dan lebih sukses lagi kedepannya. Target tahun 2025 membuka 3 pesantren dan memberi manfaat kepada 50 santri.",
    image: "/placeholder-image.svg",
    imageRight: false,
  },
];

const SocialSection = () => (
  <section style={{ background: '#fff' }} className="responsive-padding">
    <div style={{ maxWidth: 1200, margin: '0 auto' }} className="responsive-padding">
      <h2 className="responsive-title" style={{ fontWeight: 700, textAlign: 'center', marginBottom: 56 }}>
        Program Sosial Cleansheet 2025
      </h2>
      {programs.map((p, i) => (
        <SocialProgramCard key={i} {...p} />
      ))}
    </div>
  </section>
);

export default SocialSection; 