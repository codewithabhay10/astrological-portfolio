import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  color: string;
  tech: string[];
  image: string;
  source: string;
  demo: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "Yojana Guru",
      description:
        "An AI-powered platform that helps users discover personalized government schemes through multilingual chatbot support, voice search, and smart filtering based on user profiles.",
      color: "from-red-500 to-orange-500",
      tech: ["React.js", "Express", "Groq", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      source: "https://github.com/codewithabhay10/YojanaGuru-Main",
      demo: "https://github.com/codewithabhay10/YojanaGuru-Main",
    },
    {
      title: "Health-Chat-Nexus",
      description:
        "AI-powered platform that pre-screens symptoms through smart chatbots and connects patients with doctors via seamless video consultations.",
      color: "from-orange-500 to-yellow-500",
      tech: ["React.js", "TensorFlow", "Node.js", "NLP"],
      image:
        "Health-chat-nexus.png",
      source: "https://github.com/codewithabhay10/health-chat-nexus",
      demo: "https://health-chat-nexus.vercel.app",
    },
    {
      title: "Pixel Patrika",
      description:
        "E-commerce platform for selling posters built using Next.js with Stripe payment integration and MongoDB backend.",
      color: "from-purple-500 to-pink-500",
      tech: ["Next.js", "Stripe", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      source: "https://github.com/codewithabhay10/e-commerce",
      demo: "https://github.com/codewithabhay10/e-commerce",
    },
    {
      title: "ShaktiGuard",
      description:
        "A full-stack application designed to enhance women's safety with features like safest path detection, deepfake media detection, SOS calling, and emergency contacts management.",
      color: "from-blue-500 to-cyan-500",
      tech: ["React.js", "Twilio", "GrasshopperAPI"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      source: "https://github.com/codewithabhay10/womenSafety",
      demo: "https://www.youtube.com/watch?v=7LM3aXWTesc",
    },
  ];

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    const totalCards = cards.length;

    const ctx = gsap.context(() => {
      // Set initial states - all cards start at bottom except first
      cards.forEach((card, i) => {
        gsap.set(card, {
          y: i === 0 ? 0 : window.innerHeight,
          zIndex: i + 1, // Later cards have higher z-index
        });
      });

      // Create timeline for smooth sequential animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${totalCards * 100}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate each card (except the first) to slide up
      cards.forEach((card, i) => {
        if (i === 0) return;

        // Card slides up from bottom
        tl.to(
          card,
          {
            y: 0,
            duration: 1,
            ease: "none",
          },
          (i - 1) * 1
        );

        // Previous card scales down and darkens
        tl.to(
          cards[i - 1],
          {
            scale: 0.92,
            opacity: 0.5,
            duration: 1,
            ease: "none",
          },
          (i - 1) * 1
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative">
      {/* Section Header - outside the pinned area */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center font-poppins">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </h2>
        </div>
      </div>

      {/* Cards wrapper - this gets pinned */}
      <div ref={wrapperRef} className="relative h-screen overflow-hidden">
        <div className="container mx-auto max-w-5xl h-full px-6 py-8">
          <div className="relative h-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card absolute inset-0 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group will-change-transform"
              >
                {/* Background Image */}
                <div className="relative h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                  {/* Glass Card Content */}
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                    {/* Top - Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 text-sm font-medium bg-slate-900/80 text-white rounded-full backdrop-blur-sm border border-white/10 font-poppins shadow-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom - Content */}
                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="text-3xl md:text-5xl font-bold text-white font-poppins tracking-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-200 text-base md:text-lg font-poppins leading-relaxed max-w-2xl">
                        {project.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-4 pt-4">
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110"
                        >
                          <Github size={24} />
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110"
                        >
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
