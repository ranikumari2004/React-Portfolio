import { FaGraduationCap } from "react-icons/fa";

const EducationCard = ({ level, institute, board, year, score, scoreDetail, color }) => {
  const colors = { orange: "bg-orange-500", blue: "bg-blue-500", green: "bg-green-500" };

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border">
      <div className={`absolute top-0 left-0 w-full h-1 ${colors[color]}`} />
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="font-bold">{level}</h3>
          <p className="text-sm text-gray-500">{institute}</p>
          {board && <p className="text-xs text-gray-400">{board}</p>}
        </div>
        <FaGraduationCap className="text-2xl text-gray-300" />
      </div>
      <div className="flex justify-between text-sm">
        <span>{year}</span>
        <span className="font-bold text-orange-600">{score}</span>
      </div>
      {scoreDetail && <p className="text-xs text-gray-400 mt-1">{scoreDetail}</p>}
    </div>
  );
};

const Education = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
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
