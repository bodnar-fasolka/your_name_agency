import { useState, useEffect } from 'react';

const StrategySimple = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-xl text-black">Loading Strategy...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-black">Y_N_A</a>
          <nav className="space-x-6">
            <a href="/" className="text-gray-600 hover:text-black">Home</a>
            <a href="/launch-product" className="text-gray-600 hover:text-black">Launch Product</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold text-black mb-8 text-center">
          Стратегія
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1 */}
          <section className="text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              ми перетворюємо цілі компанії на чіткий покроковий план дій. Так стратегія стає не теорією, а практичним інструментом для зростання бізнесу.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-black mb-6">
              Що ви отримаєте:
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p><strong>Чіткий напрямок для бізнесу</strong> - Стратегія визначає цілі та конкретні кроки для їх досягнення</p>
              <p><strong>Оптимальне використання ресурсів</strong> - Ви знаєте, які канали дають найбільший ефект</p>
              <p><strong>Конкурентну перевагу</strong> - Правильна стратегія допомагає виділитися на ринку</p>
              <p><strong>Гнучкість і масштабування</strong> - Стратегія дозволяє швидко адаптуватися до змін</p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6 text-center">
              Процес
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
              <div className="p-4 border border-gray-200 rounded">
                <strong className="text-black">1. Проводимо дослідження</strong>
              </div>
              <div className="p-4 border border-gray-200 rounded">
                <strong className="text-black">2. Отримуємо інсайти</strong>
              </div>
              <div className="p-4 border border-gray-200 rounded">
                <strong className="text-black">3. Брейн шторм із власниками</strong>
              </div>
              <div className="p-4 border border-gray-200 rounded">
                <strong className="text-black">4. Формуємо стратегію</strong>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-8 border border-gray-200 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-black mb-6">
              Що вам дасть стратегія:
            </h2>
            <p className="text-xl text-gray-700">
              Стратегія = напрям + план + результат. Вона показує, як із поточної точки прийти до зростання, не витрачаючи ресурси дарма.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Готові створити стратегію?</h2>
            <p className="text-lg mb-6">Зв'яжіться з нами для детальної консультації</p>
            <a 
              href="https://calendly.com/bodnar-solomiya-v/30min?month=2025-08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              Запланувати консультацію
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StrategySimple;