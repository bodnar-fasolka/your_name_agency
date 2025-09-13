import { useState, useEffect } from 'react';

const LeadGeneration = () => {
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
              Лідогенерація
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
              Системне залучення потенційних клієнтів
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
                Залучайте готових до покупки клієнтів
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

      {/* Section 2 - Лідогенерація (title and text) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Лідогенерація
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            це системний процес залучення потенційних клієнтів, які дійсно зацікавлені у вашому продукті чи послузі. Ми налаштовуємо рекламу, створюємо контент і використовуємо сучасні інструменти, щоб зібрати контакти людей, які готові купувати.
          </p>
        </div>
      </section>

      {/* Section 3 - Service Cards with Dash Design */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - SEO */}
            <div className="relative h-full p-[17px] border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-md transition-shadow duration-300 group flex flex-col">
              {/* Diagonal Arrow - Bottom Right */}
              <div className="absolute bottom-4 right-4">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 flex items-center gap-2">
                SEO
                <span className="text-base">➔</span>
              </h3>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-sm md:text-base">
                  це комплекс робіт, завдяки яким ваш сайт піднімається у видачі Google. Мета проста: щоб клієнти знаходили вас швидше, ніж конкурентів, і переходили саме на ваш сайт.
                </p>
              </div>
            </div>

            {/* Card 2 - PPC */}
            <div className="relative h-full p-[17px] border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-md transition-shadow duration-300 group flex flex-col">
              <div className="absolute bottom-4 right-4">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 flex items-center gap-2">
                PPC
                <span className="text-base">➔</span>
              </h3>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-sm md:text-base">
                  дозволяє отримувати клієнтів швидко. Ви з'являєтеся в Google, YouTube чи соцмережах саме тоді, коли люди шукають ваш продукт або послугу.
                </p>
              </div>
            </div>

            {/* Card 3 - Meta Ads */}
            <div className="relative h-full p-[17px] border-2 border-dashed border-gray-300 bg-gray-100 rounded-[20px] hover:shadow-md transition-shadow duration-300 group flex flex-col">
              <div className="absolute bottom-4 right-4">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 flex items-center gap-2">
                Meta Ads
                <span className="text-base">➔</span>
              </h3>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-sm md:text-base">
                  це реклама у Facebook та Instagram, яка дозволяє точно знаходити вашу аудиторію й перетворювати її у клієнтів.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Pricing Information (Text without cards) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8 mb-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-black mb-2">SEO</h3>
              <p className="text-lg text-gray-700 mb-2">8 тижнів</p>
              <p className="text-3xl font-bold text-black">1600$</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-black mb-2">Meta Ads</h3>
              <p className="text-lg text-gray-700 mb-2">8 тижнів</p>
              <p className="text-3xl font-bold text-black">500$</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-black mb-2">PPC</h3>
              <p className="text-3xl font-bold text-black">600$</p>
            </div>
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
            Готові запустити системне залучення клієнтів? Зв'яжіться з нами для детальної консультації.
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

export default LeadGeneration;