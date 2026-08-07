import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.25),_transparent_60%)]"
      />
      <div className="container-x relative py-20 text-center sm:py-24">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Grow Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell me about your business, your goals, and what you want to
          achieve online.
        </p>
        <a href="#contact" className="btn-primary-dark mt-8">
          Let&apos;s Work Together
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
