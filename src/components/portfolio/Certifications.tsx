import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";

const items = [
  {
    title: "Certificate Course on Diabetology (CCD)",
    institution: "BIRDEM",
    detail: "Batch 35 · Duration: 6 months",
  },
  {
    title: "Certificate in Medical Ultrasound (CMU)",
    institution: "CMUD",
    detail: "Duration: 6 months",
  },
];

const Certifications = () => (
  <section id="certifications" className="section-padding">
    <div className="container-prose">
      <SectionHeading
        eyebrow="Professional Development"
        title="Certifications"
        description="Specialised clinical training that complements my medical practice."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="group rounded-lg border border-border bg-card p-6 shadow-card transition-all hover:shadow-elegant"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
