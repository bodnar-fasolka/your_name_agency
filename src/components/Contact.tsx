import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return <section id="contact" className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
            {t('contactTitle')}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="px-8 py-3 text-base" asChild>
              <a href="https://calendly.com/bodnar-solomiya-v/30min" target="_blank" rel="noopener noreferrer">
                {t('contactUs')}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base">
              solomijabodnar@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base">
              +380964070330
            </Button>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default Contact;