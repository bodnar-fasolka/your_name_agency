import React from 'react';

const Cases = () => {
  return (
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
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
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Наші проєкти
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Portfolio Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">serpano.k</h3>
                <p className="text-gray-600 mb-4">Personal brand development and social media strategy</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2024</span>
                  <span>Personal Brand</span>
                </div>
              </div>
            </div>

            {/* Portfolio Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">4face</h3>
                <p className="text-gray-600 mb-4">Product launch strategy and brand development</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2024</span>
                  <span>Product Launch</span>
                </div>
              </div>
            </div>

            {/* Portfolio Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Проєкт 3</h3>
                <p className="text-gray-600 mb-4">Опис проєкту та досягнутих результатів</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2024</span>
                  <span>Marketing</span>
                </div>
              </div>
            </div>

            {/* Portfolio Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Проєкт 4</h3>
                <p className="text-gray-600 mb-4">Опис проєкту та досягнутих результатів</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2024</span>
                  <span>E-commerce</span>
                </div>
              </div>
            </div>

            {/* Portfolio Card 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Проєкт 5</h3>
                <p className="text-gray-600 mb-4">Опис проєкту та досягнутих результатів</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2024</span>
                  <span>SaaS</span>
                </div>
              </div>
            </div>

            {/* Portfolio Card 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Проєкт 6</h3>
                <p className="text-gray-600 mb-4">Опис проєкту та досягнутих результатів</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2024</span>
                  <span>Mobile App</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Хочете отримати такі ж результати для вашого бізнесу?
            </p>
            <a 
              href="https://calendly.com/bodnar-solomiya-v/30min?month=2025-08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-base bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Обговорити ваш проєкт
            </a>
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
  );
};

export default Cases;
