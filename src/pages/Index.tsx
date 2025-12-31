import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StepCard } from "@/components/shared/StepCard";
import { StatCard } from "@/components/shared/StatCard";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-bg.jpg";
import {
  Shield,
  Globe,
  Mail,
  FileText,
  Brain,
  AlertTriangle,
  CheckCircle2,
  Users,
  Lock,
  Search,
  BarChart3,
  Flag,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Website Security Check",
    description: "We verify SSL certificates, domain age, and check for suspicious patterns in the job posting URL.",
  },
  {
    icon: Mail,
    title: "Email Verification",
    description: "Detect free email providers and verify if the recruiter's email matches the company domain.",
  },
  {
    icon: FileText,
    title: "Description Analysis",
    description: "AI scans for red flags like 'pay fees', 'urgent joining', or unrealistic salary promises.",
  },
  {
    icon: Brain,
    title: "ML Prediction",
    description: "Our model trained on 10,000+ verified jobs predicts if a posting is safe or risky.",
  },
  {
    icon: BarChart3,
    title: "Trust Score",
    description: "Get a comprehensive 0-100 trust score combining all verification checks.",
  },
  {
    icon: Flag,
    title: "Community Reports",
    description: "Students can report fake jobs to protect others from falling for the same scam.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Enter Job Details",
    description: "Paste the company name, job link, recruiter email, and job description.",
  },
  {
    icon: Shield,
    title: "Automated Verification",
    description: "Our AI analyzes website security, email authenticity, and description flags.",
  },
  {
    icon: Brain,
    title: "ML Analysis",
    description: "Machine learning compares against known fake and legitimate job patterns.",
  },
  {
    icon: CheckCircle2,
    title: "Get Trust Score",
    description: "Receive a comprehensive trust score with detailed breakdown and recommendations.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-hero opacity-95" />
          <img
            src={heroImage}
            alt="Security background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6 animate-fade-up">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Job Verification</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Protect Yourself from{" "}
              <span className="text-gradient">Fake Jobs</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Don't let scammers exploit your job search. Verify any job or internship in seconds with our AI-powered verification system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Link to="/verify">
                <Button variant="accent" size="xl" className="gap-2">
                  Verify a Job Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="glass" size="xl">
                  Learn How It Works
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <StatCard value="12,000+" label="Jobs Verified" />
              <StatCard value="2,500+" label="Scams Detected" />
              <StatCard value="8,000+" label="Students Protected" />
              <StatCard value="98%" label="Accuracy Rate" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Verification
            </h2>
            <p className="text-muted-foreground">
              Our multi-layered approach ensures no fake job slips through the cracks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Get verified results in just 4 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <StepCard key={step.title} step={index + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <AlertTriangle className="h-12 w-12 text-warning mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Found a Suspicious Job?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Help protect other students by reporting fake jobs. Your report could save someone from losing money or personal information.
              </p>
              <Link to="/report">
                <Button variant="accent" size="xl" className="gap-2">
                  <Flag className="h-5 w-5" />
                  Report a Fake Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              <span className="text-sm font-medium">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Data Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">Trusted by 8000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              <span className="text-sm font-medium">AI-Powered Analysis</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
