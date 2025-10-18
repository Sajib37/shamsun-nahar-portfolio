import { motion } from "framer-motion";
import { educations } from "../../../public/data/education";
import lottiFile from "../../../public/education-lottie.json";
import GlowCard from "../helper/GlowCard";
import AnimationLottie from "../helper/AnimationLottie";
import { IoSchoolSharp } from "react-icons/io5";
import profile from "../../../public/profile3.png";
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
            bgColor: "bg-violet-500/15",
            hover: "hover:bg-violet-500/20",
            borderColor: "border-violet-500/20",
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
            bgColor: "bg-blue-500/15",
            hover: "hover:bg-blue-500/20",
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
            bgColor: "bg-green-500/15",
            hover: "hover:bg-green-500/20",
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
        <section className="section-padding pt-12 md:pt-16">
            <div className="max-w-7xl mx-auto ">
                <div className="lg:w-[85%] mx-auto flex gap-1 items-center">
                    <h1 className="section-title text-xl md:text-3xl font-bold mb-2 text-slate-300">
                        <span className="text-emerald-400">#</span>About Me
                    </h1>
                    <div className="h-1 w-20 md:w-48 lg:w-64 bg-blue-400/50"></div>
                </div>

                <section className="lg:w-[85%] mx-auto mt-6 md:mt-8 lg:mt-10 flex-col lg:flex-row-reverse flex gap-8 md:gap-12 lg:gap-20 items-start">
                    
                    <div className="wrapper">
                    <div className="box p-4 lg:w-96 md:w-72 w-64 flex items-center justify-center">
                        <img className='w-full' src={profile} alt="" />
                    </div>
                </div>

                    <div className="flex-1 lg:flex-2 space-y-3 lg:space-y-4 ">
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="  text-slate-300 md:text-lg"
                        >
                            I’m a passionate learner who believes in dreaming
                            big and turning those{" "}
                            <span className="text-emerald-400 font-semibold">
                                dreams into action
                            </span>
                            . I completed my BBA in Management and MBA in
                            Strategic and International Management from the{" "}
                            <span className="text-emerald-400 font-semibold">
                                University of Dhaka
                            </span>
                            , one of Bangladesh’s top-ranked universities, where
                            the Department of Management is globally recognized
                            in the QS World Rankings (351–400 range).
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="  text-slate-300  md:text-lg"
                        >
                            Currently, I’m pursuing my Master’s in Management
                            Information Systems at{" "}
                            <span className="text-emerald-400 font-semibold">
                                Lamar University, USA
                            </span>
                            , with a scholarship. My transition from business to
                            technology reflects my belief that the future
                            belongs to those who can connect{" "}
                            <span className="text-emerald-400 font-semibold">
                                ideas, data, and people
                            </span>
                            .
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="  text-slate-300 md:text-lg"
                        >
                            Through my experience as an HR Intern at Panjeree
                            Publications Limited and leadership roles in DU
                            Writers’ Hub and Youth for Change BD, I’ve developed
                            strong{" "}
                            <span className="text-emerald-400 font-semibold">
                                analytical, communication, and teamwork skills
                            </span>
                            . I aspire to grow as a skilled and empathetic
                            professional who not only achieves success but helps
                            others move forward.
                        </motion.p>
                    </div>
                </section>

                {/* Education section */}
                <section className="relative">
                    <div className="relative mt-4 md:mt-8 lg:mt-10">
                        <div className="absolute w-full h-full top-0 -z-10 opacity-30">
                            <img
                                src="/sectionBG.svg"
                                alt="Hero"
                                className="absolute w-full h-full object-cover top-0 -z-10 overflow-hidden"
                            />
                        </div>

                        <div className="flex  ">
                            <div className="flex  items-center mt-8 md:mt-10 lg:mt-10">
                                <span className="bg-[#231a5e] w-fit text-white p-2   md:text-2xl rounded-md">
                                    My Learning Path
                                </span>
                                <span className="w-20 md:w-48 h-[2px] bg-[#231a5e]"></span>
                            </div>
                        </div>

                        <div className="pt-6 md:pt-10">
                            <div className=" flex flex-col md:flex-col-reverse lg:flex-row gap-6 lg:gap-12">
                                <div className="flex justify-center items-start">
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
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
                                    <div className="flex flex-col gap-6 px-4 md:px-10">
                                        {educations.map((education) => (
                                            <motion.div
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                viewport={{ once: true }}
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
                                                        <div className="absolute top-[50%] -translate-y-[50%] left-0 -translate-x-[50%] w-3 h-3 rounded-full bg-violet-400"></div>

                                                        <div className="flex flex-col lg:flex-row items-center gap-4 px-3 py-3">
                                                            <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                                <IoSchoolSharp className="text-3xl md:text-4xl" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm sm:text-xl  font-medium uppercase">
                                                                    {
                                                                        education.title
                                                                    }
                                                                </p>
                                                                <div className="flex">
                                                                    <p className="text-xs sm:text-sm text-slate-400 mr-4 mb-2">
                                                                        (
                                                                        {
                                                                            education.duration
                                                                        }
                                                                        )
                                                                    </p>
                                                                </div>
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
                    <div className="relative   ">
                        <div className="absolute w-full h-1/2 bottom-0 -z-10 opacity-20">
                            <img
                                src="/blur-23.svg"
                                alt="Hero"
                                className="absolute w-full h-full object-cover top-0 -z-10 overflow-hidden"
                            />
                        </div>

                        <div className="flex  ">
                            <div className="flex  items-center mt-12 md:mt-14 lg:mt-16">
                                <span className="bg-[#231a5e] w-fit text-white p-2   md:text-2xl rounded-md">
                                    Skillset Overview
                                </span>
                                <span className="w-20 md:w-48 h-[2px] bg-[#231a5e]"></span>
                            </div>
                        </div>

                        {/* Skills categories */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6 items-center ">
                            {skillCategories.map((category, categoryIndex) => {
                                const IconComponent = category.icon;
                                return (
                                    <div
                                        key={category.id}
                                        className="flex justify-center items-center flex-1 w-full"
                                    >
                                        <motion.div
                                            className={`glass-effect ${category.hover} rounded-2xl p-6 border ${category.borderColor} ${category.bgColor} backdrop-blur-lg lg:min-h-[450px] w-full self-start`}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: categoryIndex * 0.1,
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                transition: { duration: 0.4 },
                                            }}
                                            viewport={{ once: true }}
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
                                                        const TechIcon =
                                                            tech.icon;
                                                        return (
                                                            <motion.div
                                                                key={techIndex}
                                                                className="flex items-center justify-between p-3 bg-slate-800/60 rounded-lg border border-slate-700/30"
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
                                                                        {
                                                                            tech.name
                                                                        }
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
