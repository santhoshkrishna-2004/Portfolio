import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Toaster } from "./components/ui/toaster";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
          <Header />
          
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;