import React from 'react';

const FourFaceCase = () => {
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
            4Face
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
            Перший незалежний б'юті журнал для української аудиторії
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

      {/* What is 4Face Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Що таке 4Face
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              4face - це проект створений жінками для жінок. Це перший незалежний б'юті журнал для української аудиторії.
            </p>
            
            <p>
              <strong className="text-black">4FACE — це електронний журнал-платформа, який поєднує:</strong>
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>відео-відгуки</li>
              <li>сліпе тестування</li>
              <li>науковий аналіз складу</li>
              <li>картки продуктів з оцінками та поясненнями</li>
              <li>редакційний контент, як у Vogue, тільки без реклами на кожному кроці</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Ідея топ, а як реалізувати?
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-black">Дослідження?!</strong> Так саме вони, потім маркетинг стратегія, комунікаційна стратегія, позиціонування все як книжка пише ;) А ну і впровадження стратегії, хороший стратег має бачити як його дитина росте))
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Результати
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-center mb-8">
              Що далі, хочеться багато написати, але буду не багатослівною покажу результати))
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                <h3 className="text-xl font-semibold text-black mb-3">
                  4 000+ підписників
                </h3>
                <p className="text-gray-700">
                  у соцмережах
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                <h3 className="text-xl font-semibold text-black mb-3">
                  50+ сліпих тестувань
                </h3>
                <p className="text-gray-700">
                  Проведено якісних досліджень продуктів
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Колаборації з рітейлами
                </h3>
                <p className="text-gray-700">
                  Запуск колаборацій із рітейлами (зокрема, EVA)
                </p>
              </div>
              
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Sia Med Summit
                </h3>
                <p className="text-gray-700">
                  Запрошення 4face на найбільшу косметологічну конференцію України
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center">
            Дослідження
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-center text-gray-600 mb-8">
              Дякую, що дочитали до сюди<br />
              Трішки скучної інформації:
            </p>
            
            <p>
              <strong className="text-black">Кожна крута стратегія починається із глибинного дослідження</strong>
            </p>
            
            <p>
              Тепер про дослідження, ви навіть не уявляєте як я їх обожнюю, одже:
            </p>
            
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <strong className="text-black">Ми проводили дослідження аудиторії по методології ментальні моделі</strong> (ЧОМУ?! тому що на ринку України такого продукту ще не має, і продукт на стадії ідеї, тому і використали дану метологію)
              </li>
              <li>
                <strong className="text-black">Ми провели більше 70 якісних інтервю</strong> із різними аудиторіями, виділили і сфокусувалися на одній)
              </li>
              <li>
                <strong className="text-black">Помім кількісні дослідження,</strong> і наші гіпотези підтвердилися.
              </li>
              <li>
                <strong className="text-black">Наше дослідження було настільки глибинне і цікаве</strong> що з ним виступили на найбільшій косметологічній конференції в Україні SiaMed Summit!)
              </li>
            </ul>
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
            Готові створити успішний проєкт з глибинним дослідженням та стратегією? Зв'яжіться з нами.
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

export default FourFaceCase;