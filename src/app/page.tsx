import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubRepos } from "@/components/GithubRepos";
import { TeamMember } from "@/components/TeamMember";
import { HeroButtons, GitHubButton } from "@/components/interactive-buttons";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
    description: 'Welcome to The Byte Array Ltd - A UK-based software development company specializing in privacy-focused open-source solutions and innovative technologies.',
    alternates: {
      canonical: 'https://thebytearray.org'
    },
    openGraph: {
      title: 'The Byte Array Ltd - Home',
      description: 'Welcome to The Byte Array Ltd - A UK-based software development company specializing in privacy-focused open-source solutions and innovative technologies.',
      url: 'https://thebytearray.org',
    }
  };
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient container mx-auto max-w-7xl px-4 pt-20 pb-16 md:pt-24 md:pb-20 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] -z-10" />
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4 animate-fade-in">
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1.5">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Open Source
            </span>
            <span className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-colors flex items-center gap-1.5">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Privacy First
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            {process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl animate-fade-in-up delay-100">
            {process.env.NEXT_PUBLIC_ORGANIZATION_DESCRIPTION}
          </p>
          <div className="animate-fade-in-up delay-300">
            <HeroButtons />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto max-w-7xl px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="contribute-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  Open Source
                </CardTitle>
                <CardDescription className="text-base">Transparency & Collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All our code is open source and available under the Apache License 2.0. We believe in the power of community-driven development.
                </p>
              </CardContent>
            </Card>
            <Card className="contribute-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  Privacy First
                </CardTitle>
                <CardDescription className="text-base">User Data Protection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize user privacy in everything we build. Your data belongs to you, and we&apos;re committed to protecting it.
                </p>
              </CardContent>
            </Card>
            <Card className="contribute-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  Community
                </CardTitle>
                <CardDescription className="text-base">Together We Build</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join our growing community of developers, contributors, and users who share our vision for better software.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto max-w-7xl px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <Card className="contribute-card">
            <CardHeader>
              <CardTitle className="text-3xl">About Us</CardTitle>
              <CardDescription className="text-lg">Our mission and vision</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Byte Array Ltd is a UK-based software development company specializing in privacy-focused,
                  open-source software solutions. Founded by Tamim Hossain, our company leverages extensive
                  expertise in mobile, web, and systems programming to deliver innovative technologies that
                  respect user privacy while solving real-world problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a private limited company, we maintain our commitment to open-source development, creating
                  transparent, secure, and accessible software solutions. Our open-source approach ensures
                  transparency while empowering developers and users to understand, modify, and improve
                  the technologies they use.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span>100% Open Source</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Privacy Focused</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Community Driven</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto max-w-7xl px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Projects</h2>
          <GithubRepos />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto max-w-7xl px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Meet the passionate individuals behind The Byte Array Ltd, dedicated to building privacy-focused software solutions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember 
              name="Tamim Hossain"
              role="Founder & Lead Developer"
              github="codewithtamim"
              description="Building privacy-focused software and innovative solutions."
            />
            <TeamMember 
              name="MacBook Pro M4"
              role="Development Machine"
              description="Powerful Apple Silicon machine handling all our development needs."
              equipment={{
                laptop: "Apple Silicon",
                coffee: "Power Efficient"
              }}
            />
            <TeamMember 
              name="Espresso Coffee"
              role="Development Fuel"
              description="The perfect blend of caffeine and creativity."
              equipment={{
                laptop: "Caffeine Boost",
                coffee: "Pure Energy"
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto max-w-7xl px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your project or explore collaboration opportunities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="contribute-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  General Inquiries
                </CardTitle>
                <CardDescription>Questions, project discussions, or general support</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:contact@thebytearray.org" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Contact Us
                </a>
              </CardContent>
            </Card>
            <Card className="contribute-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Open Source
                </CardTitle>
                <CardDescription>Collaborate on projects and contribute to our codebase</CardDescription>
              </CardHeader>
              <CardContent>
                <GitHubButton />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">THE BYTE ARRAY LTD</p>
              <p className="text-sm text-muted-foreground">Company Number: 16581435</p>
              <p className="text-sm text-muted-foreground">124 City Road, London, EC1V 2NX, United Kingdom</p>
            </div>
            <div className="border-t pt-3">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} The Byte Array Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
