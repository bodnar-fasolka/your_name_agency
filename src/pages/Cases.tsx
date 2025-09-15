import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cases = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const cases = [
    {
      id: 'fourface',
      title: '4FACE',
      subtitle: 'Перший незалежний б\'юті-журнал для української аудиторії',
      description: 'Як ми створили медіа-платформу з нуля: від ідеї до 4000+ підписників та співпраці з EVA.',
      tags: ['Медіа', 'Beauty', 'Дослідження'],
      results: ['4000+ підписників', '50+ тестувань', 'Колаборації з рітейлами'],
      link: '/cases/4face'
    },
    {
      id: 'ucu-leadership',
      title: 'Центр Лідерства УКУ',
      subtitle: 'Дослідницький центр з викладання лідерства',
      description: 'Створення каналів комунікації та впізнаваності для дослідницького центру університету.',
      tags: ['Освіта', 'Дослідження', 'Digital'],
      results: ['1300% зросту показників сайту', '3 міжнародні конференції', '20-25% щомісячне зростання'],
      link: '/cases/ucu-leadership'
    },
    {
      id: 'serpano',
      title: 'Serpano.k',
      subtitle: 'Відпочинковий комплекс у Карпатах',
      description: 'Підвищення заповнюваності відпочинкового комплексу через Instagram та нову стратегію.',
      tags: ['Туризм', 'SMM', 'Instagram'],
      results: ['+1400 підписників', '165% зростання взаємодій', '90% заповнення в сезон'],
      link: '/cases/serpano'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Кейси Your_Name_Agency — Маркетингові стратегії та результати",
    "description": "Портфоліо успішних маркетингових кейсів: від стартапів до established брендів. Дослідження, стратегія, результати.",
    "url": "https://www.your-name.agency/cases",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": cases.map((caseItem, index) => ({
        "@type": "Article",
        "position": index + 1,
        "name": caseItem.title,
        "description": caseItem.description,
        "url": `https://www.your-name.agency${caseItem.link}`
      }))
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-xl text-black">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Кейси та Портфоліо | Your_Name_Agency — Маркетингові Стратегії</title>
        <meta name="description" content="Портфоліо успішних маркетингових кейсів Your_Name_Agency: від стартапів до established брендів. Дослідження, стратегія, конкретні результати." />
        <link rel="canonical" href="https://www.your-name.agency/cases" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Кейси та Портфоліо | Your_Name_Agency" />
        <meta property="og:description" content="Портфоліо успішних маркетингових кейсів: від стартапів до established брендів. Дослідження, стратегія, результати." />
        <meta property="og:url" content="https://www.your-name.agency/cases" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.your-name.agency/preview.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Кейси та Портфоліо | Your_Name_Agency" />
        <meta name="twitter:description" content="Портфоліо успішних маркетингових кейсів: від стартапів до established брендів." />
        <meta name="twitter:image" content="https://www.your-name.agency/preview.svg" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
                <a href="/cases" className="text-sm font-medium text-black">cases</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Section 1 - Hero (Copy from Home) */}
        <section className="pt-32 pb-0 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-black leading-tight">
                Кейси
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto font-light text-center">
                Реальні результати наших клієнтів
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
                
                <p className="text-center text-lg text-gray-700 mt-4 md:mt-6 max-w-xs md:max-w-xl mx-auto">
                  Подивіться на наші успішні проєкти
                </p>
              </div>
            </div>
          </div>
          
          {/* Cat Movement Animation */}
          <div className="flex justify-center">
            <div className="max-w-xs">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg"
              >
                <source src="/Cat Movement.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Section 2 - Кейси (Cases from Portfolio Component) */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Кейси
            </h2>
            
            {/* Cases Grid - Copy from Portfolio component */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black mb-2">{caseItem.title}</h3>
                    <p className="text-gray-600 mb-4">{caseItem.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>2024</span>
                      <span>{caseItem.tags.join(', ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
    </>
  );
};

export default Cases;
