import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, index = 0 }: FeatureCardProps) => {
  return (
    <Card 
      className="group relative p-6 bg-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};
