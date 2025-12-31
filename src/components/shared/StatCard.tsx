interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30">
      {icon && <div className="mb-2 flex justify-center text-accent">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};
