import Link from "next/link";
import { articles } from "@/lib/articles";
import ArticleBanner from "../components/ui/ArticleBanner";

export default function ArticlesPage() {
  return (
    <>
      <ArticleBanner
        title="Articles & Insights"
        subtitle="Stay up to date with the latest industry insights and expert opinions"
        image="/articles/ai-detail.jpg"
      />

      <section className="py-24 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={article.banner}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {article.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
