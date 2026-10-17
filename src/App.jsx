import { useEffect, useRef, useState } from "react";
import "./styles.css";
import EnvelopeIntro from "./components/EnvelopeIntro";
import Glitter from "./components/Glitter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScratchSaveTheDate from "./components/ScratchSaveTheDate";
import Story from "./components/Story";
import EventsSection from "./components/EventsSection";
import CountdownSection from "./components/CountdownSection";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Closing from "./components/Closing";
import Lightbox from "./components/Lightbox";

export default function App() {
  const [muted, setMuted] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const audioRef = useRef(null);
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [countdownUnlocked, setCountdownUnlocked] = useState(false);

  useEffect(() => {
    const a = new Audio("/music/wedding.mp3");
    a.loop = true;
    a.volume = 0.5;
    a.muted = false;
    audioRef.current = a;

    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  const openInvitation = async () => {
    setInvitationOpened(true);

    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      audio.muted = false;
      setMuted(false);
    } catch (error) {
      // Some browsers may block playback; the music button remains available.
      setMuted(true);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused || audio.muted) {
      try {
        audio.muted = false;
        await audio.play();
        setMuted(false);
      } catch (error) {
        setMuted(true);
      }
    } else {
      audio.pause();
      setMuted(true);
    }
  };

  const share = async () => {
    const data = {
      title: "Wajid & Jesmin — Wedding Invitation",
      text: "You are invited to celebrate Wajid & Jesmin.",
      url: location.href,
    };

    if (navigator.share) {
      await navigator.share(data);
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(location.href);
    }
  };

  return (
    <>
      {!invitationOpened && <EnvelopeIntro onOpen={openInvitation} />}

      {invitationOpened && <Glitter />}

      <Header muted={muted} onToggleMusic={toggleMusic} />

      <main>
        <Hero />
        <ScratchSaveTheDate onReveal={() => setCountdownUnlocked(true)} />
        <Story />
        <EventsSection />
        <CountdownSection enabled={countdownUnlocked} />
        <Gallery onOpen={setLightbox} />
        <Venue />
        <Closing onShare={share} />
      </main>

      <footer>Made with love · Wajid & Jesmin</footer>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
