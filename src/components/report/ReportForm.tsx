import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { 
  AlertTriangle, 
  Building2, 
  Link, 
  Upload, 
  FileText, 
  Loader2, 
  CheckCircle2,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ReportForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    companyName: "",
    jobLink: "",
    description: "",
    additionalInfo: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Report Submitted Successfully",
      description: "Thank you for helping keep the community safe!",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center bg-card border-success/30">
        <div className="mx-auto w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
          <CheckCircle2 className="h-8 w-8 text-success" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Report Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for helping protect other students. Our team will review your report within 24-48 hours.
        </p>
        <Button variant="outline" onClick={() => {
          setIsSubmitted(false);
          setFormData({ companyName: "", jobLink: "", description: "", additionalInfo: "" });
          setFiles([]);
        }}>
          Submit Another Report
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8 bg-card border-border/50 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-danger/10">
          <AlertTriangle className="h-5 w-5 text-danger" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Report Fake Job</h2>
          <p className="text-sm text-muted-foreground">Help us protect other students from scams</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="companyName" className="flex items-center gap-2 text-foreground">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            Company/Organization Name
          </Label>
          <Input
            id="companyName"
            placeholder="Name of the fake company"
            value={formData.companyName}
            onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
            required
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="jobLink" className="flex items-center gap-2 text-foreground">
            <Link className="h-4 w-4 text-muted-foreground" />
            Job Link (if available)
          </Label>
          <Input
            id="jobLink"
            type="url"
            placeholder="https://..."
            value={formData.jobLink}
            onChange={(e) => setFormData((prev) => ({ ...prev, jobLink: e.target.value }))}
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="flex items-center gap-2 text-foreground">
            <FileText className="h-4 w-4 text-muted-foreground" />
            What happened?
          </Label>
          <Textarea
            id="description"
            placeholder="Describe your experience with this fake job..."
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            required
            rows={4}
            className="bg-background border-border resize-none"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-foreground">
            <Upload className="h-4 w-4 text-muted-foreground" />
            Upload Proof (Screenshots, emails, etc.)
          </Label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors">
            <input
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PNG, JPG, PDF up to 10MB (max 5 files)
              </p>
            </label>
          </div>
          
          {files.length > 0 && (
            <div className="space-y-2 mt-3">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                  <span className="text-sm text-foreground truncate flex-1">{file.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalInfo" className="text-foreground">
            Additional Information (Optional)
          </Label>
          <Textarea
            id="additionalInfo"
            placeholder="Any other details that might help..."
            value={formData.additionalInfo}
            onChange={(e) => setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }))}
            rows={3}
            className="bg-background border-border resize-none"
          />
        </div>

        <Button 
          type="submit" 
          variant="danger" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting Report...
            </>
          ) : (
            <>
              <AlertTriangle className="h-5 w-5" />
              Submit Report
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};
