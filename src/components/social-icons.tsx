"use client";

import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialIcons() {
  return (
    <div className="flex justify-center gap-4">
      <Button variant="outline" size="icon" asChild>
        <a href="https://github.com/TheByteArray" target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="mailto:contact@thebytearray.org">
          <Mail className="h-4 w-4" />
          <span className="sr-only">Email</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="https://t.me/+HO2w1XV6dCE1MmJl" target="_blank" rel="noopener noreferrer">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.5 4.5L2.5 10.5L9.5 13.5L14.5 18.5L21.5 4.5Z" />
            <path d="M9.5 13.5L14.5 18.5" />
          </svg>
          <span className="sr-only">Telegram</span>
        </a>
      </Button>
    </div>
  );
} 