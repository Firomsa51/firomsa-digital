const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="container-x flex flex-col items-center gap-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-lg font-extrabold text-white">
            Firomsa <span className="text-brand-400">Digital</span>
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Digital Marketing | Meta Ads | Social Media Marketing
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-6"
        >
          {NAV_LINKS.map((link) => (
            
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © 2026 Firomsa Digital. All rights reserved.
      </div>
    </footer>
  );
}
