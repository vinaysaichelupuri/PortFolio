
import { ExternalLink, Github } from "lucide-react";
import quickchat from "../../assets/QuickChat.jpg";
import petbuddy from "../../assets/PetBuddy.jpg";
import fingrow from "../../assets/FinGrow.jpg";
import hanami from "../../assets/Hanami.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform (Hanami)",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image:hanami,
      tech: ["React", "Node.js", "MongoDB",],
      githubUrl: "#",
      gradient: "from-blue-500 to-purple-600"
    },
       {
      title: "FinGrow (Expense Tracker)",
      description: "A modern, responsive portfolio website showcasing creative design and smooth animations built with React and Tailwind CSS.",
      image: fingrow,
        tech: ["React Native", "PostgreSQL", "Nodejs", "Express"],
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Chatting Application (QuickChat)",
      description: "A real-time mobile chatting application built with React and Firebase, featuring user authentication,profile management,notifications and single login.",
      image: quickchat,
      tech: ["React", "Firebase", "PostgreSQL", "Socket.io"],
      githubUrl: "#",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Pet Buddy (Pet Maganement System)",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: petbuddy,
      tech: ["React Native", "MongoDB", "Nodejs", "Express"],
      githubUrl: "#",
      gradient: "from-orange-500 to-red-600"
    },
 
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-white hover:text-emerald-400 transition-colors duration-200"
                  >
                    <Github size={18} className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
