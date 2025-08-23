import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const translations = {
  uk: {
    // Navigation
    services: 'Послуги',
    portfolio: 'Кейси',
    contact: 'Контакти',
    contactUs: 'Зв\'язатися',
    
    // Hero
    heroSubtitle: 'Досліджуємо. Аналізуємо. Впроваджуємо.',
    scheduleCall: 'Запланувати дзвінок',
    marketingSlogan: 'Ми маркетингова агенція, що будує стратегії для бізнесу, тестує їх та впроваджує.',
    
    // Services
    servicesTitle: 'Послуги',
    researchTitle: 'Дослідження',
    researchSubtitle: 'Що досліджуємо:',
    researchItems: ['Аудит бізнесу', 'Якісні дослідження', 'Кількісні дослідження'],
    strategyTitle: 'Стратегія',
    strategySubtitle: 'Що створюємо:',
    strategyItems: ['Маркетинг стратегію', 'Унікальну ціннісну пропозицію', 'Комунікаційну стратегію', 'Бренд стратегію'],
    brandingTitle: 'Брендинг',
    brandingSubtitle: 'Що створюємо:',
    brandingItems: ['Неймінг', 'Brand book', 'Tone of voice (як бренд говорить)', 'Айдентика'],
    digitalTitle: 'Digital & SMM',
    digitalSubtitle: 'Що робимо:',
    digitalItems: ['Аудит онлайн-присутності', 'Ідеї та запуск digital-кампаній', 'Контент (тексти, графіка, відео)', 'SMM-стратегія та модерація'],
    consultingTitle: 'Консалтинг',
    consultingSubtitle: 'Що консультуємо:',
    consultingItems: ['Аудит', 'Маркетинг-сесія (разом стратегуємо)', 'Рішення і рекомендації'],
    
    // Team
    teamTitle: 'Team',
    solomiyaName: 'Соломія Боднар',
    solomiyaDescription: 'Маркетологиня з досвідом запуску продуктів і розвитку брендів у B2B, B2C та IT-сферах.',
    irynaName: 'Ірина Перів',
    irynaDescription: 'Юристка, підприємиця, громадська активістка, науковиця, дослідниця жіночої історії, менторка громад, ґендерна експертка.',
    
    // Portfolio
    portfolioTitle: 'Кейси',
    viewAllCases: 'Дивитися всі кейси',
    caseLabel: 'Кейс:',
    requestLabel: 'Запит:',
    resultLabel: 'Результат:',
    case1Title: 'Центр Лідерства УКУ',
    case1Description: 'Центр Лідерства УКУ – дослідницький центр, що має за ціль прорив у розробці методології та інструментів викладання курсів з Лідерства.',
    case1Request: 'Створення каналів комунікації, впізнаваність Центру. Від початку роботи, проєкт не мав стабільної та сталої комунікації в існуючих каналах.',
    case1Results: 'Показники сайту покращились в середньому на 1300% у порівнянні з попереднім періодом. Щомісячні показники збільшуються в середньому на 20-25% завдяки органічному просуванню. Проведено 3 міжнародні offline конференції.',
    case2Title: '4face',
    case2Description: '4face — перший незалежний б\'юті-журнал для українок. Це платформа з відео-відгуками, сліпими тестами, аналізом складу, оцінками продуктів і чесним контентом.',
    case2Request: 'Бренд був на стадії ідеї. Необхідно було вивести бренд на ринок та монетизувати.',
    case2Results: '+ 4 тисячі користувачів в соц мережах. Проведено більше 50 сліпих тестувань. Колаборації з такими рітейлами як EVA. 4face запрошено на найбільшу косметологічну конференцію України — Sia Med Summit.',
    case3Title: 'Serpano.k',
    case3Description: 'Serpano.k — відпочинковий комплекс у Карпатах із панорамним видом, чанами та природою. Розташований у Верховині.',
    case3Request: 'Лише 50% заповнення у сезон, 20% у не сезон. Досягти 90% заповнення в сезон і 50% у несезон, вийти на новий рівень бронювань через Instagram.',
    case3Results: '+1,400 нових підписників. Взаємодії зросли на 165%, перегляди на 107%, охоплення на 110%. 14 поширень від гостей.',
    
    // Contact
    contactTitle: 'Готові почати?',
    contactSubtitle: 'Розкажіть нам про свій проект, і ми знайдемо найпростіше рішення',
    
    // General
    siteName: 'Your_Name_Agency'
  },
  en: {
    // Navigation
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    contactUs: 'Contact Us',
    
    // Hero
    heroSubtitle: 'We Research. We Analyze. We Implement.',
    scheduleCall: 'Schedule a Call',
    marketingSlogan: 'We are a marketing agency that builds strategies, tests them, and implements them.',
    
    // Services
    servicesTitle: 'Services',
    researchTitle: 'Research',
    researchSubtitle: 'What we research:',
    researchItems: ['Business Audit', 'Qualitative Research', 'Quantitative Research'],
    strategyTitle: 'Strategy',
    strategySubtitle: 'What we create:',
    strategyItems: ['Marketing Strategy', 'Unique Value Proposition', 'Communication Strategy', 'Brand Strategy'],
    brandingTitle: 'Branding',
    brandingSubtitle: 'What we create:',
    brandingItems: ['Naming', 'Brand book', 'Tone of voice (how brand speaks)', 'Identity'],
    digitalTitle: 'Digital & SMM',
    digitalSubtitle: 'What we do:',
    digitalItems: ['Online Presence Audit', 'Digital Campaign Ideas & Launch', 'Content (text, graphics, video)', 'SMM Strategy & Moderation'],
    consultingTitle: 'Consulting',
    consultingSubtitle: 'What we consult on:',
    consultingItems: ['Audit', 'Marketing Session (strategizing together)', 'Solutions & Recommendations'],
    
    // Team
    teamTitle: 'Team',
    solomiyaName: 'Solomiya Bodnar',
    solomiyaDescription: 'Marketer with experience in product launches and brand development in B2B, B2C, and IT sectors.',
    irynaName: 'Iryna Periv',
    irynaDescription: 'Lawyer, entrepreneur, public activist, scholar, researcher of women\'s history, community mentor, gender expert.',
    
    // Portfolio
    portfolioTitle: 'Cases',
    viewAllCases: 'View All Cases',
    caseLabel: 'Case:',
    requestLabel: 'Request:',
    resultLabel: 'Result:',
    case1Title: 'UCU Leadership Center',
    case1Description: 'UCU Leadership Center is a research center that aims to breakthrough in the development of methodology and tools for teaching Leadership courses.',
    case1Request: 'Creating communication channels, Center recognition. From the beginning of work, the project had no stable and consistent communication in existing channels.',
    case1Results: 'Website metrics improved by an average of 1300% compared to the previous period. Monthly metrics increase by an average of 20-25% thanks to organic promotion. 3 international offline conferences were held.',
    case2Title: '4face',
    case2Description: '4face is the first independent beauty magazine for Ukrainian women. It\'s a platform with video reviews, blind tests, ingredient analysis, product ratings, and honest content.',
    case2Request: 'The brand was at the idea stage. It was necessary to bring the brand to market and monetize it.',
    case2Results: '+ 4 thousand users on social networks. More than 50 blind tests conducted. Collaborations with retailers like EVA. 4face was invited to Ukraine\'s largest cosmetology conference — Sia Med Summit.',
    case3Title: 'Serpano.k',
    case3Description: 'Serpano.k is a recreational complex in the Carpathians with panoramic views, hot tubs, and nature. Located in Verkhovyna.',
    case3Request: 'Only 50% occupancy in season, 20% off-season. Achieve 90% occupancy in season and 50% off-season, reach a new level of bookings through Instagram.',
    case3Results: '+1,400 new followers. Engagement increased by 165%, views by 107%, reach by 110%. 14 shares from guests.',
    
    // Contact
    contactTitle: 'Ready to Start?',
    contactSubtitle: 'Tell us about your project, and we\'ll find the simplest solution',
    
    // General
    siteName: 'Your_Name_Agency'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uk');

  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations[Language]];
    return typeof value === 'string' ? value : key;
  };

  const tArray = (key: string): string[] => {
    const value = translations[language][key as keyof typeof translations[Language]];
    return Array.isArray(value) ? value : [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};
