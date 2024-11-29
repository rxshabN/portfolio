import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Rishab Nagwani | Portfolio",
  description:
    "Hi, I'm Rishab Nagwani, a Full Stack Web Developer. I build web applications using Next.js and Node.js. Check out my portfolio to see my work.",
  keywords:
    "Full Stack Web Developer, Portfolio, React, Next.js, JavaScript, TypeScript, Web Development, MERN Stack, Node.js, Express.js, MongoDB, Tailwind CSS",
  author: "Rishab Nagwani",
  openGraph: {
    title: "Rishab Nagwani | Portfolio",
    description:
      "Hi, I'm Rishab Nagwani, a Full Stack Web Developer. I build web applications using Next.js and Node.js. Check out my portfolio to see my work.",
    url: "https://www.rishabnagwani.tech",
    image: "/logo.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishab Nagwani | Portfolio",
    description: "Full-stack Developer Portfolio.",
    image: "/logo.jpg",
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased bg-purple-950 text-white relative sm:pt-28">
        <div className="bg-[#f08a8c]/[0.3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#8a83f2]/[0.4] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
