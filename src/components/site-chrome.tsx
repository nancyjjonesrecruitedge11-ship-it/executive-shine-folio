import { Link, NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/services", label: "Services", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="font-serif text-2xl tracking-tight text-primary">W. R. Harbron</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Ed.D.
          </span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground/75 hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-ink"
          >
            Book a Consultation
          </Link>
        </nav>
        <button
          className="text-primary md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm font-medium ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-cream/85">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <div className="font-serif text-2xl text-cream">William R. Harbron, Ed.D.</div>
          <p className="mt-3 text-sm leading-relaxed text-cream/65">
            Executive Coach & Organizational Transformation Advisor. Four decades of leadership
            across education, nonprofit, and advisory sectors.
          </p>
          <div className="mt-6 h-px w-12 bg-gold" />
        </div>
        <div>
          <div className="eyebrow">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow">Direct Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-gold" /> +1 920-205-8799
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-gold" /> wrharbron@outlook.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={14} className="text-gold" /> Dover, New Hampshire
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/55 md:flex-row lg:px-10">
          <div>© {new Date().getFullYear()} WRH Coaching & Consulting LLC. All rights reserved.</div>
          <div className="tracking-widest uppercase">Executive Leadership · Coaching · Advisory</div>
        </div>
      </div>
    </footer>
  );
}

export function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`eyebrow ${center ? "justify-center" : ""}`}>
      <span className="gold-rule" />
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28 lg:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-primary md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
    </section>
  );
}
