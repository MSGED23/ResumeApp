import { useState, useEffect, useRef } from 'react';
import { motion, scale, useInView, useScroll, useTransform } from 'framer-motion';
import {

    Mail, Phone, MapPin, Linkedin, Github, ExternalLink,
    Menu, X, ChevronDown, Briefcase, Code, Award, BookOpen,
    Send, Sun, Moon, Sparkles, Star, Zap, Heart, Globe,
    Cloud, Database, Server, Cpu, Palette, Brush, Rocket,
    Target, ArrowRight, Calendar, User, School, Book,
    Shield, CheckCircle, Layers, Code2, Container
} from 'lucide-react';
import { JSX } from 'react/jsx-runtime';
import EducationSection from './test';

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
interface EducationItem {
    degree: string;
    institution: string;
    year: string;
    icon: string;
    details?: string;
}

interface EducationSection {
    title: string;
    icon: string;
    items: EducationItem[];
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
    const [darkMode, setDarkMode] = useState(false);

    // Refs for scroll animations
    const skillsRef = useRef(null);
    const certsRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);

    // Check if elements are in view
    const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
    const certsInView = useInView(certsRef, { once: true, margin: "-100px" });
    const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
    const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
    // Add profile image path (update this to match your actual image path)
    const profileImage = "/images/ash.jpg"; // or "/images/profile.jpg"

    // Scroll progress for parallax effects
    const { scrollYProgress } = useScroll();
    const opacityRange = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.3, 0.1]);
    const scaleValue = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

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
            icon: <Code2 className="w-8 h-8" />,
            color: "from-pink-500 via-red-500 to-orange-500"
        },
        {
            title: "Backend Development",
            skills: ["C#", "ASP.NET Core", "MVC", "Web API", "Entity Framework", "SQL Server", "MySQL", "PostgreSQL"],
            icon: <Database className="w-8 h-8" />,
            color: "from-blue-500 via-indigo-500 to-purple-500"
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "Azure DevOps", "Docker", "Postman", "Swagger", "JIRA", "Agile/Scrum", "CI/CD"],
            icon: <Container className="w-8 h-8" />,
            color: "from-green-500 via-teal-500 to-cyan-500"
        },
        {
            title: "UI/UX Design",
            skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems"],
            icon: <Palette className="w-8 h-8" />,
            color: "from-yellow-500 via-amber-500 to-orange-500"
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
        },
        {
            company: "Spectrum Engineering Consortium Ltd",
            role: "Sr Software Developer",
            period: "April 2012 - June 2019",
            achievements: [
                "Oversaw the entire software development life cycle and led a development team",
                "Successfully implemented Roll Out Controller (ROC) at ROBI Axiata Company Limited in the telecommunications sector",
                "Managed web and desktop application development using ASP.NET with C# and multiple database systems (MSSQL Server, Oracle, PostgreSQL)",
                "Developed and maintained Web APIs, RDLC, and advanced Graph Chart Reports",
                "Prepared detailed Software Requirement Specifications and conducted user training sessions"
            ]
        },
        {
            company: "Addie Soft Ltd",
            role: "Executive IT Support",
            period: "November 2011 - April 2012",
            achievements: [
                "Facilitated software installation and deployment processes",
                "Created comprehensive user manuals and conducted training sessions for software applications",
                "Worked with Oracle and Microsoft SQL Server databases",
                "Conducted rigorous system testing and gathered client requirements",
                "Assigned tasks to programming teams and provided ongoing client support"
            ]
        },
        {
            company: "University of Rajshahi, Department of Social Work",
            role: "Research Assistant & Field Work",
            period: "July 2006 - July 2009",
            achievements: [
                "Conducted data entry, management, and analysis using SPSS software",
                "Completed 4 practical data collection experiences including HIV/AIDS research and child gaming studies",
                "Assisted with research activities, content writing, and proofreading documents",
                "Prepared presentations and collaborated with senior professionals and professors during research activities",
                "Demonstrated excellent proficiency in Microsoft Office programs with high typing speed in English and Bengali"
            ]
        }
    ];

    // Project data with accent colors
    const projects: Project[] = [
        {
            title: "ERP System – Krishibid Group",
            description: "Integrated inventory, procurement, sales & HR across 27 subsidiaries with real-time analytics and reporting.",
            technologies: ["ASP.NET Core", "SQL Server", "MVC", "React", "Bootstrap"],
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
            link: "#",
            github: "#",
            accentColor: "bg-gradient-to-r from-pink-500 to-purple-600"
        },
        {
            title: "MIS Platform – Save the Children",
            description: "CIS system supporting national HIV/AIDS programs with data collection, analysis, and reporting capabilities.",
            technologies: ["ASP.NET", "React", "SQL Server", "Power BI", "Entity Framework"],
            image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
            link: "#",
            github: "#",
            accentColor: "bg-gradient-to-r from-blue-500 to-cyan-500"
        },
        {
            title: "Building Construction Management System-LandX",
            description: "Planing, Land, plot, flat development and sell them.",
            technologies: ["ASP.NET", "MVC", "SQL Server", "SSIS", "Entity Framework"],
            image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
            link: "#",
            github: "#",
            accentColor: "bg-gradient-to-r from-blue-500 to-cyan-500"
        },
        {
            title: "Audit Management and Monitoring System",
            description: "Implemented for the Office of Comptroller General of Bangladesh to bring transparency and information access in public expenditure and financial governance across all directorates.",
            technologies: ["ASP.NET", "React", "SQL Server", "Entity Framework", "Power BI"],
            image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
            link: "#",
            github: "#",
            accentColor: "bg-gradient-to-r from-green-600 to-emerald-500"
        },
        {
            title: "Higher Education Management System (HEMIS)",
            description: "Implemented for University Grants Commission under HEQEP project with World Bank assistance to enhance higher education quality through comprehensive management and information systems.",
            technologies: ["ASP.NET", "React", "SQL Server", "Entity Framework", "Reporting Services"],
            image: "/images/hemis.png",
            link: "#",
            github: "#",
            accentColor: "bg-gradient-to-r from-blue-600 to-indigo-500"
        },
        {
            title: "Rollout Controller (ROC) - Telecom",
            description: "Sophisticated workflow system for telecom operators like Robi to optimize network expansion, customer retention, equipment swapping, and vendor management while maintaining ARPU.",
            technologies: ["ASP.NET", "React", "SQL Server", "Entity Framework", "Workflow Engine"],
            image: "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
            link: "#",
            github: "#",
            accentColor: "bg-gradient-to-r from-purple-600 to-pink-500"
        }
    ];

    const educations: EducationSection[] = [
        {
            title: "Education",
            icon: "🎓",
            items: [
                {
                    degree: "MSc, Geography & Environment (Appeared)",
                    institution: "Jahangirnagar University",
                    year: "2025",
                    icon: "📚"
                },
                {
                    degree: "Postgraduate Diploma in IT",
                    institution: "University of Dhaka",
                    details: "CGPA 3.21",
                    year: "2018",
                    icon: "💻"
                },
                {
                    degree: "Bachelor of Social Science (BSS)",
                    institution: "University of Rajshahi",
                    details: "Second Class",
                    year: "2009",
                    icon: "📊"
                },
                {
                    degree: "Postgraduate Diploma, Information Technology",
                    institution: "Daffodil International University",
                    year: "2011",
                    icon: "🔧"
                }
            ]
        }
    ];
    // Certification data with AI-generated images
    const certifications: Certification[] = [
        {
            title: "Microsoft Certified Professional Developer",
            issuer: "Microsoft",
            image: "https://img.freepik.com/free-vector/gradient-certificate-template_23-2148834074.jpg",
            date: "2020"
        },
        {
            title: "Software Architecture",
            issuer: "University of Alberta",
            image: "https://img.freepik.com/free-vector/elegant-certificate-template_23-2148211323.jpg",
            date: "2021"
        },
        {
            title: "Requirements Engineering & SRS Design",
            issuer: "University of Colorado",
            image: "https://img.freepik.com/free-vector/golden-elegant-certificate_1017-30797.jpg",
            date: "2021"
        },
        {
            title: "Project Management Foundations",
            issuer: "Google",
            image: "https://img.freepik.com/free-vector/certificate-template_23-2147902084.jpg",
            date: "2022"
        },
        {
            title: "Azure DevOps Expert",
            issuer: "Microsoft",
            image: "https://img.freepik.com/free-vector/certificate-template-design_1265-3005.jpg",
            date: "2021"
        },
        {
            title: "Advanced React Development",
            issuer: "Meta",
            image: "https://img.freepik.com/free-vector/certificate-template-with-golden-line_1017-30281.jpg",
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

    // Animation variants for skills
    const skillContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const skillItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    // Animation for certifications
    const certContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const certItem = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 overflow-x-hidden">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md z-50"
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Profile picture in navbar */}
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="mr-3 hidden md:block"
                        >
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent flex items-center"
                        >
                            <Zap className="w-6 h-6 mr-2 text-yellow-500" />
                            MD Ashraful Islam
                        </motion.div>
                    </div>
                    <div className="flex items-center space-x-6">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                                <motion.button
                                    key={item}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`transition-all duration-300 font-medium ${activeSection === item.toLowerCase()
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400'
                                        }`}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>

                        {/* Dark mode toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </motion.button>

                        {/* Mobile menu button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {['Home', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                                <motion.button
                                    key={item}
                                    whileHover={{ x: 10 }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-left transition-colors duration-300 font-medium ${activeSection === item.toLowerCase()
                                        ? 'text-pink-500 dark:text-pink-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400'
                                        }`}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
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
                            className="md:w-1/2 flex justify-center inline-flex items-center px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 mb-6 shadow-lg"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            <span className="font-medium">Full-Stack Developer</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
                        >
                            MD Ashraful Islam
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
                        >
                            Technical Specialist & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Full-Stack Developer</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-lg mb-8 text-gray-600 dark:text-gray-400"
                        >
                            Accomplished professional with <span className="font-semibold text-pink-500 dark:text-pink-400">14+ years</span> of experience in software engineering,
                            system integration, and digital health solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -10px rgba(236, 72, 153, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Contact Me
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('projects')}
                                className="border-2 border-pink-500 text-pink-500 dark:border-pink-400 dark:text-pink-400 px-6 py-3 rounded-lg shadow-md hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
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
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl max-w-md w-full border-2 border-white/20">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl mr-4 shadow-md">
                                    <MapPin className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">Dhaka, Bangladesh</span>
                            </div>

                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4 shadow-md">
                                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">ashraful.islam@savethechildren.org</span>
                            </div>

                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4 shadow-md">
                                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">+8801706401587</span>
                            </div>

                            <div className="flex items-center">
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4 shadow-md">
                                    <Linkedin className="w-6 h-6 text-green-600 dark:text-green-400" />
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
                        className="flex flex-col items-center text-pink-500"
                    >
                        <span className="text-sm mb-2">Scroll Down</span>
                        <ChevronDown className="w-8 h-8" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" ref={skillsRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                    >
                        Technical Skills
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"
                    ></motion.div>

                    <motion.div
                        variants={skillContainer}
                        initial="hidden"
                        animate={skillsInView ? "show" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                variants={skillItem}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-white/20 relative overflow-hidden group"
                            >
                                {/* Background gradient */}
                                <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${category.color}`}></div>

                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white mb-6 inline-flex shadow-lg`}
                                >
                                    {category.icon}
                                </motion.div>

                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 relative z-10">{category.title}</h3>

                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {category.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm shadow-sm"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Hover effect line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} rounded-full`}
                                ></motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" ref={experienceRef} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full pattern-grid pattern-gray-400 pattern-bg-transparent pattern-size-8 pattern-opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent"
                    >
                        Professional Experience
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={experienceInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-12"
                    ></motion.div>

                    <div className="max-w-4xl mx-auto">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={`${exp.company}-${index}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                className="mb-12"
                            >
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-3xl shadow-xl border border-white/50 dark:border-gray-700/50 relative overflow-hidden"
                                >
                                    {/* Decorative corner */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-500 opacity-10 rounded-bl-full"></div>

                                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
                                            <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{exp.company}</h4>
                                        </div>
                                        <motion.span
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-4 py-1 rounded-full text-sm whitespace-nowrap mt-2 md:mt-0 shadow-sm"
                                        >
                                            {exp.period}
                                        </motion.span>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5, delay: i * 0.1 + index * 0.3 }}
                                                className="flex items-start"
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                                    className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"
                                                ></motion.div>
                                                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="absolute top-20 left-10 w-16 h-16 bg-pink-500 rounded-lg opacity-10"
                ></motion.div>

                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        transition: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }
                    }}
                    className="absolute bottom-20 right-10 w-20 h-20 bg-purple-500 rounded-full opacity-10"
                ></motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent"
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"
                    ></motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-white/20 group"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${project.accentColor}`}></div>
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                        <div className="flex space-x-3">
                                            {project.link && (
                                                <motion.a
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white text-gray-800 p-2 rounded-full shadow-lg"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </motion.a>
                                            )}
                                            {project.github && (
                                                <motion.a
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white text-gray-800 p-2 rounded-full shadow-lg"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                whileHover={{ scale: 1.05 }}
                                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs shadow-sm"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" ref={certsRef} className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="absolute top-1/4 left-1/4 w-24 h-24 bg-teal-500 rounded-full opacity-10"
                ></motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        transition: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }
                    }}
                    className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-cyan-500 rounded-lg opacity-10"
                ></motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={certsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent"
                    >
                        Certifications
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={certsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-12"
                    ></motion.div>

                    <motion.div
                        variants={certContainer}
                        initial="hidden"
                        animate={certsInView ? "show" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                variants={certItem}
                                whileHover={{ y: -5, rotate: 2 }}
                                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-white/20 group"
                            >
                                <div className="h-48 overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-cyan-600 transition-all duration-500">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500">{cert.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <EducationSection />

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        transition: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="absolute top-20 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-10"
                ></motion.div>

                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }
                    }}
                    className="absolute bottom-20 right-20 w-20 h-20 bg-purple-500 rounded-full opacity-10"
                ></motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-12"
                    ></motion.div>

                    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="bg-gradient-to-b from-pink-600 to-purple-700 text-white p-8 relative overflow-hidden">
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 left-0 w-full h-full pattern-dots pattern-white pattern-size-4 pattern-opacity-20"></div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="p-2 bg-white/20 rounded-lg mr-4 backdrop-blur-sm">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">Email</h4>
                                                <p className="text-pink-100">ashraful.islam@savethechildren.org</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="p-2 bg-white/20 rounded-lg mr-4 backdrop-blur-sm">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">Phone</h4>
                                                <p className="text-pink-100">+8801706401587</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="p-2 bg-white/20 rounded-lg mr-4 backdrop-blur-sm">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">Location</h4>
                                                <p className="text-pink-100">Dhaka, Bangladesh</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="p-2 bg-white/20 rounded-lg mr-4 backdrop-blur-sm">
                                                <Linkedin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">LinkedIn</h4>
                                                <a
                                                    href="https://www.linkedin.com/in/swashrafcs/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-pink-100 hover:underline"
                                                >
                                                    linkedin.com/in/swashrafcs/
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-pink-500/30">
                                        <h4 className="font-semibold mb-4">Availability</h4>
                                        <p className="text-pink-100">
                                            I'm currently available for freelance projects and consulting opportunities.
                                            Feel free to reach out if you'd like to discuss potential collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send a Message</h3>

                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                            placeholder="Your email address"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                            placeholder="What is this regarding?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.02 }}
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                            placeholder="Your message..."
                                        ></motion.textarea>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -10px rgba(236, 72, 153, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
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
            <footer className="bg-gray-800 text-white py-12 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full pattern-dots pattern-white pattern-size-4 pattern-opacity-20"></div>
                        </div>

                        <div className="container mx-auto px-6 relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                {/* Profile picture in footer */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="mr-4"
                                >
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-600 shadow-md"
                                    />
                                </motion.div>
                                <div className="mb-6 md:mb-0">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">MD Ashraful Islam</h3>
                                    <p className="text-gray-400 mt-2">Technical Specialist & Full-Stack Developer</p>
                                </div>

                                <div className="flex space-x-6">
                                    {[
                                        { icon: <Linkedin className="w-6 h-6" />, color: "hover:text-blue-400" },
                                        { icon: <Github className="w-6 h-6" />, color: "hover:text-gray-300" },
                                        { icon: <Mail className="w-6 h-6" />, color: "hover:text-pink-400" },
                                        { icon: <Globe className="w-6 h-6" />, color: "hover:text-green-400" }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href="#"
                                            className={`text-gray-400 ${social.color} transition-colors`}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="border-t border-gray-700 mt-8 pt-8 text-center"
                            >
                                <p className="text-gray-400">
                                    &copy; {new Date().getFullYear()} MD Ashraful Islam. All rights reserved.
                                </p>
                                <p className="text-gray-500 text-sm mt-2">
                                    Designed and built with React, TypeScript, Tailwind CSS, and Framer Motion
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Portfolio;