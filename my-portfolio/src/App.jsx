import "./App.css";
import { useEffect, useRef, useState } from "react";
import portfolio from "./data/portfolio";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Notes from "./components/Notes";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import TopNav from "./components/TopNav";

function App() {
  const [nameHover, setNameHover] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScroll = useRef(0);
  const scrollTimeout = useRef(null);
  const nameHoverImage = "https://i.giphy.com/media/3NtY188QaxDdC/giphy.gif";
  const resumeHref =
    portfolio.contact.find((c) => c.label === "resume")?.href || "/resume.pdf";
  const meta = [
    { label: "location", value: portfolio.location },
    { label: "focus", value: portfolio.focus },
    { label: "currently", value: portfolio.currently },
  ];

  const sections = [
    { id: "about", label: "about" },
    { id: "education", label: "education" },
    { id: "experience", label: "experience" },
    { id: "projects", label: "projects" },
    { id: "certifications", label: "certifications" },
    { id: "skills", label: "skills" },
    { id: "contact", label: "contact" },
    { href: resumeHref, label: "resume", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const directionUp = y < lastScroll.current;
      if (directionUp || y < 40) {
        setNavVisible(true);
      } else if (y > 140) {
        setNavVisible(false);
      }
      lastScroll.current = y;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setNavVisible(true), 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div className="app-shell">
      <Cursor nameHover={nameHover} nameHoverImage={nameHoverImage} />
      <TopNav sections={sections} visible={navVisible} />
      <Masthead
        name={portfolio.name}
        tagline={portfolio.tagline}
        meta={meta}
        portrait={portfolio.portrait}
        resumeHref={resumeHref}
        onNameHover={setNameHover}
      />
      <main className="app-grid">
        <About
          paragraphs={portfolio.about}
          status={portfolio.status}
          focusList={portfolio.focusList}
          id="about"
        />
        <Education items={portfolio.education} id="education" />
        <Experience items={portfolio.experience} id="experience" />
        <Work items={portfolio.work} id="projects" />
        <Notes items={portfolio.notes} id="certifications" />
        <Skills items={portfolio.skills} id="skills" />
        <Contact items={portfolio.contact} id="contact" />
      </main>
      <Footer updated={portfolio.footer.updated} motto={portfolio.footer.motto} />
    </div>
  );
}

export default App;
