import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import ArticleBanner from "@/app/components/ui/ArticleBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({ params }: Props) {
  // Await the params promise
  const { slug } = await params;
  
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <>
      {/* Dynamic banner */}
      <ArticleBanner
        title={article.title}
        subtitle={article.subtitle}
        image={article.banner}
      />

      <section className="py-24 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
        </div>
      </section>
    </>
  );
}