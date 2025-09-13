import { useState, useEffect } from 'react';

const Research = () => {
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
              Дослідження
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
              Розуміння клієнтів для ефективного маркетингу
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
                Дізнайтеся більше про ваших клієнтів
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

      {/* Section 2 - Дослідження (title and text) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Дослідження
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            це можливість подивитися на бізнес очима клієнта. Ми з'ясовуємо, що їх мотивує, які бар'єри заважають купівлі та як ваш продукт може стати саме тим рішенням, яке вони шукали.
          </p>
        </div>
      </section>

      {/* Section 3 - Що ви отримаєте */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
            Що ви отримаєте:
          </h2>
          <div className="space-y-6 text-lg text-gray-700 max-w-3xl mx-auto">
            <p>
              <strong className="text-black">Портрет цільової аудиторії</strong> – хто ваш клієнт, його потреби, болі та мотиви.
            </p>
            <p>
              <strong className="text-black">Мапа клієнтського шляху</strong> – як людина рухається від знайомства з брендом до покупки.
            </p>
            <p>
              <strong className="text-black">Аналіз конкурентів і ринку</strong> – чим відрізняється ваш продукт і де є можливості для росту.
            </p>
            <p>
              <strong className="text-black">Інсайти та перевірені гіпотези</strong> – що насправді працює, а що ні.
            </p>
            <p>
              <strong className="text-black">Рекомендації для стратегії</strong> – які канали, меседжі та інструменти варто використовувати.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Процес */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
            Процес
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
            <div className="p-4 border border-gray-200 rounded">
              <strong className="text-black">1. Спостереження</strong>
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <strong className="text-black">2. 12 глибинних інтервю</strong> із кожною цільовою аудиторією
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <strong className="text-black">3. Кількісне опитування</strong> для підтвердження гіпотез
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <strong className="text-black">4. Бенчмаркінг</strong>
            </div>
            <div className="p-4 border border-gray-200 rounded md:col-span-2 text-center">
              <strong className="text-black">5. Інсайти</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Вам потрібні дослідження якщо */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
            Вам потрібні дослідження якщо ви задаєтеся наступними питаннями:
          </h2>
          <div className="space-y-6 text-lg text-gray-700 max-w-3xl mx-auto">
            <p>
              Як нам залучити нових клієнтів котрі будуть купувати наш продукт
            </p>
            <p>
              Які ми можемо створити додаткові продукти і послуги, які будуть купувати наші наявні клієнти?
            </p>
            <p>
              Які продукти і послуги можна створити, щоб залучити нових клієнтів?
            </p>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Контакти
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Готові розпочати дослідження? Зв'яжіться з нами для детальної консультації.
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
              або напишіть нам на email: hello@y-n-a.com
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

export default Research;