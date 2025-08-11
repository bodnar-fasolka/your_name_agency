import { useLanguage } from "../contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();
  
  return (
    <section id="team" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            {t('teamTitle')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Соломія Боднар */}
          <div className="text-center slide-up">
            <div className="mb-6">
              <picture>
                <source 
                  srcSet="/optimized/solomiya-256.avif 256w, /optimized/solomiya-512.avif 512w"
                  sizes="(max-width: 768px) 256px, 256px"
                  type="image/avif"
                />
                <source 
                  srcSet="/optimized/solomiya-256.webp 256w, /optimized/solomiya-512.webp 512w"
                  sizes="(max-width: 768px) 256px, 256px"
                  type="image/webp"
                />
                <img 
                  src="/optimized/solomiya-256.jpg"
                  srcSet="/optimized/solomiya-256.jpg 256w, /optimized/solomiya-512.jpg 512w"
                  sizes="(max-width: 768px) 256px, 256px"
                  alt={t('solomiyaName')}
                  width="256"
                  height="256"
                  loading="lazy"
                  className="w-64 h-64 mx-auto rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </picture>
            </div>
            <h3 className="text-xl font-medium mb-4 text-foreground">
              {t('solomiyaName')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('solomiyaDescription')}
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/solka-bodnar-373ab9201/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/sol.fasolka/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Ірина Перів */}
          <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <picture>
                <source 
                  srcSet="/optimized/iryna-256.avif 256w, /optimized/iryna-512.avif 512w"
                  sizes="(max-width: 768px) 256px, 256px"
                  type="image/avif"
                />
                <source 
                  srcSet="/optimized/iryna-256.webp 256w, /optimized/iryna-512.webp 512w"
                  sizes="(max-width: 768px) 256px, 256px"
                  type="image/webp"
                />
                <img 
                  src="/optimized/iryna-256.jpg"
                  srcSet="/optimized/iryna-256.jpg 256w, /optimized/iryna-512.jpg 512w"
                  sizes="(max-width: 768px) 256px, 256px"
                  alt={t('irynaName')}
                  width="256"
                  height="256"
                  loading="lazy"
                  className="w-64 h-64 mx-auto rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </picture>
            </div>
            <h3 className="text-xl font-medium mb-4 text-foreground">
              {t('irynaName')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('irynaDescription')}
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/iryna-periv-752b81329/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/irynaperiv/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
