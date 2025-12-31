import { Layout } from "@/components/layout/Layout";
import { StepCard } from "@/components/shared/StepCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Search,
  Globe,
  Mail,
  FileText,
  Brain,
  BarChart3,
  Shield,
  CheckCircle2,
  ArrowRight,
  Lock,
  Clock,
  AlertOctagon,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Submit Job Details",
      description: "Enter the company name, job/internship link, recruiter email, and paste the job description.",
    },
    {
      icon: Globe,
      title: "Website Analysis",
      description: "We check if the website is secure (HTTPS), verify domain age, and scan for suspicious patterns.",
    },
    {
      icon: Mail,
      title: "Email Verification",
      description: "We detect if the recruiter uses free email providers and verify if the email matches the company.",
    },
    {
      icon: FileText,
      title: "Description Scan",
      description: "AI analyzes the job description for red flags like 'pay fees', 'urgent joining', etc.",
    },
    {
      icon: Brain,
      title: "ML Prediction",
      description: "Our model trained on 10,000+ jobs compares patterns and predicts authenticity.",
    },
    {
      icon: BarChart3,
      title: "Trust Score",
      description: "Receive a 0-100 score with detailed breakdown of all verification checks.",
    },
  ];

  const analysisPoints = [
    {
      icon: Lock,
      title: "SSL Security",
      description: "Checks if the job posting URL uses secure HTTPS protocol",
    },
    {
      icon: Clock,
      title: "Domain Age",
      description: "Verifies how old the website domain is - newer domains are riskier",
    },
    {
      icon: AlertOctagon,
      title: "Suspicious Patterns",
      description: "Scans URL for known scam patterns and blacklisted domains",
    },
    {
      icon: Mail,
      title: "Email Provider Check",
      description: "Detects if recruiter uses free email like Gmail instead of company email",
    },
    {
      icon: CheckCircle2,
      title: "Company Match",
      description: "Verifies if the email domain matches the company name",
    },
    {
      icon: FileText,
      title: "Red Flag Detection",
      description: "AI scans for phrases like 'pay fees', 'limited seats', 'guaranteed placement'",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 gradient-hero overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                How JobShield Works
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Our multi-layered AI verification system analyzes every aspect of a job posting to determine its authenticity.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Verification Process
              </h2>
              <p className="text-muted-foreground">
                6 comprehensive checks in seconds
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <StepCard key={step.title} step={index + 1} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* What We Analyze */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                What We Analyze
              </h2>
              <p className="text-muted-foreground">
                Every job goes through these critical verification checks
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {analysisPoints.map((point) => (
                <Card key={point.title} className="p-5 bg-card border-border/50 hover:shadow-card transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <point.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Score Explained */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Understanding Trust Scores
                </h2>
                <p className="text-muted-foreground">
                  What each score range means for you
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-success/5 border-success/20 text-center">
                  <div className="text-4xl font-bold text-success mb-2">70-100</div>
                  <h3 className="font-semibold text-foreground mb-2">Safe</h3>
                  <p className="text-sm text-muted-foreground">
                    The job appears legitimate. Still verify directly with the company before proceeding.
                  </p>
                </Card>

                <Card className="p-6 bg-warning/5 border-warning/20 text-center">
                  <div className="text-4xl font-bold text-warning mb-2">40-69</div>
                  <h3 className="font-semibold text-foreground mb-2">Caution</h3>
                  <p className="text-sm text-muted-foreground">
                    Some concerns found. Research the company thoroughly before applying.
                  </p>
                </Card>

                <Card className="p-6 bg-danger/5 border-danger/20 text-center">
                  <div className="text-4xl font-bold text-danger mb-2">0-39</div>
                  <h3 className="font-semibold text-foreground mb-2">Risky</h3>
                  <p className="text-sm text-muted-foreground">
                    Multiple red flags detected. We strongly advise against proceeding.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Verify?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Don't take chances with your career. Verify any job in seconds.
            </p>
            <Link to="/verify">
              <Button variant="accent" size="xl" className="gap-2">
                Verify a Job Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HowItWorks;
