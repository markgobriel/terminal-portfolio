import * as Devicons from "devicons-react";
import "./Skills.css";

const customSvgs = {
  shopify: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-hidden="true">
      <path
        fill="#7cb342"
        d="M37.216,11.78c-0.023-0.211-0.211-0.305-0.351-0.305s-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	c-0.234-0.234-0.68-0.164-0.867-0.117c-0.023,0-0.469,0.141-1.195,0.375c-0.726-2.086-1.968-3.984-4.194-3.984h-0.211	C24.187,4.375,23.391,4,22.735,4c-5.155,0-7.639,6.444-8.412,9.725c-2.015,0.633-3.445,1.054-3.609,1.125	c-1.125,0.351-1.148,0.375-1.289,1.429c-0.117,0.797-3.046,23.456-3.046,23.456L29.179,44l12.373-2.671	C41.575,41.282,37.24,11.991,37.216,11.78z M27.937,9.483c-0.562,0.164-1.242,0.375-1.921,0.609V9.671	c0-1.265-0.164-2.296-0.469-3.117C26.718,6.695,27.445,7.984,27.937,9.483L27.937,9.483z M24.117,6.812	c0.305,0.797,0.516,1.922,0.516,3.468v0.234c-1.265,0.398-2.601,0.797-3.984,1.242C21.422,8.804,22.899,7.351,24.117,6.812	L24.117,6.812z M22.617,5.359c0.234,0,0.469,0.094,0.656,0.234c-1.664,0.773-3.421,2.718-4.148,6.655	c-1.101,0.351-2.156,0.656-3.163,0.984C16.806,10.233,18.915,5.359,22.617,5.359z"
      ></path>
      <path
        fill="#558b2f"
        d="M36.865,11.428c-0.141,0-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	C31.17,8.757,31.053,8.71,30.96,8.71L29.249,44l12.373-2.671c0,0-4.335-29.338-4.359-29.549	C37.169,11.569,37.005,11.475,36.865,11.428z"
      ></path>
      <path
        fill="#fff"
        d="M24.792,18.593l-1.475,4.449c0,0-1.337-0.715-2.927-0.715c-2.374,0-2.489,1.498-2.489,1.867	c0,2.028,5.301,2.812,5.301,7.583c0,3.757-2.374,6.177-5.578,6.177c-3.872,0-5.808-2.397-5.808-2.397l1.037-3.411	c0,0,2.028,1.752,3.734,1.752c1.129,0,1.59-0.876,1.59-1.521c0-2.651-4.333-2.766-4.333-7.145c0-3.665,2.628-7.214,7.952-7.214	C23.777,17.994,24.792,18.593,24.792,18.593z"
      ></path>
    </svg>
  ),
  junit: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-hidden="true">
      <title>Junit SVG Icon</title>
      <path
        fill="#dc514a"
        d="M64.166 2.191c-15.303-.292-29.9 3.746-42.39 15.293c-26.137 24.174-26.915 65.564-1.67 90.63c4.544 4.512 9.952 8.686 15.89 11.228c1.551-5.215 1.249-11.511.758-17.7c-.118-.122-.24-.243-.33-.378c-1.659-2.473-.428-8.929-.428-11.866c10.436 1.85 18.936 7.59 30.108 4.256c10.933-3.263 15.49-19.03 5.851-26.494c-5.821-4.51-14.457-3.895-21.322-3.068c-4.123.498-9.271 2.02-12.117-2.365c-1.68-2.581.054-8.916.336-11.836c.07-.736.147-1.486.22-2.225c.731-9.068 1.944-18.234 1.944-27.307H85.34V4.975C78.224 3.35 71.122 2.325 64.166 2.19z"
      />
      <path
        fill="#23a161"
        d="M84.982 4.947v27.08H52.729l-1.676 20.827c7.157-.561 13.792-1.824 20.944-.143c4.903 1.155 9.505 3.47 12.91 7.227C94.41 70.41 92.54 90.068 81.63 98.9c-3.07 2.486-6.578 4.119-10.282 5.169c-3.42 1.093-6.856 1.556-10.304 1.588a70.94 70.94 0 0 1-3.708.104c-5.37 0-10.741-.698-15.917-2.146c-1.316-.369-3.352-.882-4.632-1.84c-.271-.058-.543-.121-.814-.18l-.417 17.497c33.24 17.626 75.585-1.233 87.508-35.825c10.079-29.233-5.53-70.647-38.082-78.32Z"
      />
    </svg>
  ),
  numpy: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-hidden="true">
      <polygon fill="#00acc1" points="21.196,12.276 14.392,8.842 6.922,12.569 13.912,16.078"></polygon>
      <polygon fill="#00acc1" points="24.317,13.85 31.451,17.453 24.049,21.169 17.049,17.654"></polygon>
      <polygon fill="#00acc1" points="33.846,8.893 41.176,12.569 34.619,15.86 27.47,12.254"></polygon>
      <polygon fill="#00acc1" points="30.69,7.31 24.091,4 17.564,7.258 24.364,10.687"></polygon>
      <polygon fill="#00acc1" points="25.532,35.725 25.532,44.73 33.525,40.74 33.518,31.732"></polygon>
      <polygon fill="#00acc1" points="33.514,28.587 33.505,19.674 25.532,23.637 25.532,32.554"></polygon>
      <polygon fill="#00acc1" points="43.111,26.918 43.111,35.957 36.292,39.359 36.287,30.361"></polygon>
      <polygon fill="#00acc1" points="43.111,23.756 43.111,14.898 36.279,18.294 36.285,27.225"></polygon>
      <path fill="#448aff" d="M22.71,23.637l-5.384-2.708v11.699c0,0-6.586-14.012-7.195-15.27 c-0.079-0.163-0.401-0.341-0.484-0.385C8.46,16.353,5,14.601,5,14.601v20.676l4.787,2.566V27.031c0,0,6.515,12.52,6.582,12.657 s0.718,1.455,1.418,1.919c0.929,0.618,4.919,3.016,4.919,3.016L22.71,23.637z"></path>
    </svg>
  ),
};

const fallbackIcon = (label) => (
  <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
    <rect x="8" y="8" width="48" height="48" rx="12" fill="#5b4bff" />
    <text x="32" y="40" fontSize="18" fontWeight="700" textAnchor="middle" fill="#fff">
      {label}
    </text>
  </svg>
);

function SkillIcon({ iconId, iconComponent, iconImg, name }) {
  const IconComp = iconId ? Devicons[iconId] : undefined;
  const custom = iconComponent ? customSvgs[iconComponent] : undefined;
  const initials = name.replace(/[^a-zA-Z]/g, "").slice(0, 3).toLowerCase() || "app";

  let graphic = null;
  if (custom) {
    graphic = custom;
  } else if (iconImg) {
    graphic = <img src={iconImg} alt={`${name} icon`} loading="lazy" />;
  } else if (IconComp) {
    graphic = <IconComp size={32} />;
  } else {
    graphic = fallbackIcon(initials);
  }

  return (
    <span className="skill-pill">
      <span className="skill-icon" aria-hidden="true">
        {graphic}
      </span>
      {name}
    </span>
  );
}

function Skills({ items, id }) {
  return (
    <section className="panel skills panel--delay-4" id={id}>
      <h2>skills</h2>
      <div className="skill-groups">
        {Object.entries(items).map(([group, list]) => {
          const heading =
            group === "databases / orm" ? "databases / orm" : group;
          return (
            <div className="skill-group" key={group} id={group}>
              <div className="skill-group__title">{heading}</div>
              <div className="skills-grid">
                {list.map((skill) => (
                  <SkillIcon
                    key={skill.name}
                    iconId={skill.iconId}
                    iconComponent={skill.iconComponent}
                    iconImg={skill.iconImg}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
