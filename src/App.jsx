import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Set body background
  useEffect(() => {
    // Remove any existing background
    document.body.style.background = '';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    return () => {
      document.body.style.background = '';
    };
  }, []);

  // Get background image based on current page
  const getBackgroundImage = () => {
    switch(currentPage) {
      case 'home':
        return '/backgrounds/main_bg.jpg';
      case 'about':
        return '/backgrounds/sub_bg.jpg';
      case 'projects':
        return '/backgrounds/sub_bg.jpg';
      case 'contact':
        return '/backgrounds/sub_bg.jpg';
      default:
        return '/backgrounds/main_bg.jpg';
    }
  };

  // Render current page
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated blobs (optional - can be removed if image is enough) */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10"></div>
      <div className="fixed top-1/3 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10" style={{animationDelay: '2s'}}></div>
      <div className="fixed bottom-0 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -z-10" style={{animationDelay: '4s'}}></div>
      
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="relative ml-24">
        {renderPage()}
      </div>
    </>
  );
}

export default App;