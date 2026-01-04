import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
      {/* Nickname/Logo Header - positioned above menu */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-700 bg-clip-text text-transparent drop-shadow-lg">
          LMNTRIX
        </h2>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col gap-6 items-start">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`relative flex items-center gap-3 transition-all duration-300 group ${
              currentPage === item.id 
                ? 'text-white' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            {/* Circle Indicator */}
            <div className={`w-5 h-5 rounded-full border-2 border-white transition-all duration-300 ${
              currentPage === item.id 
                ? 'bg-white scale-125' 
                : 'bg-transparent group-hover:bg-white/50'
            }`}></div>
            
            {/* Label */}
            <span className="text-2xl font-bold tracking-wider whitespace-nowrap">
              {item.label}
            </span>
            
            {/* Active line indicator */}
            {currentPage === item.id && (
              <div className="absolute -left-4 w-1 h-8 bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navigation;