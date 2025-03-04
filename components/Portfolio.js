import React from 'react';

const PortfolioCard = ({ title, description, technologies }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
    <div className="relative h-48 w-full">
      <img 
        src="/api/placeholder/400/320"
        alt={title}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-indigo-600">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors duration-200"
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
      description: "web application allows users to create, manage, and participate in various events. It is built using Django, React and PostgreSQL.",
      technologies: ["Django", "React", "PostgreSQL"]
    },
    {
      title: "Project 3",
      description: "Upcoming project description",
      technologies: ["None", "None", "None"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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