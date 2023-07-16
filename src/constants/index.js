import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  jobit,
  tripguide,
  umbb,
  gomycode,
  gdg,
  free,
  devteam,
  techdz,
  gamez,
  lv,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full stack Web Developer",
    icon: web,
  },
  {
    title: "Front end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "cyber security enthusiast",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Computer science student",
    company_name: "Université M'Hamed Bougara Boumerdès",
    icon: umbb,
    iconBg: "#383E56",
    date: "2021 - 2024",
    points: [
      "As a computer science student, I have learned the fundamental concepts of programming, data structures, and algorithms. These skills have allowed me to develop web applications and gain a solid understanding of web development. In the future, I will continue to learn advanced topics such as machine learning, computer graphics, and network security, which will further enhance my knowledge and abilities in the field of computer science and web development.",
    ],
  },
  {
    title: "GoMyCode Certification",
    company_name: "gomycode",
    icon: gomycode,
    iconBg: "#E6DEDD",
    date: "mars 2022 - nov 2022",
    points: [
      "I've earned the full stack (MERN) gomycode certification in these bootcampe I started my web dev journey and deployed my first web application.",
      "main front-end skills gained : html,css,js,react,bootstrap,   gsap,redux",
      "main back-end skills gained : nodeJS , express, sql and Nosql , REST api, mongoDB",
    ],
  },
  {
    title: "Web Developer",
    company_name: "GDGC",
    icon: gdg,
    iconBg: "#383E56",
    date: "2022 - Today",
    points: [
      "I am fortunate to have had the opportunity to join the Google Developers Student Club, where I have gained valuable experience working on a variety of projects with other talented individuals. Through my involvement with the club, I have sharpened my skills in web development, gained experience working with modern technologies, and learned how to work effectively as part of a team. In addition, I have recently been honored to serve as a mentor in a web development bootcamp, helping others to learn and develop their skills.",
    ],
  },
  {
    title: "Freelancer ",
    company_name: "upwork,network",
    icon: free,
    iconBg: "#E6DEDD",
    date: "nov 2022 - Present",
    points: [
      "As a freelance web developer, I have had the opportunity to work on a variety of projects that have allowed me to showcase my skills and creativity. I am proud to have completed over 10 successful projects, including a marketplace, a tourism website, and an e-commerce tech shop. Through these projects, I have gained experience in designing and developing websites that are not only visually appealing but also highly functional and user-friendly. My ability to work closely with clients and understand their needs has been a key factor in the success of these projects.",
    ],
  },
  {
    title: "Full stack dev ",
    company_name: "SARL DEVTEAM",
    icon: devteam,
    iconBg: "#E6DEDD",
    date: "fev 2023 - Present",
    points: [
      "ERP Conception And creation",
      "MERN stack devlopment and team work",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tech dz",
    description:
      "Web-based platform that allows users to buy different tech services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: techdz,
    source_code_link: "https://gamz-dz.com",
  },
  {
    name: "gamz",
    description:
      "Web application marcketplace that allow users to post and search different products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: gamez,
    source_code_link: "https://gamz-dz.com",
  },
  {
    name: "live the adventure algeria",
    description:
      "A touristique platform that allows users to book hikings and events to popular destinations.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "heroku",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lv,
    source_code_link: "https://gamz-dz.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
