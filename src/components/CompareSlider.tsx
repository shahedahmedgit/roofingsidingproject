import { useRef, useState } from "react";

export function CompareSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-xs"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX);
      }}
    >
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={beforeAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span
        className="pointer-events-none absolute inset-y-0 w-px bg-primary"
        style={{ left: `${pos}%` }}
      />
      <span
        className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xs bg-primary px-3 py-2 font-display text-[0.625rem] font-bold uppercase tracking-[0.16em] text-primary-foreground"
        style={{ left: `${pos}%` }}
      >
        Drag
      </span>
      <span className="pointer-events-none absolute bottom-4 left-4 bg-ink/80 px-3 py-1.5 text-[0.625rem] uppercase tracking-[0.2em] text-on-ink">
        Before
      </span>
      <span className="pointer-events-none absolute bottom-4 right-4 bg-ink/80 px-3 py-1.5 text-[0.625rem] uppercase tracking-[0.2em] text-on-ink">
        After
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="sr-only"
      />
    </div>
  );
}
