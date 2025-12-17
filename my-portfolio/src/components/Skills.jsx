import * as Devicons from "devicons-react";
import "./Skills.css";

const fallbackIcon = (label) => (
  <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
    <rect x="8" y="8" width="48" height="48" rx="12" fill="#5b4bff" />
    <text x="32" y="40" fontSize="18" fontWeight="700" textAnchor="middle" fill="#fff">
      {label}
    </text>
  </svg>
);

function SkillIcon({ iconId, name }) {
  const IconComp = iconId ? Devicons[iconId] : undefined;
  const initials = name.replace(/[^a-zA-Z]/g, "").slice(0, 3).toLowerCase() || "app";

  return (
    <span className="skill-pill">
      <span className="skill-icon" aria-hidden="true">
        {IconComp ? <IconComp size={32} /> : fallbackIcon(initials)}
      </span>
      {name}
    </span>
  );
}

function Skills({ items }) {
  return (
    <section className="panel skills panel--delay-4">
      <h2>skills</h2>
      <div className="skill-groups">
        {Object.entries(items).map(([group, list]) => (
          <div className="skill-group" key={group}>
            <div className="skill-group__title">{group}</div>
            <div className="skills-grid">
              {list.map((skill) => (
                <SkillIcon key={skill.name} iconId={skill.iconId} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
