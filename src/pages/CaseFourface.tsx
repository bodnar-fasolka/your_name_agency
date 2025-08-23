import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
        <title>Case Study: 4FACE — Beauty Magazine Research & Strategy | Your_Name_Agency</title>
        <meta name="description" content="How we built 4FACE — the first independent Ukrainian beauty magazine. Research, strategy, positioning, results: +4000 followers, 50 blind tests, retail collaborations." />
        <link rel="canonical" href="https://www.your-name.agency/cases/4face" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Case Study: 4FACE — Beauty Magazine Research & Strategy" />
        <meta property="og:description" content="How we built 4FACE — the first independent Ukrainian beauty magazine. Research, strategy, positioning, results: +4000 followers, 50 blind tests, retail collaborations." />
        <meta property="og:url" content="https://www.your-name.agency/cases/4face" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.your-name.agency/preview.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Study: 4FACE — Beauty Magazine Research & Strategy" />
        <meta name="twitter:description" content="How we built 4FACE — the first independent Ukrainian beauty magazine. Research, strategy, positioning, results: +4000 followers, 50 blind tests, retail collaborations." />
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
              Повернутися до кейсів
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-12 px-4">
          <article className="container mx-auto max-w-4xl prose prose-lg prose-gray dark:prose-invert">
            {/* Hero Section */}
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                4FACE — перший незалежний б'юті-журнал для української аудиторії
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>Сфера: Медіа & Beauty</span>
                <span>•</span>
                <span>Тривалість: 8 місяців</span>
                <span>•</span>
                <span>Результат: 4000+ підписників</span>
              </div>
            </header>

            {/* Project Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Проєкт
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">4FACE</strong> — створений жінками для жінок. 
                  Це електронний журнал-платформа, який поєднує:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>відео-відгуки,</li>
                  <li>сліпі тестування,</li>
                  <li>науковий аналіз складу продуктів,</li>
                  <li>картки продуктів з оцінками та поясненнями,</li>
                  <li>редакційний контент, як у Vogue, тільки без реклами на кожному кроці.</li>
                </ul>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Виклик
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Ідея була топ, але виникло питання: <em>як реалізувати, куди йти, що робити?</em>
                </p>
                <p>
                  Ми знали: почати треба з досліджень, а далі — маркетингова стратегія, 
                  комунікаційна стратегія, позиціонування та впровадження.
                </p>
              </div>
            </section>

            {/* Solution Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Рішення
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>Ми провели масштабне дослідження:</p>
                <ul className="space-y-3 ml-6">
                  <li>
                    <strong className="text-foreground">70+ якісних інтерв'ю</strong> за методологією 
                    <em> ментальні моделі</em> (щоб зрозуміти справжні потреби).
                  </li>
                  <li>Кількісні опитування, які підтвердили гіпотези.</li>
                  <li>Сфокусувалися на основній аудиторії.</li>
                </ul>
                <p>
                  На основі цього створили стратегію та запустили впровадження.
                </p>
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Результати
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">📊</span>
                    <span>4 000+ підписників у соцмережах</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🧪</span>
                    <span>проведено 50+ сліпих тестувань</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🤝</span>
                    <span>колаборації з рітейлами (зокрема <strong className="text-foreground">EVA</strong>)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🎤</span>
                    <span>виступ на <strong className="text-foreground">Sia Med Summit</strong> — найбільшій косметологічній конференції України</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Висновок
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Кожна сильна стратегія починається з досліджень.
                </p>
                <p>
                  Наш кейс показує: коли розумієш аудиторію на глибинному рівні, 
                  навіть ідея може стати впливовим медіа-продуктом.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 border-t border-border">
              <Button size="lg" asChild className="px-8 py-3">
                <Link to="/cases" className="inline-flex items-center gap-2">
                  Дивитися всі кейси
                  <ExternalLink size={16} />
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
