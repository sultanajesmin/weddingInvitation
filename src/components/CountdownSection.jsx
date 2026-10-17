import Countdown from './Countdown';

export default function CountdownSection({ enabled }) {
  return (
    <section className="count-section">
      <div className="section-label">UNTIL WE SAY “I DO”</div>
      <h2>Counting <i>the moments</i></h2>
      {!enabled && (
        <p className="countdown-locked-message">
          Scratch the Save the Date card above to start the countdown.
        </p>
      )}
      <Countdown enabled={enabled} />
    </section>
  );
}
