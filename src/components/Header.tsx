import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'uk' ? 'en' : 'uk');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-foreground">{t('siteName')}</div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('services')}
            </a>
            
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('portfolio')}
            </a>
            
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('contact')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'uk' ? 'EN' : 'УК'}
              </span>
            </Button>
            
            <Button variant="outline" className="hidden md:block">
              {t('contactUs')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;