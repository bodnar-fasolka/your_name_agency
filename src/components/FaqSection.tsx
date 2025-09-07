import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "Навіщо мені маркетинг?",
      answer: "Без маркетингу про ваш бізнес можуть знати тільки друзі та знайомі. Маркетинг допомагає вийти на ширшу аудиторію, пояснити, чому ваш продукт чи послуга краща, і перетворити людей у клієнтів."
    },
    {
      question: "Скільки часу потрібно, щоб побачити результат від маркетингу?",
      answer: "Перші зміни можна побачити вже за кілька тижнів, але стабільний результат зазвичай приходить через 3–6 місяців."
    },
    {
      question: "А якщо в мене хороший продукт, навіщо мені маркетинг?",
      answer: "Маркетинг підсилює сильний продукт: допомагає знайти правильних клієнтів, збільшити продажі й зробити бренд впізнаваним."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-14 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 text-foreground text-left">
          Питання, які можуть у вас виникнути
        </h2>
        
        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-black/15 py-4"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left font-semibold text-lg md:text-xl flex items-center justify-between text-foreground hover:text-primary transition-colors"
                aria-expanded={openItem === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openItem === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Answer Panel */}
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`transition-all duration-300 overflow-hidden ${
                  openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
