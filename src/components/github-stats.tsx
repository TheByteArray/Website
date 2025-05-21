'use client';

import { useEffect, useState } from 'react';

interface GitHubStats {
  totalStars: number;
  totalContributors: number;
  totalProjects: number;
}

interface GitHubRepo {
  stargazers_count: number;
  contributors_url: string;
}

interface GitHubContributor {
  id: number;
  login: string;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    totalStars: 0,
    totalContributors: 0,
    totalProjects: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/thebytearray/repos');
        const repos: GitHubRepo[] = await response.json();
        
        let totalStars = 0;
        const contributorSet = new Set<number>();
        
        for (const repo of repos) {
          totalStars += repo.stargazers_count;
          
          const contributorsResponse = await fetch(repo.contributors_url);
          const contributors: GitHubContributor[] = await contributorsResponse.json();
          
          contributors.forEach(contributor => {
            contributorSet.add(contributor.id);
          });
        }
        
        setStats({
          totalStars,
          totalContributors: contributorSet.size,
          totalProjects: repos.length
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{stats.totalStars}</span>
        <span className="text-sm text-muted-foreground">Stars</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{stats.totalContributors}</span>
        <span className="text-sm text-muted-foreground">Contributors</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{stats.totalProjects}</span>
        <span className="text-sm text-muted-foreground">Projects</span>
      </div>
    </div>
  );
} 