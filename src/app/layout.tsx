import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

export const metadata: Metadata = {
  title: "Ashutosh Shekhar — Full-Stack Developer & AI Engineer",
  description:
    "Full-Stack Developer, Data Scientist, and AI Integration Engineer. Building intelligent, scalable digital products with React, Node.js, Python, and ML.",
  keywords: [
    "Ashutosh Shekhar",
    "Full Stack Developer",
    "Data Scientist",
    "AI Engineer",
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Ashutosh Shekhar" }],
  creator: "Ashutosh Shekhar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashutoshshekhar.dev",
    title: "Ashutosh Shekhar — Full-Stack Developer & AI Engineer",
    description:
      "Full-Stack Developer, Data Scientist, and AI Integration Engineer. Building intelligent, scalable digital products.",
    siteName: "Ashutosh Shekhar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashutosh Shekhar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Shekhar — Full-Stack Developer & AI Engineer",
    description:
      "Full-Stack Developer, Data Scientist, and AI Integration Engineer.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashutosh Shekhar",
  url: "https://ashutoshshekhar.dev",
  jobTitle: "Full-Stack Developer & AI Integration Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Bwik Technologies",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Parul University",
  },
  knowsAbout: [
    "React.js",
    "Node.js",
    "Python",
    "Machine Learning",
    "Data Science",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Docker",
  ],
  sameAs: [
    "https://github.com/ashutosh-shekhar",
    "https://linkedin.com/in/ashutosh-shekhar",
  ],
  email: "ashutoshshekhar37@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-void text-text-primary font-inter antialiased">
        <div className="mesh-gradient" />
        <ParticleBackground />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
