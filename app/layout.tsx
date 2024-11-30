import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Rishab Nagwani | Portfolio",
  description:
    "Hi, I am Rishab Nagwani, a Full Stack Web Developer. I build web applications using Next.js and Node.js. Check out my portfolio to see my work.",
  keywords:
    "Rishab, Nagwani, Rishab nagwani, Full Stack Web Developer, Portfolio, React, Next.js, JavaScript, TypeScript, Web Development, MERN Stack, Node.js, Express.js, MongoDB, Tailwind CSS",
  author: "Rishab Nagwani",
  alternates: {
    canonical: "https://www.rishabnagwani.tech",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rishab Nagwani | Portfolio",
    description:
      "Hi, I am Rishab Nagwani, a Full Stack Web Developer. I build web applications using Next.js and Node.js. Check out my portfolio to see my work.",
    url: "https://www.rishabnagwani.tech",
    image: "/logo (1).png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishab Nagwani | Portfolio",
    description: "Full-stack Developer Portfolio.",
    image: "/logo (1).png",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rishab Nagwani",
      url: "https://www.rishabnagwni.tech",
      sameAs: [
        "http://www.linkedin.com/in/rishab-nagwani-53a37628a",
        "https://github.com/rxshabN",
        "https://www.instagram.com/ri_shab.n/profilecard/?igsh=MTd2ZmRlczlwZHlzMg==",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+GB+J:ital,wght@0,100..400;1,100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased bg-purple-950 text-white relative sm:pt-28">
        <div className="bg-[#f08a8c]/[0.3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#8a83f2]/[0.4] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
