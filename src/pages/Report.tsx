import { Layout } from "@/components/layout/Layout";
import { ReportForm } from "@/components/report/ReportForm";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Shield, Users, CheckCircle2 } from "lucide-react";

const Report = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-danger/10 mb-4">
                <AlertTriangle className="h-8 w-8 text-danger" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Report a Fake Job
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Help protect other students from job scams by reporting fraudulent job postings. Your report matters!
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <ReportForm />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="p-5 bg-card border-border/50">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Why Report?
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>Helps train our AI to detect similar scams</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>Warns other students about the fake job</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>Creates a database of known scam patterns</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>Contributes to community safety</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-5 bg-warning/5 border-warning/20">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    Common Red Flags
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Asking for registration or processing fees</li>
                    <li>• Unrealistic salary offers</li>
                    <li>• Vague job descriptions</li>
                    <li>• Using personal email domains</li>
                    <li>• Pressure to join immediately</li>
                    <li>• No interview process</li>
                  </ul>
                </Card>

                <Card className="p-5 bg-card border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">2,613</p>
                      <p className="text-sm text-muted-foreground">Fake jobs reported</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
