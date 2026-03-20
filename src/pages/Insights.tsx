import CTASection from '../components/CTASection';
import InsightCard from '../components/InsightCard';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { insights } from '../content/siteContent';

export default function Insights() {
  return (
    <Layout>
      <section className="section-space pb-12 pt-10 md:pt-14">
        <div className="shell-container">
          <SectionHeading
            description="A placeholder editorial layer for the redesign, structured to support future publishing around strategy, websites, commerce, SEO, and practical AI implementation."
            eyebrow="Insights"
            title="A sharper content layer for the thinking behind the work."
          />
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="shell-container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((article) => (
              <div key={article.id}>
                <InsightCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
