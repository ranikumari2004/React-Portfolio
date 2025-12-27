import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaLaptopCode } from "react-icons/fa";

const Projects = () => {
  // --- 1. YOUR REAL PROJECT DATA ---
  const allProjects = [
    {
      id: 1,
      title: "LittleHaven",
      subtitle: "Child Adoption Platform",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A compassionate platform connecting families with children for adoption. Features include user profiles, adoption process tracking, and secure database management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "#",
      github: "https://github.com/rani-kumari",
    },
    {
      id: 2,
      title: "Textify",
      subtitle: "Text Utility Tool",
      category: "MERN Stack",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLg-uAhs-DJ1Z-2JkonU6jqQ6k1huyebPwIg&s",
      description: "A smart text analyzer that converts case (upper/lower), counts words/characters, and fixes basic grammar errors efficiently.",
      tech: ["React", "Node.js", "Text Analysis API"],
      link: "#",
      github: "https://github.com/rani-kumari",
    },
    {
      id: 3,
      title: "NR Food Zone",
      subtitle: "Food Ordering System",
      category: "PHP & SQL",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A classic food ordering website allowing users to browse menus, add items to cart, and place orders. Backend powered by PHP.",
      tech: ["PHP", "MySQL", "HTML/CSS"],
      link: "#",
      github: "https://github.com/rani-kumari",
    },
    {
      id: 4,
      title: "Weather App",
      subtitle: "Real-time Forecast",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Fetches live weather data based on user location or search. Displays temperature, humidity, and wind speed dynamically.",
      tech: ["React", "OpenWeather API", "Node.js"],
      link: "#",
      github: "https://github.com/rani-kumari",
    },
    {
      id: 5,
      title: "School Management",
      subtitle: "Admin System",
      category: ".NET",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive desktop application for managing student records, attendance, and faculty data.",
      tech: [".NET Framework", "C#", "SQL Server"],
      link: "#",
      github: "https://github.com/rani-kumari",
    },
    {
      id: 6,
      title: "Fresh Fruit",
      subtitle: "Mobile App",
      category: "Android",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "An Android mobile application for browsing and ordering fresh organic fruits directly from the farm.",
      tech: ["Java/Kotlin", "Android Studio", "XML"],
      link: "#",
      github: "https://github.com/rani-kumari",
    },
    {
      id: 7,
      title: "Foodie",
      subtitle: "Restaurant Landing Page",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A beautiful, responsive landing page for a restaurant showcasing the menu and ambiance.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "#",
      github: "https://github.com/rani-kumari",
    },
    {
      id: 8,
      title: "Web Calculator",
      subtitle: "Utility Tool",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A functional calculator with a clean UI to perform basic mathematical operations.",
      tech: ["HTML", "CSS", "JavaScript DOM"],
      link: "#",
      github: "https://github.com/rani-kumari",
    },
  ];

  // --- 2. FILTER LOGIC ---
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "MERN Stack", "PHP & SQL", ".NET", "Android", "Frontend"];

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <div className="pt-32 pb-12 text-center px-4 bg-white dark:bg-gray-900">
        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-sm font-bold mb-4 uppercase tracking-wider">
          My Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Things I’ve <span className="text-orange-600">Built</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          From full-stack web apps to mobile applications, here is a collection of projects that showcase my journey in coding.
        </p>
      </div>

      {/* --- FILTER BUTTONS --- */}
      <div className="sticky top-20 z-30 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm py-4 mb-8">
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-500/30 transform scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- PROJECTS GRID --- */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Area */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge on Image */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-orange-600 shadow-sm">
                    {project.category}
                </div>

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                    title="View Code on GitHub"
                  >
                    <FaGithub size={22} />
                  </a>
                  {project.category === "Android" ? (
                    <span className="p-3 bg-white text-gray-900 rounded-full cursor-default" title="Mobile App">
                        <FaAndroid size={22} />
                    </span>
                  ) : (
                    <a 
                        href={project.link} 
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                        title="Live Demo"
                    >
                        <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-orange-500 mb-3 uppercase tracking-wide">
                    {project.subtitle}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.tech.map((t, idx) => (
                    <span 
                        key={idx} 
                        className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                    >
                        #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <FaLaptopCode size={50} className="mb-4 text-orange-300" />
                <p className="text-xl">No projects found in this category yet.</p>
            </div>
        )}
      </div>

    </div>
  );
};

export default Projects;