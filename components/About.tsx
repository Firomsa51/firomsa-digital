import { Target, MessageSquare, LineChart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-y bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">About Firomsa</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Focused on Real Results, Not Buzzwords
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            I&apos;m Firomsa Ahmed, a Digital Marketing Specialist focused on
            helping businesses grow online through Meta advertising,
            audience targeting, lead generation and social media marketing.
          </p>
          <p className="mt-4 text-slate-600">
            I approach every project with a strategy-first mindset —
            understanding your business and audience before building
            campaigns designed to reach the right people.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-xl font-bold text-white">
                FA
              </div>
              <div>
                <p className="font-bold text-slate-900">Firomsa Ahmed</p>
                <p className="text-sm text-slate-500">
                  Digital Marketing Specialist
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3">
                <Target className="mt-0.5 shrink-0 text-brand-600" size={18} />
                <p className="text-sm text-slate-600">
                  Strategy-first approach to every campaign
                </p>
              </div>
              <div className="flex items-start gap-3">
                <LineChart
                  className="mt-0.5 shrink-0 text-brand-600"
                  size={18}
                />
                <p className="text-sm text-slate-600">
                  Continuous performance monitoring and optimization
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare
                  className="mt-0.5 shrink-0 text-brand-600"
                  size={18}
                />
                <p className="text-sm text-slate-600">
                  Clear, honest communication throughout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
