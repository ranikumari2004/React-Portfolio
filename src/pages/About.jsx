import { FaBriefcase, FaGraduationCap, FaLightbulb, FaUsers, FaRocket, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* --- HERO HEADER --- */}
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

      {/* --- MY STORY (The Hook) --- */}
      <div className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
           {/* Abstract Image Placeholder or Your Photo */}
           <div className="absolute top-4 -left-4 w-full h-full bg-orange-200 dark:bg-gray-700 rounded-2xl z-0"></div>
           <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Working on Laptop" 
            className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
           />
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

      {/* --- EXPERIENCE TIMELINE --- */}
      <div className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
          
          <div className="relative border-l-4 border-orange-200 dark:border-gray-700 ml-4 md:ml-0 space-y-12">
            
            {/* Timeline Item 1: Job (Current) */}
            <TimelineItem 
              date="7th Sem - Present"
              title="Full Stack Developer"
              company="Jasya Consultancy"
              desc="Currently working as a Full Stack Developer. Building scalable web applications, solving real-world problems, and optimizing performance for better user experience."
              icon={<FaBriefcase />}
              current={true}
            />

            {/* Timeline Item 2: Internship */}
            <TimelineItem 
              date="6th Sem (1 Month)"
              title="Remote Web Developer Intern"
              company="Remote Internship"
              desc="Gained hands-on experience in frontend technologies and learned how to collaborate in a remote team environment."
              icon={<FaRocket />}
            />

            {/* Timeline Item 3: College */}
            <TimelineItem 
              date="2022 - Present"
              title="B.Tech Computer Engineering"
              company="RK University, Rajkot"
              desc="Currently in 8th Semester. Learned the fundamentals of Computer Science, Data Structures, and Software Engineering."
              icon={<FaGraduationCap />}
            />
          </div>
        </div>
      </div>

      {/* --- SOFT SKILLS --- */}
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
            desc="Technology evolves fast, and so do I. adapting to new tools and languages is one of my strongest suits."
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

// --- Helper Components ---

const TimelineItem = ({ date, title, company, desc, icon, current }) => (
  <div className="relative pl-8 md:pl-0">
    {/* Dot on Line */}
    <div className={`absolute -left-[11px] top-0 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 ${current ? 'bg-orange-500 animate-pulse' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
    
    <div className="md:flex items-start justify-between group">
      {/* Date (Desktop Left) */}
      <div className="hidden md:block w-1/3 text-right pr-12 pt-1">
        <span className={`font-bold ${current ? 'text-orange-600' : 'text-gray-500'}`}>{date}</span>
      </div>

      {/* Content Card */}
      <div className="md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-orange-500 transition-all duration-300">
        <div className="md:hidden text-sm font-bold text-orange-600 mb-2">{date}</div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl text-orange-500 bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">{icon}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{company}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

const SkillCard = ({ icon, title, desc }) => (
  <div className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-300">
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