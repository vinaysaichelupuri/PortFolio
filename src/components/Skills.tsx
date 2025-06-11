
const Skills = () => {
  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
     { name: "React Native", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
    { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
    { name: "UI/UX Design", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "MongoDB", level: 80, color: "from-green-600 to-green-800" },
    { name: "PostgreSQL", level: 70, color: "from-green-600 to-green-800" },
    { name: "Stripe", level: 95, color: "from-green-600 to-green-800" },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-200"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-emerald-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
