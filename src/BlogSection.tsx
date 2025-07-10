import React from "react";
import BlogCard from "./BlogCard";

const articles = [
  {
    image: "/blog-article1.svg",
    title: "Ini Dia Cara Membersihkan Bantal Yang Menguning Akibat Noda Dan Jamur! Gak Usah Beli Baru!",
    link: "#",
  },
  {
    image: "/blog-article2.svg",
    title: "Membersihkan Kerak Dengan Sitrun? Bisa Banget!",
    link: "#",
  },
  {
    image: "/blog-article3.svg",
    title: "Cara Membersihkan Sofa Kulit Dan Juga Merawatnya Dengan Bahan-Bahan Di Rumah!",
    link: "#",
  },
  {
    image: "/blog-article4.svg",
    title: "Cara Membersihkan Kipas Angin Tanpa Perlu Dibongkar",
    link: "#",
  },
];

const BlogSection = () => (
  <section style={{ background: '#fff', padding: '56px 0' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
      <div style={{ fontSize: 16, color: '#1565c0', marginBottom: 8 }}>
        <span role="img" aria-label="blog">👍</span>
      </div>
      <div style={{ color: '#888', fontSize: 14, marginBottom: 8, letterSpacing: 1 }}>BLOG</div>
      <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111', marginBottom: 32 }}>
        Artikel Pilihan untuk Anda
      </h2>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
        {articles.map((a, i) => (
          <BlogCard key={i} {...a} />
        ))}
      </div>
      <a href="#" style={{ display: 'inline-block', border: '1.5px solid #1565c0', color: '#1565c0', borderRadius: 20, padding: '10px 32px', fontWeight: 600, fontSize: 16, background: '#fff', textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}>
        Lihat Semua Artikel!
      </a>
    </div>
  </section>
);

export default BlogSection; 