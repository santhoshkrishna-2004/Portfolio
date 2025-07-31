import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Brain, Globe, Filter, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const { toast } = useToast();

  const filters = ['All', 'AI', 'Web'];
  
  // Fetch projects from API
  useEffect(() => {
    fetchProjects();
  }, [selectedFilter]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const url = selectedFilter === 'All' 
        ? `${API}/projects` 
        : `${API}/projects?category=${selectedFilter}`;
        
      const response = await axios.get(url);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast({
        title: "Error",
        description: "Failed to load projects. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

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
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI':
        return <Brain className="h-4 w-4 text-purple-500" />;
      case 'Web':
        return <Globe className="h-4 w-4 text-blue-500" />;
      default:
        return <Code className="h-4 w-4 text-green-500" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'Web':
        return 'bg-blue-500 hover:bg-blue-600';
      default:
        return 'bg-green-500 hover:bg-green-600';
    }
  };

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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my work in AI, machine learning, and full-stack development
          </p>
          
          {/* Filter Tabs */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'outline'}
                onClick={() => setSelectedFilter(filter)}
                disabled={loading}
                className={`px-6 py-2 transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <Loader2 className="h-8 w-8 text-blue-600" />
            </motion.div>
            <span className="ml-3 text-lg text-gray-600 dark:text-gray-300">
              Loading projects...
            </span>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm overflow-hidden">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">
                            Featured
                          </Badge>
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getCategoryColor(project.category)} text-white`}>
                          <div className="flex items-center space-x-1">
                            {getCategoryIcon(project.category)}
                            <span>{project.category}</span>
                          </div>
                        </Badge>
                      </div>

                      {/* Hover Overlay with Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 20
                        }}
                        className="absolute inset-0 flex items-center justify-center space-x-4"
                      >
                        <Button
                          size="sm"
                          asChild
                          className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/30"
                        >
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </a>
                        </Button>
                        
                        {project.live_url && (
                          <Button
                            size="sm"
                            asChild
                            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/30"
                          >
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span>Live</span>
                            </a>
                          </Button>
                        )}
                      </motion.div>
                    </div>

                    {/* Project Details */}
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Technologies:
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="secondary" 
                              className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-500 dark:text-gray-400">
              <Code className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg">No projects found for the selected filter.</p>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={pageVariants}
          className="text-center mt-16"
        >
          <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Want to see more?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Check out my GitHub for additional projects and contributions
              </p>
              <Button
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
              >
                <a
                  href="https://github.com/santhoshkrishna-2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="h-5 w-5" />
                  <span>Visit GitHub</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;