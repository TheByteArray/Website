'use client';

import { useState, useCallback } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";

export default function CommercialProjects() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleDescription = useCallback((projectId: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[980px]">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Commercial Projects</h1>
        
        <div className="grid gap-6 md:grid-cols-2 items-start">
          {projects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProjects.has(project.id)}
              onToggleExpand={() => toggleDescription(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 