// Lightweight, non-WebGL fallback used when the visitor prefers reduced
// motion, the device looks low-powered, or WebGL isn't available. Purely
// decorative CSS/SVG — no canvas, no animation loop.
export default function StaticLandscape({ className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="glow1" cx="35%" cy="55%" r="60%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#c2a45d" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#101311" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#263126" />
            <stop offset="100%" stopColor="#101311" />
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill="url(#bg1)" />
        <ellipse cx="300" cy="290" rx="360" ry="180" fill="url(#glow1)" />
        <g stroke="#c2a45d" strokeOpacity="0.18" fill="none">
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M ${-50 + i * 100} 500 Q ${350} ${120 + i * 8} ${850 - i * 40} 60`}
            />
          ))}
        </g>
        <g fill="#c2a45d">
          {[
            [300, 290],
            [420, 200],
            [220, 340],
            [520, 320],
            [180, 180],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 0 ? 5 : 3} opacity={i === 0 ? 0.95 : 0.6} />
          ))}
        </g>
      </svg>
    </div>
  );
}
