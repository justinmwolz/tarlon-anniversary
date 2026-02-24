"use client";

export default function BridgeSVG({
  className = "",
  color = "#035e4d",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Water line */}
      <rect x="0" y="260" width="1200" height="40" fill={color} opacity="0.15" />

      {/* Left approach */}
      <rect x="0" y="220" width="320" height="8" fill={color} opacity="0.6" />
      <rect x="0" y="240" width="320" height="6" fill={color} opacity="0.4" />

      {/* Right approach */}
      <rect x="880" y="220" width="320" height="8" fill={color} opacity="0.6" />
      <rect x="880" y="240" width="320" height="6" fill={color} opacity="0.4" />

      {/* Main span deck */}
      <rect x="320" y="220" width="560" height="8" fill={color} opacity="0.7" />
      <rect x="320" y="240" width="560" height="6" fill={color} opacity="0.4" />

      {/* Left tower */}
      <rect x="355" y="60" width="14" height="168" fill={color} opacity="0.8" />
      <rect x="391" y="60" width="14" height="168" fill={color} opacity="0.8" />
      {/* Tower crossbeams */}
      <rect x="355" y="80" width="50" height="6" fill={color} opacity="0.6" />
      <rect x="355" y="140" width="50" height="6" fill={color} opacity="0.6" />
      <rect x="355" y="190" width="50" height="6" fill={color} opacity="0.6" />
      {/* Tower top */}
      <rect x="350" y="55" width="60" height="8" fill={color} opacity="0.8" />

      {/* Right tower */}
      <rect x="795" y="60" width="14" height="168" fill={color} opacity="0.8" />
      <rect x="831" y="60" width="14" height="168" fill={color} opacity="0.8" />
      {/* Tower crossbeams */}
      <rect x="795" y="80" width="50" height="6" fill={color} opacity="0.6" />
      <rect x="795" y="140" width="50" height="6" fill={color} opacity="0.6" />
      <rect x="795" y="190" width="50" height="6" fill={color} opacity="0.6" />
      {/* Tower top */}
      <rect x="790" y="55" width="60" height="8" fill={color} opacity="0.8" />

      {/* Main cables */}
      <path
        d={`M 200 220 Q 380 55 600 180 Q 820 55 1000 220`}
        stroke={color}
        strokeWidth="4"
        fill="none"
        opacity="0.6"
      />

      {/* Suspender cables from left tower to mid-span */}
      {[380, 420, 460, 500, 540, 580].map((x, i) => {
        const cableY = 180 - Math.abs(x - 480) * 0.25;
        return (
          <line
            key={`left-${i}`}
            x1={x}
            y1={cableY}
            x2={x}
            y2={220}
            stroke={color}
            strokeWidth="1.5"
            opacity="0.3"
          />
        );
      })}

      {/* Suspender cables from right tower to mid-span */}
      {[620, 660, 700, 740, 780, 820].map((x, i) => {
        const cableY = 180 - Math.abs(x - 720) * 0.25;
        return (
          <line
            key={`right-${i}`}
            x1={x}
            y1={cableY}
            x2={x}
            y2={220}
            stroke={color}
            strokeWidth="1.5"
            opacity="0.3"
          />
        );
      })}
    </svg>
  );
}
