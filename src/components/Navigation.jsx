import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <div className="fixed top-0left-8 top-1/2 -translate-y-1/2 z-50">
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
            <span className="text-xl font-bold tracking-wider whitespace-nowrap">
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