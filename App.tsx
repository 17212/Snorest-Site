import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import FAB from './components/FAB';
import IdrisiumSignature from './components/IdrisiumSignature';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-background min-h-screen text-white font-sans selection:bg-accent selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <Expertise />
          <Portfolio />
        </main>
        <Footer />
        <FAB />
        <IdrisiumSignature />
      </div>
    </LanguageProvider>
  );
}

export default App;