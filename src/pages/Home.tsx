import React from 'react';
import { Header } from '../components/Header';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { FeedbackSection } from '../components/sections/FeedbackSection';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main>
        <FeaturesSection />
        <FeedbackSection />
      </main>
      <Footer />
    </div>
  );
}