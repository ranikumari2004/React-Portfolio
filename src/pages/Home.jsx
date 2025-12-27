import { useState } from "react"; // Hook import kiya
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaDatabase, FaLaptopCode, FaCommentDots } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import Chatbot from "../Components/Chatbot"; // Chatbot Import

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State for Chatbot

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden relative">
      
      {/* --- HERO SECTION (Same as before) --- */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-orange-900 dark:opacity-30"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-yellow-900 dark:opacity-30"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-red-900 dark:opacity-30"></div>

        <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-sm font-semibold mb-4 animate-bounce">
            👋 Welcome to my portfolio
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Rani Kumari
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I am a <strong>Computer Engineer</strong> from RK University and a Full Stack MERN Developer. 
            I build accessible, pixel-perfect, and performant web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Link to="/projects" className="px-8 py-3.5 bg-orange-600 text-white rounded-lg font-bold shadow-lg hover:bg-orange-700 hover:shadow-orange-500/50 transition-all transform hover:-translate-y-1">
              View My Work
            </Link>
            <a href="/resume.pdf" target="_blank" className="px-8 py-3.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
              Download CV
            </a>
          </div>
          <div className="mt-8 flex gap-6 justify-center lg:justify-start text-gray-500 dark:text-gray-400">
            <a href="https://github.com/rani-kumari" target="_blank" className="hover:text-black dark:hover:text-white transition-colors text-3xl"><FaGithub /></a>
            <a href="https://linkedin.com/in/rani-kumari" target="_blank" className="hover:text-orange-600 transition-colors text-3xl"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-colors text-3xl"><FaTwitter /></a>
          </div>
        </div>

        <div className="relative z-10 w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Rani" alt="Rani Kumari" className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl" />
            </div>
        </div>
      </div>

      {/* --- TECH STACK SECTION --- */}
      <div className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Technologies I Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center opacity-80">
                <TechItem icon={<FaReact className="text-blue-400" />} name="React" />
                <TechItem icon={<FaNodeJs className="text-green-500" />} name="Node.js" />
                <TechItem icon={<SiExpress className="text-gray-500 dark:text-gray-300" />} name="Express" />
                <TechItem icon={<SiMongodb className="text-green-600" />} name="MongoDB" />
                <TechItem icon={<SiTailwindcss className="text-cyan-400" />} name="Tailwind" />
                <TechItem icon={<FaDatabase className="text-orange-500" />} name="SQL" />
            </div>
        </div>
      </div>

      {/* --- WHAT I DO SECTION --- */}
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          What I <span className="text-orange-600">Do?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={<FaLaptopCode />} title="Frontend Development" desc="Building responsive, interactive, and pixel-perfect UIs using React, Vite, and Tailwind CSS." />
            <FeatureCard icon={<FaDatabase />} title="Backend Development" desc="Creating robust APIs and managing databases with Node.js, Express, and MongoDB." />
            <FeatureCard icon={<FaReact />} title="Full Stack Solutions" desc="Seamlessly integrating frontend and backend to deliver complete web applications." />
        </div>
      </div>

      {/* --- NEW REDESIGNED CTA SECTION --- */}
      <div className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-gray-900 dark:bg-black rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl border border-gray-800">
          
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          {/* Orange Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-600/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Extraordinary Together
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? Chat with my AI assistant to get started instantly.
            </p>

            <button 
              onClick={() => setIsChatOpen(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-bold rounded-full text-lg overflow-hidden transition-all hover:bg-orange-600 hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              <FaCommentDots className="text-xl" />
              <span>Start Live Chat</span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-20 w-1/2 h-full skew-x-12"></div>
            </button>
          </div>
        </div>
      </div>

      {/* --- CHATBOT COMPONENT --- */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

    </div>
  );
};

// Helper Components (Same as before)
const TechItem = ({ icon, name }) => (
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform cursor-pointer group">
        <div className="text-5xl group-hover:drop-shadow-[0_0_10px_rgba(234,88,12,0.5)] transition-all">{icon}</div>
        <span className="font-medium text-gray-600 dark:text-gray-400">{name}</span>
    </div>
);

const FeatureCard = ({ icon, title, desc }) => (
    <div className="glass-card p-8 rounded-2xl hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
        <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-2xl text-orange-600 dark:text-orange-400 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">{icon}</div>
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
);

export default Home;