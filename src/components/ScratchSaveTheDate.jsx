import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

export default function ScratchSaveTheDate({ onReveal }) {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const drawing = useRef(false);
  const revealedRef = useRef(false);
  const lastCheckRef = useRef(0);
  const revealTimerRef = useRef(null);

  const [revealed, setRevealed] = useState(false);
  const [scratched, setScratched] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;
    if (!canvas || !card) return;

    const resize = () => {
      if (revealedRef.current) return;

      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";

      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      gradient.addColorStop(0, "#d9d4cc");
      gradient.addColorStop(0.45, "#f2eee7");
      gradient.addColorStop(0.7, "#bcb6ae");
      gradient.addColorStop(1, "#e8e2da");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      for (let i = 0; i < 130; i += 1) {
        ctx.fillStyle =
          i % 3 === 0 ? "rgba(255,255,255,.5)" : "rgba(100,90,80,.12)";

        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const r = Math.random() * 2 + 0.5;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = "rgba(90,70,60,.75)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "600 15px DM Sans, sans-serif";
      ctx.fillText("SCRATCH TO REVEAL", rect.width / 2, rect.height / 2);
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (revealTimerRef.current) {
        window.clearTimeout(revealTimerRef.current);
      }
    };
  }, []);

  const revealCard = () => {
    if (revealedRef.current) return;

    revealedRef.current = true;
    drawing.current = false;
    setRevealed(true);
    setScratched(100);

    revealTimerRef.current = window.setTimeout(() => {
      onReveal?.();
    }, 350);
  };

  const scratch = (event) => {
    if (revealedRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 42, 0, Math.PI * 2);
    ctx.fill();

    // Check progress at most every 150ms, not on every pointer event.
    const now = performance.now();
    if (now - lastCheckRef.current < 150) return;
    lastCheckRef.current = now;

    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let transparent = 0;
    const totalPixels = image.data.length / 4;

    // Sample pixels to reduce the work needed for progress checks.
    const stride = 40;
    let sampled = 0;

    for (let i = 3; i < image.data.length; i += 4 * stride) {
      if (image.data[i] < 40) transparent += 1;
      sampled += 1;
    }

    const percent = sampled ? (transparent / sampled) * 100 : 0;
    const next = Math.round(percent);

    setScratched(Math.min(next, 100));

    if (next >= 25) {
      revealCard();
    }
  };

  return (
    <section className={`save-date-section ${revealed ? "is-revealed" : ""}`}>
      <div className="save-date-content">
        {/* <div className="section-label">A LITTLE SURPRISE</div> */}

        <div className="save-date-card" ref={cardRef}>
          <Sparkles size={18} className="save-sparkle" />
          <span className="save-small">SAVE THE DATE</span>

          <a href="#home" className="brand-logo">
            <img
              src="/images/inside-logo.png"
              alt="Wajid and Jesmin"
              className="navbar-logo2"
            />
          </a>

          <h2>
            Wajid <i>&</i> Jesmin
          </h2>

          <div className="save-date-number">
            01 <span>·</span> 11 <span>·</span> 2026
          </div>

          <p>
            Our celebration begins with four beautiful days of love, laughter
            and blessings.
          </p>

          <div className="scratch-hint">
            Scratch away the silver to reveal our date
          </div>
        </div>
      </div>

      {!revealed && (
        <canvas
          ref={canvasRef}
          className="scratch-canvas"
          onPointerDown={(e) => {
            drawing.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            scratch(e);
          }}
          onPointerMove={(e) => {
            if (drawing.current) scratch(e);
          }}
          onPointerUp={() => {
            drawing.current = false;
          }}
          onPointerCancel={() => {
            drawing.current = false;
          }}
        />
      )}

      <div className="scratch-progress" aria-hidden="true">
        {scratched > 0
          ? `${Math.min(scratched, 100)}% revealed`
          : "Scratch anywhere on the card"}
      </div>
    </section>
  );
}
