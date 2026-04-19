interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mb-14 max-w-2xl">
    <span className="eyebrow">
      <span className="accent-rule" /> {eyebrow}
    </span>
    <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
    )}
    <div className="mt-6 h-1 w-16 rounded-full bg-gradient-accent" />
  </div>
);

export default SectionHeading;
