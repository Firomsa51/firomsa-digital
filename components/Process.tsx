import { Search, Compass, Rocket, Settings2 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "Understand your business, audience, offer and goals.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategize",
    description: "Build a practical digital marketing and advertising strategy.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch",
    description: "Set up campaigns, audiences and creative assets.",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Optimize",
    description: "Monitor performance and continuously improve the campaign.",
  },
];

export default function Process() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How I Work</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            A Simple, Focused Process
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-slate-100 bg-slate-50 p-7"
            >
              <span className="text-sm font-bold text-brand-300">
                {step.number}
              </span>
              <div className="mt-3 inline-flex rounded-xl bg-white p-3 shadow-sm">
                <step.icon className="text-brand-600" size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
