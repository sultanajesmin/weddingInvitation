import { useState } from "react";
import "./EnvelopeIntro.css";

export default function EnvelopeIntro({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    // Wait for the envelope animation to finish
    setTimeout(() => {
      onOpen();
    }, 1700);
  };

  return (
    <div className={`envelope-intro ${opening ? "opening" : ""}`}>
      <div className="fullscreen-envelope" onClick={handleOpen}>
        {/* Invitation underneath */}
        <div className="invitation-paper">
          {/* <div className="invitation-monogram">WJ</div> */}
          <img
            src="/images/inside-logo.png"
            alt="Wajid and Jesmin"
            className="navbar-logo2"
          />

          <div className="invitation-small">TOGETHER WITH THEIR FAMILIES</div>

          <h1>
            Wajid
            <span>&</span>
            Jesmin
          </h1>

          <div className="invitation-date">01 · 11 · 2026</div>
        </div>

        {/* Left folded paper */}
        <div className="envelope-left">
          <div className="botanical botanical-left">
            <span>❧</span>
            <span>❦</span>
            <span>❧</span>
            <span>❦</span>
          </div>
        </div>

        {/* Right folded paper */}
        <div className="envelope-right">
          <div className="botanical botanical-right">
            <span>❧</span>
            <span>❦</span>
            <span>❧</span>
            <span>❦</span>
          </div>
        </div>

        {/* Golden seal */}
        <button className="golden-seal" aria-label="Open wedding invitation">
          <img
            src="/images/wj-gold-seal.png"
            alt="Wajid and Jesmin gold monogram"
            className="seal-logo"
          />
        </button>
        {/* <button className="golden-seal" aria-label="Open wedding invitation">
          <span className="seal-inner">WJ</span>
        </button> */}

        {/* Text */}
        <div className="tap-to-open">TAP TO OPEN</div>
      </div>
    </div>
  );
}
