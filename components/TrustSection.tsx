import { Target, Megaphone, RefreshCw } from "lucide-react";

const ITEMS = [
  {
    icon: Target,
    title: "Reach the Right Audience",
    description:
      "Connect your business with people who are most likely to need your product or service.",
  },
  {
    icon: Megaphone,
    title: "Better Advertising",
    description:
      "Create clear, compelling campaigns designed around your business objectives.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "Monitor campaign performance and improve targeting, creative and strategy over time.",
  },
];

export default function TrustSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Marketing Built Around Your Goals
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-brand-50 p-3">
                <item.icon className="text-brand-600" size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
