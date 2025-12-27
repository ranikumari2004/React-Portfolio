import { Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    // 'min-h-screen' ensures footer stays at bottom
    // 'transition-colors' makes theme switching smooth
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Navigation Bar (Fixed Top) */}
      <Navbar />

      {/* Main Content Area */}
      {/* 'flex-grow' pushes the footer down if content is short */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Agar koi unknown page khole toh wapas Home bhej do */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer (Always at bottom) */}
      <Footer />
      
    </div>
  );
}

export default App;