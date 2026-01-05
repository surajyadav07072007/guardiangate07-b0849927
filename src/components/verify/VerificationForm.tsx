import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Building2, Link, Mail, FileText, Loader2, Shield, Upload, Image, X } from "lucide-react";

interface VerificationFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

export interface FormData {
  companyName: string;
  jobLink: string;
  recruiterEmail: string;
  jobDescription: string;
  uploadedImages: File[];
}

export const VerificationForm = ({ onSubmit, isLoading }: VerificationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    jobLink: "",
    recruiterEmail: "",
    jobDescription: "",
    uploadedImages: [],
  });
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof Omit<FormData, 'uploadedImages'>, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    const newPreviews: string[] = [];

    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          newPreviews.push(e.target.result as string);
          if (newPreviews.length === newFiles.length) {
            setImagePreviews((prev) => [...prev, ...newPreviews]);
          }
        }
      };
      reader.readAsDataURL(file);
    });

    setFormData((prev) => ({
      ...prev,
      uploadedImages: [...prev.uploadedImages, ...newFiles],
    }));
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      uploadedImages: prev.uploadedImages.filter((_, i) => i !== index),
    }));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const isFormValid = formData.companyName.trim() !== "" && 
    (formData.jobDescription.trim() !== "" || formData.uploadedImages.length > 0);

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
            Company Name <span className="text-destructive">*</span>
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
            Job/Internship Link <span className="text-muted-foreground text-xs">(Optional)</span>
          </Label>
          <Input
            id="jobLink"
            type="url"
            placeholder="https://company.com/careers/job-123"
            value={formData.jobLink}
            onChange={(e) => handleChange("jobLink", e.target.value)}
            className="bg-background border-border focus:border-accent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="recruiterEmail" className="flex items-center gap-2 text-foreground">
            <Mail className="h-4 w-4 text-muted-foreground" />
            Recruiter Email <span className="text-muted-foreground text-xs">(Optional)</span>
          </Label>
          <Input
            id="recruiterEmail"
            type="email"
            placeholder="recruiter@company.com"
            value={formData.recruiterEmail}
            onChange={(e) => handleChange("recruiterEmail", e.target.value)}
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
            rows={6}
            className="bg-background border-border focus:border-accent resize-none"
          />
        </div>

        {/* Image Upload Section */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2 text-foreground">
            <Image className="h-4 w-4 text-muted-foreground" />
            Upload Screenshots <span className="text-muted-foreground text-xs">(Job posting, emails, chats)</span>
          </Label>
          
          <div 
            className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">Click to upload images</p>
              <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB each</p>
            </div>
          </div>

          {/* Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg border border-border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {imagePreviews.length > 0 && (
            <p className="text-xs text-success flex items-center gap-1">
              <Shield className="h-3 w-3" />
              {imagePreviews.length} image(s) will be analyzed for suspicious content
            </p>
          )}
        </div>

        <Button 
          type="submit" 
          variant="hero" 
          size="lg" 
          className="w-full"
          disabled={isLoading || !isFormValid}
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

        <p className="text-xs text-center text-muted-foreground">
          * Company name is required. Provide job description or upload screenshots.
        </p>
      </form>
    </Card>
  );
};
