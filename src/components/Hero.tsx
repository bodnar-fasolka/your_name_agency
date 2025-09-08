import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

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

          {/* Cat Movement Animation */}
          <div className="mt-10 flex justify-center">
            <div className="max-w-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto max-w-sm mx-auto rounded-lg"
              >
                <source src="/Cat Movement.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;