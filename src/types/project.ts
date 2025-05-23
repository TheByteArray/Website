export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  appStoreUrl?: string;
}

export interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
} 