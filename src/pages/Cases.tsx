import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cases = () => {
  const cases = [
    {
      id: 'fourface',
      title: '4FACE',
      subtitle: 'Перший незалежний б\'юті-журнал для української аудиторії',
      description: 'Як ми створили медіа-платформу з нуля: від ідеї до 4000+ підписників та співпраці з EVA.',
      tags: ['Медіа', 'Beauty', 'Дослідження'],
      results: ['4000+ підписників', '50+ тестувань', 'Колаборації з рітейлами'],
      link: '/cases/4face'
    },
    {
      id: 'ucu-leadership',
      title: 'Центр Лідерства УКУ',
      subtitle: 'Дослідницький центр з викладання лідерства',
      description: 'Створення каналів комунікації та впізнаваності для дослідницького центру університету.',
      tags: ['Освіта', 'Дослідження', 'Digital'],
      results: ['1300% зросту показників сайту', '3 міжнародні конференції', '20-25% щомісячне зростання'],
      link: '/cases/ucu-leadership'
    },
    {
      id: 'serpano',
      title: 'Serpano.k',
      subtitle: 'Відпочинковий комплекс у Карпатах',
      description: 'Підвищення заповнюваності відпочинкового комплексу через Instagram та нову стратегію.',
      tags: ['Туризм', 'SMM', 'Instagram'],
      results: ['+1400 підписників', '165% зростання взаємодій', '90% заповнення в сезон'],
      link: '/cases/serpano'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Кейси Your_Name_Agency — Маркетингові стратегії та результати",
    "description": "Портфоліо успішних маркетингових кейсів: від стартапів до established брендів. Дослідження, стратегія, результати.",
    "url": "https://www.your-name.agency/cases",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": cases.map((caseItem, index) => ({
        "@type": "Article",
        "position": index + 1,
        "name": caseItem.title,
        "description": caseItem.description,
        "url": `https://www.your-name.agency${caseItem.link}`
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Кейси та Портфоліо | Your_Name_Agency — Маркетингові Стратегії</title>
        <meta name="description" content="Портфоліо успішних маркетингових кейсів Your_Name_Agency: від стартапів до established брендів. Дослідження, стратегія, конкретні результати." />
        <link rel="canonical" href="https://www.your-name.agency/cases" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Кейси та Портфоліо | Your_Name_Agency" />
        <meta property="og:description" content="Портфоліо успішних маркетингових кейсів: від стартапів до established брендів. Дослідження, стратегія, результати." />
        <meta property="og:url" content="https://www.your-name.agency/cases" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.your-name.agency/preview.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Кейси та Портфоліо | Your_Name_Agency" />
        <meta name="twitter:description" content="Портфоліо успішних маркетингових кейсів: від стартапів до established брендів." />
        <meta name="twitter:image" content="https://www.your-name.agency/preview.svg" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="py-6 px-4 border-b border-border">
          <div className="container mx-auto max-w-6xl">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              На головну
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Hero Section */}
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Кейси та Портфоліо
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Конкретні результати наших клієнтів: від дослідження до впровадження стратегій. 
                Кожен кейс — це історія про те, як правильний підхід змінює бізнес.
              </p>
            </header>

            {/* Cases Grid */}
            <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {cases.map((caseItem, index) => (
                <article 
                  key={caseItem.id}
                  className="group p-8 border border-border rounded-lg hover:shadow-lg transition-all duration-300 hover:border-foreground/20 bg-card"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {caseItem.title}
                  </h2>
                  <h3 className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {caseItem.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {caseItem.description}
                  </p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Ключові результати:</h4>
                    <ul className="space-y-2">
                      {caseItem.results.map((result) => (
                        <li key={result} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={caseItem.link} className="inline-flex items-center justify-center gap-2">
                      Читати кейс
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </article>
              ))}
            </section>

            {/* Bottom CTA */}
            <section className="text-center py-16 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Готові обговорити ваш проєкт?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Кожен успішний кейс починається з розмови. Розкажіть нам про ваші виклики — знайдемо рішення.
              </p>
              <Button size="lg" asChild className="px-8 py-3">
                <Link to="/#contact">
                  Почати співпрацю
                </Link>
              </Button>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Cases;
