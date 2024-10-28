import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

interface NavItem {
  id: number;
  icon: string;
  title: string;
  url: string;
  isActive: Boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private languageService: LanguageService) { }

  private navListEn: NavItem[] = [
    {
      id: 1,
      icon: "bx bx-home-alt",
      title: "Home",
      url: "/home",
      isActive: true,
    },
    {
      id: 2,
      icon: "bx bx-user",
      title: "About",
      url: "/about",
      isActive: false
    },
    {
      id: 3,
      icon: "bx bx-detail",
      title: "Resume",
      url: "/resume",
      isActive: false
    },
    {
      id: 4,
      icon: "bx bx-briefcase",
      title: "Portfolio",
      url: "/portfolio",
      isActive: false
    },
    {
      id: 5,
      icon: "bx bx-envelope",
      title: "Contact",
      url: "/contact",
      isActive: false
    }
  ]
  private navListFr: NavItem[] = [
    {
      id: 1,
      icon: "bx bx-home-alt",
      title: "Accueil",
      url: "/home",
      isActive: true,
    },
    {
      id: 2,
      icon: "bx bx-user",
      title: "À propos",
      url: "/about",
      isActive: false
    },
    {
      id: 3,
      icon: "bx bx-detail",
      title: "CV",
      url: "/resume",
      isActive: false
    },
    {
      id: 4,
      icon: "bx bx-briefcase",
      title: "Portfolio",
      url: "/portfolio",
      isActive: false
    },
    {
      id: 5,
      icon: "bx bx-envelope",
      title: "Contact",
      url: "/contact",
      isActive: false
    }
  ];

  private profileDataFr = {
    hello: "Bonjour, je suis",
    name: "Josue Ouedraogo",
    profession: "Développeur Fullstack",
    description: "Étudiant en ingénierie informatique spécialisé en supply chain et logistique, je suis un développeur full stack expérimenté dans les technologies web et mobile, notamment Node.js, React.js, Nuxt.js, et React Native. Je possède de solides compétences en gestion de bases de données relationnelles et non relationnelles (SQL, Oracle, MongoDB).",
    cv: {
      label: "Télécharger le CV",
      url: "#"
    },
    social_links: [
      {
        platform: "Github",
        icon: "bx bxl-github",
        url: "#"
      },
      {
        platform: "LinkedIn",
        icon: "bx bxl-linkedin",
        url: "#"
      }
    ]
  }
  private profileDataEn = {
    hello: "Hello, I'm",
    name: "Joshua Ouedraogo",
    profession: "Fullstack Developer",
    description: "A computer engineering student specialized in supply chain and logistics, I am an experienced full-stack developer in web and mobile technologies, including Node.js, React.js, Nuxt.js, and React Native. I possess strong skills in managing relational and non-relational databases (SQL, Oracle, MongoDB).",
    cv: {
      label: "Download CV",
      url: "#"
    },
    social_links: [
      {
        platform: "Github",
        icon: "bx bxl-github",
        url: "#"
      },
      {
        platform: "LinkedIn",
        icon: "bx bxl-linkedin",
        url: "#"
      }
    ]
  }
  private aboutDataEn = {
    imgBox: {
      src: "./images/josue_ouedraogo.png",
      alt: ""
    }
    ,
    info: {
      title: "About me",
      profession: "Fullstack Developer",
      description: "A computer engineering student specialized in supply chain and logistics, I am an experienced full-stack developer in web and mobile technologies, including Node.js, React.js, Nuxt.js, and React Native. I possess strong skills in managing relational and non-relational databases (SQL, Oracle, MongoDB).",
      btn: {
        text: "View more",
        url: "#"
      }
    }
  }
  private aboutDataFr = {
    imgBox: {
      src: "./images/josue_ouedraogo.png",
      alt: ""
    }
    ,
    info: {
      title: "A propos de moi",
      profession: "Développeur Fullstack",
      description: "Étudiant en ingénierie informatique spécialisé en supply chain et logistique, je suis un développeur full stack expérimenté dans les technologies web et mobile, notamment Node.js, React.js, Nuxt.js, et React Native. Je possède de solides compétences en gestion de bases de données relationnelles et non relationnelles (SQL, Oracle, MongoDB).",
      btn: {
        text: "Voir plus",
        url: "#"
      }
    }
  }

  //----------- RESUME DATA ----------------------------------
  private tabsFr = [
    {
      id: 0,
      title: "Expérience",
      isActive: true,
    },
    {
      id: 1,
      title: "Compétences",
    },
    {
      id: 2,
      title: "Éducation",
    }
  ]
  private tabsEn = [
    {
      id: 0,
      title: "Experience",
      isActive: true,
    },
    {
      id: 1,
      title: "Skills",
    },
    {
      id: 2,
      title: "Education",
    }
  ];
  private experienceDataEn = [
    {
      date: "2023 - Present",
      position: "Frontend Developer",
      company: "Facebook",
      description: "Worked on building scalable web applications using React.js and Redux. Focused on performance optimization and user-friendly interfaces."
    },
    {
      date: "2021 - 2023",
      position: "Backend Developer",
      company: "Amazon",
      description: "Developed and maintained RESTful APIs with Node.js and Express. Ensured database performance and security using MongoDB."
    },
    {
      date: "2020 - 2021",
      position: "Fullstack Developer",
      company: "Freelancer",
      description: "Built and deployed full-stack applications for various clients using MERN stack. Integrated third-party APIs and payment gateways."
    }
  ];
  private experienceDataFr = [
    {
      date: "2023 - Présent",
      position: "Développeur Frontend",
      company: "Facebook",
      description: "Travaillé sur la création d'applications web évolutives utilisant React.js et Redux. Axé sur l'optimisation des performances et des interfaces conviviales."
    },
    {
      date: "2021 - 2023",
      position: "Développeur Backend",
      company: "Amazon",
      description: "Développé et maintenu des API RESTful avec Node.js et Express. Assuré la performance et la sécurité des bases de données avec MongoDB."
    },
    {
      date: "2020 - 2021",
      position: "Développeur Fullstack",
      company: "Freelance",
      description: "Création et déploiement d'applications full-stack pour divers clients en utilisant la pile MERN. Intégration d'API tierces et de passerelles de paiement."
    },
  ];
  private skillsDataEn = [
    {
      icon: "bx bxl-html5",
      name: "HTML 5"
    },
    {
      icon: "bx bxl-javascript",
      name: "JavaScript"
    },
    {
      icon: "bx bxl-nodejs",
      name: "Node.js"
    },
    {
      icon: "bx bxl-html5",
      name: "HTML 5"
    },
    {
      icon: "bx bxl-javascript",
      name: "JavaScript"
    }, {
      icon: "bx bxl-html5",
      name: "HTML 5"
    },
    {
      icon: "bx bxl-javascript",
      name: "JavaScript"
    }, {
      icon: "bx bxl-html5",
      name: "HTML 5"
    },
    {
      icon: "bx bxl-javascript",
      name: "JavaScript"
    },
  ];
  private skillsDataFr = [
    {
      icon: "bx bxl-html5",
      name: "HTML 5"
    },
    {
      icon: "bx bxl-javascript",
      name: "JavaScript"
    },
    {
      icon: "bx bxl-nodejs",
      name: "Node.js"
    }
  ];
  private educationDataEn = [
    {
      date: "2024",
      course: "Master in Computer Science",
      institution: "Harvard University",
      description: "Focused on advanced algorithms, software engineering, and machine learning."
    },
    {
      date: "2022",
      course: "Bachelor in Information Technology",
      institution: "Stanford University",
      description: "Specialized in web development, database management, and cloud computing."
    },
    {
      date: "2020",
      course: "Associate Degree in Software Engineering",
      institution: "MIT Online",
      description: "Learned the fundamentals of coding, algorithms, and data structures."
    }
  ];
  private educationDataFr = [
    {
      date: "2024",
      course: "Master en Informatique",
      institution: "Université de Harvard",
      description: "Axé sur les algorithmes avancés, l'ingénierie logicielle, et l'apprentissage automatique."
    },
    {
      date: "2022",
      course: "Licence en Technologie de l'Information",
      institution: "Université de Stanford",
      description: "Spécialisé dans le développement web, la gestion de bases de données, et l'informatique en nuage."
    },
    {
      date: "2020",
      course: "Diplôme d'Associé en Génie Logiciel",
      institution: "MIT en ligne",
      description: "Apprentissage des bases du codage, des algorithmes, et des structures de données."
    }
  ];

  // ---------- PORTFOLIO -------------------

  private portfolioTabsFr = [
    {
      id: 0,
      title: "Mes Travaux",
      isActive: true,
    },
    {
      id: 1,
      title: "Mes Services",
    },

  ]
  private portfolioTabsEn = [
    {
      id: 0,
      title: "My Works",
      isActive: true,
    },
    {
      id: 1,
      title: "My Services",
    }
  ];
  private projectsEn = [
    {
      title: "Responsive Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and experience. Built with a mobile-first approach for seamless viewing on all devices.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: "./images/projects/vinoticket.png",
      links: {
        preview: {
          url: "https://myportfolio.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/myusername/portfolio-website",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and secure payment integration. Built with Node.js, Express, and MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      image: "./images/projects/aiboostez.png",
      links: {
        preview: {
          url: "https://myecommerceplatform.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/myusername/ecommerce-platform",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
    {
      title: "Weather App",
      description: "A real-time weather application that fetches data from a public API and displays the current weather and a 5-day forecast for any city.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
      image: "./images/projects/vinoticket.png",
      links: {
        preview: {
          url: "https://myweatherapp.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/myusername/weather-app",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
    {
      title: "Task Management App",
      description: "A productivity tool to manage tasks, set reminders, and track progress. It includes user authentication and a REST API for storing tasks.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "./images/projects/aiboostez.png",
      links: {
        preview: {
          url: "https://mytaskapp.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/myusername/task-management-app",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
    {
      title: "Weather App",
      description: "A real-time weather application that fetches data from a public API and displays the current weather and a 5-day forecast for any city.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
      image: "./images/projects/vinoticket.png",
      links: {
        preview: {
          url: "https://myweatherapp.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/myusername/weather-app",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
  ]
  private projectsFr = [
    {
      title: "Weather App",
      description: "A real-time weather application that fetches data from a public API and displays the current weather and a 5-day forecast for any city.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
      image: "./images/projects/vinoticket.png",
      links: {
        preview: {
          url: "https://myweatherapp.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/myusername/weather-app",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
    {
      title: "Site Web Portfolio Réactif",
      description: "Un site web personnel de portfolio présentant mes projets, compétences et expérience. Construit avec une approche mobile-first pour une visualisation fluide sur tous les appareils.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: "./images/projects/aiboostez.png",
      links: {
        preview: {
          url: "https://myportfolio.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Aperçu"
        },
        github: {
          url: "https://github.com/myusername/portfolio-website",
          icon: "bx bxl-github",
          tooltip: "Dépôt GitHub"
        }
      }
    },
    {
      title: "Plateforme E-commerce",
      description: "Une plateforme e-commerce full-stack avec authentification utilisateur, gestion des produits et intégration de paiements sécurisés. Construite avec Node.js, Express et MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      image: "./images/projects/vinoticket.png",
      links: {
        preview: {
          url: "https://myecommerceplatform.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Aperçu"
        },
        github: {
          url: "https://github.com/myusername/ecommerce-platform",
          icon: "bx bxl-github",
          tooltip: "Dépôt GitHub"
        }
      }
    },
    {
      title: "Application Météo",
      description: "Une application météo en temps réel qui récupère des données depuis une API publique et affiche la météo actuelle ainsi que les prévisions sur 5 jours pour toute ville.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
      image: "./images/projects/aiboostez.png",
      links: {
        preview: {
          url: "https://myweatherapp.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Aperçu"
        },
        github: {
          url: "https://github.com/myusername/weather-app",
          icon: "bx bxl-github",
          tooltip: "Dépôt GitHub"
        }
      }
    },
    {
      title: "Application de Gestion des Tâches",
      description: "Un outil de productivité pour gérer les tâches, définir des rappels et suivre les progrès. Inclut une authentification utilisateur et une API REST pour le stockage des tâches.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "./images/projects/vinoticket.png",
      links: {
        preview: {
          url: "https://mytaskapp.com",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Aperçu"
        },
        github: {
          url: "https://github.com/myusername/task-management-app",
          icon: "bx bxl-github",
          tooltip: "Dépôt GitHub"
        }
      }
    }
  ]
  
  // Get the navList based on the selected language
  get navList() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.navListFr : this.navListEn;
  }

  get profileData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.profileDataFr : this.profileDataEn;
  }

  get aboutData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.aboutDataFr : this.aboutDataEn;
  }
  //------------------ RESUME DATA ----------------------
  get tabs() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.tabsFr : this.tabsEn;
  }
  get experienceData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.experienceDataFr : this.experienceDataEn;
  }
  get skillsData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.skillsDataFr : this.skillsDataEn;
  }
  get educationData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.educationDataFr : this.educationDataEn;
  }
  // ----------- END RESUME ----------------------------

  get portfolioTabs() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.portfolioTabsFr : this.portfolioTabsEn;
  }
  get projects() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.projectsFr : this.projectsEn;
  }
}
