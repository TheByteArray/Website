import Link from 'next/link'
import { format } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { getRecentPosts, getPostStats } from '@/lib/blog'

export function BlogSection() {
  const recentPosts = getRecentPosts(3)

  if (recentPosts.length === 0) {
    return null
  }

  return (
    <section id="blog" className="container mx-auto max-w-7xl px-4 py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[980px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Latest from our Blog</h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            Discover insights, tutorials, and updates from our team. Stay informed about the latest 
            developments in open-source software and privacy-focused technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {recentPosts.map((post) => {
            const stats = getPostStats(post.body.raw)
            return (
              <Card key={post.slug} className="contribute-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group w-full max-w-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{stats.readingTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={post.url}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 line-clamp-3">
                    {post.description}
                  </CardDescription>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link href={post.url} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/blog">
              View all posts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 