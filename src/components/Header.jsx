import { useEffect, useState } from 'react';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-transform duration-300 ease-in-out
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <h2
            className="
              text-2xl font-bold tracking-wide
              bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-700
              bg-clip-text text-transparent
              -ml-2
            "
          >
            LMNTRIX
          </h2>
        </div>
      </div>
    </header>
  );
}
