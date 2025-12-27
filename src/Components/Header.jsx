import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../auth/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false); 
  const location = useLocation(); 

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- LOGO (Orange Gradient) --- */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            onClick={closeMenu}
          >
            Rani.Dev
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-2 py-1 font-medium transition-colors duration-300 group ${
                  isActive(link.path) 
                    ? "text-orange-600 dark:text-orange-400" 
                    : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                }`}
              >
                {link.name}
                {/* Underline Animation (Orange) */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}

            <ThemeButton theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeButton theme={theme} toggleTheme={toggleTheme} />
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 focus:outline-none">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`text-lg font-medium block px-2 py-2 rounded-lg transition-colors ${
                isActive(link.path)
                  ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const ThemeButton = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-gray-700 transition-all shadow-sm active:scale-95"
  >
    {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
  </button>
);

export default Header;