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

const QueryForm = () => {
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

    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    console.log("Query submitted:", formData);

    toast({
      title: "Query Submitted!",
      description: "We'll get back to you shortly regarding your appointment.",
    });

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
    <section id="query" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Have a <span className="text-german-gold">Query?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            If you have any questions regarding appointment booking, feel free to reach out.
            Our team is here to clarify your doubts and assist you in the process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Section (Image + Info) */}
          <div className="flex flex-col h-full">
            <img
              src={consultingImage}
              alt="Discussion"
              className="rounded-lg shadow-elegant w-full h-[300px] object-cover"
            />

            <Card className="border-border/50 flex-1 mt-6">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Calendar className="w-5 h-5 mr-2 text-german-gold" />
                  How We Help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-german-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Quick Responses</p>
                    <p className="text-sm text-muted-foreground">We reply to your queries within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-german-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Clear Guidance</p>
                    <p className="text-sm text-muted-foreground">Understand the booking process step by step.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-german-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Friendly Support</p>
                    <p className="text-sm text-muted-foreground">Our team ensures you feel confident and supported.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section (Form) */}
          <Card className="shadow-elegant border-border/50 h-full">
            <CardHeader>
              <CardTitle className="text-foreground">Send Us Your Query</CardTitle>
              <CardDescription>
                Fill out the form below and we’ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
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
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Question *</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your query here..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" variant="consultation" size="lg" className="w-full">
                  Submit Query
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QueryForm;
