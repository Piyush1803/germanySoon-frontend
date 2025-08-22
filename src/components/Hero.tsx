import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, GraduationCap, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-germany.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful Germany cityscape"
          className="w-full h-full object-cover"
        />
        {/* Adjusted background tint */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your Gateway to{" "}
            <span className="block text-[#FFC107]">Germany</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Transform your future with world-class education, career opportunities,
            and an exceptional lifestyle in Germany
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="group bg-[#FFC107] hover:bg-[#e6ac00] text-black font-semibold px-6 py-3 rounded-xl shadow-lg"
            >
              Book Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              className="bg-white/10 border border-white/30 text-white hover:bg-white/20 px-6 py-3 rounded-xl"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center animate-slide-in">
              <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Students Placed</div>
            </div>

            <div className="flex flex-col items-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>

            <div className="flex flex-col items-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Partner Universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
