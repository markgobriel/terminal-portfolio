import "./App.css";
import portfolio from "./data/portfolio";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Work from "./components/Work";
import Notes from "./components/Notes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const meta = [
    { label: "location", value: portfolio.location },
    { label: "focus", value: portfolio.focus },
    { label: "currently", value: portfolio.currently },
  ];

  return (
    <div className="app-shell">
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
        <Work items={portfolio.work} />
        <Notes items={portfolio.notes} />
        <Contact items={portfolio.contact} />
      </main>
      <Footer updated={portfolio.footer.updated} motto={portfolio.footer.motto} />
    </div>
  );
}

export default App;
