import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load the Lottie animation from the URL
    fetch("https://lottie.host/724ed371-2016-4f51-b708-817435cfe16d/jewObUFX2i.lottie")
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error("Error loading animation:", error));
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
              {animationData && (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: 'auto' }}
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