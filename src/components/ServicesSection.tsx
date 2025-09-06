import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Launch a Product",
      slug: "launch",
      subServices: [
        { name: "Research", slug: "research" },
        { name: "Management", slug: "management" },
        { name: "Strategy", slug: "strategy" }
      ]
    },
    {
      title: "Management",
      slug: "management",
      subServices: [
        { name: "Facebook", slug: "facebook" },
        { name: "Instagram", slug: "instagram" },
        { name: "TikTok", slug: "tiktok" },
        { name: "Threads", slug: "threads" },
        { name: "X", slug: "x" }
      ]
    },
    {
      title: "Lead Generation",
      slug: "leadgen",
      subServices: [
        { name: "SEO", slug: "seo" },
        { name: "PPC", slug: "ppc" },
        { name: "Meta Ads", slug: "meta-ads" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            Our Services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.slug}
              className="relative p-8 border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-lg transition-shadow duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Diagonal Arrow */}
              <div className="absolute top-4 right-4">
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              
              {/* Service Title */}
              <Link 
                to={`/services/${service.slug}`}
                className="block mb-6 group-hover:text-primary transition-colors"
              >
                <h3 className="text-xl font-medium text-foreground">
                  {service.title}
                </h3>
              </Link>
              
              {/* Sub-services */}
              <div className="space-y-3">
                {service.subServices.map((subService) => (
                  <Link
                    key={subService.slug}
                    to={`/services/${service.slug}/${subService.slug}`}
                    className="block text-muted-foreground underline hover:text-foreground transition-colors duration-200"
                  >
                    {subService.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
