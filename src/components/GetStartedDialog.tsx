import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GetStartedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GetStartedDialog: React.FC<GetStartedDialogProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    careNeeded: '',
    message: '',
    preferredContact: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Welcome to DivineAngel Care!",
        description: "We'll reach out to you shortly to discuss your care needs.",
      });
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        careNeeded: '',
        message: '',
        preferredContact: ''
      });
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-accent/5 to-secondary/5">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center shadow-card">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Get Started Today
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Let's begin your journey to compassionate care
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-foreground font-semibold">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="mt-2 border-input focus:border-accent focus:ring-accent"
                placeholder="Your first name"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-foreground font-semibold">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="mt-2 border-input focus:border-accent focus:ring-accent"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-foreground font-semibold">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-2 border-input focus:border-accent focus:ring-accent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground font-semibold">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="mt-2 border-input focus:border-accent focus:ring-accent"
                placeholder="(702) 426-4862"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-foreground font-semibold">Type of Care Needed</Label>
              <Select onValueChange={(value) => handleSelectChange('serviceType', value)}>
                <SelectTrigger className="mt-2 border-input focus:border-accent focus:ring-accent">
                  <SelectValue placeholder="Select care type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="companionship">Companionship & Social Care</SelectItem>
                  <SelectItem value="personal-care">Personal Care Assistance</SelectItem>
                  <SelectItem value="housekeeping">Light Housekeeping</SelectItem>
                  <SelectItem value="meal-prep">Meal Preparation</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                  <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-foreground font-semibold">Care For</Label>
              <Select onValueChange={(value) => handleSelectChange('careNeeded', value)}>
                <SelectTrigger className="mt-2 border-input focus:border-accent focus:ring-accent">
                  <SelectValue placeholder="Who needs care?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parent">My Parent</SelectItem>
                  <SelectItem value="spouse">My Spouse/Partner</SelectItem>
                  <SelectItem value="grandparent">Grandparent</SelectItem>
                  <SelectItem value="myself">Myself</SelectItem>
                  <SelectItem value="other">Other Family</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label className="text-foreground font-semibold">Best Way to Reach You</Label>
            <Select onValueChange={(value) => handleSelectChange('preferredContact', value)}>
              <SelectTrigger className="mt-2 border-input focus:border-accent focus:ring-accent">
                <SelectValue placeholder="How should we contact you?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phone">Phone Call</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="text">Text Message</SelectItem>
                <SelectItem value="any">Whatever is Easiest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="text-foreground font-semibold">
              Tell us about your situation
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-2 min-h-[100px] border-input focus:border-accent focus:ring-accent"
              placeholder="Share your care needs and we'll help you find the perfect solution..."
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-accent via-accent-hover to-accent hover:from-accent-hover hover:to-accent text-white py-4 text-lg rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 group"
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting ? 'Sending...' : 'Start Your Care Journey'}
              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedDialog;
