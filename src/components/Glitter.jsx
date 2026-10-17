import { useMemo } from 'react';

export default function Glitter() {
  const particles = useMemo(() => Array.from({ length: 70 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * -10}s`,
    duration: `${6 + Math.random() * 8}s`,
    size: `${3 + Math.random() * 7}px`,
    drift: `${-40 + Math.random() * 80}px`,
    opacity: 0.25 + Math.random() * 0.55
  })), []);

  return (
    <div className="glitter-layer" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="glitter-particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
            opacity: p.opacity,
            '--drift': p.drift
          }}
        >✦</span>
      ))}
    </div>
  );
}
