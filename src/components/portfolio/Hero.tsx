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

      <div className="container-prose relative z-10 grid min-h-[88vh] grid-cols-1 items-center gap-10 py-24 lg:grid-cols-[1.7fr_1fr]">
        <div className="order-2 max-w-3xl animate-fade-up lg:order-1">
          <span className="eyebrow text-accent">
            <span className="accent-rule bg-accent" /> Doctor · Clinical Researcher
          </span>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
            Dr Fahim Mahbub
          </h1>

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

        <div className="order-1 mx-auto w-full max-w-[180px] animate-fade-up sm:max-w-[220px] lg:order-2 lg:mx-0 lg:ml-auto lg:max-w-[260px]">
          <div className="group relative">
            <div
              className="absolute -inset-3 rounded-full bg-accent/25 blur-2xl transition-all duration-700 ease-out group-hover:-inset-4 group-hover:bg-accent/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 shadow-2xl backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_25px_60px_-15px_hsl(var(--accent)/0.5)]">
              <img
                src={headshot}
                alt="Portrait of Dr Fahim Mahbub"
                width={520}
                height={680}
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
