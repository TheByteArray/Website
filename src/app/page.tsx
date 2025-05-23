import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubRepos } from "@/components/GithubRepos";
import { TeamMember } from "@/components/TeamMember";
import { HeroButtons, GitHubButton, CommercialProjectsButton } from "@/components/interactive-buttons";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
    description: 'Welcome to The Byte Array - A community-driven organization creating privacy-focused, open-source software solutions.',
    alternates: {
      canonical: 'https://thebytearray.org'
    },
    openGraph: {
      title: 'The Byte Array - Home',
      description: 'Welcome to The Byte Array - A community-driven organization creating privacy-focused, open-source software solutions.',
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
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 animate-fade-in">
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
              Non-Profit
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
      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
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
      <section id="about" className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <Card className="contribute-card">
            <CardHeader>
              <CardTitle className="text-3xl">About Us</CardTitle>
              <CardDescription className="text-lg">Our mission and vision</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Byte Array is a community-driven organization dedicated to creating privacy-focused,
                  open-source software solutions that make life easier. Our founder, Tamim Hossain, brings
                  extensive expertise in mobile, web, and systems programming to lead our mission of
                  building innovative tools that respect user privacy while solving real-world problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in the power of open-source development to create transparent, secure, and
                  accessible software. By making our solutions open-source, we not only ensure
                  transparency but also empower developers and users to understand, modify, and improve
                  the tools they use every day.
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
      <section id="projects" className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Projects</h2>
          <GithubRepos />
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <Card className="contribute-card">
            <CardHeader>
              <CardTitle>Support Our Mission</CardTitle>
              <CardDescription>Help us build a better digital future</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contribute Code</h3>
                  <p className="text-muted-foreground mb-4">
                    Join our development community and help build the next generation of privacy-focused software.
                  </p>
                  <GitHubButton />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Spread the Word</h3>
                  <p className="text-muted-foreground mb-4">
                    Help us grow our community by sharing our projects and mission with others.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Meet the passionate individuals behind The Byte Array, dedicated to building privacy-focused software solutions.
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
      <section id="contact" className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Services</h2>
          <Card className="contribute-card">
            <CardHeader>
              <CardTitle>Professional Development Services</CardTitle>
              <CardDescription>Expert solutions for your technical needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <svg className="h-4.5 w-4.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Native App Development</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Custom mobile applications built with modern technologies, focusing on performance, security, and user experience.
                        <span className="block mt-1 text-xs text-primary">Java • Kotlin • Swift</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <svg className="h-4.5 w-4.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">VPN Solutions</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Secure and reliable VPN services with advanced encryption and privacy features for both personal and enterprise use.
                        <span className="block mt-1 text-xs text-primary">C • C++ • Go</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <svg className="h-4.5 w-4.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 7h-7m7 10h-7M5 7h7m-7 10h7" />
                        <path d="M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">NDK & Systems Development</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Native development and system-level programming expertise for high-performance applications and custom solutions.
                        <span className="block mt-1 text-xs text-primary">C • C++</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <svg className="h-4.5 w-4.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" y1="15" x2="4" y2="21" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Backend Development</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Scalable and secure backend solutions with modern architectures, API development, and database optimization.
                        <span className="block mt-1 text-xs text-primary">Go</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-8">
                <CommercialProjectsButton />
              </div>
              <div className="mt-8 pt-6 border-t">
                <p className="text-center text-base text-muted-foreground">
                  Ready to start your project? Contact us at{' '}
                  <a href="mailto:work@thebytearray.org" className="text-primary hover:underline">
                    work@thebytearray.org
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Byte Array. All rights reserved. Apache License 2.0.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
