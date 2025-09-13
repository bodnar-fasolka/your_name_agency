import { useState, useEffect } from 'react';

const Management = () => {
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
              Ведення
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
              Щоденна підтримка вашого маркетингу
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
                Довірте нам ведення вашого маркетингу
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

      {/* Section 2 - Ведення (title and text) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Ведення
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            це коли ми супроводжуємо ваш маркетинг щодня, щоб ви могли зосередитися на бізнесі, а ми подбаємо про стабільність і зростання.
          </p>
        </div>
      </section>

      {/* Section 3 - Social Media Cards with Dash Design */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - Facebook */}
            <div className="relative h-full p-[17px] border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-md transition-shadow duration-300 group flex flex-col">
              {/* Diagonal Arrow - Bottom Right */}
              <div className="absolute bottom-4 right-4">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 flex items-center gap-2">
                Facebook
                <span className="text-base">➔</span>
              </h3>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-sm md:text-base">
                  ми допомагаємо знаходити потрібну аудиторію, запускати рекламу й підтримувати постійну комунікацію з клієнтами.
                </p>
              </div>
            </div>

            {/* Card 2 - Instagram */}
            <div className="relative h-full p-[17px] border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-md transition-shadow duration-300 group flex flex-col">
              <div className="absolute bottom-4 right-4">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 flex items-center gap-2">
                Instagram
                <span className="text-base">➔</span>
              </h3>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-sm md:text-base">
                  ведення акаунту, реклама й аналітика для росту продажів і впізнаваності.
                </p>
              </div>
            </div>

            {/* Card 3 - TikTok */}
            <div className="relative h-full p-[17px] border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-md transition-shadow duration-300 group flex flex-col">
              <div className="absolute bottom-4 right-4">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 flex items-center gap-2">
                TikTok
                <span className="text-base">➔</span>
              </h3>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-sm md:text-base">
                  ми допомагаємо вашому бізнесу потрапити в рекомендації й знаходити клієнтів через короткі відео.
                </p>
              </div>
            </div>

            {/* Card 4 - Threads */}
            <div className="relative h-full p-[17px] border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-md transition-shadow duration-300 group flex flex-col">
              <div className="absolute bottom-4 right-4">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 flex items-center gap-2">
                Threads
                <span className="text-base">➔</span>
              </h3>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-sm md:text-base">
                  допомагаємо бренду бути частиною розмови: створюємо пости, що викликають діалог і залучають людей на інші соц мережі
                </p>
              </div>
            </div>

            {/* Card 5 - X */}
            <div className="relative h-full p-[17px] border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-md transition-shadow duration-300 group flex flex-col lg:col-span-1">
              <div className="absolute bottom-4 right-4">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 flex items-center gap-2">
                X
                <span className="text-base">➔</span>
              </h3>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-sm md:text-base">
                  будуємо професійну присутність вашого бренду, де короткі повідомлення стають інструментом для продажів та впізнаваності.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Timeline & Price (Text without cards) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <p className="text-xl text-gray-700">
              <span className="font-semibold text-black">Instagram</span> — 8 тижнів
            </p>
            <p className="text-xl text-gray-700">
              <span className="font-semibold text-black">Facebook</span> — 8 тижнів
            </p>
            <p className="text-xl text-gray-700">
              <span className="font-semibold text-black">TikTok</span> — 8 тижнів
            </p>
            <p className="text-xl text-gray-700">
              <span className="font-semibold text-black">Threads</span> — 8 тижнів
            </p>
            <p className="text-xl text-gray-700">
              <span className="font-semibold text-black">X</span> — 8 тижнів
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-gray-200 text-center max-w-2xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Ціна: 1800$
            </h3>
            <p className="text-lg text-gray-700">
              Ціна за весь період створення та реалізації стратегії (та включає в себе всі представлені вище канали комунікації)
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
            Готові довірити нам ведення вашого маркетингу? Зв'яжіться з нами для детальної консультації.
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

export default Management;