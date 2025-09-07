import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load the Lottie animation from the URL
    const loadAnimation = async () => {
      try {
        console.log("Loading Lottie animation..."); // Debug log
        const response = await fetch("https://lottie.host/724ed371-2016-4f51-b708-817435cfe16d/jewObUFX2i.lottie");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Animation loaded successfully:", data); // Debug log
        setAnimationData(data);
        setError(null);
      } catch (err) {
        console.error("Error loading animation:", err);
        setError(err instanceof Error ? err.message : "Failed to load animation");
      } finally {
        setIsLoading(false);
      }
    };

    loadAnimation();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            {t('siteName')}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            {t('heroSubtitle')}
          </p>
          
          <div className="w-full max-w-2xl mx-auto">
            <Button size="lg" className="w-full px-8 py-3 text-base" asChild>
              <a href="https://calendly.com/bodnar-solomiya-v/30min?month=2025-08" target="_blank" rel="noopener noreferrer">
                {t('scheduleCall')}
              </a>
            </Button>
            
            <p className="text-center text-lg text-gray-700 mt-6 max-w-xl mx-auto">
              {t('marketingSlogan')}
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="mt-10 flex justify-center">
            <div className="max-w-md">
              {isLoading && (
                <div className="w-64 h-64 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
                  <span className="text-gray-500">Loading animation...</span>
                </div>
              )}
              
              {error && (
                <div className="w-64 h-64 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-500 text-sm text-center px-4">
                    Animation failed to load: {error}
                  </span>
                </div>
              )}
              
              {animationData && !isLoading && !error && (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;