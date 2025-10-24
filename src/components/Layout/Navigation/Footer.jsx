import { useEffect, useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaHeart,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(2024);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const socialLinks = [
        {
            name: "Facebook",
            icon: FaFacebook,
            url: "#",
            color: "hover:text-gray-400",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/shamsun-nahar-21ba4b181/",
            color: "hover:text-blue-400",
        },
        {
            name: "Twitter",
            icon: FaTwitter,
            url: "#",
            color: "hover:text-sky-400",
        },
        {
            name: "Email",
            icon: FaEnvelope,
            url: "mailto:sabashamsun@gmail.com",
            color: "hover:text-red-400",
        },
    ];

    const quickLinks = [
        { name: "Profile", href: "#about" },
        { name: "Works", href: "#works" },
        { name: "Achievements", href: "#achievements" },
        { name: "Contact", href: "#contact" },
    ];

    const contactInfo = [
        {
            icon: FaEnvelope,
            text: "sabashamsun@gmail.com",
            href: "mailto:sabashamsun@gmail.com",
        },
        {
            icon: FaPhone,
            text: "+1(409)6594499 ",
            href: "tel:+14096594499",
        },
        {
            icon: FaMapMarkerAlt,
            text: "1135 Alabama Ave, Apt 31, Beaumont, TX 77705",
            href: "https://maps.app.goo.gl/ZLn3fsRiW8gABJb86",
        },
    ];

    return (
        <footer className=" mt-12 md:mt-16 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-slate-100 relative overflow-hidden">
            {/* Background Effects - darker and more subtle */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/3 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 lg:px-8 py-8 md:py-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl flex items-center justify-center font-bold text-white">
                                <img
                                    src="/logo.png"
                                    alt="Shamsun Nahar Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold gradient-text">
                                Shamsun Nahar
                            </h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-4 md:mb-6">
                            A passionate learner pursuing MIS at Lamar
                            University, combining business and tech expertise to
                            drive innovation, growth, and meaningful impact.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} hover:bg-slate-700/50 hover:scale-110 hover:shadow-lg`}
                                    whileHover={{
                                        rotate: 360,
                                        transition: { duration: 0.3 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.name}
                                >
                                    <social.icon className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold text-slate-100 mb-4 md:mb-6">
                            Quick Links
                        </h4>
                        <ul className="md:space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        className="text-slate-400 hover:text-slate-200 transition-colors duration-300 inline-flex items-center group"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold text-slate-100 mb-4 md:mb-6">
                            Get In Touch
                        </h4>
                        <ul className="md:space-y-4">
                            {contactInfo.map((info, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={info.href}
                                        target={
                                            info.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            info.href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors duration-300 group"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="w-8 h-8 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/50 transition-colors duration-300">
                                            <info.icon className="text-sm" />
                                        </div>
                                        <span className="text-sm">
                                            {info.text}
                                        </span>
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="pt-4 md:pt-8 border-t border-slate-700/50 "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm flex items-center gap-2">
                            © {currentYear} Shamsun Nahar.All rights reserved
                        </p>
                    </div>
                </motion.div>
            </div>
            
        </footer>
    );
};

export default Footer;
