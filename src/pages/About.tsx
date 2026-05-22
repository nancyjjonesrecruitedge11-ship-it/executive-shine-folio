import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PageHero } from "../components/site-chrome";

const journey = [
  { period: "2022 — Present", role: "Founder & Executive Coach", org: "WRH Coaching & Consulting LLC · Dover, NH",
    bullets: ["Executive coaching and leadership advisory across education, nonprofit, and business sectors.","Design organizational development and culture transformation strategies.","Facilitate strategic planning and leadership alignment workshops.","Advise boards and executive teams on governance and performance."] },
  { period: "2001 — 2022", role: "Superintendent of Schools", org: "Dover School District (SAU 11) · Dover, NH",
    bullets: ["Directed all academic, operational, and financial functions of the district.","Led multi-year strategic planning and large-scale organizational transformation.","Managed executive leadership team, principals, and departmental directors.","Built leadership pipelines, mentoring professionals into senior roles."] },
  { period: "1990 — 2001", role: "Superintendent / Senior Leadership", org: "Various Districts · Wisconsin, Ohio, NH",
    bullets: ["Oversaw curriculum, instruction, and district-wide operations.","Implemented professional development systems and instructional improvement strategies.","Strengthened leadership capability across multiple institutions."] },
  { period: "1976 — 1990", role: "Principal & Early Career Leadership", org: "Elementary & Middle Schools · Wisconsin, Ohio",
    bullets: ["Led school operations, staff management, and instructional delivery.","Built foundational systems for team-based leadership and performance improvement."] },
];

const education = [
  { degree: "Doctor of Education (Ed.D.)", school: "Edgewood University, Madison, WI" },
  { degree: "Education Specialist Degree", school: "University of Wisconsin–Milwaukee" },
  { degree: "Master of Education", school: "Miami University, Oxford, OH" },
  { degree: "Bachelor of Science", school: "Miami University, Oxford, OH" },
];

const certifications = [
  "Working Genius Certified Facilitator",
  "John Maxwell Certified Coach",
  "Leadership Assessment & Strengths-Based Coaching",
  "Organizational Health & Culture Development",
  "Change Management & Strategic Communication",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Executive Profile"
        title={<>A career built on strategic clarity and <span className="italic text-gold">measurable transformation.</span></>}
        intro="Dr. Harbron has spent more than four decades at the intersection of executive leadership, organizational health, and strategic execution — partnering with boards, senior teams, and mission-driven institutions to deliver sustainable outcomes."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-4">
          <Eyebrow>Value Proposition</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">Public-sector leadership meets private advisory impact.</h2>
        </div>
        <div className="border-border md:col-span-8 md:border-l md:pl-12">
          <p className="text-lg leading-relaxed text-foreground/85">
            A highly accomplished executive leader combining <strong>strategic vision</strong>, <strong>operational expertise</strong>, and <strong>leadership excellence</strong> to deliver transformation, growth, and measurable outcomes.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            William brings a unique blend of public sector leadership and private consulting impact — making a strong fit for Director-level roles in aged care, business development, and complex organizational environments.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow>Career Journey</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">Four decades of executive leadership.</h2>
          </div>
          <div className="mt-16 space-y-12">
            {journey.map((j) => (
              <div key={j.period} className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-3">
                  <div className="text-xs uppercase tracking-[0.22em] text-gold">{j.period}</div>
                </div>
                <div className="border-l border-border pl-6 md:col-span-9 md:pl-10">
                  <h3 className="font-serif text-2xl text-primary">{j.role}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{j.org}</div>
                  <ul className="mt-5 space-y-2 text-base leading-relaxed text-foreground/85">
                    {j.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow>Academic Credentials</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">Education</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.degree} className="border border-border bg-card p-8">
              <div className="font-serif text-xl text-primary">{e.degree}</div>
              <div className="mt-2 text-sm text-muted-foreground">{e.school}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl">
          <Eyebrow>Professional Development</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">Certifications</h2>
        </div>
        <ul className="mt-10 grid gap-px bg-border md:grid-cols-2">
          {certifications.map((c) => (
            <li key={c} className="bg-card p-6 text-base text-foreground/85">
              <span className="text-gold">— </span>{c}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center lg:px-10">
          <h2 className="font-serif text-3xl md:text-4xl">Considering executive coaching or advisory engagement?</h2>
          <Link to="/services" className="inline-flex shrink-0 items-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground transition hover:opacity-90">
            View Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
