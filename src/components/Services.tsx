import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Home, FileText, Heart, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "University Admission",
      description: "Complete guidance for admission to top German universities and programs tailored to your goals.",
      features: ["Program Selection", "Application Support", "Document Preparation", "Interview Coaching"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Guidance",
      description: "Navigate the German job market with expert advice and networking opportunities.",
      features: ["CV Optimization", "Job Search Strategy", "Interview Preparation", "Networking Events"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Visa & Documentation",
      description: "Streamlined visa processing and document preparation to ensure smooth approval.",
      features: ["Visa Application", "Document Translation", "Legal Compliance", "Timeline Management"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Accommodation",
      description: "Find the perfect housing solution from student dormitories to private apartments.",
      features: ["Housing Search", "Contract Review", "Location Guidance", "Move-in Support"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Lifestyle Integration",
      description: "Adapt to German culture and lifestyle with our comprehensive integration support.",
      features: ["Cultural Orientation", "Language Support", "Social Integration", "Lifestyle Coaching"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Join our vibrant community of students and professionals already thriving in Germany.",
      features: ["Peer Networking", "Mentorship Programs", "Social Events", "Alumni Network"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive Services for Your
            <span className="text-[#FFC107]"> German Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From university admission to career placement, we provide end-to-end support
            to make your transition to Germany seamless and successful.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-border/30 rounded-xl"
            >
              <CardHeader>
                {/* Icon wrapper */}
                <div className="w-16 h-16 bg-[#FFF3CD] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FFC107]/20 transition-colors">
                  <div className="text-[#FFC107] group-hover:text-[#e6ac00] transition-colors">
                    {service.icon}
                  </div>
                </div>

                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
