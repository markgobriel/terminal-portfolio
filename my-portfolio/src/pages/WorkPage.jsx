import "./WorkPage.css";

function WorkPage({ content, homeHref = "/" }) {
  const title = content.ui?.workPage?.title || "work";
  const backLabel = content.ui?.workPage?.back || "back to home";
  const projectsTitle = content.ui?.headings?.projects || "projects";
  const experienceTitle = content.ui?.headings?.experience || "experience";

  return (
    <main className="work-page">
      <nav className="work-page__nav" data-fade>
        <a className="work-page__back" href={homeHref}>
          <span className="work-page__back-arrow" aria-hidden="true">←</span>
          {backLabel}
        </a>
      </nav>
      <header className="work-page__header" data-fade>
        <h1 className="work-page__title" data-emoji="💼">{title}</h1>
      </header>

      <section className="work-page__section" aria-label={experienceTitle}>
        <h2 className="work-page__section-title">{experienceTitle}</h2>
        <div className="work-page__section-body">
          {content.experience.map((item) => (
            <article className="work-page__experience" key={`${item.org}-${item.role}`} data-fade>
              <div className="work-page__experience-top">
                <div>
                  <div className="work-page__experience-role">{item.role}</div>
                  <div className="work-page__experience-org">{item.org}</div>
                </div>
                <div className="work-page__experience-meta">
                  <span>{item.location}</span>
                  <span className="work-page__experience-date">{item.date}</span>
                </div>
              </div>
              <ul className="work-page__experience-list">
                {item.bullets.map((bullet, idx) => (
                  <li key={`${item.org}-${idx}`}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="work-page__section" aria-label={projectsTitle}>
        <h2 className="work-page__section-title">{projectsTitle}</h2>
        <div className="work-page__section-body">
          {content.work.map((item) => (
            <article className="work-page__project" key={item.title} data-fade>
              <div className="work-page__project-head">
                <div className="work-page__project-title">{item.title}</div>
                <a
                  className="work-page__project-link"
                  href={item.link || "https://github.com/markgobriel"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`open ${item.title} on github`}
                >
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path
                      d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.42.36.8 1.08.8 2.18 0 1.58-.02 2.86-.02 3.25 0 .31.21.68.8.56 4.57-1.53 7.86-5.85 7.86-10.95C23.5 5.74 18.27.5 12 .5z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
              <p className="work-page__project-desc">{item.description}</p>
              {item.stack?.length ? (
                <div className="work-page__project-stack">({item.stack.join(" · ")})</div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default WorkPage;
