import React, { useState, useRef } from "react";
import { FaAward, FaEye, FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

// === IMAGES IMPORT ===
import cert1 from "../../../public/AIML.jpg";
import cert2 from "../../../public/AI.jpg";
import cert3 from "../../../public/Angular.jpg";
import ASIP from "../../../public/ASIP.jpg";
import CCNA from "../../../public/CCNA1.jpg";
import Codsoft from "../../../public/Codsoft.jpg";
import Csharp from "../../../public/csharp.jpg";
import Ew from "../../../public/EW.jpg";
import Python from "../../../public/Python.jpg";
import Js from "../../../public/JS.jpg";

// === DATA ===
const certificatesData = [
  { id: 1, image: cert1, title: "AI & Machine Learning", issuer: "RK University", desc: "Completed comprehensive training on Artificial Intelligence foundations." },
  { id: 2, image: cert2, title: "Web App Development", issuer: "RK University", desc: "Hands-on experience with React, Node.js, Express, and MongoDB." },
  { id: 3, image: cert3, title: "Angular Framework", issuer: "Infosys", desc: "Mastered Single Page Applications (SPA) using Angular components." },
  { id: 4, image: ASIP, title: "Agile Scrum Practices", issuer: "Infosys", desc: "Learned Agile methodology and Scrum framework for project management." },
  { id: 5, image: CCNA, title: "CCNAv7 Networking", issuer: "Cisco", desc: "Fundamentals of Network Security, Routing, and Switching." },
  { id: 6, image: Codsoft, title: "Web Development Internship", issuer: "CodSoft", desc: "Built dynamic websites and landing pages during the internship." },
  { id: 7, image: Csharp, title: "Foundational C#", issuer: "Microsoft", desc: "Core concepts of C# programming and .NET framework." },
  { id: 8, image: Ew, title: "Email Writing Skills", issuer: "Infosys", desc: "Professional communication and corporate email etiquette." },
  { id: 9, image: Python, title: "Python Programming", issuer: "Infosys", desc: "Data structures, algorithms and scripting with Python." },
  { id: 10, image: Js, title: "Modern Javascript", issuer: "Infosys", desc: "ES6+, DOM manipulation and asynchronous programming." },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const sliderRef = useRef(null);

  // Scroll Handler for Carousel
  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 320;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 320;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">My <span className="text-orange-600">Certificates</span></h2>
        <p className="text-gray-500 dark:text-gray-400">Recognitions & Achievements</p>
      </div>

      {/* === CAROUSEL CONTAINER === */}
      <div className="relative group">
        
        {/* Left Button */}
        <button 
          onClick={slideLeft} 
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hidden md:block"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button 
          onClick={slideRight} 
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hidden md:block"
        >
          <FaChevronRight size={20} />
        </button>

        {/* SLIDER TRACK */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 py-8 px-2 scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certificatesData.map((cert) => (
            <div 
              key={cert.id} 
              className="min-w-[300px] md:min-w-[350px] bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col relative group/card"
            >
              
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden rounded-t-xl cursor-pointer" onClick={() => setSelectedCert(cert)}>
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold border border-white/30">
                    <FaEye /> View
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-bold tracking-wider text-orange-500 uppercase mb-1">{cert.issuer}</span>
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2 line-clamp-1">{cert.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{cert.desc}</p>
              </div>

              {/* Bottom Line */}
              <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-red-500 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      {/* === MODERN MODAL (POPUP) === */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white dark:bg-gray-900 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-scale-up"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-red-500 text-white p-2 rounded-full transition-colors"
            >
              <FaTimes />
            </button>

            {/* Left Side: Image */}
            <div className="w-full md:w-3/5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="max-h-[60vh] md:max-h-[80vh] w-auto object-contain rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-2/5 p-8 flex flex-col justify-center bg-white dark:bg-gray-900">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
                  {selectedCert.issuer}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white leading-tight mb-4">
                  {selectedCert.title}
                </h2>
                <div className="h-1 w-20 bg-orange-500 rounded mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                  {selectedCert.desc}
                </p>
              </div>

              {/* Extra Meta Data (Optional) */}
              <div className="mt-auto border-t border-gray-100 dark:border-gray-800 pt-6 flex items-center gap-3 text-gray-500 text-sm">
                <FaAward className="text-orange-500 text-lg" />
                <span>Verified Certificate</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;