const HowWeWorkSection = () => {
  const steps = [
    {
      title: "Онлайн-зустріч",
      description: "Обговорюємо запит, цілі й очікування."
    },
    {
      title: "Узгодження умов",
      description: "Формуємо пропозицію, підписуємо договір та NDA (за потреби)."
    },
    {
      title: "Старт",
      description: "Розробляємо план дій, погоджуємо дедлайни й починаємо реалізацію."
    }
  ];

  return (
    <section className="py-14 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-foreground text-left">
          Як ми працюємо:
        </h2>
        
        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
