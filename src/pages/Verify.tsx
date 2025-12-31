import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { VerificationForm, FormData } from "@/components/verify/VerificationForm";
import { VerificationResult } from "@/components/verify/VerificationResult";

// Simulated verification function
const simulateVerification = (data: FormData) => {
  const suspiciousWords = ["pay fees", "limited seats", "urgent joining", "immediate hiring", "100% placement", "no experience required", "work from home guaranteed"];
  const freeEmails = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "protonmail.com"];
  
  // Extract domain from email
  const emailDomain = data.recruiterEmail.split("@")[1]?.toLowerCase() || "";
  const isFreeEmail = freeEmails.some(d => emailDomain.includes(d));
  
  // Check if email matches company name
  const companyNameClean = data.companyName.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
  const emailMatchesCompany = emailDomain.includes(companyNameClean) || companyNameClean.includes(emailDomain.split(".")[0]);
  
  // Check for suspicious words in description
  const descLower = data.jobDescription.toLowerCase();
  const foundFlags = suspiciousWords.filter(word => descLower.includes(word));
  
  // Check URL
  const hasHttps = data.jobLink.startsWith("https://");
  const isKnownDomain = ["linkedin.com", "indeed.com", "naukri.com", "glassdoor.com", ".gov.in", ".edu"].some(d => data.jobLink.includes(d));
  
  // Calculate score
  let score = 50;
  
  // Website checks
  if (hasHttps) score += 10;
  if (isKnownDomain) score += 15;
  
  // Email checks
  if (isFreeEmail) score -= 15;
  if (emailMatchesCompany) score += 15;
  
  // Description checks
  score -= foundFlags.length * 10;
  
  // Add some randomness for demo
  score += Math.floor(Math.random() * 10) - 5;
  score = Math.max(0, Math.min(100, score));
  
  return {
    score,
    websiteChecks: {
      isSecure: {
        passed: hasHttps,
        message: hasHttps ? "Website uses secure HTTPS connection" : "Website does not use secure HTTPS",
        severity: hasHttps ? "success" as const : "danger" as const,
      },
      isEstablished: {
        passed: isKnownDomain,
        message: isKnownDomain ? "Domain is from a reputable job platform" : "Domain age could not be verified",
        severity: isKnownDomain ? "success" as const : "warning" as const,
      },
      isSuspicious: {
        passed: score > 40,
        message: score > 40 ? "No suspicious patterns detected in URL" : "URL contains potentially suspicious patterns",
        severity: score > 40 ? "success" as const : "danger" as const,
      },
    },
    emailChecks: {
      isFreeEmail: {
        passed: !isFreeEmail,
        message: isFreeEmail ? `Using free email provider (${emailDomain})` : "Using professional email domain",
        severity: isFreeEmail ? "warning" as const : "success" as const,
      },
      matchesCompany: {
        passed: emailMatchesCompany,
        message: emailMatchesCompany ? "Email domain matches company name" : "Email domain doesn't match company",
        severity: emailMatchesCompany ? "success" as const : "warning" as const,
      },
    },
    descriptionChecks: {
      flags: foundFlags,
      riskLevel: foundFlags.length === 0 ? "low" as const : foundFlags.length <= 2 ? "medium" as const : "high" as const,
    },
    mlPrediction: {
      confidence: Math.floor(75 + Math.random() * 20),
      prediction: score >= 70 ? "safe" as const : score >= 40 ? "uncertain" as const : "risky" as const,
    },
  };
};

const Verify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof simulateVerification> & { companyName: string } | null>(null);

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const verificationResult = simulateVerification(data);
    setResult({ ...verificationResult, companyName: data.companyName });
    setIsLoading(false);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Job Verification Portal
              </h1>
              <p className="text-muted-foreground">
                Enter the job details below and let our AI analyze its authenticity.
              </p>
            </div>

            {/* Form or Result */}
            {result ? (
              <VerificationResult {...result} onReset={handleReset} />
            ) : (
              <VerificationForm onSubmit={handleSubmit} isLoading={isLoading} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Verify;
