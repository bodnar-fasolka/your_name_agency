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
    
    // General
    siteName: 'No_Name_Agency'
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
    
    // General
    siteName: 'No_Name_Agency'
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
