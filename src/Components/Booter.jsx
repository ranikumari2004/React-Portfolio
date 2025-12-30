import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Booter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout: 1 Col Mobile, 3 Cols Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            {/* UPDATED: Blue gradient changed to Orange/Amber gradient */}
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Rani.Dev
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              A passionate Computer Engineer & Full Stack Developer building seamless digital experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/about">About Me</FooterLink></li>
              <li><FooterLink to="/projects">Projects</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <SocialIcon href="https://github.com/ranikumari2004" icon={<FaGithub />} />
              <SocialIcon href="https://www.linkedin.com/in/rani-kumari-250a47274/" icon={<FaLinkedin />} />
              <SocialIcon href="https://x.com/RaniKumari54012" icon={<FaTwitter />} />
              <SocialIcon href="mailto:rnistherock06@gmail.com" icon={<FaEnvelope />} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 pt-2">
              Based in Rajkot, India 🇮🇳
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-500 text-sm">
            © {currentYear} Rani Kumari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Helper Components for Clean Code ---

const FooterLink = ({ to, children }) => (
  <Link 
    to={to} 
    // UPDATED: hover:text-blue changed to hover:text-orange
    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    // UPDATED: hover:bg-blue changed to hover:bg-orange
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white transition-all shadow-sm border border-gray-200 dark:border-gray-700"
  >
    {icon}
  </a>
);

export default Booter;