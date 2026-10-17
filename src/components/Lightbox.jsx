import { X } from 'lucide-react';

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button onClick={onClose} aria-label="Close">
        <X />
      </button>
      <img src={image} alt="Wedding gallery" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
