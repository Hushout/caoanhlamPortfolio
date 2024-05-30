import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAO Anh Lam - Developer | Expert React, Typescript & Next",
  description: "Hi, I'm CAO Anh, but you can call me Lam. 👋 As a full-stack engineer trained at Epitech Montpellier, I design robust and high-quality web applications. With 2 years of experience, I specialize in React with TypeScript. Let's connect!",
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Lam', url: 'https://caoanhlam.dev' }],
  creator: 'CAO Anh Lam',
  publisher: 'CAO Anh Lam',
  openGraph: {
    title: "CAO Anh Lam - Developer | Expert React, Typescript & Next",
    description: "Hi, I'm CAO Anh, but you can call me Lam. 👋 As a full-stack engineer trained at Epitech Montpellier, I design robust and high-quality web applications. With 2 years of experience, I specialize in React with TypeScript. Let's connect!",
    url: "https://caoanhlam.dev",
    siteName: "caoanhlam.dev",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.caoanhlam.dev/_next/image?url=%2Fimages%2FMetadata.png&w=1920&q=75",
        width: 800,
        height: 600,
        alt: "CAO Anh Lam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "caoanhlam.dev",
    title: "CAO Anh Lam - Developer | Expert React, Typescript & Next",
    description: "Hi, I'm CAO Anh, but you can call me Lam. 👋 As a full-stack engineer trained at Epitech Montpellier, I design robust and high-quality web applications. With 2 years of experience, I specialize in React with TypeScript. Let's connect!",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['caoanhlamvn@gmail.com', 'https://caoanhlam.dev'],
    },
  },
  category: 'technology',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
