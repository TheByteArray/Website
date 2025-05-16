import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://thebytearray.org'),
  title: {
    default: 'The Byte Array - Open Source Software Organization',
    template: '%s | The Byte Array'
  },
  description: 'Building privacy-focused open-source solutions for a better digital life. Join our community of developers and contribute to innovative software projects.',
  keywords: ['open source', 'software development', 'privacy', 'non-profit', 'The Byte Array', 'github', 'developer community'],
  authors: [{ name: 'The Byte Array Team' }],
  creator: 'The Byte Array',
  publisher: 'The Byte Array',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thebytearray.org',
    title: 'The Byte Array - Open Source Software Organization',
    description: 'Building privacy-focused open-source solutions for a better digital life.',
    siteName: 'The Byte Array',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Byte Array - Open Source Software Organization'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://thebytearray.org" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
