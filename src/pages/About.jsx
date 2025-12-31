import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Rani from "../../public/rani.jpg";

import {
  FaBriefcase,
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaHandshake,
  FaCertificate,
} from "react-icons/fa";

import Experience from "./AboutMe/Experience";
import Education from "./AboutMe/Education";
import Certificates from "./AboutMe/Certificates";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

      {/* SEO */}
      <Helmet>
        <title>About Me | Rani Kumari - Full Stack Developer</title>
        <meta
          name="description"
          content="About Rani Kumari – Full Stack Developer (MERN) skilled in frontend, backend, APIs, and scalable web applications."
        />
      </Helmet>

      {/* HERO */}
      <div className="relative pt-32 pb-16 px-4 bg-orange-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Building <span className="text-orange-600">Scalable</span> &
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              User-Focused Applications
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer (MERN) with hands-on experience in creating modern, responsive, and performance-driven web solutions.
          </p>
        </div>
      </div>

      {/* ABOUT / EXPERTISE */}
      <div className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE (SMALLER) */}
        <div className="relative flex justify-center">
          <div className="absolute top-3 -left-3 w-72 h-72 bg-orange-200 dark:bg-gray-700 rounded-2xl"></div>
          <img
            src={Rani}
            alt="Rani Kumari"
            className="relative z-10 w-72 h-72 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* PROFESSIONAL ABOUT */}
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            About Me
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            I am a Full Stack Developer specializing in the MERN stack, with strong experience in both frontend and backend development. I focus on building clean, scalable, and user-friendly applications.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            My expertise includes designing responsive UI, integrating multiple REST APIs, and developing backend systems that simplify workflows for both users and administrators.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            I have a clear understanding of development processes, follow step-by-step execution, and work effectively in team environments to deliver reliable solutions.
          </p>
        </div>
      </div>

      {/* CAREER & EDUCATION */}
      <div className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <h2 className="text-3xl font-bold text-center mb-10">
          My Career & Academics
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          <TabButton
            label="Experience"
            icon={<FaBriefcase />}
            active={activeTab === "experience"}
            onClick={() => setActiveTab("experience")}
          />
          <TabButton
            label="Education"
            icon={<FaGraduationCap />}
            active={activeTab === "education"}
            onClick={() => setActiveTab("education")}
          />
          <TabButton
            label="Certificates"
            icon={<FaCertificate />}
            active={activeTab === "certificates"}
            onClick={() => setActiveTab("certificates")}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {activeTab === "experience" && <Experience />}
          {activeTab === "education" && <Education />}
          {activeTab === "certificates" && <Certificates />}
        </div>
      </div>

      {/* SOFT SKILLS */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Work With Me?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            icon={<FaUsers />}
            title="Team Collaboration"
            desc="Experienced in working with cross-functional teams and following structured development workflows."
          />
          <SkillCard
            icon={<FaRocket />}
            title="Problem Solver"
            desc="Focused on building efficient solutions with performance, scalability, and usability in mind."
          />
          <SkillCard
            icon={<FaHandshake />}
            title="User & Admin Friendly"
            desc="I design systems that are simple, intuitive, and easy to manage for all stakeholders."
          />
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition ${
      active
        ? "bg-orange-600 text-white"
        : "bg-white dark:bg-gray-700 text-gray-600"
    }`}
  >
    {icon} {label}
  </button>
);

const SkillCard = ({ icon, title, desc }) => (
  <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
    <div className="text-3xl text-orange-500 mb-4">{icon}</div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{desc}</p>
  </div>
);

export default About;
