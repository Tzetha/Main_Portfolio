import React from 'react';
import Header from './Header';

function HomePage() {
  return (
    <div className="min-h-screen relative text-slate-200">
        <Header />
      {/* Main */}
      <div className="flex items-center justify-center min-h-screen px-6 pt-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-6xl font-bold text-cyan-300 tracking-tight">
                  Ethan Soncio
                </h1>

                <p className="text-xl text-slate-300 font-medium">
                  Game and Software Developer
                </p>
              </div>

              <p className="text-lg text-slate-300/90 leading-relaxed max-w-xl">
                I'm a 24-year-old Computer Science student from Lapuz, Iloilo City. My main expertise lies in game development
                using C# and Unity Engine, and I also have a strong foundation in software development with languages like Python and C++.
                Outside of programming, I enjoy late-night gaming, reading manhwas, and vibing to music.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  className="
                    px-8 py-3 rounded-lg font-semibold
                    bg-cyan-300 text-slate-900
                    shadow-lg shadow-cyan-400/30
                    hover:bg-cyan-200 hover:shadow-cyan-300/40
                    transition transform hover:scale-105
                  "
                >
                  View My Work
                </button>

                <button
                  className="
                    px-8 py-3 rounded-lg font-semibold
                    border border-slate-400/40
                    text-slate-100
                    backdrop-blur-sm bg-white/5
                    hover:bg-white/10
                    transition
                  "
                >
                  Get In Touch
                </button>
              </div>

              {/* Socials */}
              <div className="flex gap-5 pt-4">
                {/* GitHub */}
                <a href="#" className="text-slate-300 hover:text-cyan-300 transition">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12
                      0 5.302 3.438 9.8 8.207 11.387
                      .599.111.793-.261.793-.577v-2.234
                      c-3.338.726-4.033-1.416-4.033-1.416
                      -.546-1.387-1.333-1.756-1.333-1.756
                      -1.089-.745.083-.729.083-.729
                      1.205.084 1.839 1.237 1.839 1.237
                      1.07 1.834 2.807 1.304 3.492.997
                      .107-.775.418-1.305.762-1.604
                      -2.665-.305-5.467-1.334-5.467-5.931
                      0-1.311.469-2.381 1.236-3.221
                      -.124-.303-.535-1.524.117-3.176
                      0 0 1.008-.322 3.301 1.23
                      .957-.266 1.983-.399 3.003-.404
                      1.02.005 2.047.138 3.006.404
                      2.291-1.552 3.297-1.23 3.297-1.23
                      .653 1.653.242 2.874.118 3.176
                      .77.84 1.235 1.911 1.235 3.221
                      0 4.609-2.807 5.624-5.479 5.921
                      .43.372.823 1.102.823 2.222v3.293
                      c0 .319.192.694.801.576
                      4.765-1.589 8.199-6.086 8.199-11.386
                      0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="text-slate-300 hover:text-cyan-300 transition">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14
                      c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14
                      c0-2.761-2.238-5-5-5zM8.339 19h-3V9h3v10z
                      M6.839 7.732c-.966 0-1.75-.79-1.75-1.764
                      s.784-1.764 1.75-1.764 1.75.79 1.75 1.764
                      -.783 1.764-1.75 1.764zM19 19h-3v-5.604
                      c0-3.368-4-3.113-4 0V19h-3V9h3v1.765
                      c1.396-2.586 7-2.777 7 2.476V19z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" className="text-slate-300 hover:text-cyan-300 transition">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348
                      C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622
                      h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788
                      1.325 0 2.463.099 2.795.143v3.24h-1.918
                      c-1.504 0-1.796.715-1.796 1.763v2.313h3.587
                      l-.467 3.622h-3.12V24h6.116
                      C23.403 24 24 23.403 24 22.674V1.326
                      C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="text-slate-300 hover:text-cyan-300 transition">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07
                      1.366.062 2.633.343 3.608 1.318
                      .975.975 1.256 2.242 1.318 3.608
                      .058 1.266.07 1.646.07 4.85
                      0 3.204-.012 3.584-.07 4.85
                      -.062 1.366-.343 2.633-1.318 3.608
                      -.975.975-2.242 1.256-3.608 1.318
                      -1.266.058-1.646.07-4.85.07
                      -3.204 0-3.584-.012-4.85-.07
                      -1.366-.062-2.633-.343-3.608-1.318
                      -.975-.975-1.256-2.242-1.318-3.608
                      -.058-1.266-.07-1.646-.07-4.85
                      0-3.204.012-3.584.07-4.85
                      .062-1.366.343-2.633 1.318-3.608
                      .975-.975 2.242-1.256 3.608-1.318
                      1.266-.058 1.646-.07 4.85-.07z
                      M12 5.838a6.162 6.162 0 1 0 0 12.324
                      6.162 6.162 0 0 0 0-12.324z
                      M18.406 4.594a1.44 1.44 0 1 0 0 2.881
                      1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT – PHOTO */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-cyan-400 blur-3xl opacity-30"></div>

                <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-cyan-300/70 shadow-xl shadow-cyan-400/30 bg-slate-900/60 backdrop-blur-md">
                  <img
                    src="/Soncio_3A.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
