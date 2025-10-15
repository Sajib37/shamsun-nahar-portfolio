import { motion } from "framer-motion";
import { educations } from "../../../public/data/education";
import lottiFile from "../../../public/education-lottie.json";
import GlowCard from "../helper/GlowCard";
import AnimationLottie from "../helper/AnimationLottie";
import { IoSchoolSharp } from "react-icons/io5";

function About() {
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

                <section className="lg:w-[80%] mx-auto mt-16 lg:mt-20 flex-col md:flex-row flex gap-4 lg:gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 relative"
                    >
                        <img
                            src="/profile2.jpg"
                            alt="Profile"
                            className="w-10/12 object-cover mx-auto hover:scale-105 transition-all duration-500"
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

                <section className="relative">
                    <div
                        id="education"
                        className="relative mt-16 lg:mt-20 "
                    >
                        
                        <div className="absolute w-full h-full top-0 -z-10 ">
                            <img
                            src="/sectionBG.svg"
                            alt="Hero"
                            className="absolute w-full h-full top-0 -z-10"
                        />
                        </div>

                        <div className="flex justify-center my-4 lg:py-6 ">
                            <div className="flex  items-center mt-8">
                                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                                <span className="bg-[#1a1443] w-fit text-white p-2  md:text-2xl rounded-md">
                                   My Learning Path
                                </span>
                                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                            </div>
                        </div>

                        <div className="py-2 md:py-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                                <div className="flex justify-center items-start">
                                    <div className="w-3/4 h-3/4">
                                        <AnimationLottie
                                            animationPath={lottiFile}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-6">
                                        {educations.map((education) => (
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.9 }}
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
                                                                {education.duration}
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
            </div>
        </section>
    );
}

export default About;
