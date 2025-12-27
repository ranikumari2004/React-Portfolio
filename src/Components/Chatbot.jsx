import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaTimes, FaRobot, FaUser } from "react-icons/fa";

const Chatbot = ({ isOpen, onClose }) => {
  // Questions List
  const questions = [
    { key: "name", text: "Hi there! I'm Rani's AI Assistant. 👋 May I know your name?" },
    { key: "company", text: "Nice to meet you! What is your Company or Brand name?" },
    { key: "service", text: "What kind of service are you looking for? (e.g., Portfolio, E-commerce, Corporate Website)" },
    { key: "features", text: "Got it. Any specific features you need? (e.g., Dark Mode, Payment Gateway, Admin Panel)" },
    { key: "timeline", text: "What is your expected timeline for this project?" },
    { key: "budget", text: "Do you have a budget range in mind?" },
    { key: "contact", text: "Lastly, please share your Email or Phone number so Rani can contact you." },
  ];

  const [messages, setMessages] = useState([
    { sender: "bot", text: questions[0].text },
  ]);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // 1. Add User Message
    const userMsg = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    
    // Save Data
    const currentKey = questions[step].key;
    setFormData({ ...formData, [currentKey]: inputValue });
    
    setInputValue("");
    setIsTyping(true);

    // 2. Bot Response Logic
    setTimeout(() => {
      let nextStep = step + 1;
      
      if (nextStep < questions.length) {
        setMessages((prev) => [...prev, { sender: "bot", text: questions[nextStep].text }]);
        setStep(nextStep);
      } else {
        // Chat Finished
        setMessages((prev) => [
            ...prev, 
            { sender: "bot", text: "Thank you! I have noted your requirements. Rani will contact you shortly. 🚀" }
        ]);
        console.log("Captured Data:", { ...formData, [currentKey]: inputValue }); // Backend bhejne ke liye data yahan ready hai
      }
      setIsTyping(false);
    }, 1000); // 1 second delay for "real" feel
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-full max-w-sm md:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-[500px] animate-fade-in-up">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-2 rounded-full">
            <FaRobot className="text-xl" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Project Assistant</h3>
            <span className="text-xs bg-green-400 text-green-900 px-2 py-0.5 rounded-full font-bold">Online</span>
          </div>
        </div>
        <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition">
          <FaTimes />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800/50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
              msg.sender === "user" 
                ? "bg-orange-500 text-white rounded-br-none" 
                : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-100 dark:border-gray-600"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your answer..."
            className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={step >= questions.length}
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || step >= questions.length}
            className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;