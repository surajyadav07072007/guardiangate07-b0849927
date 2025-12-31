import { useEffect, useState } from "react";

interface TrustScoreGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export const TrustScoreGauge = ({ score, size = "md", showLabel = true }: TrustScoreGaugeProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sizes = {
    sm: { width: 80, stroke: 6, fontSize: "text-lg" },
    md: { width: 120, stroke: 8, fontSize: "text-2xl" },
    lg: { width: 180, stroke: 10, fontSize: "text-4xl" },
  };

  const { width, stroke, fontSize } = sizes[size];
  const radius = (width - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = () => {
    if (score >= 70) return { gradient: "url(#safe-gradient)", text: "text-success", label: "Safe" };
    if (score >= 40) return { gradient: "url(#warning-gradient)", text: "text-warning", label: "Caution" };
    return { gradient: "url(#danger-gradient)", text: "text-danger", label: "Risky" };
  };

  const { gradient, text, label } = getScoreColor();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width, height: width }}>
        <svg width={width} height={width} className="transform -rotate-90">
          <defs>
            <linearGradient id="safe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(142, 76%, 36%)" />
              <stop offset="100%" stopColor="hsl(142, 76%, 46%)" />
            </linearGradient>
            <linearGradient id="warning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(38, 92%, 50%)" />
              <stop offset="100%" stopColor="hsl(45, 93%, 47%)" />
            </linearGradient>
            <linearGradient id="danger-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(0, 84%, 60%)" />
              <stop offset="100%" stopColor="hsl(0, 72%, 51%)" />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={stroke}
          />
          {/* Progress circle */}
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke={gradient}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={animated ? offset : circumference}
            className="transition-all duration-1500 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${fontSize} font-bold ${text}`}>{score}</span>
          {size !== "sm" && <span className="text-xs text-muted-foreground">/ 100</span>}
        </div>
      </div>
      {showLabel && (
        <span className={`font-semibold ${text}`}>{label}</span>
      )}
    </div>
  );
};
