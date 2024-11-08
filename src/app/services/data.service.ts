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
    hello: "👋 Bienvenue, Je suis",
    name: "Josue Ouedraogo",
    profession: "Développeur Fullstack",
    description: "Ingénieur en informatique, passionné par la digitalisation, je mets mes compétences au service de l'innovation. Mon objectif ? Transformer les défis actuels en solutions numériques simples et performantes, adaptées aux besoins de chaque entreprise.",
    cv: {
      label: "Télécharger le CV",
      url: "./images/cv_josue_ouedraogo.pdf"
    },
    social_links: [
      {
        platform: "Github",
        icon: "bx bxl-github",
        url: "https://github.com/Panagnimba/"
      },
      {
        platform: "LinkedIn",
        icon: "bx bxl-linkedin",
        url: "https://www.linkedin.com/in/panagnimba-josue-ouedraogo/"
      }
    ]
  }
  private profileDataEn = {
    hello: "👋 Welcome, I am",
    name: "Joshua Ouedraogo",
    profession: "Fullstack Developer",
    description: "Computer engineer, passionate about digitalization, I leverage my skills to drive innovation. My goal? To transform current challenges into simple and efficient digital solutions, tailored to the unique needs of each business.",
    cv: {
      label: "Download CV",
      url: "./images/cv_josue_ouedraogo.pdf"
    },
    social_links: [
      {
        platform: "Github",
        icon: "bx bxl-github",
        url: "https://github.com/Panagnimba/"
      },
      {
        platform: "LinkedIn",
        icon: "bx bxl-linkedin",
        url: "https://www.linkedin.com/in/panagnimba-josue-ouedraogo/"
      }
    ]
  }

  // ------------------- ABOUT ME -------------------------------
  private aboutDataEn = {
    imgBox: {
      src: "./images/josue_ouedraogo.png",
      alt: ""
    }
    ,
    info: {
      title: "About me",
      profession: "Fullstack Developer",
      description: "Computer engineer, passionate about digitalization, I leverage my skills to drive innovation. My goal? To transform current challenges into simple and efficient digital solutions, tailored to the unique needs of each business. Throughout my career, I’ve had the opportunity to work on real-world projects, such as the VinoTicket ticketing platform, as well as Chrome extensions and mobile applications, which have helped me strengthen my expertise in both web and mobile development. My skills also include managing relational and non-relational databases (SQL, Oracle, MongoDB), as well as technologies such as Node.js, React.js, Angular, Java, Nuxt.js, React Native, and Docker...",
      btn: {
        text: "View more",
        url: "https://github.com/Panagnimba/"
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
      description: "Ingénieur en informatique, passionné par la digitalisation, je mets mes compétences au service de l'innovation. Mon objectif ? Transformer les défis actuels en solutions numériques simples et performantes, adaptées aux besoins de chaque entreprise. Au cours de mon parcours, j'ai eu l'opportunité de travailler sur des projets concrets, tels que la plateforme de billetterie VinoTicket, ainsi que des extensions Chrome et des applications mobiles, ce qui m'a permis de renforcer mon expertise en développement web et mobile. Mes compétences incluent également la gestion de bases de données relationnelles et non relationnelles (SQL, Oracle, MongoDB), ainsi que des technologies telles que Node.js, React.js, Angular,Java,Nuxt.js, React Native, Docker...",
      btn: {
        text: "En savoir plus",
        url: "https://github.com/Panagnimba/"
      }
    }
  }

  //----------- RESUME DATA ----------------------------------
  private tabsFr = [
    {
      id: 0,
      title: "Éducation",
      isActive: true,
    },
    {
      id: 1,
      title: "Compétences",
    },
    {
      id: 2,
      title: "Expérience",
    },
  ]
  private tabsEn = [
    {
      id: 0,
      title: "Education",
      isActive: true
    },
    {
      id: 1,
      title: "Skills",
    },
    {
      id: 2,
      title: "Experience",
    },
  ];

  private educationDataEn = [
    {
      "date": "2024",
      "course": "Computer Engineering",
      "institution": "National Higher School of Computer Science and Systems Analysis (ENSIAS)",
      "description": "Engineering program focused on the convergence of computer science and logistics technologies"
    },
    {
      "date": "2022",
      "course": "Professional Bachelor's Degree",
      "institution": "Higher School of Technology Essaouira (ESTE)",
      "description": "Professional Bachelor's Degree in Computer Systems and Software Engineering"
    },
    {
      "date": "2021",
      "course": "University Diploma of Technology",
      "institution": "Higher School of Technology Agadir (ESTA)",
      "description": "University Diploma of Technology in Computer Engineering"
    },
    {
      "date": "2019",
      "course": "Technological Baccalaureate",
      "institution": "Polytechnic Center for Vocational Training (CPFP)",
      "description": "Technological Baccalaureate in Electronics: Series F2"
    }
  ]
  private educationDataFr = [
    {
      date: "2024",
      course: "Ingénieur en Informatique",
      institution: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
      description: "Formation d'ingénieur axée sur la convergence de l'informatique et des technologies logistiques"
    },
    {
      date: "2022",
      course: "Licence Professionnelle",
      institution: "École Supérieure de Technologie Essaouira (ESTE)",
      description: "Licence Professionnelle en Ingénierie des Systèmes Informatiques et Logiciels"
    },
    {
      date: "2021",
      course: "Diplôme Universitaire de Technologie",
      institution: "École Supérieure de Technologie Agadir (ESTA)",
      description: "Diplôme Universitaire de Technologie en Génie Informatique"
    },
    {
      date: "2019",
      course: "Baccalauréat Technologique",
      institution: "Centre Polytechnique de Formation Professsionnelle (CPFP)",
      description: "Baccalauréat Technologique option Electronique: Série F2"
    }
  ];
  private skillsDataEn = [
    {
      icon: "bx bxl-html5",
      name: "HTML 5"
    },
    {
      icon: "bx bxl-css3",
      name: "CSS 3"
    },
    {
      icon: "bx bxl-javascript",
      name: "JavaScript"
    },
    {
      icon: "bx bxl-typescript",
      name: "TypeScript"
    },
    {
      icon: "bx bxl-react",
      name: "React"
    },
    {
      icon: "bx bxl-angular",
      name: "Angular"
    },
    {
      icon: "bx bxl-vuejs",
      name: "Vue.js"
    },
    {
      icon: "bx bxl-vuejs",
      name: "Nuxt.js"
    },
    {
      icon: "bx bxl-react",
      name: "React Native"
    },
    {
      icon: "bx bxl-nodejs",
      name: "Node.js"
    },
    {
      icon: "bx bxl-docker",
      name: "Docker"
    },
    {
      icon: "bx bxl-tailwind-css",
      name: "Tailwind CSS"
    },
    {
      icon: "bx bxl-git",
      name: "Git"
    },
    {
      icon: "bx bxl-github",
      name: "GitHub"
    },
    {
      icon: "bx bx-data",
      name: "SQL"
    },
    {
      icon: "bx bxs-data",
      name: "Oracle"
    },
    {
      icon: "bx bxl-mongodb",
      name: "MongoDB"
    },
    {
      icon: "bx bxl-c-plus-plus",
      name: "C"
    },
    {
      icon: "bx bxl-java",
      name: "Java"
    },
    {
      icon: "bx bxl-c-plus-plus",
      name: "C++"
    },
    {
      icon: "bx bxl-adobe",
      name: "Adobe XD"
    }
  ];
  private skillsDataFr = [
    {
      icon: "bx bxl-html5",
      name: "HTML 5"
    },
    {
      icon: "bx bxl-css3",
      name: "CSS 3"
    },
    {
      icon: "bx bxl-javascript",
      name: "JavaScript"
    },
    {
      icon: "bx bxl-typescript",
      name: "TypeScript"
    },
    {
      icon: "bx bxl-react",
      name: "React"
    },
    {
      icon: "bx bxl-angular",
      name: "Angular"
    },
    {
      icon: "bx bxl-vuejs",
      name: "Vue.js"
    },
    {
      icon: "bx bxl-vuejs",
      name: "Nuxt.js"
    },
    {
      icon: "bx bxl-react",
      name: "React Native"
    },
    {
      icon: "bx bxl-nodejs",
      name: "Node.js"
    },
    {
      icon: "bx bxl-docker",
      name: "Docker"
    },
    {
      icon: "bx bxl-tailwind-css",
      name: "Tailwind CSS"
    },
    {
      icon: "bx bxl-git",
      name: "Git"
    },
    {
      icon: "bx bxl-github",
      name: "GitHub"
    },
    {
      icon: "bx bx-data",
      name: "SQL"
    },
    {
      icon: "bx bxs-data",
      name: "Oracle"
    },
    {
      icon: "bx bxl-mongodb",
      name: "MongoDB"
    },
    {
      icon: "bx bxl-c-plus-plus",
      name: "C"
    },
    {
      icon: "bx bxl-java",
      name: "Java"
    },
    {
      icon: "bx bxl-c-plus-plus",
      name: "C++"
    },
    {
      icon: "bx bxl-adobe",
      name: "Adobe XD"
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

  // ---------------- Contact ------------------

  contactEn = {
    "title": "Let's work together",
    "fields": [
      {
        "label": "Full Name",
        "type": "text",
        "name": "fullName",
        "placeholder": "Full name",
        "required": true
      },
      {
        "label": "Email Address",
        "type": "email",
        "name": "email",
        "placeholder": "Email address",
        "required": true
      },
      {
        "label": "Phone Number",
        "type": "text",
        "name": "phoneNumber",
        "placeholder": "Phone number",
        "required": true
      },
      {
        "label": "Email Subject",
        "type": "text",
        "name": "emailSubject",
        "placeholder": "Email subject",
        "required": true
      }
    ],
    "submitButton": {
      "text": "Send message",
    }
  }

  contactFr = {
    "title": "Travaillons ensemble",
    "fields": [
      {
        "label": "Nom complet",
        "type": "text",
        "name": "fullName",
        "placeholder": "Nom complet",
        "required": true
      },
      {
        "label": "Adresse e-mail",
        "type": "email",
        "name": "email",
        "placeholder": "Adresse e-mail",
        "required": true
      },
      {
        "label": "Numéro de téléphone",
        "type": "text",
        "name": "phoneNumber",
        "placeholder": "Numéro de téléphone",
        "required": true
      },
      {
        "label": "Objet de l'e-mail",
        "type": "text",
        "name": "emailSubject",
        "placeholder": "Objet de l'e-mail",
        "required": true
      },
    ],
    "submitButton": {
      "text": "Envoyer le message",
      "class": "btn"
    }
  }

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

  //------------ Contact data ----------------------

  get contactInfo() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.contactFr : this.contactEn;
  }
}