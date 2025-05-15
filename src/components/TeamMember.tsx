'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Users, MapPin, Globe, Book } from "lucide-react";

interface GitHubProfile {
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  blog: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export function TeamMember() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/codewithtamim');
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />
            <div className="space-y-1.5">
              <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-16 w-full bg-gray-200 rounded animate-pulse" />
        </CardContent>
      </Card>
    );
  }

  if (error || !profile) {
    return (
      <Card className="w-full">
        <CardContent className="text-center text-red-500">
          <p>Error loading profile information</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={profile.avatar_url} alt={profile.name} />
            <AvatarFallback>TH</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">
              <a 
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors flex items-center gap-1.5"
              >
                <Github className="h-3.5 w-3.5" />
                {profile.name}
              </a>
            </CardTitle>
            <CardDescription className="text-xs">Founder & Lead Developer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {profile.bio || 'A passionate developer with expertise in mobile, backend, and system programming.'}
          </p>
          
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {profile.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {profile.location}
              </span>
            )}
            {profile.blog && (
              <a 
                href={profile.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                <Globe className="h-3 w-3" />
                Website
              </a>
            )}
          </div>

          <div className="flex gap-4 pt-2 border-t text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>
                <span className="font-medium">{profile.followers}</span> followers
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>
                <span className="font-medium">{profile.following}</span> following
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Book className="h-3 w-3" />
              <span>
                <span className="font-medium">{profile.public_repos}</span> repos
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 