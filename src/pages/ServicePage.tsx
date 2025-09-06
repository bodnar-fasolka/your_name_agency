import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ServicePage = () => {
  const { service, subService } = useParams();
  
  const getPageTitle = () => {
    if (subService) {
      return `${subService.charAt(0).toUpperCase() + subService.slice(1)} | ${service?.charAt(0).toUpperCase() + service?.slice(1)} Services`;
    }
    return `${service?.charAt(0).toUpperCase() + service?.slice(1)} Services`;
  };

  const getServiceName = () => {
    const serviceNames: { [key: string]: string } = {
      'launch': 'Launch a Product',
      'management': 'Management',
      'leadgen': 'Lead Generation'
    };
    return serviceNames[service || ''] || service;
  };

  const getSubServiceName = () => {
    const subServiceNames: { [key: string]: string } = {
      'research': 'Research',
      'management': 'Management',
      'strategy': 'Strategy',
      'facebook': 'Facebook',
      'instagram': 'Instagram',
      'tiktok': 'TikTok',
      'threads': 'Threads',
      'x': 'X',
      'seo': 'SEO',
      'ppc': 'PPC',
      'meta-ads': 'Meta Ads'
    };
    return subServiceNames[subService || ''] || subService;
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle()} | Your_Name_Agency</title>
        <meta name="description" content="This service page is currently under construction. Please check back soon for more details." />
        <link rel="canonical" href={`https://www.your-name.agency/services/${service}${subService ? `/${subService}` : ''}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="py-6 px-4 border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            {/* Hero Section */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                {subService ? getSubServiceName() : getServiceName()}
              </h1>
              {subService && (
                <p className="text-xl text-muted-foreground mb-4">
                  Part of {getServiceName()} Services
                </p>
              )}
            </header>

            {/* Under Construction Message */}
            <section className="py-20">
              <div className="max-w-2xl mx-auto">
                <div className="text-6xl mb-8">🚧</div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                  This page is under construction
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We're working hard to bring you detailed information about our {subService ? getSubServiceName() : getServiceName()} services. 
                  Please check back soon or contact us directly for more information.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://calendly.com/bodnar-solomiya-v/30min" target="_blank" rel="noopener noreferrer">
                      Schedule a Consultation
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/">
                      Return to Homepage
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default ServicePage;
