import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

// Import components directly (not lazy)
import Home from "./pages/Home";
import LaunchProduct from "./pages/LaunchProductNew";
import Research from "./pages/ResearchFinal";
import ManagementNew from "./pages/ManagementNew";
import Facebook from "./pages/Facebook";
import Instagram from "./pages/Instagram";
import TikTok from "./pages/TikTok";

// Create simple Strategy component inline
const Strategy = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <header className="mb-8">
        <a href="/" className="text-xl font-bold text-black hover:text-gray-600">Y_N_A</a>
      </header>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-black mb-8 text-center">Стратегія</h1>
        
        <section className="mb-12 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            ми перетворюємо цілі компанії на чіткий покроковий план дій. Так стратегія стає не теорією, а практичним інструментом для зростання бізнесу.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-black mb-6">Що ви отримаєте:</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p><strong className="text-black">Чіткий напрямок для бізнесу</strong> Стратегія визначає цілі та конкретні кроки для їх досягнення, щоб ви рухалися системно, а не хаотично.</p>
            <p><strong className="text-black">Оптимальне використання ресурсів</strong> Ви знаєте, які канали та інструменти дають найбільший ефект, і не витрачаєте зайве.</p>
            <p><strong className="text-black">Конкурентну перевагу</strong> Правильна стратегія допомагає виділитися на ринку та зайняти сильну позицію серед конкурентів.</p>
            <p><strong className="text-black">Гнучкість і масштабування</strong> Стратегія дозволяє швидко адаптуватися до змін і масштабувати бізнес.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Процес</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded"><strong className="text-black">Проводимо дослідження</strong></div>
            <div className="p-4 border border-gray-200 rounded"><strong className="text-black">Отримуєм інсайти</strong></div>
            <div className="p-4 border border-gray-200 rounded"><strong className="text-black">Брейн шторм із власниками</strong></div>
            <div className="p-4 border border-gray-200 rounded"><strong className="text-black">Формуємо стратегію</strong></div>
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Що вам дасть стратегія:</h2>
          <p className="text-xl text-gray-700">
            Стратегія = напрям + план + результат. Вона показує, як із поточної точки прийти до зростання, не витрачаючи ресурси дарма.
          </p>
        </section>

        <section className="text-center bg-black text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Контакти</h2>
          <p className="text-lg mb-6">Готові створити стратегію для вашого бізнесу?</p>
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
  );
};

// Loading component
const ComponentLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-xl">Loading...</div>
  </div>
);

// Create simple placeholder components for other services
const LeadGen = () => (
  <div className="min-h-screen bg-white p-8">
    <header className="mb-8">
      <a href="/" className="text-xl font-bold text-black hover:text-gray-600">Y_N_A</a>
    </header>
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold text-black mb-8">Лідогенерація</h1>
      <p className="text-xl text-gray-700">Lead generation page coming soon...</p>
    </div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Suspense fallback={<ComponentLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/launch-product" element={<LaunchProduct />} />
              <Route path="/research" element={<Research />} />
              <Route path="/strategy" element={<Strategy />} />
              <Route path="/management" element={<ManagementNew />} />
              <Route path="/facebook" element={<Facebook />} />
              <Route path="/instagram" element={<Instagram />} />
              <Route path="/leadgen" element={<LeadGen />} />
              {/* Fallback route */}
              <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><div className="text-xl">Page not found - <a href="/" className="text-blue-600 underline">Go Home</a></div></div>} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
