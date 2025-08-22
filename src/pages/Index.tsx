import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyGermany from "@/components/WhyGermany";
import AppointmentForm from "@/components/AppointmentForm";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyGermany />
      <AppointmentForm />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;