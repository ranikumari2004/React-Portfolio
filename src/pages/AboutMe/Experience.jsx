import { FaBriefcase, FaRocket } from "react-icons/fa";

const TimelineCard = ({ date, role, company, desc, icon, highlight }) => (
  <div className="relative pl-8">
    <div
      className={`absolute -left-[13px] top-0 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 ${
        highlight ? "bg-orange-500 animate-pulse" : "bg-gray-400"
      }`}
    ></div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-orange-500 transition-all">
      <div className="flex justify-between mb-2">
        <h3 className="text-xl font-bold">{role}</h3>
        <span className="text-xs font-bold bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {date}
        </span>
      </div>
      <p className="text-sm text-gray-500">{company}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto border-l-4 border-orange-200 dark:border-gray-700 ml-4 md:ml-10 animate-fade-in-up">
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
        desc="Completed a 1-month intensive remote internship. Built portfolio websites and calculator apps."
        icon={<FaRocket />}
      />
    </div>
  );
};

export default Experience;
