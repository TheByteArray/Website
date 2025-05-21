'use client';

import { useEffect, useState } from 'react';

interface GitHubStats {
  stars: number;
  contributors: number;
  repos: number;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/orgs/TheByteArray/repos');
        const repos = await reposResponse.json();

        if (Array.isArray(repos)) {
          // Calculate total stars
          const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

          // Get unique contributors across all repos
          const contributorsSet = new Set();
          await Promise.all(
            repos.map(async (repo: any) => {
              try {
                const contributorsResponse = await fetch(repo.contributors_url);
                const contributors = await contributorsResponse.json();
                contributors.forEach((contributor: any) => {
                  contributorsSet.add(contributor.id);
                });
              } catch (error) {
                console.error(`Error fetching contributors for ${repo.name}:`, error);
              }
            })
          );

          setStats({
            stars: totalStars,
            contributors: contributorsSet.size,
            repos: repos.length
          });
        } else {
          console.error('Unexpected response format:', repos);
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubStats();
  }, []);

  function formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k+';
    }
    return num + '+';
  }

  if (loading) {
    return (
      <div className="flex gap-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="h-8 w-16 bg-muted animate-pulse rounded" />
            <div className="h-4 w-24 bg-muted animate-pulse rounded mt-2" />
          </div>
        ))}
      </div>
    );
  }

  const statItems = [
    { label: 'GitHub Stars', value: stats?.stars ?? 0 },
    { label: 'Contributors', value: stats?.contributors ?? 0 },
    { label: 'Projects', value: stats?.repos ?? 0 },
  ];

  return (
    <div className="flex gap-12">
      {statItems.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center">
          <div className="text-3xl font-bold text-foreground">
            {formatNumber(stat.value)}
          </div>
          <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
} 