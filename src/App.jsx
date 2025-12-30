import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./Components/Header";
import Booter from "./Components/Booter";
import Chatbot from "./Components/Chatbot";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* <Navbar /> */}
    <Header/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
        <Chatbot position="bottom-8 right-8" brand="#22c55e" />
      </main>
      {/* <Footer /> */}
      <Booter/>
    </div>
  );
}

export default App;
