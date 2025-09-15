import { useState, useEffect } from 'react';

const About = () => {
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
              <a href="/about" className="text-sm font-medium text-black">about</a>
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
              About
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
              Дізнайтеся більше про нашу команду та підхід
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
                Познайомтеся з нашою командою
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

      {/* Section 2 - Чому Your Name Agency? */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Чому Your Name Agency?
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto">
            <p>
              Коли ми беремо проєкт — <strong className="text-black">"ми стаємо вами"</strong>
            </p>
            <p>
              <strong className="text-black">"Живемо вашим бізнесом"</strong> так, наче самі його створили.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Команда */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
            Команда
          </h2>
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="/solomiya.jpg" 
                  alt="Соломія Боднар" 
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Соломія Боднар
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Маркетологиня з досвідом запуску продуктів і розвитку брендів у B2B, B2C та IT-сферах.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="/iryna.jpg" 
                  alt="Ірина Перів" 
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Ірина Перів
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Юристка, підприємниця, громадська активістка, науковиця, дослідниця жіночої історії, менторка громад, гендерна експертка.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Наші цінності (Cards Design) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Наші цінності
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Value 1 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
              <div className="mb-4">
                <span className="text-2xl font-bold text-black">01</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Результат понад усе
              </h3>
              <p className="text-gray-700">
                Наша мета — не звіти, а реальне зростання бізнесу наших клієнтів.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
              <div className="mb-4">
                <span className="text-2xl font-bold text-black">02</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Партнерство, а не просто сервіс
              </h3>
              <p className="text-gray-700">
                Ми стаємо частиною команди клієнта, а не зовнішнім підрядником.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
              <div className="mb-4">
                <span className="text-2xl font-bold text-black">03</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Відповідальність за результат
              </h3>
              <p className="text-gray-700">
                Ми беремося за проєкти, де можемо створити реальну цінність і доводимо їх до завершення.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Contacts */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Контакти
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Готові стати частиною вашої команди? Зв'яжіться з нами для детальної консультації.
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

export default About;