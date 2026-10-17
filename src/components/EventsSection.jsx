import {
  CalendarDays,
  Clock3,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react";
import { events } from "../data";

const kickers = [
  "THE FIRST CELEBRATION",
  "A DAY OF COLOUR & TRADITION",
  "THE NIKAH",
  "THE GRAND CELEBRATION",
];

export default function EventsSection() {
  return (
    <section id="events" className="section events-section">
      <div className="section-label">FOUR DAYS · FOUR MEMORIES</div>
      <h2>
        The <i>celebrations</i>
      </h2>
      <div className="event-grid">
        {events.map((event, index) => (
          <article
            className={`event-card event-${index + 1}`}
            key={event.title}
            style={{ "--event-image": `url("${event.image}")` }}
          >
            <div className="event-overlay" />
            <div className="event-content">
              <span className="event-number">0{index + 1}</span>
              <div className="event-icon">
                <Sparkles size={17} />
              </div>
              <div className="event-kicker">{kickers[index]}</div>
              <h3>{event.title}</h3>
              <div className="event-date-fancy">
                <CalendarDays size={16} /> {event.date}
              </div>
              <div className="event-meta">
                <span>
                  <Clock3 size={15} />
                  {event.time}
                </span>
                <span>
                  <MapPin size={15} />
                  {event.venue}
                </span>
              </div>
              <p>{event.address}</p>
              <a
                href={event.maps}
                target="_blank"
                rel="noreferrer"
                className="event-direction"
              >
                <Navigation size={14} /> Get directions
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
