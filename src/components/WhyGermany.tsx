import { Card, CardContent } from "@/components/ui/card";
import { Euro, Award, Globe, TrendingUp, Shield, Coffee } from "lucide-react";
import educationImage from "@/assets/education-lifestyle.jpg";

const WhyGermany = () => {
  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "World-Class Education",
      description:
        "Top-ranked universities with cutting-edge research and industry connections",
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Affordable Tuition",
      description:
        "Low or no tuition fees at public universities, making quality education accessible",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strong Economy",
      description:
        "Europe's largest economy with abundant job opportunities in all sectors",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cultural Diversity",
      description:
        "Multicultural society with welcoming communities and international exposure",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Social Security",
      description:
        "Excellent healthcare, social benefits, and quality of life standards",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Work-Life Balance",
      description:
        "Emphasis on work-life balance with generous vacation time and flexible schedules",
    },
  ];

  const stats = [
    { number: "83M", label: "Population" },
    { number: "€46K", label: "Average Salary" },
    { number: "400+", label: "Universities" },
    { number: "4th", label: "Global Economy" },
  ];

  return (
    <section id="why-germany" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-brandYellow">Germany?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why Germany is the perfect destination for your education,
            career, and life goals.
          </p>
        </div>

        {/* Image & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Image */}
          <div className="flex items-center">
            <img
              src={educationImage}
              alt="Students in Germany"
              className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
            />
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border border-brandYellow/40 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brandYellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-brandYellow">{benefit.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-brandYellow mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGermany;
