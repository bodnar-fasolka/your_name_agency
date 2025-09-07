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
              className="relative border-2 border-dashed border-black/70 rounded-[20px] p-6 md:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Inner Card */}
              <div 
                className="relative -mt-10 md:-mt-12 mx-6 bg-white rounded-[16px] border border-black/70 shadow-sm p-6 hover:shadow-md transition-shadow"
                role="group"
              >
                {/* Step Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-black text-center">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="mt-3 text-base md:text-lg text-gray-700 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
