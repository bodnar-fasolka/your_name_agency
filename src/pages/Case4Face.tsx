import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Case4Face = () => {
  return (
    <>
      <Helmet>
        <title>Кейс: 4FACE — Перший незалежний б'юті-журнал | Your_Name_Agency</title>
        <meta name="description" content="Як ми створили 4FACE — перший незалежний б'юті-журнал для української аудиторії. Дослідження, стратегія та результати: 4000+ підписників, 50+ тестувань." />
        <link rel="canonical" href="https://www.your-name.agency/cases/4face" />
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
              На головну
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-12 px-4">
          <article className="container mx-auto max-w-4xl">
            {/* Hero Section */}
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Кейс: 4FACE
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Перший незалежний б'юті-журнал для української аудиторії
              </p>
            </header>

            {/* What is 4Face Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Що таке 4Face
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                4face - це проект створений жінками для жінок. Це перший незалежний б'юті журнал для української аудиторії.
              </p>
            </section>

            {/* Platform Features Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                4FACE — це електронний журнал-платформа, який поєднує:
              </h2>
              <ul className="space-y-3 text-lg text-muted-foreground ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>відео-відгуки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>сліпе тестування</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>науковий аналіз складу</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>картки продуктів з оцінками та поясненнями</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>редакційний контент, як у Vogue, тільки без реклами на кожному кроці</span>
                </li>
              </ul>
            </section>

            {/* Challenge Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Ідея топ, а як реалізувати, куди йти, що робити?
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Дослідження?! Так саме вони, потім маркетинг стратегія, комунікаційна стратегія, позиціонування все як книжка пише ;) А ну і впровадження стратегії, хороший стратег має бачити як його дитина росте))
              </p>
            </section>

            {/* Results Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Що далі, хочеться багато написати, але буду не багатослівною покажу результати))
              </h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <span>4 000+ підписників у соцмережах</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🧪</span>
                  <span>Проведено 50+ сліпих тестувань</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <span>Запуск колаборацій із рітейлами (зокрема, EVA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎤</span>
                  <span>Запрошення 4face на Sia Med Summit — найбільшу косметологічну конференцію України для презентації дослідження про поведінку споживачок на бʼюті-ринку</span>
                </li>
              </ul>
            </section>

            {/* Thank You Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Дякую, що дочитали до сюди
              </h2>
            </section>

            {/* Research Details Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Трішки скучної інформації:
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="font-medium text-foreground">
                  Кожна крута стратегія починається із глибинного дослідження
                </p>
                <p>
                  Тепер про дослідження, ви навіть не уявляєте як я їх обожнюю, одже:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Ми проводили дослідження аудиторії по методології ментальні моделі (ЧОМУ?! тому що на ринку України такого продукту ще не має, і продукт на стадії ідеї, тому і використали дану метологію)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Ми провели більше 70 якісних інтервю із різними аудиторіями, виділили і сфокусувалися на одній)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Помім кількісні дослідження, і наші гіпотези підтвердилися.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Наше дослідження було настільке глибинне і цікаве що з ним виступили на найбільшій косметологічній конференції в Україні SiaMed Summit!</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 border-t border-border">
              <Button size="lg" asChild className="px-8 py-3">
                <Link to="/#contact">
                  Обговорити ваш проєкт
                </Link>
              </Button>
            </section>
          </article>
        </main>
      </div>
    </>
  );
};

export default Case4Face;
