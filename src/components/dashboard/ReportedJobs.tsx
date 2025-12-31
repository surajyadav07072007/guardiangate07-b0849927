import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertOctagon, ExternalLink, Clock } from "lucide-react";

const recentReports = [
  {
    id: "1",
    companyName: "QuickHire Tech",
    reason: "Asked for registration fees",
    reports: 23,
    date: "1 hour ago",
  },
  {
    id: "2",
    companyName: "Global IT Solutions",
    reason: "Fake website, no real company",
    reports: 45,
    date: "3 hours ago",
  },
  {
    id: "3",
    companyName: "Dream Jobs Inc",
    reason: "Promised unrealistic salary",
    reports: 12,
    date: "5 hours ago",
  },
  {
    id: "4",
    companyName: "FastTrack Careers",
    reason: "Collected personal documents",
    reports: 67,
    date: "1 day ago",
  },
];

export const ReportedJobs = () => {
  return (
    <Card className="p-6 bg-card border-border/50">
      <div className="flex items-center gap-2 mb-6">
        <AlertOctagon className="h-5 w-5 text-danger" />
        <h3 className="text-lg font-semibold text-foreground">Recently Reported</h3>
      </div>

      <div className="space-y-4">
        {recentReports.map((report) => (
          <div
            key={report.id}
            className="p-4 rounded-lg bg-danger/5 border border-danger/10 hover:border-danger/20 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground truncate">{report.companyName}</span>
                  <Badge variant="destructive" className="text-xs">
                    {report.reports} reports
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1 truncate">{report.reason}</p>
                <div className="flex items-center gap-1 mt-2">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{report.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
