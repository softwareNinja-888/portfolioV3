import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, ExternalLink, Heart, ArrowUp, MapPin, Phone } from "lucide-react";

function ContactCard({ contact, index }) {

    const UpworkIcon = ()=>{
        return (
            <svg width="22px" height="22px" viewBox="0 -179.5 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                <g>
                    <path d="M140.106589,96.6278184 C131.785652,96.6278184 123.989458,93.1045388 116.905417,87.3698389 L118.629575,79.2737921 L118.704539,78.9739385 C120.241288,70.3531479 125.113909,55.8852123 140.106589,55.8852123 C151.351098,55.8852123 160.496633,65.0307467 160.496633,76.2752562 C160.459151,87.482284 151.313616,96.6278184 140.106589,96.6278184 L140.106589,96.6278184 Z M140.106589,35.2327965 C120.953441,35.2327965 106.110688,47.6767204 100.076135,68.1417277 C90.8556369,54.310981 83.884041,37.7065886 79.7985359,23.7259151 L59.1836018,23.7259151 L59.1836018,77.3622255 C59.1836018,87.9320644 50.5628111,96.5528551 39.9929722,96.5528551 C29.4231332,96.5528551 20.8023426,87.9320644 20.8023426,77.3622255 L20.8023426,23.7259151 L0.187408492,23.7259151 L0.187408492,77.3622255 C0.112445095,99.3265007 17.9912152,117.355198 39.9554905,117.355198 C61.9197657,117.355198 79.7985359,99.3265007 79.7985359,77.3622255 L79.7985359,68.3666179 C83.8090776,76.7250366 88.7191801,85.1584187 94.6787701,92.6547584 L82.0474378,152.025769 L103.149634,152.025769 L112.295168,108.959297 C120.316252,114.09429 129.53675,117.317716 140.106589,117.317716 C162.708053,117.317716 181.111567,98.801757 181.111567,76.2002928 C181.111567,53.6363104 162.708053,35.2327965 140.106589,35.2327965 L140.106589,35.2327965 Z" fill="#78dfea">
                    </path>
                    <path d="M244.043338,37.5566618 L257.349341,91.1929722 L272.004685,37.5566618 L289.471157,37.5566618 L266.944656,115.068814 L249.478184,115.068814 L235.647438,61.0951684 L221.854173,115.031332 L204.387701,115.031332 L181.861201,37.5191801 L199.327672,37.5191801 L213.983016,91.1554905 L227.289019,37.5191801 L244.043338,37.5191801 L244.043338,37.5566618 Z M331.26325,35.2327965 C308.586823,35.2327965 290.220791,53.6363104 290.220791,76.2752562 C290.220791,98.9516837 308.624305,117.317716 331.26325,117.317716 C353.939678,117.317716 372.343192,98.9516837 372.343192,76.2752562 C372.343192,53.5988287 353.939678,35.2327965 331.26325,35.2327965 Z M331.26325,100.450952 C317.919766,100.450952 307.125037,89.6562225 307.125037,76.3127379 C307.125037,62.9692533 317.957247,52.1745242 331.26325,52.1745242 C344.606735,52.1745242 355.401464,62.9692533 355.401464,76.3127379 C355.401464,89.6187408 344.606735,100.450952 331.26325,100.450952 Z M422.231332,54.9106881 C410.499561,54.9106881 401.016691,64.4310395 401.016691,76.1253294 L401.016691,115.031332 L383.437775,115.031332 L383.437775,37.5566618 L401.016691,37.5566618 L401.016691,49.4758419 C401.016691,49.4758419 408.513031,37.5191801 423.918009,37.5191801 L429.315373,37.5191801 L429.315373,54.9106881 L422.231332,54.9106881 Z M481.227526,73.2767204 C493.708931,66.2301611 502.179795,52.8491947 502.179795,37.5191801 L484.600878,37.5191801 C484.600878,50.450366 474.106003,60.9452416 461.174817,60.9452416 L458.81347,60.9452416 L458.81347,0.149926794 L441.234553,0.149926794 L441.234553,115.031332 L458.81347,115.031332 L458.81347,78.5241581 L460.912445,78.5241581 C462.636603,78.5241581 464.885505,79.6486091 465.897511,81.0354319 L490.860322,115.031332 L511.925037,115.031332 L481.227526,73.2767204 Z" fill="#78dfea">
                    </path>
                </g>
            </svg>
        )
        } 
  
    const getIcon = (name) => {
        switch(name.toLowerCase()) {
            case 'email': return <Mail className="w-5 h-5" />;
            case 'linkedin': return <Linkedin className="w-5 h-5" />;
            case 'github': return <Github className="w-5 h-5" />;
            case 'upwork': return <UpworkIcon className="w-5 h-5" />;
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
                    <h3 className="text-white font-medium group-hover:text-primary transition-colors duration-300 ">
                        {contact.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {contact.handle || 'Send an email'}
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
            link: 'mailto:webdev.bybayanda@gmail.com',
            handle: '',
        },
        {
            id: 1,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/bayanda-dlamini',
            handle: 'Bayanda Dlamini',
        },
        {
            id: 2,
            name: 'GitHub',
            link: 'https://github.com/softwareNinja-888',
            handle: '@softwareNinja-888',
        },
        {
            id: 3,
            name: 'Upwork',
            link: 'https://www.upwork.com/freelancers/~01b74166653b9370d1?mp_source=share',
            handle: 'Bayanda Dlamini',
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="bg-bg border-t border-gray-800">
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
                        <span className="text-primary text-2xl font-quickSand">#5.</span>
                        <h2 className="text-4xl font-roboto font-bold text-white">Get In Touch</h2>
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
                            I'm a web developer who loves building applications that look great and work even better. Let's create something amazing together!
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
                                <span className="text-gray-400 text-sm">Manzini, Eswatini</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="text-gray-400 text-sm">+268 78381430</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary" />
                                <span className="text-gray-400 text-sm">webdev.bybayanda@gmail.com</span>
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
                            href="mailto:webdev.bybayanda@gmail.com"
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
            <div className="border-t border-gray-800 bg-gray-900/50 hidden md:block lg:block">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex items-center gap-2 text-gray-400 text-sm"
                        >
                            <span>© 2025 Bayanda Dlamini.</span>
                        </motion.div>
                     
                    </div>
                </div>
            </div>
        </footer>
    );
}