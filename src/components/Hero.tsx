import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-0 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-foreground leading-tight text-center typing">
            <span className="typing-reveal md:hidden">Y_N_A</span>
            <span className="typing-reveal hidden md:inline">{t('siteName')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
            {t('heroSubtitle')}
          </p>
          
          <div className="w-full max-w-2xl mx-auto mb-6 md:mb-10">
            <Button size="lg" className="w-full px-8 py-3 text-base" asChild>
              <a href="https://calendly.com/bodnar-solomiya-v/30min?month=2025-08" target="_blank" rel="noopener noreferrer">
                {t('scheduleCall')}
              </a>
            </Button>
            
            <p className="text-center text-lg text-gray-700 mt-4 md:mt-6 max-w-xs md:max-w-xl mx-auto">
              {t('marketingSlogan')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Cat Movement Animation at the end of the section */}
      <div className="flex justify-center">
        <div className="max-w-xs">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg"
          >
            <source src="/Cat Movement.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;