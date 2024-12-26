import { Code2, Database, Brain, Cloud, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const RoadmapCategory = ({ icon: Icon, title, roles }) => (
  <div className="bg-gray-800 rounded-lg p-6 hover:border-cyan-500 border-2 border-transparent transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <Icon className="w-8 h-8 text-cyan-500" />
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <div className="space-y-3">
      {roles.map((role) => (
        <Link
          key={role}
          to={`/roadmap/${role.toLowerCase().replace(/\s+/g, '-')}`}
          className="block p-3 rounded-md hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition-colors"
        >
          {role}
        </Link>
      ))}
    </div>
  </div>
);

const Roadmaps = () => {
  const categories = [
    {
      icon: Code2,
      title: "Software Development & Engineering",
      roles: [
        "Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
      ],
    },
    {
      icon: Database,
      title: "Data Science & Machine Learning",
      roles: [
        "Data Scientist",
        "Machine Learning Engineer",
        "Data Analyst",
        "Data Engineer",
        "AI Researcher",
      ],
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      roles: [
        "AI Engineer",
        "Reinforcement Learning Specialist",
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      roles: [
        "DevOps Engineer",
        "Cloud Solutions Architect",
        "Cloud Engineer",
      ],
    },
    {
      icon: Briefcase,
      title: "Product & Project Management",
      roles: [
        "Program Manager",
        "Technical Product Manager",
        "Agile Project Manager",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Static Career Roadmaps
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your career path and get a static learning roadmap.
            Each roadmap is tailored to industry standards and current market demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <RoadmapCategory
              key={category.title}
              icon={category.icon}
              title={category.title}
              roles={category.roles}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmaps; 