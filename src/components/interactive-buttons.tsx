'use client';

import { Button } from "@/components/ui/button";

export function HeroButtons() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-4 mt-4">
      <Button 
        size="lg" 
        className="bg-primary hover:bg-primary/90"
        onClick={() => scrollToSection('projects')}
      >
        View Projects
      </Button>
      <Button 
        size="lg" 
        variant="outline"
        onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, '_blank')}
      >
        Contribute
      </Button>
    </div>
  );
}

export function GitHubButton() {
  return (
    <Button 
      variant="outline"
      onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, '_blank')}
    >
      View on GitHub
    </Button>
  );
} 