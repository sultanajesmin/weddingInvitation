import { Share2 } from "lucide-react";

export default function Closing({ onShare }) {
  return (
    <section className="closing">
      <div className="ornament">مَوَدَّةً وَرَحْمَةً</div>
      <h2>
        Wajid <span>♥</span> Jesmin
      </h2>
      <p>01 November 2026</p>
      <button className="share-btn" onClick={onShare}>
        <Share2 size={16} /> Share invitation
      </button>
    </section>
  );
}
