import { DEMO_PHOTOS } from "../data";

export default function Gallery({ onOpen }) {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-label">OUR MOMENTS</div>
      <h2>
        A glimpse of <i>us</i>
      </h2>
      <div className="gallery">
        {DEMO_PHOTOS.celebrations.map((photo, index) => (
          <button
            className={`gallery-item item-${index + 1}`}
            key={photo}
            onClick={() => onOpen(photo)}
          >
            <img src={photo} alt={`Demo wedding moment ${index + 1}`} />
          </button>
        ))}
      </div>
      {/* <p className="photo-note">
        These are demo photographs for now. Replace the URLs in <code>src/data.js</code> with your own photos later.
      </p> */}
    </section>
  );
}
