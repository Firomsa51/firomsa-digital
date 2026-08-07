"use client";

import { useState } from "react";
import { Mail, Linkedin, Facebook, Send, ExternalLink } from "lucide-react";

const CONTACT_EMAIL = "firomsaahmed51@gmail.com";
const TELEGRAM_URL = "https://t.me/Fira385508";
const LINKEDIN_URL = "https://www.linkedin.com/in/firomsa-ahmed-teha";
const FACEBOOK_URL = "https://web.facebook.com/firomsa.ahmed.501";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Inquiry from ${form.name || "Website Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\nMessage:\n${form.message}`
    );
    // Frontend-only submission: opens the visitor's email client.
    // No backend or database stores this data.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-y bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Let&apos;s Talk About Your Business
          </h2>
          <p className="mt-4 text-slate-600">
            Reach out directly, or send a message using the form and it will
            open in your email app.
          </p>

          <div className="mt-8 space-y-4">
            
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-brand-200"
            >
              <Mail className="text-brand-600" size={20} />
              <span className="text-sm font-medium text-slate-700">
                {CONTACT_EMAIL}
              </span>
            </a>
            
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-brand-200"
            >
              <Send className="text-brand-600" size={20} />
              <span className="text-sm font-medium text-slate-700">
                Telegram — @Fira385508
              </span>
              <ExternalLink className="ml-auto text-slate-400" size={16} />
            </a>
            
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-brand-200"
            >
              <Linkedin className="text-brand-600" size={20} />
              <span className="text-sm font-medium text-slate-700">
                LinkedIn Profile
              </span>
              <ExternalLink className="ml-auto text-slate-400" size={16} />
            </a>
            
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-brand-200"
            >
              <Facebook className="text-brand-600" size={20} />
              <span className="text-sm font-medium text-slate-700">
                Facebook Profile
              </span>
              <ExternalLink className="ml-auto text-slate-400" size={16} />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-100 bg-slate-50 p-7"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 focus-visible:border-brand-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 focus-visible:border-brand-500"
              />
            </div>
            <div>
              <label
                htmlFor="business"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Business
              </label>
              <input
                id="business"
                name="business"
                type="text"
                value={form.business}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 focus-visible:border-brand-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 focus-visible:border-brand-500"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Inquiry
              <Send size={16} />
            </button>
            <p className="text-center text-xs text-slate-400">
              This form opens your email app — no data is stored on a
              server.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
