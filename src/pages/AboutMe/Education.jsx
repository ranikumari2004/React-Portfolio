import { FaGraduationCap } from "react-icons/fa";

const EducationCard = ({ level, institute, board, year, score, scoreDetail, color }) => {
  const colors = { orange: "bg-orange-500", blue: "bg-blue-500", green: "bg-green-500" };

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className={`absolute top-0 left-0 w-full h-1 ${colors[color]} rounded-t-2xl`} />
      
      <div className="flex justify-between items-start mb-4 gap-4">
        <div>
          <h3 className="font-bold text-lg md:text-xl text-gray-800 dark:text-white">{level}</h3>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">{institute}</p>
          {board && <p className="text-xs text-gray-400 mt-1">{board}</p>}
        </div>
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full shrink-0">
            <FaGraduationCap className="text-xl md:text-2xl text-gray-500 dark:text-gray-300" />
        </div>
      </div>
      
      <div className="flex flex-wrap justify-between items-end text-sm mt-4 border-t border-gray-100 dark:border-gray-700 pt-3">
        <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{year}</span>
        <div className="text-right">
             <span className="font-bold text-orange-600 text-lg block">{score}</span>
             {scoreDetail && <span className="text-xs text-gray-400">{scoreDetail}</span>}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fade-in-up pb-10">
      <EducationCard
        level="B.Tech Computer Engineering"
        institute="RK University, Rajkot"
        year="2022 - Present"
        score="Current Sem: 8th"
        color="blue"
      />

      <EducationCard
        level="12th (Intermediate)"
        institute="R.V.M +2 Inter College, Maker"
        board="Bihar Board"
        year="Completed"
        score="76.4%"
        scoreDetail="Marks: 382 / 500"
        color="orange"
      />

      <EducationCard
        level="10th (Matriculation)"
        institute="R.V.M High School, Maker"
        board="Bihar Board"
        year="Completed"
        score="72.4%"
        color="green"
      />
    </div>
  );
};

export default Education;