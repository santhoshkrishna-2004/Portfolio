// Mock data for the portfolio - will be replaced with backend integration later

export const mockProjects = [
  {
    id: '1',
    title: 'Adaptive AI Tutor',
    description: 'Design a clean student dashboard for an Adaptive AI Tutor with intelligent learning paths and personalized content recommendations.',
    category: 'AI',
    technologies: ['React', 'Python', 'TensorFlow', 'Node.js'],
    githubUrl: 'https://github.com/santhoshkrishna-2004/Adaptive-Tutor',
    liveUrl: null,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'Sketch to Image',
    description: 'Converts hand-drawn sketches into realistic images using deep learning models and advanced computer vision techniques.',
    category: 'AI',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Flask'],
    githubUrl: 'https://github.com/santhoshkrishna-2004/Sketch-To-Image-Web-App',
    liveUrl: null,
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop',
    featured: true
  },
  {
    id: '3',
    title: 'Blood Bank Management System',
    description: 'Django-based comprehensive application for managing blood donations, requests, donor authentication, and inventory tracking.',
    category: 'Web',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    githubUrl: 'https://github.com/santhoshkrishna-2004/RTP-Blood-Bank-Management',
    liveUrl: null,
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
    featured: false
  }
];

export const mockSkills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js'],
  backend: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Django', 'FastAPI'],
  languages: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'TypeScript'],
  tools: ['Git', 'GitHub', 'REST APIs', 'Docker', 'AWS', 'Vercel']
};

export const mockEducation = [
  {
    id: '1',
    institution: 'ACE Engineering College',
    degree: 'B.Tech Computer Science Engineering',
    duration: 'Nov 2022 – Present',
    cgpa: '6.9',
    status: 'current'
  },
  {
    id: '2',
    institution: 'TTWURJC COE BOYS NARSAPUR',
    degree: 'Intermediate - MPC',
    duration: '2020 – 2022',
    cgpa: '66.5',
    status: 'completed'
  }
];

export const mockCertifications = [
  {
    id: '1',
    provider: 'HackerRank',
    certificates: ['SQL Basic', 'SQL Intermediate', 'Python', 'JavaScript', 'React', 'Node.js', 'CSS', 'Problem Solving'],
    icon: 'Code'
  },
  {
    id: '2',
    provider: 'Cisco',
    certificates: ['Networking Basics', 'Python Essentials', 'CCNA Intro to Networks'],
    icon: 'Network'
  },
  {
    id: '3',
    provider: 'Great Learning',
    certificates: ['Introduction to DevOps'],
    icon: 'Server'
  },
  {
    id: '4',
    provider: 'Pearson MePro',
    certificates: ['Level 10 Expert'],
    icon: 'Award'
  }
];

export const mockContactInfo = {
  phone: '+91 7674934704',
  email: 'santhoshnenavath2004@gmail.com',
  linkedin: 'https://linkedin.com/in/nenavath-santhosh-nayak/',
  github: 'https://github.com/santhoshkrishna-2004',
  resumeUrl: 'https://drive.google.com/file/d/1fGlGqi9I1TLRd291D0ls7Bewi7_2ufpM/view?usp=sharing'
};

export const mockPersonalInfo = {
  name: 'NENAVATH SANTHOSH NAYAK',
  title: 'Full-Stack Developer, AI & ML Engineer',
  subtitle: 'Ideas. Intelligence. Scale.',
  rotatingTitles: ['AI & ML Engineer', 'Full-Stack Developer', 'Problem Solver'],
  bio: `I'm a passionate Full-Stack Developer and AI & ML Engineer with hands-on experience in building smart, scalable web applications and machine learning systems. I strive to solve real-world problems using a combination of AI, data, and web technologies. My goal is to work in a top-tier multinational company and deliver impact-driven solutions.`,
  profileImage: 'frontend/src/data/Profile.png'
};
