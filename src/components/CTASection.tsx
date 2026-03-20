import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="section-space">
      <div className="shell-container">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,255,186,0.12),rgba(10,23,32,0.9)_36%,rgba(9,19,28,0.96))] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.25)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="space-y-5">
              <span className="eyebrow">Start a project</span>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                If the site no longer reflects the quality of the business, it is time to rebuild the signal.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-mist md:text-lg">
                Wesley Consults helps ambitious teams tighten the story, redesign the experience, and launch websites that feel more credible from the first screen.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link className="button-primary w-full sm:w-auto" to="/contact">
                Discuss your project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link className="button-secondary w-full sm:w-auto" to="/work">
                Explore the work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
