import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const EducationSection = () => {
    const educationRef = useRef(null);
    const educationInView = useInView(educationRef, { once: true });

    // Education data
    const educations = [
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

    return (
        <section id="education" ref={educationRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
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
                className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-10"
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
                className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-indigo-500 rounded-lg opacity-10"
            ></motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={educationInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
                >
                    Education
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={educationInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-12"
                ></motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {educations[0].items.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={educationInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-white/20 group p-6"
                        >
                            <div className="flex items-start mb-4">
                                <div className="text-3xl mr-4">{edu.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-500">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                                    {edu.details && (
                                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">{edu.details}</p>
                                    )}
                                    <p className="text-xs text-gray-500 dark:text-gray-500">{edu.year}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;