import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-chrome";

export const Route = createFileRoute("/about")({
  component: About,
});

const journey = [
  {
    period: "2022 — Present",
    title: "Founder & Executive Coach",
    org: "WRH Coaching & Consulting LLC · Dover, NH",
    points: [
      "Executive coaching and leadership advisory to senior leaders across education, nonprofit, and business sectors.",
      "Design and implementation of organizational development and culture transformation strategies.",
      "Board advisory on governance, performance, and leadership effectiveness.",
      "Improved executive decision-making and clarity across multiple client organizations.",
    ],
  },
  {
    period: "2001 — 2022",
    title: "Superintendent of Schools",
    org: "Dover School District (SAU 11) · Dover, NH",
    points: [
      "Directed all academic, operational, and financial functions of the district for 21 years.",
      "Led large-scale organizational transformation improving communication and operational efficiency.",
      "Delivered multi-year strategic plans aligned with performance, growth, and sustainability.",
      "Built leadership pipelines, mentoring professionals into senior leadership and executive roles.",
    ],
  },
  {
    period: "1999 — 2005",
    title: "Superintendent / Senior Leadership Roles",
    org: "Various School Districts · WI, OH, NH",
    points: [
      "Oversaw district-wide operations including curriculum, instruction, and leadership development.",
      "Implemented professional development systems improving workforce performance.",
      "Designed instructional improvement strategies that enhanced organizational performance.",
    ],
  },
  {
    period: "1976 — 1990",
    title: "Principal & Early Career Leadership",
    org: "Elementary and Middle Schools · WI, OH",
    points: [
      "Led school operations, staff management, and instructional delivery.",
      "Developed team-based leadership models and student-centered environments.",
      "Established strong leadership and operational foundations early in career.",
    ],
  },
];

const education = [
  { school: "Edgewood University, Madison, WI", degree: "Doctor of Education (Ed.D.)" },
  { school: "University of Wisconsin–Milwaukee", degree: "Education Specialist Degree" },
  { school: "Miami University, Oxford, OH", degree: "Master of Education" },
  { school: "Miami University, Oxford, OH", degree: "Bachelor of Science" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Executive Profile"
        title="A career built on transforming organizations and the leaders within them."
        intro="Strategic and results-driven executive leader with over 47 years of experience driving organizational performance, leadership transformation, and operational excellence across education, nonprofit, and advisory sectors."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Career Journey</div>
            <h2 className="mt-3 font-serif text-3xl text-navy">Five decades of impact.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From classroom leadership to executive boardrooms, each chapter has reinforced a
              single conviction: organizations rise on the quality of their leaders.
            </p>
          </div>
          <ol className="relative space-y-12 border-l border-border pl-8">
            {journey.map((j) => (
              <li key={j.period} className="relative">
                <span className="absolute -left-[37px] top-2 flex h-4 w-4 items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-background" />
                </span>
                <div className="text-xs uppercase tracking-[0.18em] text-gold">{j.period}</div>
                <h3 className="mt-1 font-serif text-2xl text-navy">{j.title}</h3>
                <div className="text-sm text-muted-foreground">{j.org}</div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/85">
                  {j.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-px w-3 flex-none bg-gold" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Education</div>
            <h2 className="mt-3 font-serif text-3xl text-navy">Academic foundation</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {education.map((e) => (
                <li key={e.degree} className="flex items-center justify-between py-4">
                  <div>
                    <div className="font-medium text-navy">{e.degree}</div>
                    <div className="text-sm text-muted-foreground">{e.school}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Philosophy</div>
            <h2 className="mt-3 font-serif text-3xl text-navy">How I lead</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                I believe transformation begins with clarity — clarity of strategy, of culture, and
                of the leadership behaviors that move an organization forward.
              </p>
              <p>
                My work pairs strategic frameworks with the unglamorous discipline of execution.
                Boards get governance maturity. Executives get sharper decisions. Teams get the
                alignment they were missing.
              </p>
              <p className="border-l-2 border-gold pl-5 font-serif text-xl text-navy">
                "Sustainable impact is built one leader, one decision, one aligned team at a time."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
