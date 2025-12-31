import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Rani from "../../public/rani.jpg";

import {
  FaBriefcase,
  FaGraduationCap,
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
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4 bg-orange-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
            Building <span className="text-orange-600">Scalable</span> &
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent block md:inline mt-2 md:mt-0">
               User-Focused Apps
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer (MERN) with hands-on experience in creating modern, responsive, and performance-driven web solutions.
          </p>
        </div>
      </div>

      {/* ABOUT / EXPERTISE */}
      <div className="py-12 md:py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* IMAGE (Responsive) */}
        <div className="relative flex justify-center order-1 md:order-none">
          <div className="absolute top-3 -left-2 md:-left-3 w-64 h-64 md:w-72 md:h-72 bg-orange-200 dark:bg-gray-700 rounded-2xl"></div>
          <img
            src={Rani}
            alt="Rani Kumari"
            className="relative z-10 w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* PROFESSIONAL ABOUT */}
        <div className="order-2 md:order-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-3">
            About Me
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 text-justify">
            I am a Full Stack Developer specializing in the MERN stack, with strong experience in both frontend and backend development. I focus on building clean, scalable, and user-friendly applications.
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 text-justify">
            My expertise includes designing responsive UI, integrating multiple REST APIs, and developing backend systems that simplify workflows for both users and administrators.
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-justify">
            I have a clear understanding of development processes, follow step-by-step execution, and work effectively in team environments to deliver reliable solutions.
          </p>
        </div>
      </div>

      {/* CAREER & EDUCATION */}
      <div className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
          My Career & Academics
        </h2>

        {/* Responsive Tabs Container */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
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

        <div className="max-w-6xl mx-auto min-h-[400px]">
          {activeTab === "experience" && <Experience />}
          {activeTab === "education" && <Education />}
          {activeTab === "certificates" && <Certificates />}
        </div>
      </div>

      {/* SOFT SKILLS */}
      <div className="py-16 md:py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          Why Work With Me?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
    className={`flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
      active
        ? "bg-orange-600 text-white shadow-lg scale-105"
        : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
    }`}
  >
    {icon} {label}
  </button>
);

const SkillCard = ({ icon, title, desc }) => (
  <div className="text-center p-6 md:p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-transparent hover:border-orange-200 dark:hover:border-gray-700 transition-all">
    <div className="text-3xl text-orange-500 mb-4 inline-block">{icon}</div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{desc}</p>
  </div>
);

export default About;