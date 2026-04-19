import SectionHeading from "./SectionHeading";

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-prose">
      <SectionHeading eyebrow="Personal Statement" title="About" />
      <div className="grid gap-10 md:grid-cols-3">
        <p className="text-lg leading-relaxed text-foreground/85 md:col-span-2">
          Dedicated, research-driven doctor experienced in managing complex acute
          and chronic conditions and performing advanced clinical procedures.
          Co-author of systematic reviews and meta-analyses on cardiovascular and
          metabolic disorders, with proficiency in study design, data analysis,
          and interpretation. Skilled in translating clinical observations into
          actionable insights and committed to evidence-based, patient-centered
          care, mentoring junior clinicians, and contributing to high-impact
          clinical research. Seeking to leverage clinical and research expertise
          to improve patient outcomes and advance medical knowledge.
        </p>

        <aside className="space-y-6 rounded-lg border border-border bg-card p-6 shadow-card">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Licences
            </p>
            <p className="mt-1 text-sm text-foreground/85">
              UK General Medical Council · BMDC
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Examinations
            </p>
            <p className="mt-1 text-sm text-foreground/85">PLAB 1 & 2 · MBBS</p>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default About;
