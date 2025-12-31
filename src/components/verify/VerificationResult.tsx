import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrustScoreGauge } from "@/components/shared/TrustScoreGauge";
import { 
  Shield, 
  Globe, 
  Mail, 
  FileText, 
  Brain, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Clock,
  Lock,
  AlertOctagon,
  RefreshCw
} from "lucide-react";

interface CheckResult {
  passed: boolean;
  message: string;
  severity?: "success" | "warning" | "danger";
}

interface VerificationResultProps {
  score: number;
  companyName: string;
  websiteChecks: {
    isSecure: CheckResult;
    isEstablished: CheckResult;
    isSuspicious: CheckResult;
  };
  emailChecks: {
    isFreeEmail: CheckResult;
    matchesCompany: CheckResult;
  };
  descriptionChecks: {
    flags: string[];
    riskLevel: "low" | "medium" | "high";
  };
  mlPrediction: {
    confidence: number;
    prediction: "safe" | "risky" | "uncertain";
  };
  onReset: () => void;
}

export const VerificationResult = ({
  score,
  companyName,
  websiteChecks,
  emailChecks,
  descriptionChecks,
  mlPrediction,
  onReset,
}: VerificationResultProps) => {
  const getOverallStatus = () => {
    if (score >= 70) return { label: "Safe Job", variant: "success" as const, icon: CheckCircle2 };
    if (score >= 40) return { label: "Proceed with Caution", variant: "warning" as const, icon: AlertTriangle };
    return { label: "High Risk - Likely Fake", variant: "danger" as const, icon: XCircle };
  };

  const status = getOverallStatus();
  const StatusIcon = status.icon;

  const renderCheckItem = (check: CheckResult, label: string, icon: React.ReactNode) => {
    const severity = check.severity || (check.passed ? "success" : "danger");
    return (
      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
        <div className={`mt-0.5 ${
          severity === "success" ? "text-success" : 
          severity === "warning" ? "text-warning" : 
          "text-danger"
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">{label}</span>
            {severity === "success" ? (
              <CheckCircle2 className="h-4 w-4 text-success" />
            ) : severity === "warning" ? (
              <AlertTriangle className="h-4 w-4 text-warning" />
            ) : (
              <XCircle className="h-4 w-4 text-danger" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">{check.message}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Main Score Card */}
      <Card className={`p-6 md:p-8 border-2 ${
        score >= 70 ? "border-success/30 bg-success/5" :
        score >= 40 ? "border-warning/30 bg-warning/5" :
        "border-danger/30 bg-danger/5"
      }`}>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <TrustScoreGauge score={score} size="lg" />
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <StatusIcon className={`h-6 w-6 ${
                score >= 70 ? "text-success" : score >= 40 ? "text-warning" : "text-danger"
              }`} />
              <Badge variant={score >= 70 ? "default" : score >= 40 ? "secondary" : "destructive"} className="text-sm">
                {status.label}
              </Badge>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-1">{companyName}</h2>
            <p className="text-muted-foreground">
              {score >= 70 
                ? "This job posting appears to be legitimate. Always verify directly with the company."
                : score >= 40
                ? "Some concerns were found. Proceed with caution and verify details independently."
                : "Multiple red flags detected. We strongly advise against proceeding with this job."}
            </p>
          </div>
        </div>
      </Card>

      {/* Detailed Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Website Analysis */}
        <Card className="p-5 bg-card border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Website Analysis</h3>
          </div>
          <div className="space-y-3">
            {renderCheckItem(websiteChecks.isSecure, "SSL Security", <Lock className="h-4 w-4" />)}
            {renderCheckItem(websiteChecks.isEstablished, "Domain Age", <Clock className="h-4 w-4" />)}
            {renderCheckItem(websiteChecks.isSuspicious, "Suspicious Activity", <AlertOctagon className="h-4 w-4" />)}
          </div>
        </Card>

        {/* Email Analysis */}
        <Card className="p-5 bg-card border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Email Analysis</h3>
          </div>
          <div className="space-y-3">
            {renderCheckItem(emailChecks.isFreeEmail, "Email Provider", <Mail className="h-4 w-4" />)}
            {renderCheckItem(emailChecks.matchesCompany, "Company Match", <Shield className="h-4 w-4" />)}
          </div>
        </Card>

        {/* Job Description Analysis */}
        <Card className="p-5 bg-card border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Description Analysis</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground">Risk Level:</span>
              <Badge variant={
                descriptionChecks.riskLevel === "low" ? "default" :
                descriptionChecks.riskLevel === "medium" ? "secondary" :
                "destructive"
              }>
                {descriptionChecks.riskLevel.toUpperCase()}
              </Badge>
            </div>
            {descriptionChecks.flags.length > 0 ? (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Suspicious phrases found:</p>
                <div className="flex flex-wrap gap-2">
                  {descriptionChecks.flags.map((flag, i) => (
                    <Badge key={i} variant="outline" className="text-danger border-danger/30 bg-danger/5">
                      {flag}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-success">No suspicious phrases detected</p>
            )}
          </div>
        </Card>

        {/* ML Prediction */}
        <Card className="p-5 bg-card border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">AI Prediction</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">Model Prediction</span>
              <Badge variant={
                mlPrediction.prediction === "safe" ? "default" :
                mlPrediction.prediction === "uncertain" ? "secondary" :
                "destructive"
              }>
                {mlPrediction.prediction.toUpperCase()}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">Confidence</span>
              <span className="text-sm font-semibold text-foreground">{mlPrediction.confidence}%</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Based on analysis of 10,000+ verified job postings and known scams.
            </p>
          </div>
        </Card>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <Button variant="outline" size="lg" onClick={onReset} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Verify Another Job
        </Button>
      </div>
    </div>
  );
};
