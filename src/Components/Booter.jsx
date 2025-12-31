// Footer.jsx (Booter renamed to Footer standard)
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-gray-950 pt-20 pb-10 overflow-hidden border-t border-gray-200 dark:border-gray-800">
      
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/5 dark:bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-black bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Rani.Dev
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Crafting digital experiences with pixel-perfect precision. 
              Focused on building responsive, accessible, and performant web applications.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialIcon href="https://github.com/ranikumari2004" icon={<FaGithub />} label="GitHub" />
              <SocialIcon href="https://www.linkedin.com/in/rani-kumari-250a47274/" icon={<FaLinkedin />} label="LinkedIn" />
              <SocialIcon href="https://x.com/RaniKumari54012" icon={<FaTwitter />} label="Twitter" />
            </div>
          </div>

          {/* Links Column (Span 3) */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Navigation</h3>
            <ul className="space-y-4">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Me</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </ul>
          </div>

          {/* Contact Column (Span 4) */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Open for collaborations and new opportunities.
              </p>
              <a 
                href="mailto:rnistherock06@gmail.com"
                className="flex items-center justify-center w-full gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-orange-600 dark:hover:bg-orange-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                <FaEnvelope /> Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} Rani Kumari. Built with React & Tailwind.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-2">
            Based in <span className="text-orange-600 dark:text-orange-400 font-medium">Rajkot, India 🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Sub Components ---

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium flex items-center gap-2 group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 scale-0 group-hover:scale-100 transition-transform"></span>
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-orange-600 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
  >
    {icon}
  </a>
);

export default Footer;