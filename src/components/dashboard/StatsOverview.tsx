import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle2, Users } from "lucide-react";

const stats = [
  {
    label: "Total Verifications",
    value: "12,847",
    change: "+12%",
    changeType: "positive" as const,
    icon: Shield,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Safe Jobs Found",
    value: "10,234",
    change: "+8%",
    changeType: "positive" as const,
    icon: CheckCircle2,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    label: "Fake Jobs Detected",
    value: "2,613",
    change: "-5%",
    changeType: "negative" as const,
    icon: AlertTriangle,
    color: "text-danger",
    bgColor: "bg-danger/10",
  },
  {
    label: "Students Protected",
    value: "8,456",
    change: "+15%",
    changeType: "positive" as const,
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-5 bg-card border-border/50 hover:shadow-card transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className={`text-xs mt-1 ${
                stat.changeType === "positive" ? "text-success" : "text-danger"
              }`}>
                {stat.change} from last month
              </p>
            </div>
            <div className={`p-3 rounded-xl ${stat.bgColor}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
