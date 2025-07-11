import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

function ExperienceCard({ experience, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="relative"
        >
            {/* Timeline connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary to-transparent hidden md:block" />
            
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-gray-950 z-10 hidden md:block" />
            
            {/* Experience card */}
            <div className={`relative md:w-5/12 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
                <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                    {/* Date badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium text-sm bg-primary/10 px-3 py-1 rounded-full">
                            {experience.date}
                        </span>
                    </div>
                    
                    {/* Job title */}
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-2xl font-bold text-white">
                            {experience.name}
                        </h3>
                    </div>
                    
                    {/* Company (if different from job title) */}
                    {experience.company && (
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 font-medium">
                                {experience.company}
                            </span>
                        </div>
                    )}
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                        {experience.description}
                    </p>
                    
                    {/* Skills/Technologies used */}
                    {experience.skills && (
                        <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-400 mb-3">Key Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill, skillIndex) => (
                                    <span 
                                        key={skillIndex}
                                        className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {/* Achievements */}
                    {experience.achievements && (
                        <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-400 mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                                {experience.achievements.map((achievement, achievementIndex) => (
                                    <li 
                                        key={achievementIndex}
                                        className="flex items-start gap-2 text-gray-300 text-sm"
                                    >
                                        <span className="text-primary mt-1">•</span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}

export function Xp() {
    const xp = [
        {
            id: 0,
            name: 'Full Stack Developer',
            company: 'Freelancer',
            date: 'Jan 2022 - Present',
            description: "When I'm not coding away, I'm probably exploring the latest web design trends or experimenting with new techniques. I believe in keeping things simple yet impactful, creating solutions that not only look great but perform exceptionally well.",
            skills: ['React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
            achievements: [
                'Delivered 15+ successful web applications for clients',
                'Increased client conversion rates by 40% through optimized UX',
                'Specialized in modern React ecosystem and full-stack development'
            ]
        },
        {
            id: 1,
            name: 'Co-Founder & CTO',
            company: 'BluePeak Media',
            date: 'Mar 2023 - Present',
            description: "Leading technical strategy and development for a digital agency focused on delivering cutting-edge web solutions. Building scalable applications and mentoring junior developers while driving innovation in web technologies.",
            skills: ['Leadership', 'System Architecture', 'DevOps', 'Team Management', 'AWS', 'Docker'],
            achievements: [
                'Built and led a team of 5 developers',
                'Architected scalable solutions serving 10k+ users',
                'Reduced deployment time by 60% through CI/CD implementation'
            ]
        },
        {
            id: 2,
            name: 'Frontend Developer',
            company: 'Tech Startup',
            date: 'Jun 2021 - Dec 2021',
            description: "Focused on creating beautiful, responsive user interfaces using modern frontend technologies. Collaborated with designers and backend developers to bring innovative ideas to life.",
            skills: ['React', 'Vue.js', 'SASS', 'JavaScript', 'Figma', 'Git'],
            achievements: [
                'Improved page load times by 35% through optimization',
                'Developed reusable component library used across 3 projects',
                'Implemented pixel-perfect designs from Figma mockups'
            ]
        }
    ];

    return (
        <section id="xp" className="py-20 bg-bg">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-primary text-2xl font-bold">#4.</span>
                        <h2 className="text-4xl font-bold text-white">Experience</h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        My journey through different roles and companies, building expertise in 
                        modern web development and leading innovative projects.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative space-y-16">
                    {/* Timeline line for mobile */}
                    <div className="absolute left-8 top-0 w-px h-full bg-gradient-to-b from-primary via-primary/50 to-transparent md:hidden" />
                    
                    {xp.map((experience, index) => (
                        <div key={experience.id} className="relative">
                            {/* Mobile timeline dot */}
                            <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-gray-950 z-10 md:hidden" />
                            
                            {/* Mobile layout adjustment */}
                            <div className="pl-16 md:pl-0">
                                <ExperienceCard experience={experience} index={index} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="text-center mt-20"
                >
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready to work together?</h3>
                        <p className="text-gray-400 mb-6">
                            I'm always open to discussing new opportunities and exciting projects.
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
                        >
                            <Briefcase className="w-5 h-5" />
                            Let's Connect
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}