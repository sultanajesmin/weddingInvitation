import { useEffect, useState } from 'react';
import { WEDDING_DATE } from '../data';

function getTime(enabled) {
  if (!enabled) return { d: 0, h: 0, m: 0, s: 0 };
  const diff = Math.max(0, new Date(WEDDING_DATE) - new Date());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor(diff / 3600000) % 24,
    m: Math.floor(diff / 60000) % 60,
    s: Math.floor(diff / 1000) % 60
  };
}

export default function Countdown({ enabled }) {
  const [time, setTime] = useState(() => getTime(enabled));

  useEffect(() => {
    if (!enabled) {
      setTime(getTime(false));
      return undefined;
    }
    const id = window.setInterval(() => setTime(getTime(true)), 1000);
    return () => window.clearInterval(id);
  }, [enabled]);

  return (
    <div className={`countdown ${!enabled ? 'countdown-locked' : ''}`}>
      {[['Days', time.d], ['Hours', time.h], ['Minutes', time.m], ['Seconds', time.s]].map(([label, value]) => (
        <div className="count" key={label}>
          <strong>{String(value).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
