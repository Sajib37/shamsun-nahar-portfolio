import AchivementCards from "./AchivementCards";


const Achievement = () => {
    return (
        <section className="section-padding pt-12 md:pt-16">
            <div className="max-w-7xl mx-auto ">
                <div className="lg:w-[85%] mx-auto flex gap-1 items-center">
                    <h1 className="section-title text-xl md:text-3xl font-bold mb-2 text-slate-300">
                        <span className="text-emerald-400">#</span>Achievements
                    </h1>
                    
                </div>

                <div className="lg:w-[85%] mx-auto mt-4 md:mt-8 lg:mt-10">
                    <AchivementCards />
                </div>
            </div>
        </section>
    );
};

export default Achievement;