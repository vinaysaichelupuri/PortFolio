import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../../assets/profileImage.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 p-1">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Vinay Sai Chelupuri
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer passionate about creating
            beautiful, functional digital experiences that make a difference.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/vinaysaichelupuri"
              className="text-white hover:text-emerald-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vinay-sai-chelupuri-085642277"
              className="text-white hover:text-emerald-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#contact"
              className="text-white hover:text-emerald-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
