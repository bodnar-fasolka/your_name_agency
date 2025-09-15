import React from 'react';

const SerpanoCase = () => {
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
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-black leading-tight">
            Serpano.k
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
            Відпочинковий комплекс у Верховині з панорамним будиночком
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
          </div>
        </div>
      </section>

      {/* What is Serpano.k Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Що таке Serpano.k
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Не ще один "будинок у Карпатах", а місце, куди тікають від світу — щоб помовчати, видихнути і поставити на паузу сповіщення.
            </p>
            
            <p>
              <strong className="text-black">Serpano.k — відпочинковий комплекс у Верховині</strong> з панорамним будиночком, чанами, видом і вайбом.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Чому вони звернулися до мене 🤔
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Заселеність у сезон
                </h3>
                <p className="text-gray-700">
                  50%
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Заселеність у несезон
                </h3>
                <p className="text-gray-700">
                  20%
                </p>
              </div>
            </div>
            
            <p className="text-center mt-8">
              На ринку повно "гірських хатин з краєвидом" — важко диференціюватися.
            </p>
          </div>
        </div>
      </section>

      {/* What Was Done Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
            Що було зроблено
          </h2>
          
          <div className="space-y-12">
            {/* Research */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                1. Дослідження (бо маркетинг без дослідження — як мітинг без картонки)
              </h3>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4">
                <li><strong className="text-black">Якісні інтерв'ю за JTBD:</strong> визначено 4 сегменти гостей і бар'єри.</li>
                <li><strong className="text-black">Кількісне опитування:</strong> 273 відповіді, підтвердження гіпотез.</li>
                <li><strong className="text-black">KANO модель + SWOT:</strong> від Wow-ефектів до інфраструктурних "болей".</li>
              </ul>
            </div>

            {/* Strategy */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                2. Стратегія
              </h3>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <strong className="text-black">Побудована ціннісна пропозиція:</strong><br />
                  "Ми не продаємо ліжко з краєвидом. Ми продаємо можливість помріяти."
                </p>
                <p>
                  <strong className="text-black">Комунікаційна роль бренду:</strong> Турботливий. Творець. Мольфар.
                </p>
                <p>
                  <strong className="text-black">Тон</strong> — натхненний, глибокий, slow living.
                </p>
              </div>
            </div>

            {/* Content Work */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                3. Робота з контентом
              </h3>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4">
                <li><strong className="text-black">Прокачано Instagram:</strong> візуал, сторі, тон.</li>
                <li><strong className="text-black">Запущено систему залучення UGC</strong> (користувацького контенту).</li>
                <li><strong className="text-black">Проведено співпраці з гістьми,</strong> які ділилися досвідом без примусу.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Нареееешті результати (вибачте що прийшлося стільки читати 😅)
          </h2>
          
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-block p-8 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Травень 2025
                </h3>
                <p className="text-xl text-gray-700">
                  Заселеність <strong className="text-black">84%</strong> vs. 50% у попередньому сезоні
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6 text-center">
                А також за місяць роботи
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                  <h4 className="text-xl font-semibold text-black mb-3">
                    +1400 підписників
                  </h4>
                  <p className="text-gray-700">
                    За перший місяць роботи
                  </p>
                </div>
                
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                  <h4 className="text-xl font-semibold text-black mb-3">
                    Перегляди зросли
                  </h4>
                  <p className="text-gray-700">
                    з 71 384 → 147 842
                  </p>
                </div>
                
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                  <h4 className="text-xl font-semibold text-black mb-3">
                    14 репостів сторіс
                  </h4>
                  <p className="text-gray-700">
                    від гостей без "бартер за фото"
                  </p>
                </div>
                
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                  <h4 className="text-xl font-semibold text-black mb-3">
                    Заселеність зросла
                  </h4>
                  <p className="text-gray-700">
                    І в сезон, і поза ним
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700">
                <strong className="text-black">Люди більше бронюють, бо бачать себе у цьому досвіді.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Хочете такі ж результати?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Готові збільшити заселеність та створити сильний бренд? Зв'яжіться з нами для детальної консультації.
          </p>
          <a 
            href="https://calendly.com/bodnar-solomiya-v/30min?month=2025-08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-base bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
          >
            Обговорити ваш проєкт
          </a>
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

export default SerpanoCase;