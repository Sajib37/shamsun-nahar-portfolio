import { workExperience } from "../../../public/data/workExperience";
import { extraCurriculars } from "../../../public/data/extraCurriculars";
import { GrOrganization } from "react-icons/gr";
import { FaCaretRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { motion } from "framer-motion";
const Works = () => {
    return (
        <section className="section-padding  pt-14 md:pt-16 lg:pt-20">
            <section className="max-w-7xl mx-auto ">
                <div className="lg:w-[85%] mx-auto flex gap-1 items-center">
                    <h1 className="section-title text-xl md:text-3xl font-bold mb-2 text-slate-300">
                        <span className="text-emerald-400">#</span>Where I’ve
                        Worked
                    </h1>
                    <div className="h-1 w-20 md:w-48 lg:w-64 bg-blue-400/50"></div>
                </div>

                {/* Works Experience */}

                <div className="w-fit mx-auto mt-6 md:mt-8 lg:mt-10">
                    <div className="flex gap-2 ">
                        <GrOrganization className="text-violet-400 text-4xl mt-1" />
                        <div className="">
                            <div className="flex flex-col md:flex-row justify-between md:gap-20">
                                <p className="text-sm sm:text-xl font-medium uppercase text-slate-400">
                                    {workExperience.organization}
                                </p>
                                <p className="text-slate-500 text-xs">
                                    {workExperience.period}
                                </p>
                            </div>
                            <p className="text-slate-300 text-xs">
                                {workExperience.location}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 pl-4">
                        <p className="font-semibold text-base text-emerald-400">
                            {workExperience.title}
                        </p>

                        <ul className="list-disc list-inside mt-2 space-y-2">
                            {workExperience.points.map((point, index) => (
                                <motion.li
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                    }}
                                    key={index}
                                    className="text-slate-300 text-sm md:text-base list-none"
                                >
                                    <FaCaretRight className="inline-block mr-1 text-lg text-emerald-400" />
                                    {point}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Extra Curriculars */}
                <section className="lg:w-[85%] mx-auto mt-12 md:mt-16 lg:mt-24">
                    <div className="flex  items-center mt-8 md:mt-10 lg:mt-10">
                        <span className="bg-[#231a5e] w-fit text-white p-2   md:text-2xl rounded-md">
                            Leadership & Activities
                        </span>
                        <span className="w-20 md:w-48 h-[2px] bg-[#231a5e]"></span>
                    </div>


                    <div className="lg:w-[85%] mx-auto mt-8 md:mt-12 lg:mt-16 flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12">
                        {extraCurriculars.map((activity, index) => {
                            const IconComponent = activity.icon;
                            return (
                                <motion.div
                                key={activity.id}
                                className="bg-blue-400/10 p-4 rounded-md mb-4 neon-glow flex-1"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03 ,rotate:-2}}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                            >
                                <h3 className="text-lg font-semibold text-emerald-400">
                                   <IconComponent className="inline-block mr-1 text-3xl text-violet-500" />
                                   {activity.title}
                                </h3>
                                {activity.location && (
                                    <p className="text-slate-400 text-sm mt-1">
                                        <FaLocationDot className="inline-block" /> {activity.location}
                                    </p>
                                    )}
                                    
                                    <ul className="mt-2 space-y-2 md:space-y-3">
                                        {activity.points.map((point, idx) => (
                                            <li
                                                key={idx}
                                                className="text-slate-300 text-sm md:text-base list-none"
                                            >
                                                <FaCaretRight className="inline-block mr-1 text-lg text-emerald-400" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                            </motion.div>
                            )
                        })}
                    </div>
                    
                </section>
            </section>
        </section>
    );
};

export default Works;
