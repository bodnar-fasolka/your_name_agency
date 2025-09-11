import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home"));
const LaunchProduct = lazy(() => import("./pages/LaunchProductNew"));
const Research = lazy(() => import("./pages/Research"));

// Loading component
const ComponentLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-xl">Loading...</div>
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
            </Routes>
          </Suspense>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
