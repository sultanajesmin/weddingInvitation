import { MapPin } from "lucide-react";
import { MAP_URL } from "../data";

export default function Venue() {
  // Replace this query with your actual wedding venue.
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.81596581204943!2d87.72467061509063!3d23.993818839582268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9f0f0fb136b8d%3A0x1a2a9ecdbf410988!2sKrishna%20nagar%20masjid!5e0!3m2!1sen!2sin!4v1792239048824!5m2!1sen!2sin";

  return (
    <section id="venue" className="venue-section">
      <div className="venue-copy">
        <div className="section-label">JOIN US</div>

        <h2>
          Come celebrate
          <br />
          <i>with us.</i>
        </h2>

        <p>
          We would be honoured to have you with us as we begin this new journey.
        </p>

        <a
          className="solid-btn"
          href={MAP_URL}
          target="_blank"
          rel="noreferrer"
        >
          <MapPin size={17} />
          Open venue in Maps
        </a>
      </div>

      <div className="map-card">
        <iframe
          className="venue-map-iframe"
          title="Wedding venue map"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
