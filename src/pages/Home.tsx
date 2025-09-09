import { Suspense, lazy, useState, useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import FaqSection from "@/components/FaqSection";
import Loader from "@/components/Loader";
import SEO from "@/components/SEO";

// Lazy load below-the-fold components for better performance
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for lazy-loaded sections
const ComponentLoader = () => (
  <div className="py-8 flex justify-center">
    <div className="animate-pulse bg-gray-200 h-32 w-full max-w-4xl rounded"></div>
  </div>
);

// Simple test version to debug white screen
const Home = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-black">Welcome to Y_N_A</h1>
      <p className="text-lg text-gray-700 mt-4">
        This is a test page to check if the site is working.
      </p>
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <p>If you can see this, the basic routing is working!</p>
      </div>
    </div>
  );
};

export default Home;
