import React from 'react';
import Header from './Header';

function AboutPage() {
  const techIcons = [
    { name: 'Python', image: '/icons/python.png' },
    { name: 'C#', image: '/icons/C.png' },
    { name: 'C++', image: '/icons/C++.png' },
    { name: 'JavaScript', image: '/icons/JS.png' },
    { name: 'React', image: '/icons/react.png' },
    { name: 'Node.js', image: '/icons/node.png' },
    { name: 'HTML5', image: '/icons/HTML.png' },
    { name: 'CSS3', image: '/icons/CSS.png' },
    { name: 'Tailwind', image: '/icons/tailwind.png' },
    { name: 'Github', image: '/icons/Github.png' },
    { name: 'Unity Engine', image: '/icons/Unity.png' },
    { name: 'GoDot', image: '/icons/godot.png' }
  ];

  const skills = techIcons.map(tech => tech.name);
  const infiniteIcons = [...techIcons, ...techIcons];

  return (
    <div className="min-h-screen py-20 px-6 text-slate-200">
      <div className="max-w-6xl mx-auto pt-32">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-300">
            My journey, skills, and expertise
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ['4', 'Years Experience'],
              ['9', 'Projects Completed'],
            ].map(([value, label], i) => (
              <div key={i}>
                <p className="text-5xl font-bold text-cyan-300">{value}</p>
                <p className="text-slate-300 mt-2 font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-slate-100">
            Skills & Technologies
          </h3>

          {/* Top Carousel */}
          <div className="mb-8 overflow-hidden py-6">
            <div className="flex animate-scroll">
              {infiniteIcons.map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-6">
                  <div
                    className="w-20 h-20 rounded-xl p-3 flex items-center justify-center
                               bg-slate-900/70 shadow-lg border border-slate-700
                               hover:scale-110 transition"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="max-w-full max-h-full object-contain"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="bg-slate-900/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-slate-700 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg
                             bg-slate-800/70 hover:bg-slate-700/70
                             transition hover:scale-105"
                >
                  <div className="w-2 h-2 bg-cyan-300 rounded-full" />
                  <span className="font-semibold text-slate-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Carousel */}
          <div className="overflow-hidden py-6">
            <div className="flex animate-scroll-reverse">
              {infiniteIcons.map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-6">
                  <div
                    className="w-20 h-20 rounded-xl p-3 flex items-center justify-center
                               bg-slate-900/70 shadow-lg border border-slate-700
                               hover:scale-110 transition"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="max-w-full max-h-full object-contain"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center text-slate-100">
              Education
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-900/70 p-6 rounded-lg border-l-4 border-cyan-300 shadow-lg">
                <h4 className="text-xl font-bold">Bachelor of Science in Computer Science</h4>
                <h5 className="text-xl font-bold">Major in Artificial Intelligence</h5>
                <p className="text-slate-400">West Visayas State University - Main Campus • 2022 – 2026</p>
                <p className="text-slate-300 mt-3">
                  DOST Scholar | Consistent Dean's Lister | Running for Latin Honors
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center text-slate-100">
              Experience
            </h3>
            <div className="space-y-6">
              {[
                ['Internship', 'TBA', '2026'],
              ].map(([role, company, year], i) => (
                <div
                  key={i}
                  className="bg-slate-900/70 p-6 rounded-lg border-l-4 border-purple-500 shadow-lg"
                >
                  <h4 className="text-xl font-bold">{role}</h4>
                  <p className="text-slate-400">{company} • {year}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default AboutPage;
