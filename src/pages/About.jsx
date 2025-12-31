import { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaLightbulb, FaUsers, FaRocket, FaHandshake, FaCertificate, FaAward, FaBuilding, FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* --- 1. HERO HEADER (Original) --- */}
      <div className="relative pt-32 pb-16 px-4 bg-orange-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Designing <span className="text-orange-600">Simplicity</span> out of <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Complexity
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            "I believe technology shouldn't be intimidating. My goal is to build tools so intuitive that anyone—regardless of their tech knowledge—can use them effortlessly."
          </p>
        </div>
      </div>

      {/* --- 2. MY STORY (Original Hook) --- */}
      <div className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
           {/* Image Section */}
           <div className="absolute top-4 -left-4 w-full h-full bg-orange-200 dark:bg-gray-700 rounded-2xl z-0"></div>
           <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
             <img 
               src="/rani-kumari-mern-stack-developer.png" 
               alt="Rani Working" 
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
             />
           </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <FaLightbulb className="text-orange-500" />
            The Origin Story
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Growing up, I used to admire people who could effortlessly navigate websites. I thought, <span className="italic text-gray-900 dark:text-white font-medium">"If using a website seems so complex to others, imagine how difficult it must be to build one."</span>
            </p>
            <p>
              That curiosity turned into a mission. I realized that the true power of code isn't in making things complex, but in making them simple for the user.
            </p>
            <p className="border-l-4 border-orange-500 pl-4 font-medium text-gray-800 dark:text-gray-200">
              Today, as a Full Stack Developer, I strive to create digital experiences where the user doesn't need a manual to understand the interface.
            </p>
          </div>
        </div>
      </div>

      {/* --- 3. PROFESSIONAL JOURNEY (The New Tab System) --- */}
      <div className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Career & Academics</h2>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <TabButton 
              active={activeTab === "experience"} 
              onClick={() => setActiveTab("experience")} 
              icon={<FaBriefcase />} 
              label="Experience" 
            />
            <TabButton 
              active={activeTab === "education"} 
              onClick={() => setActiveTab("education")} 
              icon={<FaGraduationCap />} 
              label="Education" 
            />
            <TabButton 
              active={activeTab === "certificates"} 
              onClick={() => setActiveTab("certificates")} 
              icon={<FaCertificate />} 
              label="Certificates" 
            />
          </div>

          {/* Dynamic Content */}
          <div className="min-h-[400px]">
            
            {/* EXPERIENCE TAB */}
            {activeTab === "experience" && (
              <div className="space-y-10 max-w-4xl mx-auto border-l-4 border-orange-200 dark:border-gray-700 ml-4 md:ml-10 animate-fade-in-up">
                {/* Jasya Consultancy */}
                <TimelineCard 
                  date="Present" 
                  role="Full Stack Developer"
                  company="Jasya Consultancy Pvt. Ltd."
                  desc="Currently working as a Full Stack Developer. Building scalable web applications, solving real-world problems, and optimizing performance for better user experience."
                  icon={<FaBriefcase />}
                  highlight={true}
                />
                {/* CodeSoft */}
                <TimelineCard 
                  date="1 Month"
                  role="Web Development Intern"
                  company="CodeSoft (Remote)"
                  desc="Completed a 1-month intensive remote internship. Built portfolio websites and calculator apps using HTML, CSS, & JS. Gained experience in remote collaboration."
                  icon={<FaRocket />}
                />
              </div>
            )}

            {/* EDUCATION TAB */}
            {activeTab === "education" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
                 <EducationCard 
                   level="B.Tech Computer Engineering"
                   institute="RK University, Rajkot"
                   year="2022 - Present"
                   score="Current Sem: 8th"
                   color="blue"
                 />
                 <EducationCard 
                   level="12th (Intermediate)"
                   institute="R.V.M +2 Inter College, Maker"
                   board="Bihar Board"
                   year="Completed"
                   score="76.4%" // 382 out of 500
                   scoreDetail="Marks: 382 / 500"
                   color="orange"
                 />
                 <EducationCard 
                   level="10th (Matriculation)"
                   institute="R.V.M High School, Maker"
                   board="Bihar Board"
                   year="Completed"
                   score="72.4%"
                   color="green"
                 />
              </div>
            )}

            {/* CERTIFICATES TAB */}
            {activeTab === "certificates" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                <CertificateCard 
                  title="Infosys Springboard"
                  course="AI & Machine Learning"
                  issuer="Infosys"
                  desc="Completed comprehensive training on Artificial Intelligence foundations."
                />
                <CertificateCard 
                  title="MERN Stack Bootcamp"
                  course="Full Stack Development"
                  issuer="Self / Online"
                  desc="Mastered React, Node.js, Express, and MongoDB integration."
                />
                <CertificateCard 
                  title="Java DSA"
                  course="Data Structures"
                  issuer="HackerRank"
                  desc="Solved complex problems using Java and optimized algorithms."
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- 4. SOFT SKILLS (Original) --- */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Work With Me?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            icon={<FaUsers />}
            title="Team Player"
            desc="I believe great software is built by great teams. I thrive in collaborative environments and love sharing knowledge."
          />
          <SkillCard 
            icon={<FaRocket />}
            title="Quick Learner"
            desc="Technology evolves fast, and so do I. Adapting to new tools and languages is one of my strongest suits."
          />
          <SkillCard 
            icon={<FaHandshake />}
            title="User-Centric"
            desc="My code isn't just for machines; it's for people. I prioritize user ease above code complexity."
          />
        </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const TabButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 transform shadow-sm ${
      active 
      ? "bg-orange-600 text-white scale-105 shadow-orange-500/30" 
      : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
    }`}
  >
    {icon} <span>{label}</span>
  </button>
);

const TimelineCard = ({ date, role, company, desc, icon, highlight }) => (
  <div className="relative pl-8">
    {/* Dot */}
    <div className={`absolute -left-[13px] top-0 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 ${highlight ? 'bg-orange-500 animate-pulse' : 'bg-gray-400'}`}></div>
    
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-orange-500 transition-all group">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg text-lg">{icon}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">{role}</h3>
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{company}</span>
          </div>
        </div>
        <span className="mt-2 sm:mt-0 text-xs font-bold bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">
            {date}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm sm:text-base">
        {desc}
      </p>
    </div>
  </div>
);

const EducationCard = ({ level, institute, board, year, score, scoreDetail, color }) => {
    const colors = { orange: "bg-orange-500", blue: "bg-blue-500", green: "bg-green-500" };
    return (
      <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform group">
        <div className={`absolute top-0 left-0 w-full h-1 ${colors[color] || 'bg-gray-500'}`}></div>
        
        <div className="flex justify-between items-start mb-4">
          <div>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">{level}</h3>
             <p className="text-sm text-gray-500 dark:text-gray-400">{institute}</p>
             {board && <p className="text-xs text-gray-400">{board}</p>}
          </div>
          <FaGraduationCap className="text-3xl text-gray-200 dark:text-gray-700" />
        </div>
  
        <div className="flex items-center justify-between mt-4 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl">
           <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{year}</span>
           <div className="text-right">
             <span className={`block text-lg font-bold ${color === 'orange' ? 'text-orange-600' : 'text-gray-900 dark:text-white'}`}>{score}</span>
             {scoreDetail && <span className="text-[10px] text-gray-400 block">{scoreDetail}</span>}
           </div>
        </div>
      </div>
    );
};

const CertificateCard = ({ title, course, issuer, desc }) => (
    <div className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-orange-500 transition-all relative overflow-hidden">
        <FaCertificate className="absolute -bottom-6 -right-6 text-8xl text-gray-50 dark:text-gray-900 group-hover:text-orange-50 dark:group-hover:text-orange-900/10 transition-colors" />
        <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600">
                    <FaAward />
                </div>
                <FaExternalLinkAlt className="text-gray-300 group-hover:text-orange-500 transition-colors cursor-pointer" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{issuer}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
        </div>
    </div>
);

const SkillCard = ({ icon, title, desc }) => (
  <div className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-300 border border-transparent hover:border-orange-200">
    <div className="inline-block p-4 rounded-full bg-white dark:bg-gray-900 text-orange-500 text-3xl shadow-sm mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">
      {desc}
    </p>
  </div>
);

export default About;