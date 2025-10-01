import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Home, FileText, Heart, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Ausbildung Program Guidance",
      description:
        "End-to-end assistance in choosing the right Ausbildung profession based on your background and goals.",
      features: [
        "Profile Evaluation",
        "Trade & Course Selection",
        "Eligibility Check",
        "Career Planning"
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Visa & Documentation Support",
      description:
        "Complete help with visa application, document translation, APS, and embassy filing.",
      features: [
        "Visa Application",
        "APS & Translation",
        "Document Verification",
        "Embassy Appointment Support"
      ],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "German Language Preparation",
      description:
        "Guidance and training for A1 to B2 level to meet Ausbildung and visa requirements.",
      features: [
        "A1–B2 Courses",
        "Exam Registration",
        "Interactive Learning",
        "Certificate Assistance"
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Job Placement & Apprenticeship Matching",
      description:
        "We connect you with Ausbildung employers and help you secure apprenticeship contracts.",
      features: [
        "Employer Coordination",
        "Interview Preparation",
        "Contract Assistance",
        "Industry Guidance"
      ],
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Accommodation & Settlement",
      description:
        "Support in finding housing and settling smoothly after arriving in Germany.",
      features: [
        "Student Housing Search",
        "Rental Contracts",
        "Location Guidance",
        "Move-in Assistance"
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "On-Arrival & Community Support",
      description:
        "From airport assistance to local registration, we stay with you even after you land in Germany.",
      features: [
        "Airport Pickup Help",
        "Local Registration",
        "Peer Networking",
        "24x7 Support"
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete Support for Your
            <span className="text-[#FFC107]"> Ausbildung Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From program selection and visa processing to language training,
            placements, and post-arrival support — we guide you at every step of
            your Ausbildung journey in Germany.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-8">
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
