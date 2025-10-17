import { achievements } from "../../../public/data/achievements";
import { BsCalendarDate } from "react-icons/bs";

const AchivementCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {achievements.map((achievement) => (
                <div key={achievement.id} className="max-w-80 shadow shadow-slate-300 lg:w-full achivement-card overflow-hidden rounded-md mx-auto">
                    <div className="relative">
                        <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="h-72 w-full object-cover  CardImg"
                        />
                        <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-emerald-500 to-transparent "></div>
                    </div>
                    <div className="bg-orange-400/10 min-h-28 p-2 flex flex-col justify-center">
                        <h3 className="text-emerald-400 font-bold text-lg">{achievement.title}</h3>
                        <p className="">{achievement.description}</p>
                        <span className="text-sm mt-2"><BsCalendarDate className="inline-block mr-1 text-emerald-400"/> {achievement.year}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AchivementCards;
