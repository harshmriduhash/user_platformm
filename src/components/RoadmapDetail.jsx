import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'react-router-dom';
import LanguageSelection from './static-roadmaps/software-engineering/LanguageSelection';

const RoadmapDetail = () => {
  const { roleId } = useParams();
  const isSoftwareEngineer = roleId === 'software-engineer';

  if (isSoftwareEngineer) {
    return <LanguageSelection />;
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to="/roadmaps"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Roadmaps
        </Link>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Coming Soon
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            This roadmap is currently under development. Please check back later!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetail; 