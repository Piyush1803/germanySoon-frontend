import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionSkeleton } from "@/components/layout/SectionSkeleton";
import Footer from "@/components/Footer";

const Services = lazy(() => import("@/components/Services"));
const WhyGermany = lazy(() => import("@/components/WhyGermany"));
const AppointmentForm = lazy(() => import("@/components/AppointmentForm"));

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TrustMarquee />
        <Suspense fallback={<SectionSkeleton />}>
          <Services />
        </Suspense>
        <Process />
        <Suspense fallback={<SectionSkeleton />}>
          <WhyGermany />
        </Suspense>
        <Testimonials />
        <Suspense fallback={<SectionSkeleton />}>
          <AppointmentForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
