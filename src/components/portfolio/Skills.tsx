import SectionHeading from "./SectionHeading";

const skills = [
  "Clinical diagnosis and treatment planning",
  "Acute and emergency patient management",
  "Inpatient care and treatment planning",
  "Public health research and preventive healthcare",
  "Systematic reviews & meta-analysis (RevMan 5.4)",
  "Statistical analysis (IBM SPSS v25 / v26)",
  "Study design & data interpretation",
  "Effective communication and counselling",
  "Multidisciplinary team collaboration",
];

const Skills = () => (
  <section className="section-padding bg-gradient-soft">
    <div className="container-prose">
      <SectionHeading eyebrow="Core Competencies" title="Skills" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s}
            className="rounded-md border border-border bg-card px-5 py-4 text-sm font-medium text-foreground shadow-card transition-colors hover:border-accent"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
