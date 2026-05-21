import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "../components/site-chrome";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Engage"
        title="Begin the conversation."
        intro="For coaching engagements, advisory inquiries, speaking invitations, or Director-level opportunities, send a brief note below or reach out directly."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Direct Contact</div>
            <h2 className="mt-3 font-serif text-3xl text-navy">William R. Harbron, Ed.D.</h2>
            <div className="mt-2 text-sm text-muted-foreground">
              Founder · WRH Coaching & Consulting LLC
            </div>

            <dl className="mt-8 space-y-5 text-base">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-gold">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:wrharbron@outlook.com"
                    className="text-navy hover:text-gold"
                  >
                    wrharbron@outlook.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-gold">Phone</dt>
                <dd className="mt-1">
                  <a href="tel:+19202058799" className="text-navy hover:text-gold">
                    +1 920-205-8799
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-gold">Location</dt>
                <dd className="mt-1 text-navy">Dover, New Hampshire, United States</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-gold">Availability</dt>
                <dd className="mt-1 text-navy">
                  Immediate · Contract, Project-based, Retainer, or Advisory
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-sm border border-border bg-card p-8"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="text-xs uppercase tracking-[0.22em] text-gold">Received</div>
                <h3 className="mt-3 font-serif text-3xl text-navy">Thank you.</h3>
                <p className="mt-3 text-muted-foreground">
                  Your message has been noted. You'll receive a personal response within two
                  business days.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-navy">Send a message</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A brief note about your organization and what you're working through is enough to
                  start.
                </p>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Organization" name="org" />
                  <Field label="Email" type="email" name="email" required />
                  <Field label="Phone" name="phone" />
                </div>

                <div className="mt-5">
                  <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Inquiry type
                  </label>
                  <select
                    name="type"
                    className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none"
                  >
                    <option>Executive Coaching</option>
                    <option>Organizational Transformation</option>
                    <option>Board / Governance Advisory</option>
                    <option>Speaking Engagement</option>
                    <option>Director-level Role Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-navy/90"
                >
                  Send message
                </button>
              </>
            )}
          </form>
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
      <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}
