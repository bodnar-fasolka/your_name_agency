import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CaseFourface = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "4FACE — перший незалежний б'юті-журнал для української аудиторії",
    "description": "Кейс-стаді про створення першого незалежного українського б'юті-журналу 4FACE: дослідження, стратегія, позиціонування та результати.",
    "author": {
      "@type": "Organization",
      "name": "Your_Name_Agency"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your_Name_Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.your-name.agency/favicon.svg"
      }
    },
    "datePublished": "2025-08-18",
    "dateModified": "2025-08-18",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.your-name.agency/cases/4face"
    },
    "image": "https://www.your-name.agency/preview.svg"
  };

  return (
    <>
      <Helmet>
        <title>Кейс: 4FACE — незалежний б'юті-журнал (дослідження, стратегія, результати)</title>
        <meta name="description" content="Як ми запустили 4FACE: 70+ інтерв'ю, стратегія, +4000 підписників, 50 сліпих тестів, колаборації з EVA, Sia Med Summit." />
        <link rel="canonical" href="https://www.your-name.agency/cases/4face" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Кейс: 4FACE — незалежний б'юті-журнал" />
        <meta property="og:description" content="Як ми запустили 4FACE: 70+ інтерв'ю, стратегія, +4000 підписників, 50 сліпих тестів, колаборації з EVA, Sia Med Summit." />
        <meta property="og:url" content="https://www.your-name.agency/cases/4face" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.your-name.agency/preview.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Кейс: 4FACE — незалежний б'юті-журнал" />
        <meta name="twitter:description" content="Як ми запустили 4FACE: 70+ інтерв'ю, стратегія, +4000 підписників, 50 сліпих тестів, колаборації з EVA, Sia Med Summit." />
        <meta name="twitter:image" content="https://www.your-name.agency/preview.svg" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="py-6 px-4 border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <Link 
              to="/cases" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Повернутися до всіх кейсів
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-12 px-4">
          <article className="container mx-auto max-w-4xl">
            {/* Hero Section - H1 */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Кейс: 4FACE — перший незалежний б'юті-журнал для української аудиторії
              </h1>
            </header>

            {/* Про проєкт - H2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Про проєкт
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  4FACE — це електронний журнал-платформа, створений жінками для жінок, який поєднує:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>відео-відгуки</li>
                  <li>сліпі тестування</li>
                  <li>науковий аналіз складу</li>
                  <li>картки продуктів з оцінками та поясненнями</li>
                  <li>редакційний контент у стилі Vogue, без тотальної реклами</li>
                </ul>
              </div>
            </section>

            {/* Запит - H2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Запит
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground">
                <ul className="space-y-2 ml-6 list-disc">
                  <li>аудиторія</li>
                  <li>стратегія</li>
                  <li>позиціонування</li>
                  <li>підготовка до монетизації</li>
                </ul>
              </div>
            </section>

            {/* Рішення - H2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Рішення
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground">
                <ul className="space-y-2 ml-6 list-disc">
                  <li>70+ якісних інтерв'ю (ментальні моделі)</li>
                  <li>кількісні опитування</li>
                  <li>фокус на ключовій аудиторії</li>
                  <li>маркетингова та комунікаційна стратегія</li>
                </ul>
              </div>
            </section>

            {/* Результат - H2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Результат
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground">
                <ul className="space-y-2 ml-6 list-disc">
                  <li>4 000+ підписників</li>
                  <li>50+ сліпих тестів</li>
                  <li>колаборації з EVA</li>
                  <li>запрошення на Sia Med Summit</li>
                </ul>
              </div>
            </section>

            {/* Висновок - H2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Висновок
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Успіх починається з досліджень. Коли розумієш аудиторію на глибинному рівні, 
                  навіть ідея може стати впливовим медіа-продуктом.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 border-t border-border">
              <Button size="lg" asChild className="px-8 py-3">
                <Link to="/#contact">
                  Зв'язатися
                </Link>
              </Button>
            </section>
          </article>
        </main>
      </div>
    </>
  );
};

export default CaseFourface;
