import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const roles = [
  {
    title: "Emergency Medical Officer",
    org: "The Barakah General Hospital Ltd, Dhaka",
    period: "May 2022 — Present",
    points: [
      "Assess and manage acute and life-threatening presentations in a busy emergency department.",
      "Perform initial evaluation, resuscitation, stabilisation and emergency procedures.",
      "Coordinate with senior physicians and multidisciplinary teams to deliver timely patient care.",
    ],
  },
  {
    title: "Indoor Medical Officer — Department of Medicine",
    org: "BIHS General Hospital (Associate of BIRDEM)",
    period: "Feb 2022 — Jan 2026",
    points: [
      "Manage indoor patients with structured assessment, investigation and treatment planning.",
      "Monitor progress, update treatment plans and document daily clinical notes.",
      "Order and interpret investigations to guide clinical decision-making.",
      "Counsel patients and families regarding diagnosis, treatment and follow-up.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding bg-background">
    <div className="container-prose">
      <SectionHeading
        eyebrow="Professional Experience"
        title="Clinical Practice"
        description="Hands-on experience across emergency and inpatient medicine in tertiary settings."
      />

      <div className="space-y-6">
        {roles.map((r, i) => (
          <article
            key={i}
            className="grid gap-6 rounded-lg border border-border bg-card p-7 shadow-card md:grid-cols-[auto_1fr]"
          >
            <div className="flex md:flex-col items-start gap-4 md:gap-3 md:border-r md:border-border md:pr-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Briefcase className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Role
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {r.period}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{r.org}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80">
                {r.points.map((p, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
