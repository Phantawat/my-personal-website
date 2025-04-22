import React from 'react';

const PortfolioCard = ({ title, description, technologies }) => (
  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-indigo-500 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
    <div className="relative h-48 w-full">
      <img 
        src="/api/placeholder/400/320"
        alt={title}
        className="object-cover w-full h-full opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-indigo-400">{title}</h3>
      <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-600/30 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      title: "KU Polls",
      description: "An application to conduct online polls and surveys based on the Django Tutorial project, with additional features. It is built using Django, SQLite, and Bootstrap.",
      technologies: ["Python", "Django", "SQLite"]
    },
    {
      title: "EventEase",
      description: "Web application that allows users to create, manage, and participate in various events. It is built using Django, React and PostgreSQL.",
      technologies: ["Django", "React", "PostgreSQL"]
    },
    {
      title: "Project 3",
      description: "Upcoming project description",
      technologies: ["Coming Soon"]
    }
  ];

  return (
    <section className="py-24 bg-slate-900" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore my recent projects and technical achievements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;