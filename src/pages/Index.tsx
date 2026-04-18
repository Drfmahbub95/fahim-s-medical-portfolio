import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Research from "@/components/portfolio/Research";
import Publications from "@/components/portfolio/Publications";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr Fahim Mahbub",
    jobTitle: "Doctor & Clinical Researcher",
    email: "mailto:fmahbub96@gmail.com",
    description:
      "GMC-registered doctor and clinical researcher in cardiovascular and metabolic medicine, based in Bangladesh and licensed to practise in the UK.",
    identifier: "GMC 7880554",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Rangpur Medical College, Rajshahi University" },
      { "@type": "EducationalOrganization", name: "Dhaka College" },
    ],
    worksFor: {
      "@type": "Hospital",
      name: "The Barakah General Hospital Ltd",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Research />
        <Publications />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
