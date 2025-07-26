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
                        <span className="text-primary font-raleway text-sm bg-primary/10 px-3 py-1 rounded-full">
                            {experience.date}
                        </span>
                    </div>
                    
                    {/* Job title */}
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-2xl font-roboto text-white">
                            {experience.name}
                        </h3>
                    </div>
                    
                    {/* Company (if different from job title) */}
                    {experience.company && (
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 font-quickSand">
                                {experience.company}
                            </span>
                        </div>
                    )}
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed font-raleway">
                        {experience.description}
                    </p>
                    
                    {/* Skills/Technologies used */}
                    {experience.skills && (
                        <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-400 mb-3 font-raleway">Key Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill, skillIndex) => (
                                    <span 
                                        key={skillIndex}
                                        className="font-roboto text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-primary/20 hover:text-primary transition-colors duration-200"
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
                            <h4 className="text-sm font-medium text-gray-400 mb-3 font-raleway">Key Achievements:</h4>
                            <ul className="space-y-2">
                                {experience.achievements.map((achievement, achievementIndex) => (
                                    <li 
                                        key={achievementIndex}
                                        className="flex items-start gap-2 text-gray-300 text-sm font-raleway"
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
            name: 'Freelancer',
            company: 'Freelancer',
            date: 'June 2023 - Present',
            description: "During this time, I worked independently with small businesses to design and build custom landing pages and websites. Most of my projects came through Local businesses and Upwork, where I focused on delivering clean, responsive interfaces using React and Tailwind CSS. I also helped clients improve their online presence and user experience through modern design and performance focused development.",
            skills: ['React','Wordpress', 'Node.js', 'Tailwind CSS','SEO',],
            achievements: [
                'Assiting Local businesses on Upwork',
                'Specialized in modern React ecosystem and full-stack development'
            ]
        },
        {
            id: 1,
            name: 'Founder',
            company: 'BluePeak Media',
            date: 'Feb 2025 - Present',
            description: "At BluePeak Media, I lead the technical direction of our digital marketing efforts, helping brands grow their online presence through modern, high-converting websites. I work closely with the creative team to turn marketing strategies into fast, user-friendly digital experiences. From building custom landing pages to optimizing performance, my role bridges design and development to support our clients' growth.",
            skills: ['Leadership', 'SEO', 'Conversion Optimization', 'Team Management', 'React', 'Tailwind CSS'],
            achievements: [
                'Built and led a team of 5 freelancers',
                'Helped clients double website traffic within months of launch',
                'Implemented SEO and performance best practices across all web projects',
                'Established internal systems to streamline web project delivery',
            ]
        },
    ];

    return (
        <section id="xp" className="py-20 bg-bg overflow-x-hidden">
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
                        <span className="text-primary text-2xl font-quickSand">#3.</span>
                        <h2 className="text-4xl font-roboto font-bold text-white">Experience</h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-quickSand">
                        My journey through different roles, building expertise in 
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
                        <h3 className="text-2xl font-bold text-white mb-4 font-roboto">Ready to work together?</h3>
                        <p className="text-gray-400 mb-6 font-quickSand">
                            I'm always open to discussing new opportunities and exciting projects.
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-raleway"
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