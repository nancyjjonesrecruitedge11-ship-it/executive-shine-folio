import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, TrendingUp, Users, Quote } from "lucide-react";
import { Eyebrow } from "../components/site-chrome";
import portrait from "@/assets/harbron-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "William R. Harbron, Ed.D. — Executive Coaching & Advisory" },
      {
        name: "description",
        content:
          "Four decades guiding executive teams, boards, and complex organizations through change, growth, and cultural transformation.",
      },
      { property: "og:title", content: "William R. Harbron, Ed.D. — Executive Coaching & Advisory" },
      {
        property: "og:description",
        content: "Strategic leadership, transformed at the top. Executive coaching and advisory.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "47+", label: "Years of Leadership" },
  { value: "21", label: "Years as Superintendent" },
  { value: "Ed.D.", label: "Doctorate in Education" },
  { value: "100+", label: "Leaders Coached" },
];

const competencies = [
  {
    icon: Award,
    title: "Executive Leadership & Governance",
    body: "Board advisory, governance frameworks, and senior leadership alignment across complex multi-stakeholder environments.",
  },
  {
    icon: TrendingUp,
    title: "Strategy & Transformation",
    body: "Strategic planning, organizational transformation, and culture change initiatives that produce measurable, sustainable outcomes.",
  },
  {
    icon: Users,
    title: "Coaching & Talent Development",
    body: "Leadership coaching, talent pipelines, and team alignment that strengthen accountability and executive performance.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-ink/70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:py-36 lg:grid-cols-12 lg:gap-16 lg:px-10">
          <div className="lg:col-span-7">
            <Eyebrow>Executive Coaching & Advisory</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-cream md:text-7xl">
              Strategic leadership,
              <br />
              <span className="italic text-gold">transformed at the top.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-cream/75 md:text-xl">
              Four decades guiding executive teams, boards, and complex organizations through
              change, growth, and cultural transformation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground transition hover:opacity-90"
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition hover:bg-cream/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full bg-gradient-to-br from-gold/40 via-gold/10 to-transparent blur-2xl"
              />
              <div
                aria-hidden
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold/70 to-gold/20"
              />
              <img
                src={portrait}
                alt="Dr. William R. Harbron, Ed.D. — Executive Coach & Leadership Advisor"
                width={520}
                height={520}
                className="relative h-64 w-64 rounded-full object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-cream/20 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]"
              />
            </div>
          </div>
        </div>
        <div className="relative border-t border-cream/10 bg-ink/60 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4 lg:px-10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-2 py-8 text-center ${i < stats.length - 1 ? "border-r border-cream/10" : ""}`}
              >
                <div className="font-serif text-3xl text-gold md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-cream/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32 lg:px-10">
        <div className="md:col-span-4">
          <Eyebrow>Profile</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
            A measured voice in executive leadership.
          </h2>
        </div>
        <div className="border-border md:col-span-8 md:border-l md:pl-12">
          <p className="text-lg leading-relaxed text-foreground/85">
            Dr. William R. Harbron is a strategic and results-driven executive leader with over{" "}
            <strong>47 years of experience</strong> driving organizational performance, leadership
            transformation, and large-scale operational excellence across education, nonprofit, and
            advisory sectors.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            As Founder of WRH Coaching & Consulting LLC and former 21-year Superintendent of the
            Dover School District, William partners with senior leaders, executive boards, and
            cross-functional teams to align business strategy with organizational culture —
            delivering sustainable growth and measurable impact.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-medium text-primary transition-all hover:gap-3"
          >
            Read the full journey <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Competencies */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Core Competencies</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
              Where executive impact is made.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {competencies.map(({ icon: Icon, title, body }) => (
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
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-10">
        <Quote className="mx-auto text-gold" size={32} />
        <blockquote className="mt-6 font-serif text-3xl italic leading-snug text-primary md:text-4xl">
          “William's counsel reshaped how our executive team approached strategy and culture. Rare
          clarity, paired with four decades of hard-earned wisdom.”
        </blockquote>
        <div className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">
          Senior Leader — Nonprofit Sector
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center md:py-24 lg:px-10">
          <div>
            <Eyebrow>Begin the Conversation</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Ready to bring executive clarity to your next chapter?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground transition hover:opacity-90"
          >
            Schedule an Introduction <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
