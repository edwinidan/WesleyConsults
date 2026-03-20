import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { InsightArticle } from '../content/siteContent';

interface InsightCardProps {
  article: InsightArticle;
}

export default function InsightCard({ article }: InsightCardProps) {
  return (
    <Link
      className="group flex h-full flex-col justify-between rounded-[1.6rem] border border-ink/10 bg-white/46 p-6 transition duration-300 hover:-translate-y-1 hover:border-ink/18 hover:bg-white/62 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/18"
      to={article.href}
    >
      <div className="space-y-5">
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-muted/90">
          <span>{article.category}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
            {article.title}
          </h3>
          <p className="text-sm leading-6 text-muted">{article.excerpt}</p>
        </div>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
        Read article <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
