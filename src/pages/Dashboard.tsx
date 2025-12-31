import { Layout } from "@/components/layout/Layout";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { RecentVerifications } from "@/components/dashboard/RecentVerifications";
import { ReportedJobs } from "@/components/dashboard/ReportedJobs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Flag, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/20 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">
                Monitor job verification activity and community reports.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/verify">
                <Button variant="hero" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Verify Job
                </Button>
              </Link>
              <Link to="/report">
                <Button variant="outline" className="gap-2">
                  <Flag className="h-4 w-4" />
                  Report Fake
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <StatsOverview />

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            {/* Recent Verifications */}
            <div className="lg:col-span-2">
              <RecentVerifications />
            </div>

            {/* Reported Jobs */}
            <div>
              <ReportedJobs />
            </div>
          </div>

          {/* Quick Tips */}
          <Card className="mt-8 p-6 bg-primary/5 border-primary/10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tips to Stay Safe</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Never pay any fees for job applications or interviews</li>
                  <li>• Always verify company websites through official sources</li>
                  <li>• Be cautious of jobs offering unusually high salaries</li>
                  <li>• Check if the recruiter's email matches the company domain</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
