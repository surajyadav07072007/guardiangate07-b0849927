import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { VerificationForm, FormData } from "@/components/verify/VerificationForm";
import { VerificationResult } from "@/components/verify/VerificationResult";

// Simulated verification function
const simulateVerification = (data: FormData) => {
  const suspiciousWords = ["pay fees", "limited seats", "urgent joining", "immediate hiring", "100% placement", "no experience required", "work from home guaranteed", "registration fee", "security deposit"];
  const freeEmails = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "protonmail.com"];
  
  // Extract domain from email (handle optional)
  const emailDomain = data.recruiterEmail ? data.recruiterEmail.split("@")[1]?.toLowerCase() || "" : "";
  const isFreeEmail = emailDomain ? freeEmails.some(d => emailDomain.includes(d)) : null;
  
  // Check if email matches company name
  const companyNameClean = data.companyName.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
  const emailMatchesCompany = emailDomain ? (emailDomain.includes(companyNameClean) || companyNameClean.includes(emailDomain.split(".")[0])) : null;
  
  // Check for suspicious words in description
  const descLower = data.jobDescription.toLowerCase();
  const foundFlags = suspiciousWords.filter(word => descLower.includes(word));
  
  // Check URL (handle optional)
  const hasHttps = data.jobLink ? data.jobLink.startsWith("https://") : null;
  const isKnownDomain = data.jobLink ? ["linkedin.com", "indeed.com", "naukri.com", "glassdoor.com", ".gov.in", ".edu"].some(d => data.jobLink.includes(d)) : null;
  
  // Image analysis simulation
  const hasImages = data.uploadedImages.length > 0;
  const imageAnalysisResult = hasImages ? {
    textExtracted: true,
    suspiciousContent: Math.random() > 0.7,
    confidence: Math.floor(70 + Math.random() * 25),
  } : null;
  
  // Calculate score
  let score = 50;
  let checksPerformed = 0;
  
  // Website checks (only if URL provided)
  if (data.jobLink) {
    checksPerformed++;
    if (hasHttps) score += 10;
    if (isKnownDomain) score += 15;
  }
  
  // Email checks (only if email provided)
  if (data.recruiterEmail) {
    checksPerformed++;
    if (isFreeEmail) score -= 15;
    if (emailMatchesCompany) score += 15;
  }
  
  // Description checks
  if (data.jobDescription) {
    checksPerformed++;
    score -= foundFlags.length * 10;
  }
  
  // Image analysis bonus
  if (hasImages) {
    checksPerformed++;
    score += 5; // Bonus for providing evidence
    if (imageAnalysisResult?.suspiciousContent) {
      score -= 20;
    }
  }
  
  // Normalize score based on available data
  if (checksPerformed < 2) {
    score = Math.max(30, Math.min(70, score)); // Limited confidence
  }
  
  // Add some randomness for demo
  score += Math.floor(Math.random() * 10) - 5;
  score = Math.max(0, Math.min(100, score));
  
  return {
    score,
    websiteChecks: data.jobLink ? {
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
    } : null,
    emailChecks: data.recruiterEmail ? {
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
    } : null,
    descriptionChecks: data.jobDescription ? {
      flags: foundFlags,
      riskLevel: foundFlags.length === 0 ? "low" as const : foundFlags.length <= 2 ? "medium" as const : "high" as const,
    } : null,
    imageAnalysis: imageAnalysisResult,
    imagesAnalyzed: data.uploadedImages.length,
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
