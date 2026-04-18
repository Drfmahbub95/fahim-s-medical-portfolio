import SectionHeading from "./SectionHeading";
import { FlaskConical } from "lucide-react";

const studies = [
  {
    type: "Systematic Review & Meta-Analysis",
    field: "Public Health · Internal Medicine · Epidemiology",
    title:
      "Global Prevalence of Metabolic Syndrome in Adults and Its Association with Lifestyle Factors",
    points: [
      "Conducted a systematic review using secondary data from PubMed, Embase, Scopus, Web of Science and CINAHL (2015–2025).",
      "Included cross-sectional and longitudinal cohort studies on community-dwelling adults (≥18 yrs) across Asia, Europe, the Middle East and the USA; aggregated data from 10 studies involving tens of thousands of participants.",
      "Applied diagnostic criteria: NCEP ATP III, IDF and JIS.",
      "Performed meta-analysis using RevMan 5.4 with random-effects modeling, I² heterogeneity and Egger's regression for publication bias.",
    ],
  },
  {
    type: "Prospective Observational Study",
    field: "Endocrinology · Diabetes · Metabolism",
    title:
      "Effects of Dapagliflozin on Obese Patients with Type 2 Diabetes — A Prospective Observational Study from Bangladesh",
    points: [
      "12-month prospective multicenter observational study evaluating safety and efficacy of dapagliflozin in obese patients with Type 2 diabetes.",
      "Enrolled 1,500 participants from outpatient departments across multiple centres using consecutive convenience sampling.",
      "Collected and organized clinical and laboratory data using standardized case report forms at baseline, 6 months and 12 months.",
      "Assessed treatment outcomes and adverse events including HbA1c and metabolic parameters; analysed in IBM SPSS v25 (p < 0.05).",
    ],
  },
  {
    type: "Prospective Observational Study",
    field: "Rheumatology · Cardiovascular Risk Assessment",
    title:
      "Atherogenic Indices as Markers for Predicting Cardiovascular Risk in Spondyloarthritis",
    points: [
      "Enrolled 40 adults (≥18 yrs) with primary or secondary spondyloarthritis; collected demographic, clinical, metabolic and inflammatory data.",
      "Conducted fasting investigations: lipid profile, CRP, ESR, fasting glucose and uric acid.",
      "Calculated cardiovascular risk indices (AIP, CRI-I, CRI-II, AC) with univariate and multivariate analysis in SPSS v26.",
      "Ensured ethical compliance with institutional approval and informed consent.",
    ],
  },
  {
    type: "Research Proposal — In Development",
    field: "Ophthalmology · Diabetes · Public Health",
    title:
      "Delays in Diabetic Retinopathy Screening and Their Association with Vision-Threatening Disease",
    points: [
      "Proposal exploring screening interval gaps and their downstream impact on the incidence of vision-threatening diabetic retinopathy.",
    ],
  },
];

const Research = () => (
  <section id="research" className="section-padding bg-background">
    <div className="container-prose">
      <SectionHeading
        eyebrow="Research Experience"
        title="Clinical & Translational Research"
        description="Designing studies, leading data analysis, and turning clinical observations into evidence."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {studies.map((s, i) => (
          <article
            key={i}
            className="group flex flex-col rounded-lg border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
                <FlaskConical className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {s.type}
                </p>
                <p className="text-xs text-muted-foreground">{s.field}</p>
              </div>
            </div>

            <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
              {s.title}
            </h3>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              {s.points.map((p, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Research;
