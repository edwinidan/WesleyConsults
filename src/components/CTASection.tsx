import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="section-space">
      <div className="shell-container">
        <div className="overflow-hidden rounded-[2rem] border border-ink/12 bg-[linear-gradient(140deg,rgba(17,17,17,0.98),rgba(26,26,26,0.96)_44%,rgba(216,207,194,0.18))] p-8 shadow-[0_28px_96px_rgba(17,17,17,0.18)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="space-y-5">
              <span className="eyebrow text-canvas/64">Start a project</span>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-canvas md:text-5xl">
                If the site no longer reflects the quality of the business, it is time to rebuild the signal.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-canvas/70 md:text-lg">
                Wesley Consults helps ambitious teams tighten the story, redesign the experience, and launch websites that feel more credible from the first screen.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link className="button-primary-inverse w-full sm:w-auto" to="/contact">
                Discuss your project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link className="button-secondary-inverse w-full sm:w-auto" to="/work">
                Explore the work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
