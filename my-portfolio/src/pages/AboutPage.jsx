import "./AboutPage.css";
import { SkillIcon } from "../components/Skills";

function AboutPage({ content, homeHref = "/" }) {
  const heading = content.ui?.aboutPage?.title || content.ui?.headings?.about || "about";
  const skillsLabel = content.ui?.aboutPage?.skills || "top skills";
  const valuesLabel = content.ui?.aboutPage?.values || "core values";
  const backLabel = content.ui?.aboutPage?.back || "back to home";
  const portraitCaption = content.ui?.aboutPage?.portraitCaption || "me after running my first marathon :)";
  const meta = [
    { label: content.ui?.meta?.location || "location", value: content.location },
    { label: content.ui?.meta?.focus || "focus", value: content.focus },
    { label: content.ui?.meta?.currently || "currently", value: content.currently },
  ];

  const [lead, ...rest] = content.about || [];
  const skillGroups = content.skills || {};
  const skillGroupLabels = content.ui?.skillGroups || {};
  const renderLead = (text) => {
    if (!text) return null;
    const fullStackText = "full-stack developer";
    const shippedText = "0 to shipped";
    const tokens = [];
    const fullStackIndex = text.indexOf(fullStackText);
    const shippedIndex = text.indexOf(shippedText);

    if (fullStackIndex !== -1) {
      tokens.push({ start: fullStackIndex, end: fullStackIndex + fullStackText.length, type: "fullstack" });
    }
    if (shippedIndex !== -1) {
      tokens.push({ start: shippedIndex, end: shippedIndex + shippedText.length, type: "shipped" });
    }

    if (!tokens.length) return text;

    tokens.sort((a, b) => a.start - b.start);
    const nodes = [];
    let cursor = 0;

    tokens.forEach((token, index) => {
      if (token.start > cursor) {
        nodes.push(text.slice(cursor, token.start));
      }
      const tokenText = text.slice(token.start, token.end);
      if (token.type === "fullstack") {
        nodes.push(
          <span className="about-page__lead-italic" key={`lead-fullstack-${index}`}>
            {tokenText}
          </span>
        );
      } else {
        nodes.push(
          <span className="about-page__lead-wavy" key={`lead-shipped-${index}`}>
            {tokenText}
          </span>
        );
      }
      cursor = token.end;
    });

    if (cursor < text.length) {
      nodes.push(text.slice(cursor));
    }

    return nodes;
  };

  return (
    <main className="about-page">
      <nav className="about-page__nav" data-fade>
        <a className="about-page__back" href={homeHref}>
          <span className="about-page__back-arrow" aria-hidden="true">←</span>
          {backLabel}
        </a>
      </nav>
      <header className="about-page__header" data-fade>
        <h1 className="about-page__title" data-emoji="🔎">{heading}</h1>
      </header>

      <section className="about-page__grid">
        <div className="about-page__lead-block" data-fade>
          {lead ? (
            <p className="about-page__lead about-page__lead--hero">{renderLead(lead)}</p>
          ) : null}
        </div>
        <div className="about-page__portrait-block" data-fade>
          {content.portrait?.src ? (
            <>
              <div className="about-page__portrait-callout">
                <svg className="about-page__portrait-arrow" viewBox="0 0 140 40" aria-hidden="true">
                  <path
                    d="M132 12 C108 8 92 30 70 28 S36 16 10 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 24 L6 30 L18 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{portraitCaption}</span>
              </div>
              <div className="about-page__portrait" data-emoji="🐐">
                <img src={content.portrait.src} alt={content.portrait.alt || "portrait"} />
              </div>
            </>
          ) : null}
        </div>
        <div className="about-page__details-block" data-fade>
          {rest.map((text, index) => (
            <p key={`about-copy-${index}`}>{text}</p>
          ))}
          <div className="about-page__stacks">
            {content.values?.length ? (
              <div className="about-page__stack">
                <span className="about-page__label about-page__label--serif-strong">{valuesLabel}</span>
                <ol className="about-page__list about-page__list--large">
                  {content.values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ol>
              </div>
            ) : null}
          </div>
        </div>
        <div className="about-page__meta-block" data-fade>
          <div className="about-page__meta">
            {meta.map((item) => (
              <div className="about-page__meta-item" key={item.label}>
                <span className="about-page__meta-label">{item.label}</span>
                <strong className="about-page__meta-value">{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__skills-section" data-fade>
        <h2 className="about-page__skills-heading">{skillsLabel}</h2>
        {Object.entries(skillGroups).map(([group, list]) => {
          if (!list?.length) return null;
          const label = skillGroupLabels[group] || group;
          return (
            <div className="about-page__skill-category" key={group}>
              <h3 className="about-page__skill-category-title">{label}</h3>
              <div className="about-page__skill-items">
                {list.map((skill, index) => (
                  <span className="about-page__skill-item" key={skill.name}>
                    <SkillIcon
                      iconId={skill.iconId}
                      iconComponent={skill.iconComponent}
                      iconImg={skill.iconImg}
                      name=""
                    />
                    {skill.name}
                    {index < list.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default AboutPage;
