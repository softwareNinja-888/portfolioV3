// import { Dot } from "lucide-react"

// export function Footer(){
// 	const contact = [
// 		{id:0,name:'Email',link:'www.instagram.com',icon:'/linkedin.svg'},
// 		{id:1,name:'Linkedin',link:'www.instagram.com',icon:'/linkedin.svg'},
// 		{id:2,name:'Github',link:'www.instagram.com',icon:'/githubIcon.svg'},
// 		{id:3,name:'Instagram',link:'www.instagram.com',icon:'/linkedin.svg'},
// 	]
// 	return(
// 		<>
// 			<div id="contact" className=" flex flex-col lg:flex-row md:px-24 lg:px-24 pb-20 gap-[100px] px-5 py-32 text-white">
// 				<div className="mx-auto">
// 					<div className="flex items-center justify-center gap-5 mx-auto text-center">
// 			            {/*<p className="text-3xl text-primary font-roboto">{`#2.`}</p>*/}
// 			            <p className="text-3xl  font-roboto text-white block">Contact</p>
// 					</div>

// 					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 py-10">
// 						{contact.map(contact=>{
// 							return (
// 								<div className="border-2 border-white rounded-xl w-full lg:w-140 h-15 cursor-pointer ">
// 									<div className="flex flex-row gap-3 items-center px-4 py-3">
// 										<img src={contact.icon} className="w-5 h-5" alt={`${contact.name} icon`}/>
// 										<div className="text-lg font-quickSand">{contact.name}</div>
// 									</div>
// 								</div>
// 							)
// 						})}
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	)
// }


import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, ExternalLink, Heart, ArrowUp, MapPin, Phone } from "lucide-react";

function ContactCard({ contact, index }) {
    const getIcon = (name) => {
        switch(name.toLowerCase()) {
            case 'email': return <Mail className="w-5 h-5" />;
            case 'linkedin': return <Linkedin className="w-5 h-5" />;
            case 'github': return <Github className="w-5 h-5" />;
            case 'instagram': return <Instagram className="w-5 h-5" />;
            default: return <ExternalLink className="w-5 h-5" />;
        }
    };

    return (
        <motion.a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
        >
            <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {getIcon(contact.name)}
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-medium group-hover:text-primary transition-colors duration-300">
                        {contact.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {contact.handle || 'Connect with me'}
                    </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary ml-auto transition-colors duration-300" />
            </div>
        </motion.a>
    );
}

export function Footer() {
    const contact = [
        {
            id: 0,
            name: 'Email',
            link: 'mailto:your.email@example.com',
            handle: 'your.email@example.com',
            icon: '/linkedin.svg'
        },
        {
            id: 1,
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/yourprofile',
            handle: '/in/yourprofile',
            icon: '/linkedin.svg'
        },
        {
            id: 2,
            name: 'GitHub',
            link: 'https://github.com/softwareNinja-888',
            handle: '@softwareNinja-888',
            icon: '/githubIcon.svg'
        },
        {
            id: 3,
            name: 'Instagram',
            link: 'https://instagram.com/yourhandle',
            handle: '@yourhandle',
            icon: '/linkedin.svg'
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-bg border-t border-gray-800">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-primary text-2xl font-bold">#5.</span>
                        <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
                        I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and web development.
                    </p>
                    
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contact.map((contactItem, index) => (
                            <ContactCard key={contactItem.id} contact={contactItem} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* Footer Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {/* About */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <h3 className="text-white text-xl font-bold">About Me</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Full-stack developer passionate about creating beautiful, functional web applications. 
                            Always learning and exploring new technologies.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <h3 className="text-white text-xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            {['About', 'Projects', 'Experience', 'Contact'].map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <h3 className="text-white text-xl font-bold">Services</h3>
                        <ul className="space-y-2">
                            {['Web Development', 'UI/UX Design', 'E-commerce', 'Consulting'].map((service, index) => (
                                <li key={index} className="text-gray-400 text-sm">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <h3 className="text-white text-xl font-bold">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="text-gray-400 text-sm">Malkerns, Eswatini</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="text-gray-400 text-sm">Available for calls</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary" />
                                <span className="text-gray-400 text-sm">Always responsive</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Let's collaborate and bring your ideas to life. I'm excited to hear about your next project!
                        </p>
                        <motion.a
                            href="mailto:your.email@example.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-primary text-black px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
                        >
                            <Mail className="w-5 h-5" />
                            Start a Conversation
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex items-center gap-2 text-gray-400 text-sm"
                        >
                            <span>© 2025 Your Name. Made with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                            <span>and lots of coffee</span>
                        </motion.div>
                     
                    </div>
                </div>
            </div>
        </footer>
    );
}