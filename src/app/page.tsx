import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github } from "lucide-react";
import { SocialIcons } from "@/components/social-icons";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-4 pt-20 pb-16 md:pt-24 md:pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            The Byte Array
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Building privacy-focused open-source solutions for a better digital life.
          </p>
          <p className="max-w-[750px] text-muted-foreground">
            Founded by Tamim Hossain, a passionate Mobile, Web, and Systems Programmer, we create
            innovative software solutions that prioritize privacy, simplicity, and user empowerment
            through open-source development.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <Card>
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
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Convertit</CardTitle>
                <CardDescription>Simple and effective audio converter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  An open-source audio converter that makes it easy to convert between different audio
                  formats. Built with simplicity and effectiveness in mind.
                </p>
                <Button asChild>
                  <a href="https://github.com/TheByteArray/Convertit" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Team</h2>
          <div>
            <Card className="w-full max-w-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/tamim-avatar.jpg" alt="Tamim Hossain" />
                    <AvatarFallback>TH</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Tamim Hossain</CardTitle>
                    <CardDescription>Founder & Lead Developer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A passionate developer with expertise in mobile, backend, and system programming.
                  Dedicated to creating high-quality open-source software and fostering a strong
                  developer community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Contact Us</h2>
          <Card>
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
              <div className="mt-8">
                <SocialIcons />
              </div>
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
