
import { ExternalLink, Github } from "lucide-react";
import quickchat from "../../assets/QuickChat.jpg";
import petbuddy from "../../assets/PetBuddy.jpg";
import fingrow from "../../assets/FinGrow.jpg";
import hanami from "../../assets/Hanami.jpg";
import RetroBoard from "../../assets/RetroBoard.jpg";
import TypeRush from "../../assets/TypeRush.jpg";
import Vinvert from "../../assets/imageConverter.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform (Hanami)",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image:hanami,
      tech: ["React", "Node.js", "MongoDB",],
      githubUrl: "#",
      gradient: "from-blue-500 to-purple-600",
      demolink:'https://hanami-4aav.onrender.com'
    },
       {
      title: "FinGrow (Expense Tracker)",
      description: "It is a personal finance management application that helps users track their expenses, set budgets, and analyze their spending habits.",
      image: fingrow,
        tech: ["React Native", "PostgreSQL", "Nodejs", "Express"],
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-600",
      demolink:'#'
    },
    {
      title: "Chatting Application (QuickChat)",
      description: "A real-time mobile chatting application built with React and Firebase, featuring user authentication,profile management,notifications and single login.",
      image: quickchat,
      tech: ["React", "Firebase", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/NikithaMedikonda/quickchat-frontend",
      gradient: "from-emerald-500 to-teal-600",
      demolink:'#'
    },
    {
      title: "Pet Buddy (Pet Maganement System)",
      description: "A mobile application designed to help pet owners manage their pets' health, appointments, and daily activities.",
      image: petbuddy,
      tech: ["React Native", "MongoDB", "Nodejs", "Express"],
      githubUrl: "https://github.com/vinaysaichelupuri/PetBuddy",
      gradient: "from-orange-500 to-red-600",
      demolink:'#'
    },
    {
      title: "Retro Board",
      description: "It is simple retro board application that allows users to create and manage retrospectives, providing a platform for team collaboration and feedback.",
      image: RetroBoard,
      tech: ["React", "Firebase", "Tailwind CSS" ],
      githubUrl: "https://github.com/vinaysaichelupuri/RetroBoard",
      gradient: "from-orange-500 to-red-600",
      demolink:'https://retroboard-3vps.onrender.com/'
    },
    {
      title: "TypeRush",
      description: "A simple typing game application that helps users improve their typing speed and accuracy through interactive challenges.",
      image: TypeRush,
      tech: ["React", "Tailwind CSS", "Firebase"],
      githubUrl: "https://github.com/vinaysaichelupuri/TypeRush",
      gradient: "from-orange-500 to-red-600",
      demolink:'https://typerush-6hvs.onrender.com/'
    },
        {
      title: "Vinvert",
      description: "It is simple image converter application that converts image formats from one to another and reduce the size of the image.",
      image: Vinvert,
      tech: ["React", "Tailwind CSS",],
      githubUrl: "https://github.com/vinaysaichelupuri/Vinvert",
      gradient: "from-orange-500 to-red-600",
      demolink:'https://vinvert.onrender.com/'
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
                <div className="flex space-x-4">
                  <a
                    href={project.demolink}
                    className="flex items-center text-white hover:text-emerald-400 transition-colors duration-200"
                  >
                    <Github size={18} className="mr-2" />
                    Live demo
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
