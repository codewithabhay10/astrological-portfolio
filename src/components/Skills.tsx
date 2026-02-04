import { motion } from "framer-motion";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Full Stack Development",
      icon: Globe,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML/CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
      ],
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Machine Learning & Deep Learning",
      icon: Database,
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "OpenCV",
        "Hugging Face",
      ],
      color: "from-purple-500 to-pink-500",
    },

    {
      title: "MLOps & Deployment",
      icon: Code,
      skills: [
        "FastAPI",
        "Flask",
        "REST APIs",
        "Docker",
        "CI/CD",
        "MLflow",
        "Model Deployment",
        "AWS EC2",
        "Model Monitoring",
      ],
      color: "from-green-500 to-emerald-500",
    },

    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vercel",
        "AWS",
        "Docker",
        "Linux",
        "Postman",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-poppins"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Skills
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}
                  >
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-poppins">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-3" />
                      <span className="text-gray-300 font-poppins">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
