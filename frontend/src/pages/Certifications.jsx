import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Code, Network, Server, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { mockCertifications } from '../data/mock';

const Certifications = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const getProviderIcon = (iconName) => {
    const icons = {
      Code: Code,
      Network: Network,
      Server: Server,
      Award: Award
    };
    const IconComponent = icons[iconName] || Award;
    return <IconComponent className="h-8 w-8 text-white" />;
  };

  const getProviderColor = (provider) => {
    const colors = {
      'HackerRank': 'from-green-500 to-green-600',
      'Cisco': 'from-blue-500 to-blue-600',
      'Great Learning': 'from-purple-500 to-purple-600',
      'Pearson MePro': 'from-orange-500 to-orange-600'
    };
    return colors[provider] || 'from-gray-500 to-gray-600';
  };

  const getProviderDescription = (provider) => {
    const descriptions = {
      'HackerRank': 'Programming and development skills assessment platform',
      'Cisco': 'Networking and cybersecurity technology leader',
      'Great Learning': 'Professional development and upskilling platform',
      'Pearson MePro': 'English proficiency and communication skills'
    };
    return descriptions[provider] || 'Professional certification';
  };

  const totalCertificates = mockCertifications.reduce((total, cert) => total + cert.certificates.length, 0);

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
            Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Professional certifications and achievements that validate my technical expertise
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {mockCertifications.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Providers</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {totalCertificates}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Certificates</div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mockCertifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    {/* Provider Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getProviderColor(certification.provider)} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getProviderIcon(certification.icon)}
                    </motion.div>
                    
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {certification.provider}
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {getProviderDescription(certification.provider)}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Certificate Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Certificates Earned:
                      </span>
                      <Badge 
                        className={`bg-gradient-to-r ${getProviderColor(certification.provider)} text-white px-3 py-1`}
                      >
                        {certification.certificates.length}
                      </Badge>
                    </div>
                    
                    {/* Certificates List */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 mb-3">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Achievements:
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
                        {certification.certificates.map((cert, certIndex) => (
                          <motion.div
                            key={certIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: certIndex * 0.05 }}
                            className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                              {cert}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <motion.div
          variants={pageVariants}
          className="mb-16"
        >
          <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Certification Highlights
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Demonstrating expertise across multiple technology domains
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Programming
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Python, JavaScript, Problem Solving
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Networking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    CCNA, Network Fundamentals
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                >
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    DevOps
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Development Operations
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Communication
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Professional English Skills
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={pageVariants}
          className="text-center"
        >
          <Card className="shadow-2xl border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm always working on new certifications and expanding my skill set. 
                Stay tuned for more achievements!
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View All Achievements
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </motion.div>
  );
};

export default Certifications;