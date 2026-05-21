import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-chrome";

export const Route = createFileRoute("/insights")({
  component: Insights,
});

const speaking = [
  {
    title: "Leading Through Sustained Transformation",
    venue: "Education Leadership Symposium",
    detail: "Keynote on guiding institutions through multi-year organizational change.",
  },
  {
    title: "Governance That Actually Governs",
    venue: "Nonprofit Board Forum",
    detail: "Workshop on board maturity, CEO oversight, and stakeholder accountability.",
  },
  {
    title: "Building Leadership Pipelines",
    venue: "Superintendents Association",
    detail: "Panel on developing the next generation of system-level executives.",
  },
];

const publications = [
  {
    title: "The Discipline of Aligned Leadership",
    type: "Article",
    detail:
      "On why strategic plans fail in execution — and the leadership behaviors that fix it.",
  },
  {
    title: "Culture Is the Strategy",
    type: "Essay",
    detail:
      "Reflections from two decades leading culture transformation in complex public institutions.",
  },
  {
    title: "Coaching the C-Suite",
    type: "Field notes",
    detail:
      "Patterns I see most often in senior leaders navigating ambiguity, growth, and succession.",
  },
];

const capabilities = [
  "Executive Coaching & Advisory Services",
  "Business Development & Strategic Growth Alignment",
  "Organizational Transformation & Culture Change",
  "Leadership Assessment & Development Planning",
  "Strategic Planning & Execution Frameworks",
  "Team Alignment & Facilitation",
  "Governance & Board Advisory",
];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights · Speaking · Publications"
        title="Sharing what five decades of leadership has taught me."
        intro="Selected speaking engagements, writing, and consulting capabilities for boards, conference organizers, and partner institutions."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Speaking</div>
            <h2 className="mt-3 font-serif text-3xl text-navy">Recent engagements</h2>
            <ul className="mt-8 space-y-8">
              {speaking.map((s) => (
                <li key={s.title} className="border-l-2 border-gold pl-5">
                  <h3 className="font-serif text-xl text-navy">{s.title}</h3>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    {s.venue}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{s.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Publications</div>
            <h2 className="mt-3 font-serif text-3xl text-navy">Selected writing</h2>
            <ul className="mt-8 space-y-8">
              {publications.map((p) => (
                <li key={p.title} className="border-l-2 border-gold pl-5">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    {p.type}
                  </div>
                  <h3 className="mt-1 font-serif text-xl text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.22em] text-gold">
            Consulting & Leadership Capabilities
          </div>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl">
            The full range of work I bring to executive teams and boards.
          </h2>
          <ul className="mt-10 grid gap-px bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <li
                key={c}
                className="bg-navy px-6 py-5 text-base text-cream/90"
              >
                <span className="text-gold">— </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
