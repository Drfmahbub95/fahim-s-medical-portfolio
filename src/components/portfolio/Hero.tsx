import heroBg from "@/assets/hero-bg.jpg";
import headshot from "@/assets/fahim-headshot.jpg";
import { Stethoscope, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <header
      id="home"
      className="relative isolate overflow-hidden bg-gradient-hero text-primary-foreground"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-glow/70" />

      <div className="container-prose relative z-10 flex min-h-[88vh] flex-col justify-center py-24">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow text-accent">
            <span className="accent-rule bg-accent" /> Doctor · Clinical Researcher
          </span>

          <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-7 md:gap-8">
            <div className="group relative shrink-0 animate-float">
              <div
                className="absolute -inset-3 rounded-full bg-accent/30 blur-2xl transition-all duration-700 ease-out group-hover:-inset-5 group-hover:bg-accent/50"
                aria-hidden="true"
              />
              <div className="relative rounded-full bg-gradient-to-br from-accent via-accent/60 to-primary-glow p-[3px] shadow-2xl transition-transform duration-500 ease-out hover:scale-105">
                <div className="h-32 w-32 overflow-hidden rounded-full ring-2 ring-primary-foreground/20 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44">
                  <img
                    src={headshot}
                    alt="Portrait of Dr Fahim Mahbub"
                    width={352}
                    height={352}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Dr Fahim Mahbub
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            GMC-registered doctor and clinical researcher in cardiovascular
            and metabolic medicine — translating clinical observation into evidence
            that improves patient outcomes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-accent" />
              MBBS · PLAB
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              United Kingdom · Bangladesh
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="hero">
              <a href="#research">View Research</a>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <a href="mailto:fmahbub96@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get in touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
