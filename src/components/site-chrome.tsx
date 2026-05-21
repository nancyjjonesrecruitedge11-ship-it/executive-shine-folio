import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy font-serif text-base text-gold">
            WH
          </span>
          <div className="leading-tight">
            <div className="font-serif text-lg text-navy">William R. Harbron, Ed.D.</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Executive Leadership · Coaching · Advisory
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-navy" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-navy" }}
              className="text-sm font-medium tracking-wide transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-sm border border-navy bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-navy/90"
          >
            Engage
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-navy text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl text-cream">William R. Harbron, Ed.D.</div>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Executive coach and organizational strategist serving leaders across education,
            nonprofit, aged care, and mission-driven sectors.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-gold">Contact</div>
          <p className="text-sm">+1 920-205-8799</p>
          <p className="text-sm">wrharbron@outlook.com</p>
          <p className="mt-1 text-sm text-cream/60">Dover, New Hampshire, USA</p>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-gold">Navigate</div>
          <ul className="space-y-1.5 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} WRH Coaching & Consulting LLC. All rights reserved.
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-xs uppercase tracking-[0.22em] text-gold">{eyebrow}</div>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl text-navy md:text-6xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
    </section>
  );
}
