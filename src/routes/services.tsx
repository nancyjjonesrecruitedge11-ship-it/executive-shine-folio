import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site-chrome";

export const Route = createFileRoute("/services")({
  component: Services,
});

const services = [
  {
    name: "Executive Coaching",
    rate: "$300 / hour",
    summary:
      "One-to-one coaching for senior leaders navigating role transitions, complex stakeholder environments, or accelerated growth mandates.",
    points: [
      "Leadership clarity & decision-making frameworks",
      "Executive presence and communication strategy",
      "Stakeholder management & boardroom influence",
      "Personal performance and resilience",
    ],
  },
  {
    name: "Organizational Transformation",
    rate: "Project / Retainer",
    summary:
      "End-to-end advisory for boards and executive teams leading restructuring, culture change, or operational repositioning.",
    points: [
      "Diagnostic, strategy, and implementation roadmap",
      "Culture & change management programs",
      "Leadership pipeline and succession design",
      "Performance and accountability systems",
    ],
  },
  {
    name: "Facilitation & Workshops",
    rate: "$1,000 – $3,000 per session",
    summary:
      "Half-day or full-day facilitation for executive offsites, strategy sessions, and team alignment workshops.",
    points: [
      "Strategic planning offsites",
      "Executive team alignment & conflict resolution",
      "Working Genius team workshops",
      "Board governance retreats",
    ],
  },
  {
    name: "Board & Governance Advisory",
    rate: "Advisory / Retainer",
    summary:
      "Trusted counsel to boards, founders, and CEOs on governance maturity, stakeholder engagement, and strategic oversight.",
    points: [
      "Board effectiveness reviews",
      "CEO and executive evaluation frameworks",
      "Multi-stakeholder facilitation",
      "Crisis and reputation guidance",
    ],
  },
];

const certifications = [
  "Working Genius Certified Facilitator",
  "John Maxwell Certified Coach",
  "Leadership Assessment & Strengths-Based Coaching Certification",
  "Organizational Health & Culture Development Training",
  "Change Management & Strategic Communication Programs",
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Coaching & Consulting"
        title="Engagements designed for executives, boards, and mission-driven organizations."
        intro="Every engagement begins with a diagnostic conversation and is shaped to the leader's mandate. Below are the most common shapes the work takes."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.name}
              className="flex flex-col rounded-sm border border-border bg-card p-8 transition hover:border-gold"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                <h2 className="font-serif text-2xl text-navy">{s.name}</h2>
                <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  {s.rate}
                </span>
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">{s.summary}</p>
              <ul className="mt-6 space-y-2.5 text-sm text-foreground/85">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-px w-3 flex-none bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Engagement Model</div>
            <h2 className="mt-3 font-serif text-3xl text-navy">How we'll work together</h2>
            <ul className="mt-6 space-y-4 text-base text-foreground/85">
              <li>
                <strong className="text-navy">Availability:</strong> Immediate.
              </li>
              <li>
                <strong className="text-navy">Engagement types:</strong> Contract · Project-based ·
                Retainer · Board Advisory.
              </li>
              <li>
                <strong className="text-navy">Format:</strong> In-person or virtual, structured
                across a defined scope with clearly stated outcomes.
              </li>
              <li>
                <strong className="text-navy">First step:</strong> A complimentary discovery
                conversation to define fit, scope, and expected results.
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-sm bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-navy/90"
            >
              Schedule a discovery call
            </Link>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">
              Certifications & Credentials
            </div>
            <h2 className="mt-3 font-serif text-3xl text-navy">Trained, certified, proven</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {certifications.map((c) => (
                <li key={c} className="py-4 text-base text-navy">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
