import { ArrowRight, BarChart3, Users, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.25),_transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(79,70,229,0.2),_transparent_55%)]"
      />

      <div className="container-x relative grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <p className="eyebrow text-brand-300">Digital Marketing Specialist</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Grow Your Business With Smarter Digital Marketing
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            I help businesses reach the right audience, generate quality
            leads, and grow their online presence through strategic digital
            marketing and Meta advertising.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Work With Me
              <ArrowRight size={18} />
            </a>
            
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-semibold text-white">
                Campaign Overview
              </span>
              <span className="badge-sample bg-white/10 text-brand-200 ring-white/20">
                Concept View
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/5 p-4">
                <Users className="text-brand-300" size={20} />
                <p className="mt-3 text-xs font-medium text-slate-300">
                  Audience
                </p>
                <p className="text-sm font-semibold text-white">Targeted</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <BarChart3 className="text-brand-300" size={20} />
                <p className="mt-3 text-xs font-medium text-slate-300">
                  Ad Spend
                </p>
                <p className="text-sm font-semibold text-white">
                  Optimized
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <TrendingUp className="text-brand-300" size={20} />
                <p className="mt-3 text-xs font-medium text-slate-300">
                  Strategy
                </p>
                <p className="text-sm font-semibold text-white">Iterative</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-4/5 rounded-full bg-brand-400" />
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-3/5 rounded-full bg-brand-500" />
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-2/3 rounded-full bg-brand-300" />
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Illustrative campaign structure — not live client data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
