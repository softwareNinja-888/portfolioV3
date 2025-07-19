import { MoveUpRight, Github, ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className={`${project.show ? '' : 'hidden'} group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl`}
        >
            {/* Project Image */}
            <div className="relative overflow-hidden">
                <img 
                    src={project.img} 
                    alt={`${project.name} mockup`} 
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                            <Eye className="w-5 h-5 text-white" />
                        </a>
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                            <Github className="w-5 h-5 text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-6 space-y-4">
                {/* Project Type Badge */}
                <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {project.type}
                    </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-200">
                    {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed font-raleway">
                    {project.description}
                </p>

                {/* Technology Stack */}
                <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-400">Built with:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, techIndex) => (
                            <div 
                                key={techIndex}
                                className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                            >
                                <img 
                                    src={`${tech}.svg`} 
                                    alt={tech} 
                                    className="w-6 h-6"
                                    title={tech}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors duration-200 font-mediu`m text-sm"
                    >
                        View Live
                        <ExternalLink className="w-4 h-4" />
                    </a>
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors duration-200"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    // PROJECTS TO SHOWCASE:
    const projects = [

         {
            id: 2,
            name: "Salt&Light Blog",
            github: "https://github.com/softwareNinja-888/salt_light_blog",
            link: "https://salt-light-blog.vercel.app/",
            img: '/projects/mockupBlog.avif',
            type: 'Full Stack Blog',
            stack: ['react', 'figma', 'node','sql','express', 'tailwindcss',],        
            description:'A Full Stack Christian blog where I write and publish Bible based content. Built to reflect my values while showcasing my end-to-end development skills.',
            show:true
        },
        {
            id: 3,
            name: "BluePeak Media",
            github: "https://github.com/softwareNinja-888/waypointMedia",
            link: "https://waypoint-media.vercel.app/",
            img: '/projects/mockupBluepeak.avif',
            type: 'My Online Business',
            stack: ['react', 'figma', 'node',, 'tailwindcss',],        
            description:'My business site offering websites and landing pages for small businesses. Designed to highlight my services, process, and results driven approach.',
            show:true

        },
        {
            id: 0,
            name: "Anton & Lily",
            github: "https://github.com/softwareNinja-888/anton-lily",
            link: "https://anton-lily.vercel.app/",
            img: '/projects/mockupAnton.avif',
            type: 'Landing Page',
            stack: ['react', 'figma', 'tailwindcss',],
            description:' A fictional bed and breakfast site built to showcase clean layout, soft visuals, and user focused design with a strong focus on responsiveness.',
            show:true
        },
        {
            id: 1,
            name: "NOMA Skincare",
            github: "https://github.com/softwareNinja-888/nomaSkincare",
            link: "https://noma-skincare.vercel.app/",
            img: '/projects/mockupGogga.avif',
            type: 'E-commerce',
			stack: ['react', 'figma', 'node','sql','express', 'tailwindcss',],        
            description:'A minimalist e-commerce site for a fictional skincare brand, focused on product presentation, clean UI, and mobile first performance.',
            show:false
		},
        {
            id: 4,
            name: "Goggas Nest",
            github: "https://github.com/softwareNinja-888/goggaLanding",
            link: "https://gogga-landing.vercel.app/",
            img: '/projects/mockupGogga.avif',
            type: 'Landing Page',
			stack: ['react', 'figma', 'node', 'tailwindcss',],        
            description:"A showcase site for a real lodge, built to demonstrate how strong design and structure can boost bookings and reflect the brand’s unique charm.",
            show:true

        },
    ];

    return (
        <section id="projects" className="md:px-8 lg:px-8 px-5 py-20 bg-bg">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-primary text-2xl font-quickSand">#4.</span>
                        <h2 className="text-4xl font-roboto font-bold text-white">My Projects</h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-quickSand">
                        Here are some of my favorite projects that showcase my skills and passion for creating 
                        beautiful, functional web applications.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="mt-8"
                    >
                        <a 
                            href='https://github.com/softwareNinja-888/' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105"
                        >
                            <Github className="w-5 h-5" />
                            View All On GitHub
                            <MoveUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}