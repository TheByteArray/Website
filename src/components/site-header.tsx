"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { useState } from "react";
import { SocialIcons } from "./social-icons";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl whitespace-nowrap">The byte[]</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#team" className="text-sm font-medium transition-colors hover:text-primary">
                Team
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex">
              <SocialIcons />
            </div>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col gap-4 pb-4">
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#team"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <SocialIcons />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 