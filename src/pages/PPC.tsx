import { useState, useEffect } from 'react';

const PPC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-xl text-black">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-black hover:text-gray-600 transition-colors">
              Y_N_A
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">home</a>
              <a href="/about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">about</a>
              <a href="/services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">services</a>
              <a href="/cases" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">cases</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Section 1 - Hero (Copy from Home) */}
      <section className="pt-32 pb-0 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-black leading-tight">
              PPC
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
              Швидке залучення клієнтів через платну рекламу
            </p>
            
            <div className="w-full max-w-2xl mx-auto mb-6 md:mb-10">
              <a 
                href="https://calendly.com/bodnar-solomiya-v/30min?month=2025-08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full px-8 py-3 text-base bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
              >
                Запланувати консультацію
              </a>
              
              <p className="text-center text-lg text-gray-700 mt-4 md:mt-6 max-w-xs md:max-w-xl mx-auto">
                Отримайте клієнтів тут і зараз
              </p>
            </div>
          </div>
        </div>
        
        {/* Cat Movement Animation */}
        <div className="flex justify-center">
          <div className="max-w-xs">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg"
            >
              <source src="/Cat Movement.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section 2 - PPC (title and text) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            PPC
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            PPC (pay-per-click) — це спосіб отримати клієнтів тут і зараз. Ми допомагаємо налаштувати ефективні кампанії в Google та на інших платформах, щоб ви не витрачали бюджет даремно, а отримували якісний трафік і конверсії.
          </p>
        </div>
      </section>

      {/* Section 3 - Що ви отримаєте */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
            Що ви отримаєте
          </h2>
          <div className="space-y-6 text-lg text-gray-700 max-w-3xl mx-auto">
            <p>
              <strong className="text-black">Повне налаштування рекламних кампаній</strong> у Google Ads та інших PPC-каналах
            </p>
            <p>
              <strong className="text-black">Оптимізацію ставок, ключових слів і оголошень</strong> для зменшення вартості кліка
            </p>
            <p>
              <strong className="text-black">Постійний моніторинг і корекцію кампаній</strong> для підвищення ROI
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Процес співпраці */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
            Процес співпраці
          </h2>
          <div className="space-y-6 text-lg text-gray-700 max-w-3xl mx-auto">
            <p>
              <strong className="text-black">1. Аудит та аналіз цілей</strong> — вивчаємо ваш ринок, конкурентів і формуємо ключові KPI.
            </p>
            <p>
              <strong className="text-black">2. Налаштування кампаній</strong> — створюємо структуру акаунту, налаштовуємо таргетинг і ключові слова.
            </p>
            <p>
              <strong className="text-black">3. Створення оголошень</strong> — пишемо тексти й налаштовуємо креативи для Google Search, Display або YouTube.
            </p>
            <p>
              <strong className="text-black">4. Оптимізація</strong> — відстежуємо кліки, вартість і конверсії, робимо A/B тестування.
            </p>
            <p>
              <strong className="text-black">5. Звітність</strong> — щомісяця надаємо детальні звіти про витрати бюджету й отримані результати.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Контакти
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Готові запустити ефективні PPC кампанії? Зв'яжіться з нами для детальної консультації.
          </p>
          <div className="space-y-4">
            <a 
              href="https://calendly.com/bodnar-solomiya-v/30min?month=2025-08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-base bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Запланувати консультацію
            </a>
            <p className="text-gray-600">
              або напишіть нам на email: solomijabodnar@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Y_N_A</h3>
            <p className="text-gray-400">Маркетингове агентство</p>
          </div>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Y_N_A. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PPC;