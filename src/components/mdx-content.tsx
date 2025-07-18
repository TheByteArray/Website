'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import { MDXComponents } from '@/components/mdx-components'

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = useMDXComponent(code)
  
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <MDXComponent components={MDXComponents} />
    </div>
  )
} 