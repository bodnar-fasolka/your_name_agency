import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { t } = useLanguage();
  
  const cases = [
    {
      id: 'serpano',
      title: 'Serpano.k',
      tags: ['SMM', 'Стратегія', 'Digital'],
      description: 'Підвищення заповнюваності відпочинкового комплексу у Карпатах через Instagram.',
      image: '/images/PICTURE_SERPANOK.png', // Your uploaded Serpano.k background image
      logo: '/images/LOGO_SERPANOK.png', // Your uploaded Serpano.k logo
      link: '/cases/serpano',
      gradient: 'from-green-500/20 to-blue-500/20'
    },
    {
      id: 'fourface',
      title: '4FACE',
      tags: ['Дослідження', 'Стратегія', 'SMM'],
      description: 'Запуск першого незалежного б\'юті-журналу на український ринок.',
      image: '/images/PICTURE_4FACE.png', // Your uploaded 4FACE background image
      logo: '/images/LOGO_4FACE.png', // Your uploaded 4FACE logo
      link: '/case/4face',
      gradient: 'from-pink-500/20 to-purple-500/20'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title - Left Aligned */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-left">
            Кейси
          </h2>
        </div>
        
        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <Link
              key={caseItem.id}
              to={caseItem.link}
              className="group block relative h-80 border-2 border-dashed border-gray-300 rounded-[20px] overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${caseItem.image})`,
                    backgroundColor: '#f3f4f6' // Fallback gray background
                  }}
                />
              </div>

              {/* Content Container */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    {/* Case Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {caseItem.title}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-white rounded-full text-gray-700 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client Logo */}
                  <div className="ml-4 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <img 
                      src={caseItem.logo} 
                      alt={`${caseItem.title} logo`}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        // Fallback if logo doesn't exist
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<div class="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-xs font-bold">${caseItem.title.charAt(0)}</div>`;
                      }}
                    />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end">
                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
                    {caseItem.description}
                  </p>

                  {/* Bottom-right Arrow */}
                  <div className="ml-4">
                    <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center slide-up">
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