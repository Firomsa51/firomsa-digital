import { ShoppingBag, UtensilsCrossed, Dumbbell } from "lucide-react";

const PROJECTS = [
  {
    icon: ShoppingBag,
    title: "Urban Style",
    industry: "Fashion / Clothing",
    objective: "Sales",
    location: "Ethiopia",
    audience: "Age 18–35 · All genders",
    interests: "Fashion, Clothing, Online Shopping",
    cta: "Shop Now",
    primaryText:
      "Upgrade your style with our latest collection. Discover quality fashion at affordable prices and find your perfect look today.",
    headline: "New Fashion Collection",
  },
  {
    icon: UtensilsCrossed,
    title: "Local Restaurant",
    industry: "Restaurant",
    objective: "Leads",
    location: "Addis Ababa",
    audience: "Local customers",
    interests: "Dining, Local Food",
    cta: "Send Message",
    primaryText:
      "Looking for a great meal nearby? Discover delicious food and connect with us today.",
    headline: "Discover Your Next Favorite Meal",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    industry: "Fitness",
    objective: "Leads",
    location: "Addis Ababa",
    audience: "Age 18–45 · All genders",
    interests: "Fitness, Gym, Healthy Lifestyle",
    cta: "Book Now",
    primaryText:
      "Ready to become stronger and healthier? Start your fitness journey with a plan built around your goals.",
    headline: "Start Your Fitness Journey",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="section-y bg-slate-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Selected Campaign Concepts
          </h2>
          <p className="mt-4 text-slate-600">
            Sample campaigns created to demonstrate my digital marketing
            strategy, audience targeting and advertising skills.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex rounded-xl bg-brand-50 p-3">
                  <project.icon className="text-brand-600" size={22} />
                </div>
                <span className="badge-sample">Sample / Practice</span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500">{project.industry}</p>

              <dl className="mt-5 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between gap-3">
                  <dt className="font-medium text-slate-500">Objective</dt>
                  <dd className="text-right">{project.objective}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="font-medium text-slate-500">Location</dt>
                  <dd className="text-right">{project.location}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="font-medium text-slate-500">Audience</dt>
                  <dd className="text-right">{project.audience}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="font-medium text-slate-500">Interests</dt>
                  <dd className="text-right">{project.interests}</dd>
                </div>
              </dl>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Sample Ad Copy
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  {project.headline}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {project.primaryText}
                </p>
                <span className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white">
                  {project.cta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
