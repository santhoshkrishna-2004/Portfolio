import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockEducation } from '../data/mock';

const Education = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 pt-20 pb-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          variants={pageVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey in Computer Science and Engineering
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
          
          <div className="space-y-12">
            {mockEducation.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 ${
                    edu.status === 'current' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gradient-to-r from-gray-400 to-gray-500'
                  }`}
                  animate={{
                    scale: edu.status === 'current' ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: edu.status === 'current' ? Infinity : 0,
                    repeatType: 'reverse',
                  }}
                />

                {/* Education Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="shadow-2xl border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {edu.institution}
                          </CardTitle>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                            {edu.degree}
                          </p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          {edu.status === 'current' && (
                            <Badge className="bg-green-500 hover:bg-green-600 text-white">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Currently Pursuing
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {/* Duration */}
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{edu.duration}</span>
                        </div>

                        {/* CGPA */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              CGPA/Percentage:
                            </span>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`font-bold ${
                              parseFloat(edu.cgpa) >= 7.0 || parseFloat(edu.cgpa) >= 70
                                ? 'border-green-500 text-green-600 dark:text-green-400'
                                : 'border-blue-500 text-blue-600 dark:text-blue-400'
                            }`}
                          >
                            {edu.cgpa}
                          </Badge>
                        </div>

                        {/* Specialization for current degree */}
                        {edu.status === 'current' && (
                          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <GraduationCap className="h-4 w-4 text-blue-600" />
                              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
                                Key Focus Areas:
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {['Machine Learning', 'Web Development', 'Data Structures', 'AI Systems'].map((area) => (
                                <Badge 
                                  key={area}
                                  variant="secondary" 
                                  className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                                >
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <motion.div
          variants={pageVariants}
          className="mt-20"
        >
          <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Academic Highlights
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Key milestones and achievements throughout my educational journey
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    CSE Major
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Specializing in AI, ML, and Full-Stack Development
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                >
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Consistent Performance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Maintaining steady academic progress
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Always exploring new technologies and concepts
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;