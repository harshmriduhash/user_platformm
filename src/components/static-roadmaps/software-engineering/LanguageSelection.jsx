import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Code, Cpu, Coffee, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const LanguageOption = ({ icon: Icon, language, description, careerPaths, selected, onSelect }) => (
  <div
    onClick={onSelect}
    className={`bg-gray-800 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
      selected 
        ? 'border-2 border-cyan-500 transform scale-[1.02]' 
        : 'border-2 border-transparent hover:border-gray-600'
    }`}
  >
    <div className="flex items-center gap-4 mb-4">
      <Icon className="w-8 h-8 text-cyan-500" />
      <h3 className="text-2xl font-bold text-white">{language}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="space-y-2">
      <h4 className="text-lg font-semibold text-white">Future Career Path:</h4>
      <ul className="space-y-1">
        {careerPaths.map((path, index) => (
          <li key={index} className="text-gray-400">{path}</li>
        ))}
      </ul>
    </div>
  </div>
);

const LanguageSelection = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const languageOptions = [
    {
      icon: Code,
      language: 'Python',
      description: 'Easy syntax, great for beginners, but slower execution.',
      careerPaths: [
        'AI and machine learning',
        'Automation',
        'Web development'
      ]
    },
    {
      icon: Cpu,
      language: 'C++',
      description: 'Blazing fast, perfect for competitive coding, but tricky syntax and memory management.',
      careerPaths: [
        'Systems programming',
        'Competitive programming',
        'Software optimization'
      ]
    },
    {
      icon: Coffee,
      language: 'Java',
      description: 'Great for large systems and easy memory management, but can feel bulky.',
      careerPaths: [
        'Backend development',
        'Android development',
        'Enterprise-level software'
      ]
    }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleStartLearning = () => {
    if (selectedLanguage) {
      const urlPath = selectedLanguage.toLowerCase() === 'c++' ? 'cpp' : selectedLanguage.toLowerCase();
      navigate(`/roadmap/software-engineer/${urlPath}`);
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to="/roadmaps"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Roadmaps
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose Your Programming Language
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the programming language that best aligns with your goals and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {languageOptions.map((option) => (
            <LanguageOption
              key={option.language}
              {...option}
              selected={selectedLanguage === option.language}
              onSelect={() => handleLanguageSelect(option.language)}
            />
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={handleStartLearning}
            disabled={!selectedLanguage}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${
              selectedLanguage 
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white cursor-pointer'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Award className="w-6 h-6" />
            <span className="text-lg font-semibold">Start Learning Path</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection; 