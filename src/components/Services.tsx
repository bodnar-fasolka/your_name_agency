import { useLanguage } from "../contexts/LanguageContext";

const Services = () => {
  const { t, tArray } = useLanguage();
  
  const services = [
    {
      title: t('researchTitle'),
      subtitle: t('researchSubtitle'),
      items: tArray('researchItems')
    },
    {
      title: t('strategyTitle'),
      subtitle: t('strategySubtitle'),
      items: tArray('strategyItems')
    },
    {
      title: t('brandingTitle'),
      subtitle: t('brandingSubtitle'),
      items: tArray('brandingItems')
    },
    {
      title: t('digitalTitle'),
      subtitle: t('digitalSubtitle'),
      items: tArray('digitalItems')
    },
    {
      title: t('consultingTitle'),
      subtitle: t('consultingSubtitle'),
      items: tArray('consultingItems')
    }
  ];

  return (
    <section id="services" className="py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            {t('servicesTitle')}
          </h2>
        </div>
        
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 border border-border hover-lift bg-card text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-medium mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 font-medium">
                {service.subtitle}
              </p>
              <ul className="space-y-1">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;