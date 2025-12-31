import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Target,
  Heart,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Student Safety First",
      description: "Our primary mission is protecting students from job scams that can cause financial and emotional harm.",
    },
    {
      icon: Target,
      title: "Accuracy Matters",
      description: "We continuously improve our AI models to provide the most accurate job verification possible.",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "We believe in the power of community. Student reports help us protect more students.",
    },
    {
      icon: Lightbulb,
      title: "Transparency",
      description: "We show you exactly why a job received its trust score so you can make informed decisions.",
    },
  ];

  const team = [
    { name: "Security Team", role: "Protecting your data 24/7" },
    { name: "AI Engineers", role: "Building smarter detection models" },
    { name: "Student Advisors", role: "Understanding your needs" },
    { name: "Community Managers", role: "Processing your reports" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 gradient-hero overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                About JobShield
              </h1>
              <p className="text-lg text-primary-foreground/80">
                We're on a mission to protect students from fake job scams using AI-powered verification technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Every year, thousands of students fall victim to fake job scams. They lose money, personal information, and sometimes their trust in the job market.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    JobShield was created to change that. Our AI-powered platform analyzes job postings in seconds, helping students identify potential scams before they become victims.
                  </p>
                  <p className="text-muted-foreground">
                    We believe everyone deserves a safe job search experience, and we're committed to making that a reality.
                  </p>
                </div>
                <Card className="p-8 bg-primary/5 border-primary/10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="text-foreground">12,000+ jobs verified</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="text-foreground">2,500+ scams detected</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="text-foreground">8,000+ students protected</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="text-foreground">98% accuracy rate</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Our Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value) => (
                <Card key={value.title} className="p-6 bg-card border-border/50 text-center hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Our Team
              </h2>
              <p className="text-muted-foreground">
                Dedicated professionals working to keep you safe
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {team.map((member) => (
                <Card key={member.name} className="p-5 bg-card border-border/50 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Have questions, suggestions, or want to partner with us? We'd love to hear from you.
            </p>
            <a href="mailto:support@jobshield.com">
              <Button variant="accent" size="xl" className="gap-2">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
