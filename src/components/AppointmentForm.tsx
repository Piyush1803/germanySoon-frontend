import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import consultingImage from "@/assets/consulting-office.jpg";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.serviceType) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Appointment booking:", formData);
    
    toast({
      title: "Appointment Booked!",
      description: "We'll contact you within 24 hours to confirm your consultation.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="appointment" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Book Your Free <span className="text-german-gold">Consultation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards your German dream. Schedule a personalized consultation 
            with our expert advisors to discuss your goals and create a tailored plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Image and Info */}
          <div className="space-y-6">
            <img
              src={consultingImage}
              alt="Consultation meeting"
              className="rounded-lg shadow-elegant w-full h-[300px] object-cover"
            />
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Calendar className="w-5 h-5 mr-2 text-german-gold" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-german-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Personalized Assessment</p>
                    <p className="text-sm text-muted-foreground">We'll evaluate your profile and goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-german-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Tailored Roadmap</p>
                    <p className="text-sm text-muted-foreground">Get a step-by-step plan for your journey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-german-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Expert Guidance</p>
                    <p className="text-sm text-muted-foreground">Direct access to our experienced consultants</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Schedule Your Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Interest *</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="university">University Admission</SelectItem>
                      <SelectItem value="career">Career Guidance</SelectItem>
                      <SelectItem value="visa">Visa & Documentation</SelectItem>
                      <SelectItem value="accommodation">Accommodation</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle Integration</SelectItem>
                      <SelectItem value="all">Complete Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Preferred Date
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Preferred Time
                    </Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9-11">9:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11-13">11:00 AM - 1:00 PM</SelectItem>
                        <SelectItem value="13-15">1:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="15-17">3:00 PM - 5:00 PM</SelectItem>
                        <SelectItem value="17-19">5:00 PM - 7:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals, timeline, or any specific questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="consultation" size="lg" className="w-full">
                  Book Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;