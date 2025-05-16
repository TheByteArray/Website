import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GithubRepos } from "@/components/GithubRepos";
import { TeamMember } from "@/components/TeamMember";
import { HeroButtons, GitHubButton } from "@/components/interactive-buttons";
import { Metadata } from "next";

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
      <section className="hero-gradient container mx-auto max-w-7xl px-4 pt-20 pb-16 md:pt-24 md:pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">Open Source</span>
            <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary-foreground">Non-Profit</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            {process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            {process.env.NEXT_PUBLIC_ORGANIZATION_DESCRIPTION}
          </p>
          <HeroButtons />
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="contribute-card">
              <CardHeader>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>Transparency & Collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All our code is open source and available under the MIT License. We believe in the power of community-driven development.
                </p>
              </CardContent>
            </Card>
            <Card className="contribute-card">
              <CardHeader>
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>User Data Protection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize user privacy in everything we build. Your data belongs to you, and we&apos;re committed to protecting it.
                </p>
              </CardContent>
            </Card>
            <Card className="contribute-card">
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>Together We Build</CardDescription>
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
              <CardTitle className="text-2xl">About Us</CardTitle>
              <CardDescription>Our mission and vision</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Byte Array is a community-driven organization dedicated to creating privacy-focused,
                open-source software solutions that make life easier. Our founder, Tamim Hossain, brings
                extensive expertise in mobile, web, and systems programming to lead our mission of
                building innovative tools that respect user privacy while solving real-world problems.
              </p>
              <p className="text-muted-foreground mt-4">
                We believe in the power of open-source development to create transparent, secure, and
                accessible software. By making our solutions open-source, we not only ensure
                transparency but also empower developers and users to understand, modify, and improve
                the tools they use every day.
              </p>
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
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Team</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Contact Us</h2>
          <Card className="contribute-card">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We&apos;d love to hear from you</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input type="email" placeholder="Your email" />
                </div>
                <div>
                  <Textarea placeholder="Your message" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Byte Array. MIT License.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
