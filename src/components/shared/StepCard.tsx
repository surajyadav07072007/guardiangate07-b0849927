import { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const StepCard = ({ step, icon: Icon, title, description }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Step number */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-sm font-bold text-accent-foreground shadow-glow z-10">
        {step}
      </div>
      
      {/* Card */}
      <div className="w-full pt-8 pb-6 px-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
        <div className="mb-4 mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
