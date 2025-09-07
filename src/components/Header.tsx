import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'uk' ? 'en' : 'uk');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-slide-down">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-foreground hover:text-primary transition-colors">
            {t('siteName')}
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('aboutUs')}
            </Link>
            
            {location.pathname === '/' ? (
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('services')}
              </a>
            ) : (
              <Link to="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('services')}
              </Link>
            )}
            
            {location.pathname === '/' ? (
              <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('portfolio')}
              </a>
            ) : (
              <Link to="/#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('portfolio')}
              </Link>
            )}
            
            {location.pathname === '/' ? (
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('contact')}
              </a>
            ) : (
              <Link to="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('contact')}
              </Link>
            )}
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
            
            <Button size="sm" asChild>
              <a href="https://calendly.com/bodnar-solomiya-v/30min" target="_blank" rel="noopener noreferrer">
                {t('contactUs')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;