const portfolio = {
  en: {
    ui: {
      eyebrow: "hover over my name for a surprise ;)",
      eyebrowTouch: "portfolio",
      resumeTop: "click here for the boring stuff (my resume)",
      skillGroups: {
        languages: "languages",
        frameworks: "software / frameworks",
        tools: "tools",
        "databases / orm": "databases / orm",
      },
      nav: {
        about: "about",
        education: "education",
        experience: "work",
        projects: "projects",
        certifications: "certifications",
        skills: "skills",
        contact: "contact",
        resume: "resume",
      },
      headings: {
        about: "about",
        education: "education",
        experience: "work experience",
        projects: "projects",
        certifications: "certifications",
        skills: "skills",
        contact: "contact",
      },
      meta: {
        location: "location",
        focus: "focus",
        currently: "currently",
      },
    },
    name: "mark gobriel",
    tagline:
      'computer science student at the <a href="https://www.utoronto.ca" target="_blank" rel="noreferrer">university of toronto</a>, aspiring to be a full-stack developer.',
    portrait: {
      src: "/portrait.jpg",
      alt: "my portrait",
    },
    location: "Toronto, ON",
    focus: "full-stack development, web applications, ux design",
    currently: "looking for 12-16 month internships starting may 2026",
    about: [
      "as a full-stack developer, i am fully equipped to work on both back-end and front-end projects, shipping polished interfaces and reliable systems.",
      "my work moves between front-end architecture, apis, and data models, always tying code back to interaction.",
      "when i am not coding (because i touch grass), i am either weight training, preparing for my next marathon, cooking a new high-protein recipe, or travelling.",
    ],
    status: "open to internships for summer 2026",
    focusList: ["React", "JavaScript", "Java", "Python", "Node.js"],
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
        stack: ["Java", "Javadoc"],
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
      {
        title: "mysh",
        type: "C",
        description:
          "a custom linux shell written in c that supports cd, ls, pwd, background processes, and job control.",
        stack: ["C"],
        link: "https://github.com/markgobriel",
      },
    ],
    notes: [
      {
        institution: "University of Colorado",
        title: "software design as an element of the software development lifecycle",
        href: "https://www.coursera.org/account/accomplishments/verify/495TOWMTJK3P",
      },
    ],
    skills: {
      languages: [
        { name: "Java", iconId: "JavaOriginal", level: "advanced" },
        { name: "Python", iconId: "PythonOriginal", level: "advanced" },
        { name: "HTML", iconId: "Html5Original", level: "advanced" },
        { name: "CSS", iconId: "Css3Original", level: "advanced" },
        { name: "JavaScript", iconId: "JavascriptOriginal", level: "advanced" },
        { name: "C", iconImg: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", level: "intermediate" },
      ],
      frameworks: [
        { name: "React", iconId: "ReactOriginal", level: "advanced" },
        { name: "Vite", iconId: "VitejsOriginal", level: "advanced" },
        { name: "Node.js", iconId: "NodejsOriginal", level: "advanced" },
        { name: "Express.js", iconId: "ExpressOriginal", level: "advanced" },
        {
          name: "REST APIs",
          iconImg: "https://www.opc-router.com/wp-content/uploads/2020/04/icon_rest_webservice_600x400px-300x200.png",
          level: "advanced",
        },
        { name: "NumPy", iconComponent: "numpy", level: "intermediate" },
        { name: "Pygame", iconImg: "https://www.pygame.org/ftp/pygame-head-party.png", level: "intermediate" },
      ],
      tools: [
        { name: "Git", iconId: "GitOriginal", level: "advanced" },
        { name: "GitHub", iconId: "GithubOriginal", level: "advanced" },
        { name: "Shopify", iconComponent: "shopify", level: "advanced" },
        { name: "Figma", iconId: "FigmaOriginal", level: "advanced" },
        { name: "JUnit", iconComponent: "junit", level: "intermediate" },
        { name: "Javadoc", iconId: "JavaOriginal", level: "intermediate" },
        { name: "shadcn/ui", iconImg: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png", level: "intermediate" },
      ],
      "databases / orm": [
        { name: "Prisma", iconId: "PrismaOriginal", level: "advanced" },
        { name: "PostgreSQL", iconId: "PostgresqlOriginal", level: "advanced" },
        { name: "SQLite", iconId: "SqlitePlainWordmark", level: "advanced" },
      ],
    },
    contact: [
      {
        label: "email",
        value: "markgobriel[at]gmail.com",
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
  },
  fr: {
    ui: {
      eyebrow: "survole mon nom pour une surprise ;)",
      eyebrowTouch: "portfolio",
      resumeTop: "clique ici pour les détails sérieux (mon cv)",
      skillGroups: {
        languages: "langages",
        frameworks: "frameworks",
        tools: "outils",
        "databases / orm": "bases de données / orm",
      },
      nav: {
        about: "à propos",
        education: "éducation",
        experience: "expérience",
        projects: "projets",
        certifications: "certifications",
        skills: "compétences",
        contact: "contact",
        resume: "cv",
      },
      headings: {
        about: "à propos",
        education: "éducation",
        experience: "expérience pro",
        projects: "projets",
        certifications: "certifications",
        skills: "compétences",
        contact: "contact",
      },
      meta: {
        location: "lieu",
        focus: "focus",
        currently: "actuellement",
      },
    },
    name: "mark gobriel",
    tagline:
      'étudiant en informatique à l\'<a href="https://www.utoronto.ca" target="_blank" rel="noreferrer">université de toronto</a>, aspirant développeur full-stack.',
    portrait: {
      src: "/portrait.jpg",
      alt: "mon portrait",
    },
    location: "Toronto, ON",
    focus: "développement full-stack, applications web, design ux",
    currently: "à la recherche d'un stage de 12-16 mois à partir de mai 2026",
    about: [
      "en tant que développeur full-stack, je peux intervenir côté back comme côté front pour livrer des interfaces soignées et des systèmes fiables.",
      "mon travail navigue entre architecture front-end, apis et modèles de données, avec un fil conducteur : l'interaction et l'expérience.",
      "quand je ne code pas (je touche vraiment de l'herbe), je fais de la musculation, je prépare mon prochain marathon, je cuisine des recettes protéinées ou je voyage.",
    ],
    status: "disponible pour un stage à l'été 2026",
    focusList: ["React", "JavaScript", "Java", "Python", "Node.js"],
    education: [
      {
        school: "Université de Toronto",
        program: "bachelor of science spécialisé, informatique (mineure en business)",
        date: "fin prévue : avril 2027",
        details:
          "cours pertinents : conception logicielle, programmation système, génie logiciel, programmation web, structures de données & algorithmes, bases de données.",
      },
    ],
    experience: [
      {
        role: "stagiaire développeur full stack",
        org: "Futura Holding Group",
        date: "mai 2025 – août 2025",
        location: "toronto, on",
        bullets: [
          "livré le site de la futura art gallery foundation avec un thème wordpress léger et des composants ui réutilisables.",
          "amélioré la réactivité mobile, la clarté de navigation et les performances; aidé à mettre en place un tunnel d'achat bout en bout.",
        ],
      },
      {
        role: "fondateur & ceo",
        org: "motherland clothing",
        date: "févr 2024 – présent",
        location: "mississauga, on",
        bullets: [
          "construit et optimisé une boutique shopify en production avec liquid, javascript, html et css pour une expérience d'achat soignée.",
          "mis en place des relances d'abandon de panier/checkout via les apis shopify + liquid, récupérant ~40% des paniers abandonnés.",
        ],
      },
    ],
    work: [
      {
        title: "Rewardly",
        type: "full-stack",
        description:
          "application de fidélité qui permet de gagner, suivre et utiliser des points via une interface réactive et épurée.",
        stack: ["React", "Vite", "Node.js", "Express.js", "Prisma", "SQLite"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Dormigo",
        type: "full-stack",
        description:
          "agrégateur d'annonces de location avec appariement de colocataires, réalisé pour un hackathon universitaire.",
        stack: ["React", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Othello Game",
        type: "Java",
        description:
          "othello en java avec modes humain vs humain, humain vs ordinateur et aléatoire, démontrant l'oop et la logique de jeu.",
        stack: ["Java", "Javadoc"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Paint App Clone",
        type: "Java",
        description:
          "clone de paint en java utilisant l'api ollama pour générer des dessins à partir de prompts en langage naturel.",
        stack: ["Java", "Maven", "JUnit", "Ollama API"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Treemap Visualizer",
        type: "Python",
        description:
          "appli pygame qui visualise des données hiérarchiques en treemaps dynamiques avec mises à jour en temps réel.",
        stack: ["Python", "Pygame"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "MewbileTech Visualizer",
        type: "Python",
        description:
          "visualisation pygame d'historiques d'appels clients à toronto, avec filtres et rapports de facturation.",
        stack: ["Python", "Pygame"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "Ride Sharing Simulation",
        type: "Python",
        description:
          "simulation d'un service de covoiturage modélisant passagers, conducteurs, dispatcher et monitor sur une grille urbaine.",
        stack: ["Python"],
        link: "https://github.com/markgobriel",
      },
      {
        title: "mysh",
        type: "C",
        description:
          "shell linux maison en c qui gère cd, ls, pwd, les processus en arrière-plan et le job control.",
        stack: ["C"],
        link: "https://github.com/markgobriel",
      },
    ],
    notes: [
      {
        institution: "Université du Colorado",
        title: "software design as an element of the software development lifecycle",
        href: "https://www.coursera.org/account/accomplishments/verify/495TOWMTJK3P",
      },
    ],
    skills: {
      languages: [
        { name: "Java", iconId: "JavaOriginal", level: "avancé" },
        { name: "Python", iconId: "PythonOriginal", level: "avancé" },
        { name: "HTML", iconId: "Html5Original", level: "avancé" },
        { name: "CSS", iconId: "Css3Original", level: "avancé" },
        { name: "JavaScript", iconId: "JavascriptOriginal", level: "avancé" },
        { name: "C", iconImg: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", level: "intermédiaire" },
      ],
      frameworks: [
        { name: "React", iconId: "ReactOriginal", level: "avancé" },
        { name: "Vite", iconId: "VitejsOriginal", level: "avancé" },
        { name: "Node.js", iconId: "NodejsOriginal", level: "avancé" },
        { name: "Express.js", iconId: "ExpressOriginal", level: "avancé" },
        {
          name: "REST APIs",
          iconImg: "https://www.opc-router.com/wp-content/uploads/2020/04/icon_rest_webservice_600x400px-300x200.png",
          level: "avancé",
        },
        { name: "NumPy", iconComponent: "numpy", level: "intermédiaire" },
        { name: "Pygame", iconImg: "https://www.pygame.org/ftp/pygame-head-party.png", level: "intermédiaire" },
      ],
      tools: [
        { name: "Git", iconId: "GitOriginal", level: "avancé" },
        { name: "GitHub", iconId: "GithubOriginal", level: "avancé" },
        { name: "Shopify", iconComponent: "shopify", level: "avancé" },
        { name: "Figma", iconId: "FigmaOriginal", level: "avancé" },
        { name: "JUnit", iconComponent: "junit", level: "intermédiaire" },
        { name: "Javadoc", iconId: "JavaOriginal", level: "intermédiaire" },
        { name: "shadcn/ui", iconImg: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png", level: "intermédiaire" },
      ],
      "databases / orm": [
        { name: "Prisma", iconId: "PrismaOriginal", level: "avancé" },
        { name: "PostgreSQL", iconId: "PostgresqlOriginal", level: "avancé" },
        { name: "SQLite", iconId: "SqlitePlainWordmark", level: "avancé" },
      ],
    },
    contact: [
      {
        label: "courriel",
        value: "markgobriel[at]gmail.com",
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
        label: "cv",
        value: "cv (pdf)",
        href: "/resume.pdf",
        external: true,
      },
    ],
    footer: {
      updated: "dernière mise à jour décembre 2025",
      motto: "conçu avec ♥ par moi",
    },
  },
};

export default portfolio;
