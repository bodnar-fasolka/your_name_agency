import { Suspense, lazy } from 'react';
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { useLanguage } from "../contexts/LanguageContext";

// Lazy load below-the-fold components for better performance
const Mission = lazy(() => import("@/components/Mission"));
const Values = lazy(() => import("@/components/Values"));
const Team = lazy(() => import("@/components/Team"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for lazy-loaded sections
const ComponentLoader = () => (
  <div className="py-8 flex justify-center">
    <div className="animate-pulse bg-gray-200 h-32 w-full max-w-4xl rounded"></div>
  </div>
);

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`About Us | ${t('siteName')} | Straightforward Marketing`}
        description="Learn about Your_Name_Agency: our mission, values, and team. We research, analyze, and implement marketing strategies for B2B, B2C, and IT companies."
        url="https://www.your-name.agency/about"
      />
      <Header />
      
      {/* About Us Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<ComponentLoader />}>
        <Mission />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Values />
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

export default AboutUs;
