'use client';

import { Button } from "@/components/ui/button";

export function HeroButtons() {
  // Removed hero buttons as requested for MVP
  return null;
}

export function GitHubButton() {
  return (
    <Button 
      variant="outline"
      className="w-full sm:w-auto"
      onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, '_blank')}
    >
      View on GitHub
    </Button>
  );
}

