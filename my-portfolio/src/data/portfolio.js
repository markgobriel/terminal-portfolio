const portfolio = {
  name: "Mark Gobriel",
  tagline:
    "ux-leaning computer science student shaping quiet systems and poetic interfaces.",
  portrait: {
    src: "/portrait.jpg",
    alt: "Mark Gobriel portrait",
  },
  location: "Boston",
  focus: "interaction systems, creative coding, hci",
  currently: "building a compiler in Go",
  about: [
    "i design tools with a ux lens, balancing craft and compute.",
    "my work moves between algorithms, type systems, and interaction design.",
    "when i am not coding, i sketch layouts, collect type specimens, and write tiny essays about digital material.",
  ],
  status: "open to internships for 2025",
  focusList: ["Rust", "Python", "TypeScript", "Linux", "Figma"],
  work: [
    {
      title: "Quiet Queue",
      type: "systems",
      description:
        "a scheduler that balances fairness and silence with a visual log of every decision.",
      stack: ["Go", "PostgreSQL", "Grafana"],
    },
    {
      title: "Paper Map",
      type: "research",
      description:
        "a study on gentle navigation cues that help people learn new cities without a full map.",
      stack: ["Python", "OpenCV", "Arduino"],
    },
    {
      title: "Atlas Room",
      type: "creative",
      description:
        "a poetic archive of local soundscapes, indexed by time of day and weather.",
      stack: ["TypeScript", "Web Audio", "Vercel"],
    },
  ],
  notes: [
    "teaching assistant for Data Structures and Algorithms.",
    "building a small library for generative grids.",
    "collector of old ui manuals and field notebooks.",
  ],
  contact: [
    {
      label: "email",
      value: "hello@markgobriel.com",
      href: "mailto:hello@markgobriel.com",
    },
    {
      label: "github",
      value: "github.com/markgobriel",
      href: "https://github.com/markgobriel",
    },
    {
      label: "resume",
      value: "resume.pdf",
      href: "/resume.pdf",
    },
  ],
  footer: {
    updated: "last updated 2025",
    motto: "computer + art, always",
  },
};

export default portfolio;
