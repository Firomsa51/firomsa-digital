import {
  Megaphone,
  Users,
  Target,
  BarChart3,
  PenTool,
  Share2,
} from "lucide-react";

const SERVICES = [
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    description:
      "Plan, set up and manage Facebook and Instagram advertising campaigns based on your business goals.",
  },
  {
    icon: Target,
    title: "Audience Targeting",
    description:
      "Identify and reach relevant audiences using location, demographics, interests and campaign data.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Create campaigns designed to turn online attention into qualified potential customers.",
  },
  {
    icon: BarChart3,
    title: "Ads Optimization",
    description:
      "Monitor campaign performance and continuously improve targeting, creative and strategy.",
  },
  {
    icon: PenTool,
    title: "Ad Copywriting",
    description:
      "Create clear and persuasive advertising messages that encourage people to take action.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Help businesses strengthen their online presence through strategic social media content and campaigns.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-y bg-slate-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What I Offer</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Digital Marketing Services
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-brand-50 p-3 transition group-hover:bg-brand-600">
                <service.icon
                  className="text-brand-600 transition group-hover:text-white"
                  size={22}
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
