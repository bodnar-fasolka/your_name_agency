import { Suspense, lazy } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import SEO from "@/components/SEO";

// Lazy load below-the-fold components for better performance
const Services = lazy(() => import("@/components/Services"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for lazy-loaded sections
const ComponentLoader = () => (
  <div className="py-8 flex justify-center">
    <div className="animate-pulse bg-gray-200 h-32 w-full max-w-4xl rounded"></div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <Hero />
      <ServicesSection />
      <Suspense fallback={<ComponentLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
