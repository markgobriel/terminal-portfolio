import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
import BackToTop from "./components/BackToTop";

function App() {
  const [lang, setLang] = useState("en");
  const [nameHover, setNameHover] = useState(false);
  const [eduHover, setEduHover] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScroll = useRef(0);
  const scrollTimeout = useRef(null);
  const nameHoverImage = "https://i.giphy.com/media/3NtY188QaxDdC/giphy.gif";
  const eduHoverImage = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png";
  const content = portfolio[lang] || portfolio.en;
  const resumeHref =
    content.contact.find((c) => c.label === (lang === "fr" ? "cv" : "resume"))?.href ||
    content.contact.find((c) => c.label === "resume")?.href ||
    "/resume.pdf";
  const meta = [
    { label: content.ui.meta.location, value: content.location },
    { label: content.ui.meta.focus, value: content.focus },
    { label: content.ui.meta.currently, value: content.currently },
  ];

  const sections = [
    { id: "about", label: content.ui.nav.about },
    { id: "education", label: content.ui.nav.education },
    { id: "experience", label: content.ui.nav.experience },
    { id: "projects", label: content.ui.nav.projects },
    { id: "certifications", label: content.ui.nav.certifications },
    { id: "skills", label: content.ui.nav.skills },
    { id: "contact", label: content.ui.nav.contact },
    { href: resumeHref, label: content.ui.nav.resume, external: true },
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

  useEffect(() => {
    const elements = document.querySelectorAll("[data-fade]");
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "15% 0px 15% 0px",
      }
    );

    elements.forEach((el) => {
      el.classList.remove("is-visible");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [lang]);

  return (
    <>
      <div className="app-shell">
        <Cursor nameHover={nameHover} nameHoverImage={nameHoverImage} eduHover={eduHover} eduHoverImage={eduHoverImage} />
        <TopNav sections={sections} visible={navVisible} />
        <Masthead
          name={content.name}
          tagline={content.tagline}
          meta={meta}
          portrait={content.portrait}
          resumeHref={resumeHref}
          resumeLabel={content.ui.resumeTop}
          eyebrowLabel={content.ui.eyebrow}
          eyebrowTouchLabel={content.ui.eyebrowTouch}
          onNameHover={setNameHover}
        />
        <main className="app-grid">
          <About
            paragraphs={content.about}
            status={content.status}
            focusList={content.focusList}
            id="about"
            title={content.ui.headings.about}
          />
          <Education items={content.education} id="education" onHoverChange={setEduHover} title={content.ui.headings.education} />
          <Experience items={content.experience} id="experience" title={content.ui.headings.experience} />
          <Work items={content.work} id="projects" title={content.ui.headings.projects} />
          <Notes items={content.notes} id="certifications" title={content.ui.headings.certifications} />
          <Skills
            items={content.skills}
            id="skills"
            title={content.ui.headings.skills}
            groupLabels={content.ui.skillGroups}
          />
          <Contact items={content.contact} id="contact" title={content.ui.headings.contact} />
        </main>
        <Footer
          updated={content.footer.updated}
          motto={content.footer.motto}
          lang={lang}
          onLangChange={setLang}
          navLabel={content.ui.nav.resume}
        />
        <Analytics />
        <SpeedInsights />
      </div>
      <BackToTop />
    </>
  );
}

export default App;
