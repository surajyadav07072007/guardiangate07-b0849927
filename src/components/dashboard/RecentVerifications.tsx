import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrustScoreGauge } from "@/components/shared/TrustScoreGauge";
import { Clock, Building2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Verification {
  id: string;
  companyName: string;
  score: number;
  date: string;
  status: "safe" | "caution" | "risky";
}

const mockVerifications: Verification[] = [
  { id: "1", companyName: "Google India", score: 92, date: "2 hours ago", status: "safe" },
  { id: "2", companyName: "Unknown Tech Corp", score: 34, date: "5 hours ago", status: "risky" },
  { id: "3", companyName: "Infosys", score: 88, date: "1 day ago", status: "safe" },
  { id: "4", companyName: "FastHire Solutions", score: 45, date: "1 day ago", status: "caution" },
  { id: "5", companyName: "Microsoft", score: 95, date: "2 days ago", status: "safe" },
];

export const RecentVerifications = () => {
  return (
    <Card className="p-6 bg-card border-border/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Verifications</h3>
        <Link to="/verify">
          <Button variant="outline" size="sm">
            New Verification
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {mockVerifications.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <TrustScoreGauge score={item.score} size="sm" showLabel={false} />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="font-medium text-foreground truncate">{item.companyName}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
            </div>

            <Badge variant={
              item.status === "safe" ? "default" :
              item.status === "caution" ? "secondary" :
              "destructive"
            }>
              {item.status === "safe" ? "Safe" : item.status === "caution" ? "Caution" : "Risky"}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};
