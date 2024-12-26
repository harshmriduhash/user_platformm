import { useState, useEffect } from 'react';

const GITHUB_API_BASE = 'https://api.github.com/repos/climbai/user_platform';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const useGitHubStats = () => {
  const [stats, setStats] = useState({
    contributors: 0,
    pullRequests: 0,
    commits: 0,
    contributorsList: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const headers = {
          'Accept': 'application/vnd.github.v3+json',
          ...(GITHUB_TOKEN && { 'Authorization': `token ${GITHUB_TOKEN}` })
        };

        // Helper function to fetch all pages
        const fetchAllPages = async (endpoint) => {
          let page = 1;
          let allData = [];
          
          while (true) {
            const response = await fetch(
              `${endpoint}?per_page=100&page=${page}`,
              { headers }
            );

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(
                `GitHub API Error (${response.status}): ${errorData.message}`
              );
            }

            const data = await response.json();
            if (!data.length) break;
            
            allData = allData.concat(data);
            page++;
          }
          
          return allData;
        };

        // Fetch all data in parallel
        const [contributors, pulls, commits] = await Promise.all([
          fetchAllPages(`${GITHUB_API_BASE}/contributors`),
          fetchAllPages(`${GITHUB_API_BASE}/pulls?state=closed`),
          fetchAllPages(`${GITHUB_API_BASE}/commits`)
        ]);

        // Update stats
        setStats({
          contributors: contributors.length,
          pullRequests: pulls.length,
          commits: commits.length,
          contributorsList: contributors.slice(0, 8).map(c => ({
            avatar: c.avatar_url,
            url: c.html_url,
            username: c.login
          }))
        });
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError(err.message || 'Failed to fetch GitHub stats');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  return { stats, loading, error };
};

export default useGitHubStats; 