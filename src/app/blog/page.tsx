import BlogLayout from './BlogLayout';
import BlogHeroSlider from './BlogHeroSlider';
import BlogMainArticle from './BlogMainArticle';
import BlogSideArticles from './BlogSideArticles';
import BlogHighlightsSection from './BlogHighlightsSection';
import BlogLatestPostsSection from './BlogLatestPostsSection';
import BlogDownloadAppSection from './BlogDownloadAppSection';
import BlogNewsletterSection from './BlogNewsletterSection';
import FooterSection from '../layanan/FooterSection';

export default function BlogPage() {
  return (
    <BlogLayout>
      <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
        <BlogHeroSlider />
        <section className="w-full max-w-6xl px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <BlogMainArticle />
          </div>
          <div>
            <BlogSideArticles />
          </div>
        </section>
        <BlogHighlightsSection />
        <BlogLatestPostsSection />
        <BlogDownloadAppSection />
        <BlogNewsletterSection />
      </main>
      <FooterSection />
    </BlogLayout>
  );
} 