import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  ecommerce,
  jobit,
  tripguide,
  threejs,
  cryptoapp,
  dinogame,
  calc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },

  {
    title: "Creative Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "E-commerce Site",
    description:
      "Web-based platform that allows users to sign in, search and shop for the latest and greatest clothes along with your favorite hats and shoes to match.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/BryvnZv/E-commerce-project",
  },
  {
    name: "Crypto App",
    description:
      "Web application that enables users to search for a wide variety of cryptos along with up to date statistics and  crypto news to help with your investments !",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "ant-design",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoapp,
    source_code_link: "https://github.com/BryvnZv/crypto-app",
  },
  {
    name: "Dino game",
    description:
      "Re-created this iconic chrome brower dino game that is also compadible with your smartphone device to play anywhere on the go ! ",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dinogame,
    source_code_link: "https://github.com/BryvnZv/dino-game",
  },
  {
    name: "A calculator",
    description:
      "In case your phone's calculator for some reason stops running here we have beautiful illustration of a simple, clean fully fuctional web app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: calc,
    source_code_link: "https://github.com/BryvnZv/calculator-app",
  },
];

export { services, technologies, projects };
