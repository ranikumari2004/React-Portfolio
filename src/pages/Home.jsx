import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaDatabase, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiRedux, SiGit } from "react-icons/si";
import Chatbot from "../Components/Chatbot";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const marqueeStyle = {
    animation: 'scroll 25s linear infinite',
  };

  const keyframes = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
  `;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden relative selection:bg-orange-500 selection:text-white">
      
      <style>{keyframes}</style>

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-400/20 rounded-full blur-[100px]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      {/* Added extra top padding (lg:pt-40) to prevent image from hitting the header */}
      <div className="relative z-10 pt-36 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm mb-6 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Available for Freelance & Hire
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Rani Kumari
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-10 flex justify-center lg:justify-start items-center gap-2">
            <span className="opacity-80">I build</span>
            <TypeAnimation
              sequence={[
                'Full Stack Apps', 2000,
                'Modern UI/UX', 2000,
                'Scalable Systems', 2000,
                'Digital Solutions', 2000
              ]}
              wrapper="span"
              speed={50}
              // UPDATED: Removed underline classes
              className="text-orange-600 dark:text-orange-500 font-bold"
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A passionate <strong>Computer Engineer</strong> transforming ideas into reality. I specialize in the MERN stack to create accessible, pixel-perfect, and performant web experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Link to="/projects" className="group px-8 py-3.5 bg-orange-600 text-white rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-700 transition-all flex items-center gap-2">
              View Projects 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="/Rani Kumari.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 text-gray-700 dark:text-white rounded-full font-bold hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all">
              Download CV
            </a>
          </div>

          <div className="mt-10 flex gap-6 justify-center lg:justify-start text-gray-500 dark:text-gray-400">
            <SocialIcon href="https://github.com/rani-kumari" icon={<FaGithub />} />
            <SocialIcon href="https://linkedin.com/in/rani-kumari" icon={<FaLinkedin />} />
            <SocialIcon href="https://x.com/RaniKumari54012" icon={<FaTwitter />} />
          </div>
        </div>

        {/* Right Image (Floating Effect) - UPDATED STRUCTURE */}
        <div className="w-full lg:w-1/2 flex justify-center relative z-10 p-4">
            {/* Animated Blob Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-orange-300 to-amber-200 dark:from-orange-800 dark:to-orange-900 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            
            {/* Image Container */}
            {/* Added 'p-2' to create a small gap between image and border, helping with the cut-off issue */}
            <div className="relative w-72 md:w-96 aspect-square rounded-[2rem] bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 shadow-2xl animate-float">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                   <img 
                     src="/Rani.png" 
                     alt="Rani Kumari" 
                     // Using object-cover with object-top to focus on the face/top part correctly without cutting
                     className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500" 
                   />
                </div>
            </div>
        </div>
      </div>

      {/* --- TECH STACK SECTION (Infinite Scroll) --- */}
      <div className="py-16 bg-white dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="text-center mb-10">
           <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Powering my code with</h2>
        </div>
        
        <div className="relative w-full overflow-hidden group">
            <div className="flex gap-16 w-max hover:[animation-play-state:paused]" style={marqueeStyle}>
                {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 min-w-[100px] opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
                        <div className="text-5xl drop-shadow-sm">{tech.icon}</div>
                        <span className="font-semibold text-sm text-gray-600 dark:text-gray-300">{tech.name}</span>
                    </div>
                ))}
            </div>
            
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10"></div>
        </div>
      </div>

      {/* --- WHAT I DO SECTION --- */}
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Crafting Digital <span className="text-orange-600">Experiences</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaLaptopCode />} 
              title="Frontend Wizardry" 
              desc="Transforming designs into responsive, interactive, and accessible web interfaces using React and Tailwind." 
            />
            <FeatureCard 
              icon={<FaDatabase />} 
              title="Backend Architecture" 
              desc="Building robust RESTful APIs, managing Databases, and ensuring server-side security with Node.js." 
            />
            <FeatureCard 
              icon={<FaReact />} 
              title="Full Stack Ecosystem" 
              desc="Bridging the gap between design and technology to deliver comprehensive web solutions." 
            />
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="py-20 px-4">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gray-900 dark:bg-black z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-900/40"></div>
          </div>
          
          <div className="relative z-10 px-8 py-16 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Let's Build Something <br />
              <span className="text-orange-500">Extraordinary.</span>
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? 
              <br className="hidden md:block" /> 
              Check out my chatbot below for instant answers about my work.
            </p>

            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 to-yellow-500">
               <div className="bg-gray-900 rounded-full px-8 py-4">
                  <span className="text-gray-300 font-medium">👇 Look for the chat icon in the corner</span>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- CHATBOT COMPONENT --- */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

    </div>
  );
};

// --- DATA & HELPER COMPONENTS ---

const techStack = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Express", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
];

const SocialIcon = ({ href, icon }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-xl hover:bg-orange-600 hover:text-white hover:border-orange-600 hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
    </a>
);

const FeatureCard = ({ icon, title, desc }) => (
    <div className="p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-orange-500/50 hover:bg-orange-50/50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-xl group">
        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center text-3xl text-orange-600 dark:text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
);

export default Home;