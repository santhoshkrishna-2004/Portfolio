import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Database, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { mockPersonalInfo, mockSkills } from '../data/mock';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const skillCategories = [
    { key: 'frontend', title: 'Frontend', icon: Code2, color: 'bg-blue-500' },
    { key: 'backend', title: 'Backend', icon: Database, color: 'bg-purple-500' },
    { key: 'languages', title: 'Languages', icon: Code2, color: 'bg-green-500' },
    { key: 'tools', title: 'Tools', icon: Wrench, color: 'bg-orange-500' }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          variants={pageVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge the gap between AI and web development
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Section */}
          <motion.div
            variants={pageVariants}
            className="space-y-8"
          >
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-2">
                      <img
                        src={mockPersonalInfo.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </motion.div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {mockPersonalInfo.name}
                </CardTitle>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {mockPersonalInfo.title}
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center justify-center mb-4">
                  <User className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Bio</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {mockPersonalInfo.bio}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={pageVariants}
            className="space-y-8"
          >
            <Card className="shadow-2xl border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="frontend" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6">
                    {skillCategories.map((category) => (
                      <TabsTrigger 
                        key={category.key} 
                        value={category.key}
                        className="flex items-center space-x-1"
                      >
                        <category.icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{category.title}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {skillCategories.map((category) => (
                    <TabsContent key={category.key} value={category.key}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-2 mb-4">
                          <div className={`w-3 h-3 rounded-full ${category.color}`} />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {category.title} Technologies
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {mockSkills[category.key].map((skill, index) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Goals & Vision */}
        <motion.div
          variants={pageVariants}
          className="text-center"
        >
          <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Vision
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                To leverage cutting-edge AI and machine learning technologies to build scalable, 
                intelligent web applications that solve real-world problems. I aim to work with 
                top-tier multinational companies where I can contribute to impactful projects 
                and continue growing as a developer.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Badge className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white">
                  Innovation Driven
                </Badge>
                <Badge className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white">
                  Problem Solver
                </Badge>
                <Badge className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white">
                  Lifelong Learner
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
