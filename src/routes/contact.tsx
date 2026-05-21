import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Eyebrow, PageHero } from "../components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — William R. Harbron, Ed.D." },
      {
        name: "description",
        content:
          "Begin a confidential conversation about executive coaching, advisory, or facilitation engagements.",
      },
      { property: "og:title", content: "Contact — William R. Harbron, Ed.D." },
      {
        property: "og:description",
        content: "Reach out about coaching, advisory, or facilitation engagements.",
      },
    ],
  }),
  component: Contact,
});

const engagementTypes = [
  "Executive Coaching",
  "Strategic Planning",
  "Organizational Transformation",
  "Board Advisory",
  "Facilitation / Workshop",
  "Other",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Begin a <span className="italic text-gold">confidential conversation.</span>
          </>
        }
        intro="Reach out to discuss executive coaching, advisory, or facilitation engagements. Every inquiry receives a personal response within two business days."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* Direct contact */}
          <div>
            <Eyebrow>Direct Line</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-primary">William R. Harbron, Ed.D.</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Founder · WRH Coaching & Consulting LLC
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="mt-1 text-gold" size={18} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Phone
                  </div>
                  <a href="tel:+19202058799" className="font-serif text-xl text-primary">
                    +1 920-205-8799
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-1 text-gold" size={18} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </div>
                  <a
                    href="mailto:wrharbron@outlook.com"
                    className="font-serif text-xl text-primary"
                  >
                    wrharbron@outlook.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 text-gold" size={18} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Based In
                  </div>
                  <div className="font-serif text-xl text-primary">Dover, New Hampshire</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-1 text-gold" size={18} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Availability
                  </div>
                  <div className="font-serif text-xl text-primary">
                    Immediate · Contract · Retainer · Advisory
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="border border-border bg-card p-8 md:p-12">
            <Eyebrow>Request a consultation</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-primary">
              Share a brief overview and the type of engagement you have in mind.
            </h2>

            {submitted ? (
              <div className="mt-10 border border-gold/40 bg-gold/10 p-8">
                <h3 className="font-serif text-2xl text-primary">Thank you.</h3>
                <p className="mt-3 text-base text-muted-foreground">
                  Your message has been received. William will respond personally within two
                  business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-10 space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Full Name *" name="name" required />
                  <Field label="Email *" name="email" type="email" required />
                  <Field label="Organization" name="organization" />
                  <Field label="Role / Title" name="role" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    Engagement Type
                  </label>
                  <select
                    name="engagement"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-base text-foreground focus:border-gold focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an engagement type
                    </option>
                    {engagementTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-base text-foreground focus:border-gold focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-ink"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-border bg-background px-4 py-3 text-base text-foreground focus:border-gold focus:outline-none"
      />
    </div>
  );
}
