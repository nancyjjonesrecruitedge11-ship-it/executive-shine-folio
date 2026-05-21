import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const stats = [
  { value: "47+", label: "Years of executive leadership" },
  { value: "21", label: "Years as Superintendent, Dover NH" },
  { value: "100s", label: "Leaders coached & developed" },
  { value: "Ed.D.", label: "Doctor of Education" },
];

const competencies = [
  "Executive Leadership & Governance",
  "Organizational Transformation",
  "Leadership Coaching & Development",
  "Strategic Planning & Execution",
  "Change Management & Culture",
  "Board Advisory & Facilitation",
  "Stakeholder Engagement",
  "Operational Excellence",
];

const testimonials = [
  {
    quote:
      "William's coaching gave our executive team the clarity and alignment we'd been chasing for years. He combines warmth with absolute strategic rigor.",
    name: "Senior Nonprofit Executive",
    role: "Board Chair, New England",
  },
  {
    quote:
      "A rare leader who can sit with a board on Monday and a frontline team on Tuesday and elevate both. His transformation work is the real deal.",
    name: "District Leadership Team",
    role: "Public Sector",
  },
  {
    quote:
      "Twenty-one years of measurable impact as Superintendent speaks for itself. William builds leaders who outlast him.",
    name: "Education Sector Colleague",
    role: "Former District Director",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-navy text-cream">
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:py-32">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">
              Executive Coach · Strategist · Advisor
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-cream md:text-7xl">
              Strategic leadership for organizations that refuse to stand still.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Forty-seven years guiding executive teams, boards, and mission-driven institutions
              through transformation, growth, and governance — across education, nonprofit, aged
              care, and advisory sectors.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-navy transition hover:bg-gold/90"
              >
                Request an introduction
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-sm border border-cream/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-cream transition hover:border-gold hover:text-gold"
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-sm border border-gold/30 bg-gradient-to-br from-navy via-navy to-[oklch(0.28_0.06_255)] p-10">
              <div className="flex h-full flex-col justify-between">
                <div className="font-serif text-7xl text-gold/90">WH</div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold">In brief</div>
                  <p className="mt-2 font-serif text-2xl leading-snug text-cream">
                    "Leadership is the discipline of aligning people, purpose, and performance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden bg-border px-0 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-10 text-center">
              <div className="font-serif text-4xl text-navy md:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Value Proposition</div>
            <h2 className="mt-4 font-serif text-4xl text-navy">
              Public-sector gravitas. Private-sector execution.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              A highly accomplished executive leader combining{" "}
              <strong className="text-navy">strategic vision</strong>,{" "}
              <strong className="text-navy">operational expertise</strong>, and{" "}
              <strong className="text-navy">leadership excellence</strong> to deliver
              transformation, growth, and measurable outcomes.
            </p>
            <p>
              I bring a unique blend of public sector leadership and private consulting impact — a
              strong fit for Director-level roles in aged care, business development, and complex
              organizational environments requiring transformation and strategic alignment.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {competencies.map((c) => (
            <div
              key={c}
              className="bg-background px-5 py-6 text-sm font-medium leading-snug text-navy"
            >
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Testimonials</div>
          <h2 className="mt-4 font-serif text-4xl text-navy">What partners and boards say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-sm border border-border bg-background p-8"
              >
                <blockquote className="font-serif text-xl leading-snug text-navy">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="text-xs uppercase tracking-[0.22em] text-gold">Engage</div>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl text-navy">
          Available for advisory, coaching, and Director-level executive roles.
        </h2>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center rounded-sm bg-navy px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-navy/90"
        >
          Begin the conversation
        </Link>
      </section>
    </>
  );
}
