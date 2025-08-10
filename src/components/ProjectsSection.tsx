import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Cloud, TrendingUp, MapPin, ShoppingCart, Notebook } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Halal Beats",
      subtitle: "An Islamic Naat Player A simple, ad-free Naat player",
      description: "An Islamic Naat Player A simple, ad-free Naat player built with HTML, CSS, and JavaScript.",
      fullDescription: " Halal Beets — An Islamic Naat Player A simple, ad-free Naat player built with HTML, CSS, and JavaScript. Features include play/pause, next/previous track, progress bar, and a clean UI for a peaceful listening experience.",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500",
      tech: ["Html", "CSS3", "React", "D3.js","Web API","Audio API", "JavaScript", "Netlify"],
      features: ["Stream devotional audio (Naats, nasheeds, recitations) with a simple player UI ","Playlist creation and queue control (play/pause)","Mobile responsive & lightweight for low bandwidth devices"],
       liveLink: "https://halalbeats.netlify.app/",
       codeLink: "https://github.com/MansoobeZahra/Halal_Beats",
      image: "https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg"
    },
    {
      id: 2,
      title: "CPADM",
      subtitle: "Creative Branding & Digital Solutions",
      description: "Creative design & branding studio website with a sleek, responsive, and portfolio-focused layout.",
      fullDescription: "Creative design & branding studio website with a sleek, responsive, and portfolio-focused layout.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      tech: ["HTML5", "CSS3", "scalable vector graphics ", "Netlify", "JavaScript", "Chart.js", "Responsive Design", "Web Development"],
      features: ["clean, minimalist layout centered around the studio’s design portfolio and brand identity services.", "fluid across devices, with intuitive navigation and clear presentation of core offerings.", " focused call-to-actions and service descriptions that reinforce trust and professionalism.", ""],
        liveLink: "https://cpadm.com/",
       codeLink: "https://github.com/yourusername/yourrepo",
       image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "ProDerma",
      subtitle: "Beauty Treatment Platform",
      description: "A medically-informed aesthetics clinic site blending trust, expertise, and easy online bookings",
      fullDescription: "",
      icon: MapPin,
      color: "from-purple-500 to-pink-500",
      tech: ["Html", "CSS", "Javascript", "Node.js", "Express.js", "MongoDB", "SEO", "Responsive Design"," Web Development"],
      features: ["ed by certified aesthetic physician Dr. Wayne, with evidence-backed, research-based treatments for health and beauty", "Clean layout with responsive design in HTML5, CSS3, and some JavaScript for interactivity.", "Multilingual support (EN/NOR), strong SEO, and trust-building components like doctor credentials and scientific basis.", ""],
        liveLink: "https://your-live-demo-link.com",
       codeLink: "https://github.com/yourusername/yourrepo",
      image: "https://images.pexels.com/photos/7581085/pexels-photo-7581085.jpeg"
    },
    {
      id: 4,
      title: "Dollar Riyal Sale Website",
      subtitle: "An end-to-end e-commerce platform for buying and selling products online.",
      description: "Dollar Riyal Sale is an online platform that appears to focus on currency exchange rate updates, sales, and promotional offers. The site is  designed for a seamless user experience with clear navigation, a focus on essential data display, and mobile-friendly responsiveness.",
      fullDescription: "Dollar Riyal Sale is an online platform that appears to focus on currency exchange rate updates, sales, and promotional offers. It provides real-time or frequently updated information related to exchange rates (e.g., USD to SAR), possibly targeted toward customers engaging in travel, remittances, or currency conversion.The site is likely designed for a seamless user experience with clear navigation, a focus on essential data display, and mobile-friendly responsiveness.",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      tech: ["Html5", "CSS3", "Bootstrap", "React.js", "JavaScript", "Netlify" , "API Integration" ,"Responsive Design", "Web scraping","Git/Github"],
      features: ["Simple, responsive interface for quick services on any device.", "Mobile-friendly design for on-the-go currency checks.", "Simple, intuitive navigation for all users.", "Real-time currency data updates."],
        liveLink: "https://dollarriyalsale.com/",
       codeLink: "https://github.com/yourusername/yourrepo",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Hydro Kleen",
      subtitle: "Cleaning website",
      description: "A professionally designed service-based website for HydroKleen Norway, built to showcase HVAC cleaning solutions, enable online booking, and provide informative resources with a responsive and user-friendly interface.",
      fullDescription: "HydroKleen is a leading HVAC maintenance platform offering professional air-conditioner and heat-pump cleaning services across Norway with seamless booking and expert-certified execution. ",
      icon: ShoppingCart,
      color: "from-green-500 to-blue-500",
      tech: ["CSS3", "Html5", "Javascript", "SEO","Booking & Forms"],
      features: ["users can easily schedule air-conditioner and heat-pump cleaning services online.", "connects customers with HydroKleen-approved technicians across Norway.", "clear details on cleaning benefits, process, and environmental impact.", "Norwegian-focused with professional, localized content."], 
       liveLink: "https://hydrokleen.no/",
       codeLink: "https://github.com/yourusername/yourrepo",
      image: "https://images.pexels.com/photos/4099260/pexels-photo-4099260.jpeg"
    },
    {
      id: 6,
      title: "To do List",
      subtitle: "Notepad-inspired web application.",
      description: "A notepad-inspired web application that lets users manage their daily tasks and habits in a fun, interactive way. I",
      fullDescription: "A notepad-inspired web application that lets users manage their daily tasks and habits in a fun, interactive way. It includes category-based task tracking, theme switching, and beautiful charts to visualize progress — all stored in the browser with LocalStorage.This app is fully client-side and requires no backend — making it fast, lightweight, and easy to deploy on GitHub Pages.",
      icon: Notebook,
      color: "from-orange-500 to-red-500",
      tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Chart.js", "LocalStorage API", "Netlify"],
      features: ["Task Management  ", "Theme Switcher", "Persistent Storage ", "Mobile-Friendly", "Polished UI/UX ", "Charts & Analytics "],
        liveLink: "https://friendly-palmier-9faad3.netlify.app/",
       codeLink: "https://github.com/MansoobeZahra/To-do-List/tree/main",
     image: "https://images.pexels.com/photos/1764433/pexels-photo-1764433.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-400">
            Bringing data to life through innovation 🚀
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flip-card h-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flip-card-inner">
                {/* Front of Card */}
                <div className="flip-card-front glass neon-glow p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${project.color}`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-[#F5F5F5]">{project.title}</h3>
                        <p className="text-[#b3940c] text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover rounded-lg opacity-80"
                    />
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back glass neon-glow-pink p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-[#4896b5] text-[#0D1117] px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-sm font-semibold text-[#4896b5] mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-3 mt-4">
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="flex-1 bg-[#b3940c] text-[#0D1117] py-2 px-4 rounded-lg font-medium text-sm hover:bg-[#00E6B8] transition-colors"
                    >
                      View Details
                    </button>
                    <button className="p-2 glass rounded-lg hover:bg-[#b3940c]/20 transition-colors">
                      <ExternalLink className="w-4 h-4 text-[#F5F5F5]" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-6 neon-glow"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-3xl font-bold gradient-text mb-2">{project.title}</h3>
                          <p className="text-[#b3940c]">{project.subtitle}</p>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 hover:bg-[#F5F5F5]/20 rounded-full transition-colors"
                        >
                          <X className="w-6 h-6 text-[#F5F5F5]" />
                        </button>
                      </div>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.fullDescription}
                      </p>

                      <div className="flex space-x-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-[#b3940c] text-[#0D1117] px-6 py-3 rounded-lg font-medium hover:bg-[#00E6B8] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>

                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 glass px-6 py-3 rounded-lg font-medium hover:bg-[#b3940c]/20 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                      </div>

                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fun Easter Egg */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-block text-2xl">
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎨
            </motion.span>
            <span className="text-gray-400 ml-2">More projects cooking in the lab...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;