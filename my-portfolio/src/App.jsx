import "./App.css";
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

function App() {
  const meta = [
    { label: "location", value: portfolio.location },
    { label: "focus", value: portfolio.focus },
    { label: "currently", value: portfolio.currently },
  ];

  return (
    <div className="app-shell">
      <Cursor />
      <Masthead
        name={portfolio.name}
        tagline={portfolio.tagline}
        meta={meta}
        portrait={portfolio.portrait}
      />
      <main className="app-grid">
        <About
          paragraphs={portfolio.about}
          status={portfolio.status}
          focusList={portfolio.focusList}
        />
        <Education items={portfolio.education} />
        <Experience items={portfolio.experience} />
        <Work items={portfolio.work} />
        <Notes items={portfolio.notes} />
        <Skills items={portfolio.skills} />
        <Contact items={portfolio.contact} />
      </main>
      <Footer updated={portfolio.footer.updated} motto={portfolio.footer.motto} />
    </div>
  );
}

export default App;
