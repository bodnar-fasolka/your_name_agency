import { useState, useEffect } from 'react';

const LaunchProduct = () => {
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
        <div className="text-xl">Loading...</div>
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

      {/* Hero Section */}
      <section className="pt-32 pb-0 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-black leading-tight text-center">
              Запуск продукту
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
              Системний підхід до виходу на ринок
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
                Зробимо ваш продукт помітним на ринку
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

      {/* Intro Text Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Запуск продукту
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Запуск продукту — це більше, ніж просто вихід на ринок. Маркетинг допомагає зробити так, щоб про ваш продукт дізналися, зацікавилися і спробували саме його. Ми аналізуємо аудиторію, тестуємо гіпотези, обираємо правильні канали та створюємо комунікацію, яка працює. Це дає вам не випадковий старт, а системний вихід із шансом на стабільний ріст.
          </p>
        </div>
      </section>

      {/* Three Elements Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Дослідження
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                це можливість подивитися на бізнес очима клієнта. Ми з'ясовуємо, що їх мотивує, які бар'єри заважають купівлі та як ваш продукт може стати саме тим рішенням, яке вони шукали.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Стратегія
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                ми перетворюємо цілі компанії на чіткий покроковий план дій. Так стратегія стає не теорією, а практичним інструментом для зростання бізнесу.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Ведення
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                це системна робота з вашим маркетингом. Ми беремо на себе щоденне управління каналами, щоб стратегія не залишалася на папері, а працювала в реальності.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Price Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
            Терміни реалізації
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Дослідження
              </h3>
              <p className="text-lg text-gray-700">
                4–8 тижнів
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Стратегія
              </h3>
              <p className="text-lg text-gray-700">
                2–4 тижні
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Ведення (тестування стратегії)
              </h3>
              <p className="text-lg text-gray-700">
                8–10 тижнів
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-gray-200 text-center max-w-2xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Ціна: 4500$
            </h3>
            <p className="text-lg text-gray-700">
              Ціна за весь період створення та реалізації стратегії
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400">© 2024 Y_N_A. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LaunchProduct;