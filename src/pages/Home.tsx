import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Loader isVisible={loading} />
      
      {!loading && (
        <>
          <Header />
          <Hero />
        </>
      )}
    </div>
  );
};

export default Home;
