import About from "@/components/about";
import Certificate from "@/components/certificate";
import Contact from "@/components/contact";
import Divider from "@/components/divider";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Education />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Certificate />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}
