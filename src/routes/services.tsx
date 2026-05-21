import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Target,
  RefreshCw,
  Users,
  ClipboardCheck,
  Landmark,
  Quote,
} from "lucide-react";
import { Eyebrow, PageHero } from "../components/site-chrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Executive Coaching & Advisory | W. R. Harbron, Ed.D." },
      {
        name: "description",
        content:
          "Executive coaching, organizational transformation, strategic planning, and board advisory engagements.",
      },
      { property: "og:title", content: "Services — Executive Coaching & Advisory" },
      {
        property: "og:description",
        content: "Engagements built around executive outcomes — clarity, accountability, impact.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Compass,
    title: "Executive Coaching & Advisory",
    body: "1:1 coaching for CEOs, executives, and senior leaders facing transition, scaling, or transformation challenges.",
  },
  {
    icon: Target,
    title: "Strategic Planning & Execution",
    body: "Frameworks that translate executive vision into measurable, accountable, multi-year delivery plans.",
  },
  {
    icon: RefreshCw,
    title: "Organizational Transformation",
    body: "Culture change, restructuring, and leadership alignment for complex multi-stakeholder organizations.",
  },
  {
    icon: Users,
    title: "Team Alignment & Facilitation",
    body: "Half-day and full-day leadership team facilitations that resolve friction and unlock collective performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Leadership Assessment & Development",
    body: "Strengths-based assessment, leadership pipelines, and talent development planning rooted in proven frameworks.",
  },
  {
    icon: Landmark,
    title: "Governance & Board Advisory",
    body: "Board effectiveness, governance frameworks, and advisory engagements for mission-driven institutions.",
  },
];

const engagements = ["Contract", "Project-Based", "Retainer", "Advisory"];

const investment = [
  { name: "Executive Coaching", price: "$300", unit: "per hour" },
  { name: "Half-Day Facilitation", price: "$1,000+", unit: "from" },
  { name: "Full-Day Facilitation", price: "$3,000", unit: "up to" },
  { name: "Leadership Programs", price: "Custom", unit: "negotiable" },
];

const testimonials = [
  {
    quote:
      "William helped our board reframe its strategic plan with rare clarity. Decisions that had stalled for months were resolved in weeks.",
    name: "Board Chair, Nonprofit",
  },
  {
    quote:
      "His coaching gave me the language and confidence to lead a major restructure. He balances challenge with empathy in a way few do.",
    name: "Executive Director, Education",
  },
  {
    quote:
      "A masterful facilitator. Our leadership team left aligned, energized, and accountable. The impact has carried through the year.",
    name: "COO, Mission-Driven Org",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Coaching & Consulting"
        title={
          <>
            Engagements built around{" "}
            <span className="italic text-gold">executive outcomes.</span>
          </>
        }
        intro="Whether stepping into a new role, scaling an organization, or leading transformation — every engagement is structured around clarity, accountability, and measurable progress."
      />

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement model */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-5">
            <Eyebrow>Engagement Model</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
              How we work together.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Availability is immediate. Engagement structure flexes to your strategic priorities
              and timeline.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-px bg-border">
              {engagements.map((e) => (
                <div
                  key={e}
                  className="bg-card p-8 text-center font-serif text-2xl text-primary"
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow>Investment</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">Consulting rates.</h2>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {investment.map((i) => (
            <div key={i.name} className="bg-card p-8">
              <div className="text-sm uppercase tracking-widest text-muted-foreground">
                {i.name}
              </div>
              <div className="mt-4 font-serif text-3xl text-primary">{i.price}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-gold">{i.unit}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow>Voices of Impact</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
              Trusted by leaders across sectors.
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border border-cream/15 bg-ink/40 p-8">
                <Quote className="text-gold" size={24} />
                <blockquote className="mt-5 font-serif text-xl italic leading-snug text-cream/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest text-cream/60">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center lg:px-10">
          <div>
            <Eyebrow>Start the Engagement</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Let's explore the right fit for your leadership challenge.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground transition hover:opacity-90"
          >
            Request an Introduction <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
