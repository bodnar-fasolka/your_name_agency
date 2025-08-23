import { Suspense, lazy } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";

// Lazy load below-the-fold components for better performance
const Values = lazy(() => import("@/components/Values"));
const Services = lazy(() => import("@/components/Services"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Team = lazy(() => import("@/components/Team"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for lazy-loaded sections
const ComponentLoader = () => (
  <div className="py-8 flex justify-center">
    <div className="animate-pulse bg-gray-200 h-32 w-full max-w-4xl rounded"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <Hero />
      <Suspense fallback={<ComponentLoader />}>
        <Values />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Team />
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

export default Index;
