import { FaBriefcase, FaRocket } from "react-icons/fa";

const TimelineCard = ({ date, role, company, desc, icon, highlight }) => (
  <div className="relative pl-6 md:pl-8 pb-8 last:pb-0">
    {/* Timeline Dot */}
    <div
      className={`absolute -left-[11px] md:-left-[13px] top-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white dark:border-gray-900 z-10 ${
        highlight ? "bg-orange-500 animate-pulse" : "bg-gray-400"
      }`}
    ></div>

    {/* Card */}
    <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-orange-500 transition-all">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
             {icon && <span className="text-orange-500 text-base">{icon}</span>}
             {role}
        </h3>
        <span className="self-start sm:self-auto text-xs font-bold bg-orange-100 dark:bg-gray-700 text-orange-700 dark:text-gray-300 px-3 py-1 rounded-full whitespace-nowrap">
          {date}
        </span>
      </div>
      
      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">{company}</p>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto border-l-2 md:border-l-4 border-orange-200 dark:border-gray-700 ml-2 md:ml-10 py-2 animate-fade-in-up">
      <TimelineCard
        date="Present"
        role="Full Stack Developer"
        company="Jasya Consultancy Pvt. Ltd."
        desc="Currently working as a Full Stack Developer. Building scalable web applications, solving real-world problems, and optimizing performance."
        icon={<FaBriefcase />}
        highlight
      />

      <TimelineCard
        date="1 Month"
        role="Web Development Intern"
        company="CodeSoft (Remote)"
        desc="Completed a 1-month intensive remote internship. Built portfolio websites and calculator apps using frontend technologies."
        icon={<FaRocket />}
      />
    </div>
  );
};

export default Experience;