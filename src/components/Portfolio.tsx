import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { t } = useLanguage();
  
  const cases = [
    {
      title: t('case1Title'),
      description: t('case1Description'),
      request: t('case1Request'),
      results: t('case1Results')
    },
    {
      title: t('case2Title'),
      description: t('case2Description'),
      request: t('case2Request'),
      results: t('case2Results')
    },
    {
      title: t('case3Title'),
      description: t('case3Description'),
      request: t('case3Request'),
      results: t('case3Results')
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            {t('portfolioTitle')}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => {
            // Make the 4face card (index 1) clickable
            const isClickable = index === 1; // 4face case
            
            if (isClickable) {
              return (
                <Link
                  key={index}
                  to="/cases/4face"
                  className="p-6 border border-border hover-lift bg-card text-left cursor-pointer transition-all hover:border-foreground/40 block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-medium mb-4 text-foreground">
                    {t('caseLabel')} {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {caseItem.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">{t('requestLabel')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {caseItem.request}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">{t('resultLabel')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {caseItem.results}
                    </p>
                  </div>
                </Link>
              );
            }
            
            return (
              <div 
                key={index}
                className="p-6 border border-border hover-lift bg-card text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-medium mb-4 text-foreground">
                  {t('caseLabel')} {caseItem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {caseItem.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">{t('requestLabel')}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caseItem.request}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t('resultLabel')}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caseItem.results}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12 slide-up">
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/cases" className="inline-flex items-center gap-2">
              {t('viewAllCases')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;