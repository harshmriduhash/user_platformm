import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CppFlowchart from './flowcharts/CppFlowchart';
import { useEffect } from 'react';

const CppRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/roadmap/software-engineer"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-2"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Language Selection
        </Link>

        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">
            Software Engineering (C++) Roadmap
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Follow this structured path to master C++ programming along with data structures and algorithms to land your dream software engineering job.
          </p>
        </div>

        <div className="overflow-x-auto">
          <CppFlowchart />
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-3 sm:gap-6">
          {["Beginner", "Intermediate", "Advanced", "Expert"].map(level => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full ${
                level === "Beginner" ? "bg-cyan-500" :
                level === "Intermediate" ? "bg-blue-500" :
                level === "Advanced" ? "bg-indigo-500" :
                "bg-purple-500"
              }`}></div>
              <span className="text-xs sm:text-sm text-gray-400">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CppRoadmap; 