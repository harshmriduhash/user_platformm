import { Users, GitPullRequest, Code2, Loader2 } from "lucide-react";
import useGitHubStats from "../hooks/useGitHubStats";

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center p-4">
    <Icon className="h-8 w-8 text-cyan-500 mb-2" />
    <span className="text-2xl font-bold text-white">{value}</span>
    <span className="text-gray-300">{label}</span>
  </div>
);

const Contributors = () => {
  const { stats, loading, error } = useGitHubStats();

  return (
    <section id="contributors" className="mt-16 sm:mt-28 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        Join Our Growing Community of Builders
      </h2>
      
      {/* Stats Display */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto mb-8 sm:mb-12">
        {loading ? (
          <div className="col-span-3 flex justify-center py-8">
            <Loader2 className="h-8 w-8 text-cyan-500 animate-spin" />
          </div>
        ) : error ? (
          <div className="col-span-3 text-red-400">
            Unable to load GitHub stats
          </div>
        ) : (
          <>
            <StatCard 
              icon={Users} 
              value={`${stats.contributors}+`}
              label="Contributors" 
            />
            <StatCard 
              icon={GitPullRequest} 
              value={`${stats.pullRequests}+`}
              label="Pull Requests" 
            />
            <StatCard 
              icon={Code2} 
              value={`${stats.commits}+`}
              label="Commits" 
            />
          </>
        )}
      </div>

      {/* Contributors Grid */}
      <div className="flex justify-center gap-4 sm:gap-8 max-w-3xl mx-auto mb-8 sm:mb-12">
        {loading ? (
          <div className="flex gap-8">
            {[...Array(2)].map((_, i) => (
              <div 
                key={i}
                className="aspect-square rounded-full bg-gray-700 animate-pulse w-24 h-24"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-red-400">
            Unable to load contributors
          </div>
        ) : (
          stats.contributorsList.slice(0, 2).map((contributor) => (
            <a
              key={contributor.username}
              href={contributor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-full overflow-hidden hover:opacity-80 transition-opacity w-24 h-24"
            >
              <img
                src={contributor.avatar}
                alt={`${contributor.username}'s avatar`}
                className="w-full h-full object-cover"
              />
            </a>
          ))
        )}
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://github.com/climbai/user_platform#contributing"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors inline-flex items-center justify-center gap-2"
        >
          <Code2 className="h-5 w-5" />
          Become a Contributor
        </a>
        <p className="text-gray-400 max-w-xl px-4">
          Join us in building the future of AI-powered learning. Check out our contributing guidelines to get started.
        </p>
      </div>
    </section>
  );
};

export default Contributors; 