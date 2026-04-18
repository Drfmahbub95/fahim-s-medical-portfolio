import SectionHeading from "./SectionHeading";
import { BookOpen } from "lucide-react";

const pubs = [
  {
    title:
      "Global Prevalence of Metabolic Syndrome in Adults and Its Association with Lifestyle Factors: A Systematic Review and Meta-Analysis",
    journal: "Cureus International Journal",
    role: "Co-author",
  },
  {
    title:
      "Effects of Dapagliflozin on Obese Patients with Type 2 Diabetes: A Prospective Observational Study from Bangladesh",
    journal: "Cureus International Journal · Indexed in PubMed",
    role: "Co-author",
  },
  {
    title:
      "The Utilization of Atherogenic Indices as an Effective Marker for Predicting Cardiovascular Risk in Individuals with Spondyloarthritis",
    journal: "Global Scholars Journal of Applied Medical Sciences",
    role: "Co-author",
  },
];

const Publications = () => (
  <section id="publications" className="section-padding bg-gradient-soft">
    <div className="container-prose">
      <SectionHeading
        eyebrow="Peer-Reviewed Publications"
        title="Publications"
        description="Co-authored research disseminated through international and PubMed-indexed journals."
      />

      <ol className="space-y-4">
        {pubs.map((p, i) => (
          <li
            key={i}
            className="flex gap-5 rounded-lg border border-border bg-card p-6 shadow-card transition-all hover:shadow-elegant"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Publication {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium text-primary">{p.journal}</span>
                <span className="mx-2 text-border">·</span>
                {p.role}: Fahim Mahbub
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Publications;
