import { useLanguage } from "../contexts/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
            {t('missionTitle')}
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t('missionText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
