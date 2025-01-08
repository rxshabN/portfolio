import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Rishab Nagwani | Portfolio",
  description:
    "Hi, I am Rishab Nagwani, a Full Stack Web App Developer. I build web applications using Next.js and Node.js. Check out my portfolio to see my work.",
  keywords:
    "Rishab, Nagwani, Rishab Nagwani, RishabNagwani, rishabnagwani, nagwanirishab, NagwaniRishab, Full Stack Web Developer, Full Stack Web App Developer, Portfolio, React, Next.js, JavaScript, TypeScript, Web Development, MERN Stack, Node.js, Express.js, MongoDB, Tailwind CSS",
  author: "Rishab Nagwani",
  alternates: {
    canonical: "https://www.rishabnagwani.tech",
  },
  openGraph: {
    title: "Rishab Nagwani | Portfolio",
    description:
      "Hi, I am Rishab Nagwani, a Full Stack Web App Developer. I build web applications using Next.js and Node.js. Check out my portfolio to see my work.",
    url: "https://www.rishabnagwani.tech",
    images: [
      {
        url: "https://www.rishabnagwani.tech/logo1.png",
        alt: "image of logo",
      },
    ],
    siteName: "Rishab Nagwani | Portfolio",
    type: "website",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rishab Nagwani",
      url: "https://www.rishabnagwani.tech",
      sameAs: [
        "http://www.linkedin.com/in/rishabnagwani",
        "https://github.com/rxshabN",
        "https://www.instagram.com/ri_shab.n/profilecard/?igsh=MTd2ZmRlczlwZHlzMg==",
        "https://peerlist.io/rishabnagwani",
      ],
      description:
        "I am Rishab Nagwani, a full-stack web app developer focused on building real-world web applications.",
      jobTitle: "Full-Stack Web App Developer",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Vellore Institute of Technology",
        sameAs: "https://vit.ac.in",
      },
      knowsAbout: [
        "Full Stack Web Development",
        "MERN Stack",
        "JavaScript",
        "Next.js",
        "React",
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
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playwrite+GB+J:ital,wght@0,100..400;1,100..400&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icon.ico/favicon-96x96.png?v=3"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/icon.ico/favicon.svg?v=3"
        />
        <link
          rel="shortcut icon"
          href="https://www.rishabnagwani.tech/favicon.ico?v=3"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon.ico/apple-touch-icon.png?v=3"
        />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <link rel="manifest" href="/icon.ico/site.webmanifest?v=3" />
        <meta
          name="google-site-verification"
          content="YEIWDHNtYf-bNZUdTXepfWGP1lVaDSatr039KxTztW8"
        />
      </head>
      <body className="antialiased bg-[#0a192f] text-white relative sm:pt-28">
        <div className="lg:block hidden bg-[#0e1d2d]/[0.3] absolute -z-10 top-[-24rem] right-[-10rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="lg:block hidden bg-[#6f61f3]/[0.4] absolute top-[-24rem] left-[7rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
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
