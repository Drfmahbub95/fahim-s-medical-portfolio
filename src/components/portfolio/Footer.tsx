const Footer = () => (
  <footer className="border-t border-border bg-background py-8">
    <div className="container-prose flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
      <p>© {new Date().getFullYear()} Dr Fahim Mahbub. All rights reserved.</p>
      <p className="font-serif italic">"Evidence-based, patient-centered care."</p>
    </div>
  </footer>
);

export default Footer;
