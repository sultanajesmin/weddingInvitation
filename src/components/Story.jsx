import { DEMO_PHOTOS } from '../data';

export default function Story() {
  return (
    <section id="story" className="section story">
      <div className="section-label">OUR INVITATION</div>
      <h2>A new chapter,<br /><i>together.</i></h2>
      <div className="story-grid">
        <div className="photo-frame">
          <img src={DEMO_PHOTOS.story} alt="Demo wedding couple photograph" />
        </div>
        <div className="story-text">
          <p>With the blessings of our families and the grace of Allah, we invite you to be part of the beginning of our journey together.</p>
          <p>Your presence, duas and good wishes will make this occasion even more meaningful to us.</p>
          <div className="signature">Wajid <span>♥</span> Jesmin</div>
        </div>
      </div>
    </section>
  );
}
