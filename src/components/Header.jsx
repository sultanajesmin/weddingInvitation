import { Volume2, VolumeX } from "lucide-react";

export default function Header({ muted, onToggleMusic }) {
  return (
    <header className="topbar">
      <a href="#home" className="brand-logo">
        <img
          src="/images/inside-logo.png"
          alt="Wajid and Jesmin"
          className="navbar-logo"
        />
        {/* <span>Wajid & Jesmin</span> */}
      </a>
      <nav>
        <a href="#story">Story</a>
        <a href="#events">Events</a>
        <a href="#gallery">Gallery</a>
        <a href="#venue">Venue</a>
      </nav>
      <button
        className="icon-btn"
        onClick={onToggleMusic}
        aria-label="Toggle music"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </header>
  );
}
