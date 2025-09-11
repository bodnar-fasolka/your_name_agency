import { useState, useEffect, Suspense, lazy } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import FaqSection from "../components/FaqSection";
import Loader from "../components/Loader";

// Lazy load Portfolio and Contact components
const Portfolio = lazy(() => import("../components/Portfolio"));
const Contact = lazy(() => import("../components/Contact"));

// Loading component for lazy-loaded sections
const ComponentLoader = () => (
  <div className="py-8 flex justify-center">
    <div className="animate-pulse bg-gray-200 h-32 w-full max-w-4xl rounded"></div>
  </div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Loader isVisible={loading} />
      
      {!loading && (
        <>
          <Header />
          <Hero />
          <ServicesSection />
          <Suspense fallback={<ComponentLoader />}>
            <Portfolio />
          </Suspense>
          <HowWeWorkSection />
          <FaqSection />
          <Suspense fallback={<ComponentLoader />}>
            <Contact />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Home;
