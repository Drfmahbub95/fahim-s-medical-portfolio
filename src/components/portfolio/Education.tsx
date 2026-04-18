import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const items = [
  {
    degree: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
    institution: "Rangpur Medical College — Rajshahi University",
    detail: "Session 2014–2015 · Examination held November 2019",
    year: "2020",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College, Dhaka — Science",
    detail: "GPA 5.00 / 5.00 · Dhaka Board",
    year: "2014",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Motijheel Govt. Boys' High School — Science",
    detail: "GPA 5.00 / 5.00 · Dhaka Board",
    year: "2012",
  },
];

const Education = () => (
  <section id="education" className="section-padding bg-gradient-soft">
    <div className="container-prose">
      <SectionHeading
        eyebrow="Academic Qualifications"
        title="Education"
        description="A consistent record of academic achievement across medical and pre-medical studies."
      />

      <ol className="relative space-y-6 border-l-2 border-accent/30 pl-8">
        {items.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[42px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-soft">
              <GraduationCap className="h-4 w-4" />
            </span>
            <div className="rounded-lg border border-border bg-card p-6 shadow-card transition-all hover:shadow-elegant">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {item.degree}
                </h3>
                <span className="text-sm font-medium text-accent">{item.year}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Education;
