import { useEffect, useRef, useState } from "react";
import TypeWriter from "./TypeWriter";
import {
    FaFacebook,
    FaLinkedin,
    FaDownload,
} from "react-icons/fa";

let HeroModel = null;
let gsap = null;
let ScrollTrigger = null;

const loadHeavyDependencies = async () => {
    try {
        const [heroModelModule, gsapModule] = await Promise.all([
            import("./HeroModel"),
            import("gsap"),
        ]);

        HeroModel = heroModelModule.default;
        gsap = gsapModule.default;

        const scrollTriggerModule = await import("gsap/ScrollTrigger");
        ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
    } catch (error) {
        console.warn("Failed to load heavy dependencies:", error);
    }
};

function Home() {
    const contentRef = useRef(null);
    const [show3D, setShow3D] = useState(false);
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Performance check to decide whether to show 3D model and heavy animations
    useEffect(() => {
        const checkPerformance = () => {
            const mobile = window.innerWidth < 768;
            const connection =
                navigator.connection ||
                navigator.mozConnection ||
                navigator.webkitConnection;
            const isHighPerformance =
                !connection || connection.effectiveType === "4g";
            const hasGoodHardware = window.devicePixelRatio <= 2;
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            setIsMobile(mobile);
            setShow3D(
                isHighPerformance &&
                    hasGoodHardware &&
                    !mobile &&
                    !prefersReducedMotion
            );
            setAnimationsEnabled(!mobile && !prefersReducedMotion);
        };

        checkPerformance();
        window.addEventListener("resize", checkPerformance);
        return () => window.removeEventListener("resize", checkPerformance);
    }, []);

    // Load heavy dependencies only when needed
    useEffect(() => {
        if (animationsEnabled && !gsap) {
            loadHeavyDependencies();
        }
    }, [animationsEnabled]);

    return (
        <section className="section-padding pt-20 md:pt-32 pb-4">
            <div
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                ref={contentRef}
            >
                {/* Left column - Text content */}
                <div className="space-y-6">
                    <div className="hero-element">
                        <p className="text-slate-300 font-medium text-lg md:text-xl mb-2">
                            Hello, I'm
                        </p>
                        <h1 className="font-bold mb-2">
                            <span
                                className={`text-4xl sm:text-5xl md:text-7xl gradient-text drop-shadow-2xl relative block ${
                                    isMobile
                                        ? "leading-relaxed"
                                        : "leading-normal whitespace-nowrap"
                                } ${
                                    !isMobile ? "animate-pulse-slow" : ""
                                } py-2 font-extrabold`}
                            >
                                <span className="inline-block gradient-text">
                                    Shamsun
                                </span>{" "}
                                <span className="inline-block gradient-text">
                                    Nahar
                                </span>
                            </span>
                        </h1>
                    </div>

                    <div className="hero-element text-2xl md:text-4xl font-semibold text-slate-200 mb-6 h-8 md:h-12 ">
                        <TypeWriter
                            texts={[
                                "Business Graduate",
                                "Analytics Student",
                                "SAP Learner",
                                "BI Enthusiast",
                            ]}
                            delay={isMobile ? 100 : 80}
                            deleteDelay={isMobile ? 50 : 30}
                        />
                    </div>

                    <p className="hero-element text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">
                        A highly motivated
                        <span className="text-emerald-400 font-semibold">
                            {" "}
                            business graduate{" "}
                        </span>
                        committed to building a dynamic and progressive
                        <span className="text-blue-400 font-semibold">
                            {" "}
                            professional career
                        </span>{" "}
                        by leveraging academic knowledge and practical
                        experience to achieve growth and success in both the{" "}
                        <span className="text-violet-400 font-semibold">
                            Business and IT sectors
                        </span>
                        .
                    </p>

                    <div className="hero-element flex flex-wrap gap-2">
                        <a href="/resume.pdf" download>
                            <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-1 rounded-full px-2 md:px-4 hover:scale-95 transition-transform duration-2000 hover:shadow-lg hover:shadow-blue-500/30 text-white py-2 text-sm md:text-base font-semibold">
                                Download Resume <FaDownload />
                            </button>
                        </a>

                        <div className="flex items-center gap-2">
                            <a
                                href="https://www.facebook.com/shamsun.nahar.344631"
                                target="_blank"
                                rel="noreferrer"
                                className={`glass-effect text-slate-300 hover:text-blue-400 transition-all p-2 rounded-xl ${
                                    !isMobile
                                        ? "hover:-translate-y-1 transform duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                                        : ""
                                }`}
                                aria-label="Facebook"
                            >
                                <FaFacebook className="h-7 w-7" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shamsun-nahar-21ba4b181/"
                                target="_blank"
                                rel="noreferrer"
                                className={`glass-effect text-slate-300 hover:text-blue-400 transition-all p-2 rounded-xl ${
                                    !isMobile
                                        ? "hover:-translate-y-1 transform duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                                        : ""
                                }`}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="h-7 w-7" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-element hidden lg:block relative">
                    {show3D && HeroModel ? (
                        <HeroModel />
                    ) : (
                        <div className="relative w-full h-[500px] flex items-center justify-center">
                            {/* Modern geometric alternative to 3D model */}
                            <div className="relative">
                                {/* Main glowing orb */}
                                <div
                                    className={`w-80 h-80 bg-gradient-to-br from-blue-500/40 via-violet-500/30 to-cyan-500/50 rounded-full blur-2xl neon-glow ${
                                        !isMobile ? "animate-pulse-slow" : ""
                                    }`}
                                ></div>

                                {/* Floating geometric shapes */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-64 h-64">
                                        <div
                                            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-blue-400/70 rounded-lg rotate-45 ${
                                                !isMobile
                                                    ? "animate-bounce-slow"
                                                    : ""
                                            }`}
                                        ></div>
                                        <div
                                            className={`absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-violet-500/50 to-cyan-500/50 rounded-full ${
                                                !isMobile
                                                    ? "animate-pulse delay-500"
                                                    : ""
                                            }`}
                                        ></div>
                                        <div
                                            className={`absolute top-1/4 left-0 w-8 h-8 border border-cyan-400/70 rotate-12 ${
                                                !isMobile
                                                    ? "animate-pulse delay-1000"
                                                    : ""
                                            }`}
                                        ></div>
                                        <div
                                            className={`absolute bottom-1/4 left-1/4 w-6 h-16 bg-gradient-to-t from-blue-500/40 to-transparent rounded-full ${
                                                !isMobile
                                                    ? "animate-bounce-slow delay-700"
                                                    : ""
                                            }`}
                                        ></div>
                                    </div>
                                </div>

                                {/* Orbiting rings - only on desktop */}
                                {!isMobile && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-96 h-96 border border-blue-400/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
                                        <div className="absolute w-80 h-80 border border-violet-400/30 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                                        <div className="absolute w-64 h-64 border border-cyan-400/30 rounded-full animate-[spin_25s_linear_infinite]"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Background grid pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-500/5 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
