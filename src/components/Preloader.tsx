import Lottie from "lottie-react";
import { useState, useEffect } from "react";

interface PreloaderProps {
  isVisible: boolean;
}

const Preloader = ({ isVisible }: PreloaderProps) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load the Lottie animation from the URL
    fetch("https://lottie.host/724ed371-2016-4f51-b708-817435cfe16d/jewObUFX2i.lottie")
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error("Error loading animation:", error));
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 200, height: 200 }}
        />
      )}
    </div>
  );
};

export default Preloader;
