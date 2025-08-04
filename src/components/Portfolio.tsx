const Portfolio = () => {
  const cases = [
    {
      title: "Центр Лідерства УКУ",
      description: "Центр Лідерства УКУ – дослідницький центр, що має за ціль прорив у розробці методології та інструментів викладання курсів з Лідерства.",
      request: "Створення каналів комунікації, впізнаваність Центру. Від початку роботи, проєкт не мав стабільної та сталої комунікації в існуючих каналах.",
      results: "Показники сайту покращились в середньому на 1300% у порівнянні з попереднім періодом. Щомісячні показники збільшуються в середньому на 20-25% завдяки органічному просуванню. Проведено 3 міжнародні offline конференції."
    },
    {
      title: "4face",
      description: "4face — перший незалежний б'юті-журнал для українок. Це платформа з відео-відгуками, сліпими тестами, аналізом складу, оцінками продуктів і чесним контентом.",
      request: "Бренд був на стадії ідеї. Необхідно було вивести бренд на ринок та монетизувати.",
      results: "+ 4 тисячі користувачів в соц мережах. Проведено більше 50 сліпих тестувань. Колаборації з такими рітейлами як EVA. 4face запрошено на найбільшу косметологічну конференцію України — Sia Med Summit."
    },
    {
      title: "Serpano.k",
      description: "Serpano.k — відпочинковий комплекс у Карпатах із панорамним видом, чанами та природою. Розташований у Верховині.",
      request: "Лише 50% заповнення у сезон, 20% у не сезон. Досягти 90% заповнення в сезон і 50% у несезон, вийти на новий рівень бронювань через Instagram.",
      results: "+1,400 нових підписників. Взаємодії зросли на 165%, перегляди на 107%, охоплення на 110%. 14 поширень від гостей."
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            Кейси
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="p-6 border border-border hover-lift bg-card text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-medium mb-4 text-foreground">
                Кейс: {caseItem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {caseItem.description}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-2">Запит:</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {caseItem.request}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Результат:</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {caseItem.results}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;