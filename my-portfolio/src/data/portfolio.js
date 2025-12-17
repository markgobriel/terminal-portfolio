const portfolio = {
  name: "mark gobriel",
  tagline:
    "computer science student at the university of toronto, aspiring to be a full-stack developer.",
  portrait: {
    src: "/portrait.jpg",
    alt: "my portrait",
  },
  location: "Toronto, ON",
  focus: "full-stack development, web applications, ux design",
  currently: "looking for 12-16 month internships starting may 2025",
  about: [
    "as a full-stack developer, i am fully equipped to work on both back-end and front-end projects, shipping polished interfaces and reliable systems.",
    "my work moves between front-end architecture, apis, and data models, always tying code back to interaction.",
    "when i am not coding (because i touch grass), i am either weight training, preparing for my next marathon, cooking a new high-protein recipe, or travelling.",
  ],
  status: "open to internships for summer 2025",
  focusList: ["React", "Vite", "Node.js", "Python", "Figma", "PostgreSQL"],
  education: [
    {
      school: "University of Toronto",
      program: "honours bachelor of science, computer science (minor in business)",
      date: "expected april 2027",
      details:
        "relevant coursework: software design, systems programming, software engineering, web programming, data structures & algorithms, databases.",
    },
  ],
  experience: [
    {
      role: "full stack developer intern",
      org: "Futura Holding Group",
      date: "may 2025 – aug 2025",
      location: "toronto, on",
      bullets: [
        "built and shipped the futura art gallery foundation site with a lightweight custom wordpress theme and reusable ui components.",
        "improved mobile responsiveness, navigation clarity, and load performance; supported an end-to-end purchase flow for buying artwork.",
      ],
    },
    {
      role: "ceo & founder",
      org: "motherland clothing",
      date: "feb 2024 – present",
      location: "mississauga, on",
      bullets: [
        "built and optimized a production shopify storefront with liquid, javascript, html, and css to create an engaging shopping experience.",
        "implemented abandoned cart and checkout recovery automations via shopify apis + liquid, recovering ~40% of abandoned carts.",
      ],
    },
  ],
  work: [
    {
      title: "Rewardly",
      type: "full-stack",
      description:
        "loyalty rewards web app that lets users earn, track, and redeem points through a clean, responsive ui.",
      stack: ["React", "Vite", "Node.js", "Express.js", "Prisma", "SQLite"],
      link: "https://github.com/markgobriel",
    },
    {
      title: "Dormigo",
      type: "full-stack",
      description:
        "rental listing aggregator with roommate matching built for a university hackathon.",
      stack: ["React", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL"],
      link: "https://github.com/markgobriel",
    },
    {
      title: "Othello Game",
      type: "Java",
      description:
        "java-based othello with human vs human, human vs computer, and human vs random modes demonstrating oop and game logic.",
      stack: ["Java"],
      link: "https://github.com/markgobriel",
    },
    {
      title: "Paint App Clone",
      type: "Java",
      description:
        "java paint clone that uses the Ollama API to generate drawings from natural-language prompts.",
      stack: ["Java", "Maven", "JUnit", "Ollama API"],
      link: "https://github.com/markgobriel",
    },
    {
      title: "Treemap Visualizer",
      type: "Python",
      description:
        "pygame app visualizing hierarchical data as dynamic treemaps with real-time updates and interactivity.",
      stack: ["Python", "Pygame"],
      link: "https://github.com/markgobriel",
    },
    {
      title: "MewbileTech Visualizer",
      type: "Python",
      description:
        "pygame visualization of historical customer call data across toronto with filtering and billing reports.",
      stack: ["Python", "Pygame"],
      link: "https://github.com/markgobriel",
    },
    {
      title: "Ride Sharing Simulation",
      type: "Python",
      description:
        "simulation of a ridesharing service modeling riders, drivers, dispatcher, and monitor on a city grid.",
      stack: ["Python"],
      link: "https://github.com/markgobriel",
    },
  ],
  notes: [
    "organizations: google developer student club, computer science student club, intramural soccer.",
    "certification: university of colorado - software design as an element of the software development lifecycle.",
    "some repositories are private - reach out if you want details.",
  ],
  skills: {
    languages: [
      { name: "Java", iconId: "JavaOriginal" },
      { name: "Python", iconId: "PythonOriginal" },
      { name: "HTML", iconId: "Html5Original" },
      { name: "CSS", iconId: "Css3Original" },
      { name: "JavaScript", iconId: "JavascriptOriginal" },
      { name: "Liquid" },
    ],
    frameworks: [
      { name: "React", iconId: "ReactOriginal" },
      { name: "Vite", iconId: "VitejsOriginal" },
      { name: "Node.js", iconId: "NodejsOriginal" },
      { name: "Express.js", iconId: "ExpressOriginal" },
      { name: "REST APIs" },
      { name: "Pygame" },
    ],
    tools: [
      { name: "Git", iconId: "GitOriginal" },
      { name: "GitHub", iconId: "GithubOriginal" },
      { name: "Shopify", iconId: "ShopifyOriginal" },
      { name: "Prisma", iconId: "PrismaOriginal" },
      { name: "SQLite", iconId: "SqlitePlainWordmark" },
      { name: "PostgreSQL", iconId: "PostgresqlOriginal" },
      { name: "Axios" },
      { name: "Figma", iconId: "FigmaOriginal" },
      { name: "JUnit", iconId: "JavaOriginal" },
      { name: "Javadoc", iconId: "JavaOriginal" },
    ],
  },
  contact: [
    {
      label: "email",
      value: "markgobriel@gmail.com",
      href: "mailto:markgobriel@gmail.com",
    },
    {
      label: "linkedin",
      value: "linkedin.com/in/markgobriel",
      href: "https://linkedin.com/in/markgobriel",
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
      external: true,
    },
  ],
  footer: {
    updated: "last updated december 2025",
    motto: "built with ♥ by me",
  },
};

export default portfolio;
