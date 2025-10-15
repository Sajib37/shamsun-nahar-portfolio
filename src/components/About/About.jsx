import { motion } from "framer-motion";
import { educations } from "../../../public/data/education";
import lottiFile from "../../../public/education-lottie.json";
import GlowCard from "../helper/GlowCard";
import AnimationLottie from "../helper/AnimationLottie";
import { IoSchoolSharp } from "react-icons/io5";
import {
    FaFileWord,
    FaFilePowerpoint,
    FaFileExcel,
    FaChartLine,
    FaGlobe,
    FaUsers,
    FaClock,
    FaProjectDiagram,
    FaLanguage,
} from "react-icons/fa";
import { SiGoogleanalytics, SiGooglesheets } from "react-icons/si";

function About() {
    // eslint-disable-next-line no-unused-vars
    const skillCategories = [
        {
            id: 1,
            title: "Technical",
            icon: FaChartLine,
            color: "text-orange-400",
            bgColor: "bg-orange-500/10",
            hover: "hover:bg-orange-500/15",
            borderColor: "border-orange-500/20",
            technologies: [
                {
                    name: "MS Word",
                    icon: FaFileWord,
                    level: "Expert",
                    color: "#2B579A",
                },
                {
                    name: "MS PowerPoint",
                    icon: FaFilePowerpoint,
                    level: "Expert",
                    color: "#D24726",
                },
                {
                    name: "MS Excel",
                    icon: FaFileExcel,
                    level: "Advanced",
                    color: "#217346",
                },
                {
                    name: "Google Sheets",
                    icon: SiGooglesheets,
                    level: "Advanced",
                    color: "#0F9D58",
                },
                {
                    name: "Data Analytics",
                    icon: SiGoogleanalytics,
                    level: "Advanced",
                    color: "#F7931E",
                },
            ],
        },
        {
            id: 2,
            title: "Professional",
            icon: FaUsers,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
            hover: "hover:bg-blue-500/15",  
            borderColor: "border-blue-500/20",
            technologies: [
                {
                    name: "Communication",
                    icon: FaUsers,
                    level: "Advanced",
                    color: "#10A37F",
                },
                {
                    name: "Team Collaboration",
                    icon: FaUsers,
                    level: "Advanced",
                    color: "#5C6AC4",
                },
                {
                    name: "Customer Support",
                    icon: FaUsers,
                    level: "Proficient",
                    color: "#FFC107",
                },
                {
                    name: "Time Management",
                    icon: FaClock,
                    level: "Proficient",
                    color: "#FF6B6B",
                },
                {
                    name: "Problem Solving",
                    icon: FaProjectDiagram,
                    level: "Advanced",
                    color: "#2C7BE5",
                },
                {
                    name: "Leadership",
                    icon: FaUsers,
                    level: "Proficient",
                    color: "#6DB33F",
                },
                {
                    name: "Adaptive",
                    icon: FaUsers,
                    level: "Proficient",
                    color: "#FF9800",
                },
                {
                    name: "Project Management",
                    icon: FaProjectDiagram,
                    level: "Advanced",
                    color: "#9C27B0",
                },
            ],
        },
        {
            id: 3,
            title: "Analytical",
            icon: FaChartLine,
            color: "text-green-400",
            bgColor: "bg-green-500/10",
            hover: "hover:bg-green-500/15",
            borderColor: "border-green-500/20",
            technologies: [
                {
                    name: "Research",
                    icon: FaGlobe,
                    level: "Advanced",
                    color: "#007ACC",
                },
                {
                    name: "Reporting",
                    icon: FaChartLine,
                    level: "Advanced",
                    color: "#FF6B6B",
                },
                {
                    name: "Data Visualization",
                    icon: FaChartLine,
                    level: "Advanced",
                    color: "#FFC107",
                },
            ],
        },
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case "Expert":
                return "text-emerald-400";
            case "Advanced":
                return "text-blue-400";
            case "Intermediate":
                return "text-yellow-400";
            case "Proficient":
                return "text-purple-400";
            default:
                return "text-slate-400";
        }
    };

    return (
        <section className="section-padding py-12 md:py-16 lg:py-24">
            <div className="max-w-7xl mx-auto ">
                {/*title of about */}
                <div className="flex flex-col items-center w-fit mx-auto">
                    <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                        Discover My World
                    </h2>
                    <div className="h-1 w-[80%] mx-auto bg-gradient-to-r from-blue-500 to-purple-500 neon-glow"></div>
                </div>

                <section className="lg:w-[80%] mx-auto mt-16 lg:mt-20 flex-col md:flex-row flex gap-8 md:gap-12 lg:gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 relative"
                    >
                        <img
                            src="/profile2.jpg"
                            alt="Profile"
                            className="w-10/12 object-cover mx-auto "
                        />
                    </motion.div>
                    <div className="flex-1 space-y-4 lg:space-y-6 ">
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className=" leading-relaxed text-slate-300 md:text-lg"
                        >
                            I’m{" "}
                            <span className="text-emerald-400  font-semibold">
                                Shamsun Nahar
                            </span>
                            , a business graduate passionate about bridging{" "}
                            <span className="text-violet-400 font-semibold">
                                {" "}
                                Business and IT
                            </span>
                            . I hold an MBA from the{" "}
                            <span className="text-blue-400 font-semibold">
                                University of Dhaka
                            </span>{" "}
                            and am pursuing a Master’s in MIS at{" "}
                            <span className="text-emerald-400 font-semibold">
                                Lamar University
                            </span>
                            .
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className=" leading-relaxed text-slate-300 md:text-lg"
                        >
                            I have experience in{" "}
                            <span className="text-violet-400 font-semibold">
                                HR, recruitment
                            </span>
                            , and{" "}
                            <span className="text-emerald-400 font-semibold">
                                data analysis
                            </span>
                            , and am skilled in MS Excel, Google Sheets,
                            PowerPoint, and data analytics.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className=" leading-relaxed text-slate-300 md:text-lg"
                        >
                            I’ve also led initiatives as{" "}
                            <span className="text-blue-400 font-semibold">
                                Vice President
                            </span>{" "}
                            of DU Writers’ Hub and Communication Associate at
                            Youth for Change BD. Driven and adaptable, I aim to
                            grow in roles that merge business strategy and
                            technology to create impact.
                        </motion.p>
                    </div>
                </section>

                {/* Education section */}
                <section className="relative">
                    <div id="education" className="relative mt-16 lg:mt-20 ">
                        <div className="absolute w-full h-full top-0 -z-10 opacity-30">
                            <img
                                src="/sectionBG.svg"
                                alt="Hero"
                                className="absolute w-full h-full object-cover top-0 -z-10 overflow-hidden"
                            />
                        </div>

                        <div className="flex justify-center my-4 lg:py-6 ">
                            <div className="flex  items-center mt-8">
                                <span className="w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
                                <span className="bg-[#1a1443] w-fit text-white p-2   md:text-2xl rounded-md">
                                    My Learning Path
                                </span>
                                <span className="w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
                            </div>
                        </div>

                        <div className="py-2 md:py-6">
                            <div className=" flex flex-col md:flex-col-reverse lg:flex-row gap-6 lg:gap-12">
                                <div className="flex justify-center items-start">
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.3,
                                        }}
                                        className="w-3/4 h-3/4"
                                    >
                                        <AnimationLottie
                                            animationPath={lottiFile}
                                        />
                                    </motion.div>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-6">
                                        {educations.map((education) => (
                                            <motion.div
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: education.id * 0.1,
                                                }}
                                                key={education.id}
                                            >
                                                <GlowCard
                                                    identifier={`education-${education.id}`}
                                                >
                                                    <div className="p-2 relative text-white">
                                                        <img
                                                            src="/blur-23.svg"
                                                            alt="Hero"
                                                            className="absolute w-full h-1/2 bottom-0"
                                                        />
                                                        <div className="flex justify-center">
                                                            <p className="text-xs sm:text-sm text-[#16f2b3]">
                                                                {
                                                                    education.duration
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-x-8 px-3 py-3">
                                                            <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                                <IoSchoolSharp
                                                                    size={36}
                                                                />
                                                            </div>
                                                            <div>
                                                                <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                                    {
                                                                        education.title
                                                                    }
                                                                </p>
                                                                <p className="text-sm sm:text-base">
                                                                    {
                                                                        education.institution
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </GlowCard>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills section */}
                <section className="relative">
                    <div id="education" className="relative mt-16 lg:mt-20 ">
                        <div className="absolute w-full h-1/2 bottom-0 -z-10 opacity-20">
                            <img
                                src="/blur-23.svg"
                                alt="Hero"
                                className="absolute w-full h-full object-cover top-0 -z-10 overflow-hidden"
                            />
                        </div>

                        <div className="flex justify-center my-12 lg:py-8 ">
                            <div className="flex  items-center mt-8">
                                <span className="w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
                                <span className="bg-[#1a1443] w-fit text-white p-2  md:text-2xl rounded-md">
                                    Skillset Overview
                                </span>
                                <span className="w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
                            </div>
                        </div>

                        {/* Skills categories */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-center ">
                            {skillCategories.map((category, categoryIndex) => {
                                const IconComponent = category.icon;
                                return (
                                    <div key={category.id} className="flex justify-center items-center flex-1 w-full">
                                        <motion.div
                                        
                                        className={`glass-effect ${category.hover} rounded-2xl p-6 border ${category.borderColor} ${category.bgColor}  lg:min-h-[450px] w-full self-start`}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: categoryIndex * 0.1,
                                        }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.4 },
                                        }}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div
                                                className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}
                                            >
                                                <IconComponent
                                                    className={`w-6 h-6 ${category.color}`}
                                                />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-100">
                                                {category.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            {category.technologies.map(
                                                (tech, techIndex) => {
                                                    const TechIcon = tech.icon;
                                                    return (
                                                        <motion.div
                                                            key={techIndex}
                                                            className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30"
                                                            initial={{
                                                                opacity: 0,
                                                                x: -20,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                x: 0,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    0.3 +
                                                                    techIndex *
                                                                        0.1,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                            whileHover={{
                                                                x: 5,
                                                                backgroundColor:
                                                                    "rgba(51, 65, 85, 0.4)",
                                                            }}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <TechIcon
                                                                    className="w-5 h-5"
                                                                    style={{
                                                                        color: tech.color,
                                                                    }}
                                                                />
                                                                <span className="font-medium text-slate-200">
                                                                    {tech.name}
                                                                </span>
                                                            </div>
                                                            <span
                                                                className={`text-sm font-semibold ${getLevelColor(
                                                                    tech.level
                                                                )}`}
                                                            >
                                                                {tech.level}
                                                            </span>
                                                        </motion.div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default About;
