"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { useState } from "react";
import { SocialIcons } from "./social-icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    if (pathname === '/') {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home page with the hash
      window.location.href = `/${href}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="font-bold text-xl whitespace-nowrap bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                The byte[]
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#team", label: "Team" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </nav>
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
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-4 pb-4">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#team", label: "Team" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  handleNavClick(item.href);
                  setIsMenuOpen(false);
                }}
                className="text-sm font-medium transition-colors hover:text-primary text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <SocialIcons />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 