import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section
    id="contact"
    className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground"
  >
    <div className="container-prose text-center">
      <span className="eyebrow text-accent">
        <span className="accent-rule bg-accent" /> Get in touch
      </span>
      <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
        Open to Master's opportunities & research collaborations
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80">
        I'm actively seeking a Master's degree programme that bridges clinical
        practice and research in cardiovascular, metabolic or public health
        medicine. I'd love to hear from you.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" variant="hero">
          <a href="mailto:fmahbub96@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            fmahbub96@gmail.com
          </a>
        </Button>
        <Button asChild size="lg" variant="heroOutline">
          <a href="https://www.gmc-uk.org/" target="_blank" rel="noreferrer">
            <Linkedin className="mr-2 h-4 w-4" />
            GMC No. 7880554
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Contact;
