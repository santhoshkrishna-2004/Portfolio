import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Brain, Layers, Sparkles, Zap, Cpu } from 'lucide-react';
import { Button } from '../components/ui/button';
import { mockPersonalInfo, mockContactInfo } from '../data/mock';

const Landing = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => 
        (prev + 1) % mockPersonalInfo.rotatingTitles.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Enhanced 3D Particle System
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, Math.random() * 200 - 100, 0],
        y: [0, Math.random() * 200 - 100, 0],
        z: [0, Math.random() * 100 - 50, 0],
        rotate: [0, 360],
        scale: [0.5, 1.5, 0.5],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 8 + Math.random() * 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: Math.random() * 5,
      }}
    >
      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm shadow-lg" />
    </motion.div>
  ));

  // 3D Grid Background
  const gridLines = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={`grid-${i}`}
      className="absolute bg-gradient-to-r from-transparent via-blue-200/20 to-transparent dark:via-blue-400/10"
      style={{
        width: '2px',
        height: '100%',
        left: `${i * 5}%`,
        transformOrigin: 'bottom',
      }}
      animate={{
        scaleY: [0.5, 1, 0.5],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 4 + i * 0.2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      {/* 3D Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            rotateX: [0, 2, 0],
            rotateY: [0, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'rotateX(45deg) translateZ(-100px)',
          }}
        />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
        
        {/* Large 3D Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl filter blur-3xl shadow-2xl" />
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-2xl filter blur-2xl" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64"
          animate={{
            rotateX: [360, 0],
            rotateY: [180, 0],
            scale: [1.2, 0.9, 1.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl shadow-2xl" />
          <div className="absolute inset-3 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full filter blur-xl" />
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl shadow-2xl flex items-center justify-center"
          animate={{
            y: [0, -30, 0],
            rotateZ: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: `translate(0px, 0px)`,
          }}
        >
          <Sparkles className="h-8 w-8 text-blue-500" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-32 w-20 h-20 bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl shadow-2xl flex items-center justify-center"
          animate={{
            y: [0, 25, 0],
            rotateZ: [360, 0],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: `translate(0px, 0px)`,
          }}
        >
          <Zap className="h-10 w-10 text-purple-500" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-20 w-14 h-14 bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl shadow-2xl flex items-center justify-center"
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, -360],
            scale: [0.9, 1.3, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: `translate(0px, 0px)`,
          }}
        >
          <Cpu className="h-7 w-7 text-cyan-500" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  {mockPersonalInfo.name}
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="h-16 flex items-center"
                >
                  <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mr-2">
                    I'm a
                  </span>
                  <motion.span
                    key={currentTitleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    {mockPersonalInfo.rotatingTitles[currentTitleIndex]}
                  </motion.span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {mockPersonalInfo.subtitle}
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.a
                    href={mockContactInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Resume</span>
                  </motion.a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Contact Me</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.a>
                </Button>
              </motion.div>

              {/* Skills Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center space-x-8 pt-8"
              >
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Full Stack</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">AI & ML</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Layers className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Cloud Ready</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced 3D Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
                {/* Main 3D Container with Enhanced Depth */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    rotateY: [0, 8, -8, 0],
                    rotateX: [0, 4, -4, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1200px',
                  }}
                >
                  {/* Multiple 3D Layers for Depth */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl"
                    style={{
                      transform: 'translateZ(0px)',
                      boxShadow: `
                        0 25px 50px -12px rgba(0, 0, 0, 0.25),
                        0 0 0 1px rgba(255, 255, 255, 0.05),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.1)
                      `,
                    }}
                  />
                  
                  <motion.div
                    className="absolute inset-2 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-2xl backdrop-blur-sm"
                    style={{
                      transform: 'translateZ(10px)',
                    }}
                  />
                  
                  <motion.div
                    className="absolute inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-md"
                    style={{
                      transform: 'translateZ(20px)',
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
                    }}
                  />
                </motion.div>
                
                {/* Enhanced Floating Tech Icons */}
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center justify-center border border-white/20"
                  animate={{
                    y: [0, -25, 0],
                    rotateZ: [0, 180, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    transform: `translateZ(40px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <Code className="h-10 w-10 text-blue-500 drop-shadow-lg" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center justify-center border border-white/20"
                  animate={{
                    y: [0, 25, 0],
                    rotateZ: [360, 180, 0],
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    transform: `translateZ(40px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <Brain className="h-10 w-10 text-purple-500 drop-shadow-lg" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 w-16 h-16 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl shadow-xl flex items-center justify-center border border-white/20"
                  animate={{
                    x: [0, 15, 0],
                    rotateZ: [0, -90, 0],
                    scale: [0.9, 1.2, 0.9],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    transform: `translateZ(30px)`,
                  }}
                >
                  <Layers className="h-8 w-8 text-cyan-500 drop-shadow-lg" />
                </motion.div>
                
                {/* Enhanced Profile Image with Glass Effect */}
                <motion.div
                  className="absolute inset-6 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    transform: 'translateZ(25px)',
                    transformStyle: 'preserve-3d',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <img
                    src={mockPersonalInfo.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  
                  {/* Glass reflection effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50" />
                </motion.div>

                {/* Orbital Rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{
                    transform: 'translateZ(-10px) scale(1.1)',
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 border-2 border-purple-400/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  style={{
                    transform: 'translateZ(-15px) scale(1.2)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;