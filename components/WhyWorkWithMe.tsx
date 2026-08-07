import {
  Target,
  MessageCircle,
  ClipboardList,
  TrendingUp,
  FileText,
  Heart,
} from "lucide-react";

const REASONS = [
  { icon: Target, title: "Audience-Focused Strategy" },
  { icon: MessageCircle, title: "Clear Communication" },
  { icon: ClipboardList, title: "Practical Campaign Planning" },
  { icon: TrendingUp, title: "Continuous Optimization" },
  { icon: FileText, title: "Transparent Reporting" },
  { icon: Heart, title: "Client-Focused Approach" },
];

export default function WhyWorkWithMe() {
  return (
    <section className="section-y bg-slate-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Why Work With Me
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                <reason.icon className="text-brand-600" size={20} />
              </div>
              <p className="font-semibold text-slate-800">{reason.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
