import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: [
        "Friedrichstraße 123",
        "10117 Berlin, Germany"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "+49 30 123 456 789",
        "+49 30 987 654 321"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Addresses",
      details: [
        "info@germanypath.com",
        "consultation@germanypath.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM"
      ]
    }
  ];

  const socialLinks = [
    { name: "WhatsApp", url: "https://wa.me/4930123456789", color: "bg-green-500" },
    { name: "Telegram", url: "https://t.me/germanypath", color: "bg-blue-500" },
    { name: "LinkedIn", url: "https://linkedin.com/company/germanypath", color: "bg-blue-600" },
    { name: "Facebook", url: "https://facebook.com/germanypath", color: "bg-blue-700" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in <span className="text-german-gold">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your German journey? Contact us today for personalized guidance 
            and expert support every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50 hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <div className="w-12 h-12 bg-german-gold/10 rounded-lg flex items-center justify-center mr-4">
                      <div className="text-german-gold">
                        {info.icon}
                      </div>
                    </div>
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="consultation" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Live Chat
                </Button>
                <Button variant="professional" size="lg" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-lg text-center font-medium hover:opacity-90 transition-opacity`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="border-border/50 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-foreground">Find Our Office</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full h-64 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-german-gold" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">Friedrichstraße 123, Berlin</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;