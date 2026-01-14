import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import FAB from './components/FAB';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Expertise />
        <Portfolio />
        <Footer />
        <FAB />
      </main>
    </LanguageProvider>
  );
};

export default App;