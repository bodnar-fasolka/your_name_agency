const HowWeWorkSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Як ми працюємо
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
            <div className="mb-4">
              <span className="text-2xl font-bold text-black">01</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Аналіз і стратегія
            </h3>
            <p className="text-gray-700">
              Досліджуємо ваш бізнес, аудиторію та конкурентів, щоб створити ефективну стратегію просування.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
            <div className="mb-4">
              <span className="text-2xl font-bold text-black">02</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Планування
            </h3>
            <p className="text-gray-700">
              Розробляємо детальний план дій з чіткими термінами та KPI для досягнення ваших цілей.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
            <div className="mb-4">
              <span className="text-2xl font-bold text-black">03</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Реалізація
            </h3>
            <p className="text-gray-700">
              Запускаємо кампанії, створюємо контент та налаштовуємо всі необхідні інструменти.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
            <div className="mb-4">
              <span className="text-2xl font-bold text-black">04</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Оптимізація
            </h3>
            <p className="text-gray-700">
              Аналізуємо результати та постійно покращуємо показники для максимальної ефективності.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
            <div className="mb-4">
              <span className="text-2xl font-bold text-black">05</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Звітність
            </h3>
            <p className="text-gray-700">
              Надаємо детальні звіти про проведену роботу та досягнуті результати.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#EAEAEA' }}>
            <div className="mb-4">
              <span className="text-2xl font-bold text-black">06</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Масштабування
            </h3>
            <p className="text-gray-700">
              Розширюємо успішні стратегії для збільшення охоплення та результатів вашого бізнесу.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
