import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Building2, Link, Mail, FileText, Loader2, Shield } from "lucide-react";

interface VerificationFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

export interface FormData {
  companyName: string;
  jobLink: string;
  recruiterEmail: string;
  jobDescription: string;
}

export const VerificationForm = ({ onSubmit, isLoading }: VerificationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    jobLink: "",
    recruiterEmail: "",
    jobDescription: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="p-6 md:p-8 bg-card border-border/50 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg gradient-primary">
          <Shield className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Job Details</h2>
          <p className="text-sm text-muted-foreground">Enter the job information to verify</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="companyName" className="flex items-center gap-2 text-foreground">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            Company Name
          </Label>
          <Input
            id="companyName"
            placeholder="e.g., Google, Microsoft, TCS"
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
            required
            className="bg-background border-border focus:border-accent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="jobLink" className="flex items-center gap-2 text-foreground">
            <Link className="h-4 w-4 text-muted-foreground" />
            Job/Internship Link
          </Label>
          <Input
            id="jobLink"
            type="url"
            placeholder="https://company.com/careers/job-123"
            value={formData.jobLink}
            onChange={(e) => handleChange("jobLink", e.target.value)}
            required
            className="bg-background border-border focus:border-accent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="recruiterEmail" className="flex items-center gap-2 text-foreground">
            <Mail className="h-4 w-4 text-muted-foreground" />
            Recruiter Email
          </Label>
          <Input
            id="recruiterEmail"
            type="email"
            placeholder="recruiter@company.com"
            value={formData.recruiterEmail}
            onChange={(e) => handleChange("recruiterEmail", e.target.value)}
            required
            className="bg-background border-border focus:border-accent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="jobDescription" className="flex items-center gap-2 text-foreground">
            <FileText className="h-4 w-4 text-muted-foreground" />
            Job Description
          </Label>
          <Textarea
            id="jobDescription"
            placeholder="Paste the complete job description here..."
            value={formData.jobDescription}
            onChange={(e) => handleChange("jobDescription", e.target.value)}
            required
            rows={6}
            className="bg-background border-border focus:border-accent resize-none"
          />
        </div>

        <Button 
          type="submit" 
          variant="hero" 
          size="lg" 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Analyzing Job...
            </>
          ) : (
            <>
              <Shield className="h-5 w-5" />
              Verify This Job
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};
