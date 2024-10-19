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
   
}
