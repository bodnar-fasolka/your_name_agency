import { useLanguage } from "../contexts/LanguageContext";

const Values = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      title: t('valuesTitle1'),
      description: t('valuesDescription1')
    },
    {
      title: t('valuesTitle2'),
      description: t('valuesDescription2')
    },
    {
      title: t('valuesTitle3'),
      description: t('valuesDescription3')
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            {t('valuesTitle')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-medium mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
