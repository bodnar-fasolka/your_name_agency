import { useState, useEffect } from 'react';

const Services = () => {
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
              <a href="/services" className="text-sm font-medium text-black">services</a>
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
              Послуги
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
              Комплексні маркетингові рішення для вашого бізнесу
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
                Оберіть послугу для вашого бізнесу
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

      {/* Section 2 - Наші послуги (Services Section from Home) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Наші послуги
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 - Запуск продукту */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-4">
                Запуск продукту
              </h3>
              <p className="text-gray-700 mb-4">
                Комплексна стратегія виведення продукту на ринок з дослідженням аудиторії та конкурентів.
              </p>
              <a href="/launch-product" className="text-black font-medium hover:underline">
                Дізнатися більше →
              </a>
            </div>

            {/* Service 2 - Дослідження */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-4">
                Дослідження
              </h3>
              <p className="text-gray-700 mb-4">
                Глибокий аналіз ринку, аудиторії та конкурентів для прийняття обґрунтованих рішень.
              </p>
              <a href="/research" className="text-black font-medium hover:underline">
                Дізнатися більше →
              </a>
            </div>

            {/* Service 3 - Стратегія */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-4">
                Стратегія
              </h3>
              <p className="text-gray-700 mb-4">
                Розробка маркетингової стратегії з чіткими цілями та планом реалізації.
              </p>
              <a href="/strategy" className="text-black font-medium hover:underline">
                Дізнатися більше →
              </a>
            </div>

            {/* Service 4 - Менеджмент */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-4">
                Менеджмент
              </h3>
              <p className="text-gray-700 mb-4">
                Повне управління маркетинговими кампаніями та соціальними мережами.
              </p>
              <a href="/management" className="text-black font-medium hover:underline">
                Дізнатися більше →
              </a>
            </div>

            {/* Service 5 - Лідогенерація */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-4">
                Лідогенерація
              </h3>
              <p className="text-gray-700 mb-4">
                Системне залучення потенційних клієнтів через SEO, PPC та Meta Ads.
              </p>
              <a href="/leadgen" className="text-black font-medium hover:underline">
                Дізнатися більше →
              </a>
            </div>

            {/* Service 6 - Соціальні мережі */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-4">
                Соціальні мережі
              </h3>
              <p className="text-gray-700 mb-4">
                Просування у Facebook, Instagram, TikTok, X та Threads з контент-стратегією.
              </p>
              <div className="space-y-2">
                <a href="/facebook" className="block text-sm text-gray-600 hover:text-black">• Facebook</a>
                <a href="/instagram" className="block text-sm text-gray-600 hover:text-black">• Instagram</a>
                <a href="/tiktok" className="block text-sm text-gray-600 hover:text-black">• TikTok</a>
                <a href="/x" className="block text-sm text-gray-600 hover:text-black">• X (Twitter)</a>
                <a href="/threads" className="block text-sm text-gray-600 hover:text-black">• Threads</a>
              </div>
            </div>
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

export default Services;