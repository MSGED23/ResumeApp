import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Briefcase,
  Code,
  Award,
  BookOpen,
  Send,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';
import { JSX } from 'react/jsx-dev-runtime';

// Define TypeScript interfaces
interface SkillCategory {
  title: string;
  skills: string[];
  icon: JSX.Element;
  color: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  logo?: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  accentColor: string;
}

interface Certification {
  title: string;
  issuer: string;
  image: string;
  date: string;
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<Project | Certification | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Skill data with colors
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AngularJS"],
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      skills: ["C#", "ASP.NET Core", "MVC", "Web API", "Entity Framework", "SQL Server", "MySQL", "PostgreSQL"],
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Azure DevOps", "Docker", "Postman", "Swagger", "JIRA", "Agile/Scrum", "CI/CD"],
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    }
  ];

  // Experience data
  const experiences: Experience[] = [
    {
      company: "Save the Children in Bangladesh",
      role: "Technical Specialist – Community Information System",
      period: "Feb 2024 – Present",
      achievements: [
        "Spearheaded the design and deployment of secure MIS solutions for HIV/AIDS programs across 50+ centers using ASP.NET",
        "Engineered real-time analytics dashboards with SQL Server, Application Insights, and Power BI tools",
        "Led iDQA and RDQA assessments to uphold data integrity, security, and compliance with global health standards",
        "Currently leading a full-stack modernization initiative—migrating the CIS platform to React + Vite + TypeScript"
      ]
    },
    {
      company: "Redline Solution",
      role: "Software Engineer / Technical Writer",
      period: "Mar 2022 – Dec 2023",
      achievements: [
        "Documented REST APIs and developed PRDs for mobile and web platforms (Flutter, ASP.NET Core, React, TypeScript)",
        "Automated deployments via Azure DevOps, managed environment provisioning with Infrastructure as Code scripts",
        "Participated in sprint reviews, QA testing cycles, and user-focused e-learning content development"
      ]
    },
    {
      company: "Krishibid Group",
      role: "Head of ERP / Software Engineer",
      period: "Jun 2019 – Feb 2022",
      achievements: [
        "Directed the end-to-end planning, development, and deployment of a robust ERP system across 26 companies",
        "Engineered scalable, modular ERP components using ASP.NET Core MVC, AutoMapper, and SQL Server",
        "Collaborated closely with stakeholders to map business processes and implement tailored digital solutions"
      ]
    }
  ];

  // Project data with accent colors
  const projects: Project[] = [
    {
      title: "ERP System – Krishibid Group",
      description: "Integrated inventory, procurement, sales & HR across 27 subsidiaries with real-time analytics and reporting.",
      technologies: ["ASP.NET Core", "SQL Server", "MVC", "React", "Bootstrap"],
      image: "/api/placeholder/600/400?text=ERP+System",
      link: "#",
      github: "#",
      accentColor: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      title: "MIS Platform – Save the Children",
      description: "CIS system supporting national HIV/AIDS programs with data collection, analysis, and reporting capabilities.",
      technologies: ["ASP.NET", "React", "SQL Server", "Power BI", "Entity Framework"],
      image: "/api/placeholder/600/400?text=MIS+Platform",
      link: "#",
      github: "#",
      accentColor: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      title: "Higher Education MIS (HEMIS) – UGC",
      description: "Web-based bilingual system to manage academic data nationwide for universities and colleges.",
      technologies: [".NET", "AngularJS", "SQL Server", "RDLC Reports", "Bootstrap"],
      image: "/api/placeholder/600/400?text=HEMIS",
      link: "#",
      github: "#",
      accentColor: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      title: "COVID-19 Management System",
      description: "Comprehensive platform for case monitoring, isolation tracking, and vaccination management.",
      technologies: ["ASP.NET Core", "React", "SQL Server", "GIS Integration", "Power BI"],
      image: "/api/placeholder/600/400?text=COVID+System",
      link: "#",
      github: "#",
      accentColor: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  // Certification data
  const certifications: Certification[] = [
    {
      title: "Microsoft Certified Professional Developer",
      issuer: "Microsoft",
      image: "/api/placeholder/400/300?text=MCPD+Certification",
      date: "2020"
    },
    {
      title: "Software Architecture",
      issuer: "University of Alberta",
      image: "/api/placeholder/400/300?text=Software+Architecture",
      date: "2021"
    },
    {
      title: "Requirements Engineering & SRS Design",
      issuer: "University of Colorado",
      image: "/api/placeholder/400/300?text=SRS+Design",
      date: "2021"
    },
    {
      title: "Project Management Foundations",
      issuer: "Google",
      image: "/api/placeholder/400/300?text=Project+Management",
      date: "2022"
    }
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
          >
            MD Ashraful Islam
          </motion.div>
          
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-500 dark:text-cyan-400 font-medium border-b-2 border-blue-500 dark:border-cyan-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-cyan-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          
            {/* Mobile menu button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left transition-colors duration-300 ${
                      activeSection === item.toLowerCase() 
                        ? 'text-blue-500 dark:text-cyan-400 font-medium' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-cyan-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Full-Stack Developer
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            >
              MD Ashraful Islam
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
            >
              Technical Specialist & Full-Stack Developer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg mb-8 text-gray-600 dark:text-gray-400"
            >
              Accomplished professional with over 14 years of experience in software engineering, 
              system integration, and digital health solutions, particularly within e-Governance 
              and NGO-led health initiatives.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Contact Me
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="border border-blue-500 text-blue-500 dark:border-cyan-400 dark:text-cyan-400 px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Dhaka, Bangladesh</span>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">ashraful.islam@savethechildren.org</span>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">+8801706401587</span>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                  <Linkedin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/swashrafcs/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
                >
                  linkedin.com/in/swashrafcs/
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "14+", label: "Years Experience", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
                    { value: "50+", label: "Projects", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
                    { value: "27+", label: "Clients", color: "bg-gradient-to-r from-green-500 to-teal-500" },
                    { value: "12+", label: "Technologies", color: "bg-gradient-to-r from-orange-500 to-red-500" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                    >
                      <div className={`text-2xl font-bold ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-blue-500 dark:text-cyan-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"
          ></motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl shadow-md border border-blue-100 dark:border-blue-800/30"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I am an accomplished Technical Specialist and Full-Stack Developer with over 14 years of experience 
                in software engineering, system integration, and digital health solutions. My expertise spans across 
                e-Governance and NGO-led health initiatives, where I've designed and delivered scalable, secure platforms 
                using modern technologies.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Throughout my career, I've demonstrated success in leading the development of national-level systems 
                such as the Community Information System (CIS/IMIS) for HIV/AIDS programs, ERP solutions for organizations 
                under Krishibid Group, and digital health platforms supporting diagnostics, laboratory QMS, and disease 
                surveillance across Bangladesh.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I am skilled in Agile/Scrum methodologies, system audits (IDQA/RDQA), and stakeholder collaboration, 
                with a strong background in IT infrastructure, server management, and full SDLC ownership—from requirements 
                to deployment and support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent"
          >
            Technical Skills
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-12"
          ></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-600"
              >
                <div className={`p-3 rounded-lg ${category.color} text-white mb-6 inline-flex`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"
          ></motion.div>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
                      <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{exp.company}</h4>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-4 py-1 rounded-full text-sm whitespace-nowrap mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-12"
          ></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-600"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${project.accentColor.replace('bg-gradient-to-r', 'bg-gradient-to-br')}`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent"
          >
            Certifications
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-12"
          ></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-600"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"
          ></motion.div>
          
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-b from-blue-600 to-purple-600 text-white p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-blue-100">ashraful.islam@savethechildren.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-blue-100">+8801706401587</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-blue-100">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/swashrafcs/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:underline"
                      >
                        linkedin.com/in/swashrafcs/
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-500">
                  <h4 className="font-semibold mb-4">Availability</h4>
                  <p className="text-blue-100">
                    I'm currently available for freelance projects and consulting opportunities. 
                    Feel free to reach out if you'd like to discuss potential collaboration.
                  </p>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MD Ashraful Islam</h3>
              <p className="text-gray-400 mt-2">Technical Specialist & Full-Stack Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} MD Ashraful Islam. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed and built with React, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;