import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <motion.div className="z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins z-10">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 z-10">
                Me
              </span>
            </h2>

            <div className="space-y-5 text-gray-300 text-lg font-poppins leading-relaxed">
              <p>
                Hey, I'm{" "}
                <motion.span
                  className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Abhay
                </motion.span>{" "}
                — a{" "}
                <span className="font-semibold text-blue-300">
                  builder at heart
                </span>{" "}
                who got into coding before college and never really stopped.
              </p>
              <p>
                I started out by teaching myself HTML and CSS purely out of
                curiosity, and that curiosity quickly turned into a habit of
                building. Early on, I found myself drawn to hackathons and
                problem-solving environments that led me to full-stack
                development and working on systems that combine frontend,
                backend, and real-world constraints.
              </p>
              <p>
                A major milestone in my journey was winning{" "}
                <span className="font-bold text-purple-300">
                  Smart India Hackathon 2025
                </span>
                , where I worked on large-scale, impact-driven solutions for a
                real government problem. As I grew, so did my interests. I moved
                deeper into backend systems, learned{" "}
                <span className="font-semibold text-blue-300">
                  machine learning and deep learning
                </span>
                , and began understanding how{" "}
                <span className="font-semibold text-blue-300">AI agents</span>{" "}
                can be used to build intelligent, autonomous products.
              </p>
              <p>
                Today, I'm actively learning, experimenting, and applying these
                ideas while building my own{" "}
                <span className="font-semibold text-purple-300">SaaS tools</span>.
              </p>
              <p>
                I strongly believe in{" "}
                <span className="font-semibold text-blue-300">
                  learning by doing
                </span>{" "}
                and{" "}
                <span className="font-semibold text-blue-300">
                  building in public
                </span>{" "}
                — sharing progress, breaking things, fixing them, and repeating
                the cycle. I enjoy tackling complex problems, simplifying them,
                and turning ideas into working products.
              </p>
              <p>Still learning. Always building. Always curious.</p>
            </div>
          </motion.div>

          {/* Image on Right */}
          <motion.div
            className="w-full h-auto max-w-md mx-auto z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/IMG_5597.jpg" // ✅ must match the exact filename in public
              alt="About Illustration"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
