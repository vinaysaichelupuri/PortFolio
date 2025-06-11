
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
  Full Stack Developer & UI/UX Designer passionate about crafting user-friendly web and mobile apps with React, React Native, and Node.js. Skilled in MongoDB, PostgreSQL, and MySQL.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Code className="text-emerald-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Clean Code</h3>
              </div>
              <p className="text-gray-300">
                I write maintainable, scalable code following best practices and modern development standards.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Palette className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Creative Design</h3>
              </div>
              <p className="text-gray-300">
                Combining aesthetic appeal with user-centered design principles to create engaging experiences.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Zap className="text-orange-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Fast Performance</h3>
              </div>
              <p className="text-gray-300">
                Optimizing applications for speed and performance to deliver exceptional user experiences.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="Coding workspace"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4">
              <p className="text-white font-bold text-lg">1+ Years</p>
              <p className="text-white/90">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
