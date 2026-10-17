import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="ornament">مَوَدَّةً وَرَحْمَةً</div>
      <p className="eyebrow">
        IN THE NAME OF ALLAH, THE MOST GRACIOUS, THE MOST MERCIFUL
      </p>
      <h1>
        Wajid <em>&</em> Jesmin
      </h1>
      <p className="hero-date">01 · 11 · 2026</p>
      <p className="hero-copy">
        Two families. Two stories. One beautiful beginning.
      </p>
      <a className="scroll" href="#story">
        <span>Explore invitation</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
