import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Rocket, Target, TrendingUp, Users, BarChart3, Megaphone } from "lucide-react";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: "Запуск продукту",
      description: "Комплексна стратегія виходу на ринок",
      icon: <Rocket className="w-8 h-8" />,
      link: "/launch-product",
      subServices: [
        { name: "Дослідження", link: "/research" },
        { name: "Стратегія", link: "/strategy" }, 
        { name: "Ведення", link: "/management" }
      ]
    },
    {
      title: t('managementTitle'),
      slug: "management",
      subServices: [
        { name: t('facebookService'), slug: "facebook" },
        { name: t('instagramService'), slug: "instagram" },
        { name: t('tiktokService'), slug: "tiktok" },
        { name: t('threadsService'), slug: "threads" },
        { name: t('xService'), slug: "x" }
      ]
    },
    {
      title: t('leadGenerationTitle'),
      slug: "leadgen",
      subServices: [
        { name: t('seoService'), slug: "seo" },
        { name: t('ppcService'), slug: "ppc" },
        { name: t('metaAdsService'), slug: "meta-ads" }
      ]
    },
    {
      title: "Маркетингові дослідження",
      description: "Глибокий аналіз ринку та цільової аудиторії",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Стратегічне планування",
      description: "Розробка довгострокової маркетингової стратегії",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Digital маркетинг",
      description: "Просування в онлайн каналах та соціальних мережах",
      icon: <Megaphone className="w-8 h-8" />
    },
    {
      title: "Брендинг",
      description: "Створення та розвиток бренду компанії",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Консалтинг",
      description: "Експертні поради з маркетингових питань",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title - Left Aligned */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-left">
            {t('ourServicesTitle')}
          </h2>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            service.link ? (
              <Link
                key={index}
                to={service.link}
                className="group p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary/20 block"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {service.description}
                </p>
              </Link>
            ) : (
              <div 
                key={service.slug}
                className="relative h-full p-[17px] border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-md transition-shadow duration-300 group flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Diagonal Arrow - Bottom Right */}
                <div className="absolute bottom-4 right-4">
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                
                {/* Service Title with Right Arrow */}
                <Link 
                  to={`/services/${service.slug}`}
                  className="block mb-6 group-hover:text-primary transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
                    {service.title}
                    <span className="text-base">➔</span>
                  </h3>
                </Link>
                
                {/* Sub-services - Always underlined */}
                <div className="space-y-3 flex-grow">
                  {service.subServices.map((subService) => (
                    <Link
                      key={subService.slug}
                      to={`/services/${service.slug}/${subService.slug}`}
                      className="block text-muted-foreground underline hover:text-gray-800 transition-colors duration-200 text-sm md:text-base"
                    >
                      {subService.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
