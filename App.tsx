import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import FAQ from './components/FAQ';
import Psychoeducation from './components/Psychoeducation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Team />
        <Psychoeducation />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;