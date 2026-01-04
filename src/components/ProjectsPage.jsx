import React from 'react';

function ProjectsPage() {
  const projects = [
    {
      title: 'SmartSense',
      description: 'Undergraduate Thesis that aims to aid hearing-impaired individuals by utilizing AR Glasses to convert speech to text in real-time.',
      tech: ['Python', 'Flutter', 'Dart'],
      image: '/Projects/SmartSense.png',
      link: 'https://github.com/Tzetha/Research_Files'
    },
    {
      title: 'SUR (Ongoing)',
      description: 'A 2.5D Rogue-Like Start-Up Game focused on Filipino Mythology, featuring procedurally generated levels and challenging gameplay.',
      tech: ['C#', 'Unity Engine', 'Figma(Prototyping)'],
      image: '/Projects/Sur2.png',
      link: 'https://www.canva.com/design/DAGYj_L-LI8/sMYvibLtgo-k5tGBRT60lw/edit?utm_content=DAGYj_L-LI8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern and responsive portfolio website I created to track my projects and showcase my skills as a developer.',
      tech: ['React', 'CSS', 'JavaScript', 'Vite'],
      image: '/Projects/Portfolio.png',
      link: '#'
    },
    {
      title: 'TaleScape',
      description: 'A web-based platform that generates unique storybooks for childrens and families using AI where imagination is the only limit.',
      tech: ['NextJS', 'React', 'Tailwind CSS','TypeScript'],
      image: '/Projects/Talescape.png',
      link: 'https://tale-scape.vercel.app'
    },
    {
      title: 'AI/ML Projects',
      description: 'Compilation of Machine Learning and AI projects I have created using Python and uploaded to Huggingface.',
      tech: ['Huggingface', 'Python', 'Machine Learning', 'AI'],
      image: '/Projects/AI.png',
      link: 'https://huggingface.co/Tzetha'
    },
    {
      title: 'iTestic',
      description: 'Done for my Highschool Thesis, iTestic is a pokemon-inspired game to aid children with autism particularly those struggling with focus in their learning.',
      tech: ['C#', 'Unity Engine'],
      image: '/Projects/iTestic.png',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            My <span className="text-cyan-300">Projects</span>
          </h2>
          <p className="text-xl text-white/90 drop-shadow">A showcase of my recent work and creations</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10"
            >
              {/* Project Image */}
              <div className="h-48 w-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition shadow-lg"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;