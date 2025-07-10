import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, link }) => (
  <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 8px #e3e3e3', padding: 12, width: 220, minWidth: 180, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <img src={image} alt={title} style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 14, marginBottom: 10 }} />
    <div style={{ fontWeight: 600, fontSize: 14, color: '#111', marginBottom: 8 }}>{title}</div>
    <a href={link} style={{ color: '#2196f3', fontSize: 13, textDecoration: 'underline', fontWeight: 500 }}>Baca Selengkapnya</a>
  </div>
);

export default BlogCard; 