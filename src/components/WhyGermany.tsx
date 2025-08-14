import { Card, CardContent } from "@/components/ui/card";
import { Euro, Award, Globe, TrendingUp, Shield, Coffee } from "lucide-react";
import educationImage from "@/assets/education-lifestyle.jpg";

const WhyGermany = () => {
  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "World-Class Education",
      description: "Top-ranked universities with cutting-edge research and industry connections"
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Affordable Tuition",
      description: "Low or no tuition fees at public universities, making quality education accessible"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strong Economy",
      description: "Europe's largest economy with abundant job opportunities in all sectors"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cultural Diversity",
      description: "Multicultural society with welcoming communities and international exposure"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Social Security",
      description: "Excellent healthcare, social benefits, and quality of life standards"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Emphasis on work-life balance with generous vacation time and flexible schedules"
    }
  ];

  const stats = [
    { number: "83M", label: "Population" },
    { number: "€46K", label: "Average Salary" },
    { number: "400+", label: "Universities" },
    { number: "4th", label: "Global Economy" }
  ];

  return (
    <section id="why-germany" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-german-gold">Germany?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why Germany is the perfect destination for your education, 
            career, and life goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={educationImage}
              alt="Students in Germany"
              className="rounded-lg shadow-elegant w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-german-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-german-gold">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
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
              <div className="text-3xl md:text-4xl font-bold text-german-gold mb-2">
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