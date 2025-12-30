import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Bot, Sparkles, PartyPopper } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

// --- 🧠 Chat Data (Updated for Rani Kumari) ---
const chatFlow = {
  start: {
    message: "Happy New Year 2026! 🎆 May this year bring you code that compiles on the first try! I'm Rani's Assistant. How can I help you?",
    options: [
      "I want to Hire Rani 💼",
      "View Her Work 🚀", // Updated to 'Her'
      "About Rani 🧐",
      "Just saying Hi 👋"
    ]
  },
  
  "I want to Hire Rani 💼": {
    message: "That's great news! Rani is always open to exciting opportunities. What kind of role are you looking for?",
    options: ["Freelance Project 🛠️", "Full-time Role 🏢", "Consultation 🤝"]
  },
  "Freelance Project 🛠️": {
    message: "Awesome! Rani specializes in building MVPs, E-commerce Stores, and Zoho Automation. Do you have a project brief?",
    options: ["Yes, Let's Connect", "Back to Menu"]
  },
  "Full-time Role 🏢": {
    message: "Rani is a perfect fit for MERN Stack & Zoho Developer roles. She is based in India and open to Hybrid/Remote work.",
    options: ["Download Resume 📄", "Schedule Interview 📅", "Back to Menu"]
  },
  "View Her Work 🚀": { // Key Updated
    message: "She has built 10+ projects ranging from complex web apps to business automation. What interests you?",
    options: ["MERN Stack Apps ⚛️", "Zoho Projects 📊", "All Projects"]
  },
  "MERN Stack Apps ⚛️": {
    // --- UPDATED PROJECT DETAILS HERE ---
    message: "Check out 'LittleHaven' (Adoption Platform) and other E-commerce solutions. Built with React, Node.js & MongoDB.",
    options: ["Go to Projects Page", "Back to Menu"],
    action: "/projects"
  },
  "Zoho Projects 📊": {
    message: "She has automated workflows using Zoho CRM, Inventory & Creator. She bridges code with business logic.",
    options: ["See Experience", "Back to Menu"],
    action: "/experience" // Assuming you have an experience page
  },
  "About Rani 🧐": {
    message: "Rani Kumari is a Full Stack Developer & Computer Engineer. She loves solving DSA problems in Java, writes tech blogs, and is obsessed with clean UI.",
    options: ["What are her Skills?", "Contact Her", "Back to Menu"]
  },
  "What are her Skills?": {
    message: "Core Stack: React.js, Node.js, Express, MongoDB. \nExtras: Zoho Suite, Java (DSA), Tailwind CSS.",
    options: ["Download Resume 📄", "Back to Menu"]
  },
  "Contact Her": {
    message: "Fastest way to reach her? WhatsApp or Email. Choose your weapon! ⚔️",
    options: ["WhatsApp Me 💬", "Send Email 📧"]
  },
  "Yes, Let's Connect": {
    message: "Fastest way to reach her? WhatsApp or Email. Choose your weapon! ⚔️",
    options: ["WhatsApp Me 💬", "Send Email 📧"]
  },
  "Schedule Interview 📅": {
    message: "Please drop an email with the job description. Rani usually responds within 2 hours!",
    options: ["Send Email 📧", "LinkedIn Profile 🔗"]
  },
  "Just saying Hi 👋": {
    message: "Hello friend! Thanks for stopping by. Wishing you a bug-free 2026! 🚀",
    options: ["Back to Menu"]
  },
  // --- UPDATED CONTACT LINKS ---
  "WhatsApp Me 💬": { link: "https://wa.me/919876543210?text=Hi%20Rani,%20I%20saw%20your%20portfolio..." }, 
  "Send Email 📧": { link: "mailto:rani.kumari@example.com" }, // Replace with actual email
  "LinkedIn Profile 🔗": { link: "https://www.linkedin.com/in/rani-kumari" }, // Replace with actual LinkedIn
  "Download Resume 📄": { link: "/resume.pdf" },
  "default": {
    message: "Is there anything else I can help you with?",
    options: ["Back to Menu"]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // --- New Year Confetti Logic ---
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Handle Window Resize
  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial Greeting & Confetti Trigger
  useEffect(() => {
    if (isOpen) {
        // Trigger Confetti when chat opens
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Stop after 5 seconds

        if (messages.length === 0) {
            handleBotResponse("start");
        }
    }
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleBotResponse = (key) => {
    setIsTyping(true);
    setCurrentOptions([]); 

    setTimeout(() => {
      const data = chatFlow[key] || chatFlow["default"];
      
      if (data.link) {
        window.open(data.link, "_blank");
        setIsTyping(false);
        setMessages(prev => [...prev, { sender: "bot", text: "Opening link for you... 🚀" }]);
        setCurrentOptions(["Back to Menu"]);
        return;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: data.message }]);
      setCurrentOptions(data.options || []);
      setIsTyping(false);
    }, 800); 
  };

  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { sender: "user", text: option }]);
    
    // Check if the option is a key in chatFlow, otherwise logic to find key
    let flowKey = option;
    if (option === "Back to Menu") flowKey = "start";
    if (option === "Go to Projects Page" || option === "All Projects") {
        window.location.href = "/projects"; // Direct redirect
        return;
    }

    handleBotResponse(flowKey);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] font-sans">
      
      {/* --- Confetti (Only when chat is open) --- */}
      {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-[1000]">
             <Confetti 
                width={windowSize.width} 
                height={windowSize.height} 
                recycle={false} 
                numberOfPieces={300} 
                gravity={0.2}
             />
          </div>
      )}

      {/* --- Toggle Button --- */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative group flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full shadow-2xl text-white overflow-visible"
          >
              <MessageSquare size={28} />
              
              {/* 🎆 New Year Badge on Button 🎆 */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-md animate-bounce">
                2026
              </span>

              {/* Ripple Effect */}
              <span className="absolute inset-0 rounded-full border-2 border-orange-400 opacity-60 animate-ping"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* --- Chat Interface --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="w-[90vw] sm:w-[360px] h-[550px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-4 flex items-center justify-between shrink-0 relative overflow-hidden">
               {/* Header Background Decoration */}
               <div className="absolute top-0 right-0 p-4 opacity-10">
                   <PartyPopper size={64} className="text-white" />
               </div>

               <div className="flex items-center gap-3 relative z-10">
                 <div className="relative">
                   <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                       <Bot size={24} className="text-white" />
                   </div>
                   <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-orange-500 rounded-full"></span>
                 </div>
                 <div>
                   <h3 className="text-white font-bold text-base flex items-center gap-2">
                       Rani's Assistant <span className="text-xs bg-white/20 px-1.5 rounded text-white">2026 Edition</span>
                   </h3>
                   <p className="text-orange-100 text-xs opacity-90">Replies instantly ⚡</p>
                 </div>
               </div>
               <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors relative z-10"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto custom-scrollbar">
                <div className="text-center text-[10px] text-gray-400 my-2 font-medium uppercase tracking-wider">Jan 1, 2026</div>

                {messages.map((msg, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.sender === 'bot' && (
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2 border border-orange-200 shrink-0">
                                <Bot size={16} className="text-orange-600" />
                            </div>
                        )}
                        
                        <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                            msg.sender === 'user' 
                            ? 'bg-orange-500 text-white rounded-br-none' 
                            : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                        }`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <div className="flex items-center gap-1 ml-10 mb-2">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                )}
                <div ref={messagesEndRef}></div>
            </div>

            {/* Options Area */}
            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
                {currentOptions.length > 0 ? (
                    <div className="flex flex-wrap gap-2 justify-center">
                        {currentOptions.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOptionClick(option)}
                                className="px-3 py-1.5 bg-orange-50 text-orange-600 text-xs sm:text-sm font-semibold rounded-full border border-orange-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm active:scale-95"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                ) : (
                   !isTyping && (
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs py-2">
                        <Sparkles size={14} className="text-orange-400" />
                        <span>Select an option to continue</span>
                    </div>
                   )
                )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;