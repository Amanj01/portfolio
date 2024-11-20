import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  plenum,
  dashboard,
  ecommerce,
  typing,
  threejs,
  mui,
  peshnyar,
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
    title: "Web Developer",
    icon: web,
  },
 
  {
    title: "Frontend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Plenum for Ceramic",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Developing a dynamic and visually appealing front-end application using Next.jswith smooth animations for text and gallery appearances as part of my internship at (Gigant Technology).",
      "Implementing modern scrolling effects and creating an interactive image slider with a focus on user engagement.",
      "Collaborating with designers and other developers to deliver a sleek, high-performance, and user-friendly website.",
      "Designing and building features to view project collections and detailed single project pages seamlessly.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Real Estate Erbil",
    icon: tesla,
    iconBg: "#E6DEDD",

    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Tasty Bites App",
    icon: shopify,
    iconBg: "#383E56", 
    points: [
      "Developing and maintaining a modern, responsive food ordering application using React.js and related technologies.",
      "Creating key features such as viewing the menu, adding items to a cart, user registration, and secure login functionality.",
      "Collaborating with cross-functional teams to ensure a sleek, user-friendly design and intuitive user experience.",
      "Implementing advanced features like item quantity adjustment, search and filter options, and seamless integration with a delivery service.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "E-commerce Website",
    icon: meta,
    iconBg: "#E6DEDD",
 
    points: [
      "Developing a modern e-commerce platform with a Next.js and TypeScript front-end, fetching dynamic data from a CMS-based back-end.",
      "Implementing advanced product filtering, search functionality, and sorting by availability, quantity, and price.",
      "Collaborating with back-end developers to integrate CMS features for streamlined content management.",
      "Continuously optimizing performance to provide fast loading times and smooth navigation.",
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
    name: "Plenum",
    description:
      "Web-based platform designed to showcase ceramic art and projects as an internship in gigant technology, featuring dynamic galleries, smooth animations, and interactive image sliders. It allows users to explore collections, view individual projects in detail, and experience a modern, responsive design that highlights the artistry and craftsmanship of ceramics.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: plenum,
    source_code_link: "https://github.com/Amanj01/Plenum2",
  },
  {
    name: "Dashboard",
    description:
      "A modern web platform built with Next.js, featuring secure authentication, user management, role-based access control, and responsive design. Supports adding, updating, and soft-deleting users, products, and categories, with dynamic product galleries linked by product ID for enhanced content management.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Amanj01/Dashboard",
  },
  {
    name: "E-commerce",
    description:
      "Developing a responsive e-commerce website using Next.js and TypeScript, integrated with a CMS for dynamic data management. Features include advanced product filtering, search, and sorting by availability, quantity. Collaborating with back-end developers to optimize CMS integration, ensuring fast performance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Amanj01/ecommerce-web",
  },
  {
    name: "Typing game",
    description:
      "Building a multilingual typing platform with support for English, Arabic, and Kurdish. Features multiple game modes like Word Mode for individual words and Sentence Mode for full sentences, with time options for 30 or 60 seconds. mistake counter, accuracy percentage, and detailed letter analysis. Designed with light and dark themes for seamless switching and a user-friendly experience.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: typing,
    source_code_link: "https://github.com/Amanj01/Typing-game",
  },
  {
    name: "MUI dashboard",
    description:
      "Developing a high-performance admin panel using Material UI (MUI) and Vite, designed for efficient user management, report scheduling, and data visualization. Features include adding, editing, and deleting users, automated report scheduling, and interactive chart visualizations powered by Nivo. Built with React and optimized for responsiveness and seamless navigation using React Router. Focused on delivering a fast.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
    ],
    image: mui,
    source_code_link: "https://github.com/Amanj01/admin-panel_MUI",
  },
  {
    name: "Peshnyar",
    description:
      "Developing a responsive platform to deliver personalized recommendations using React.js and Tailwind CSS for the front-end. Building scalable server-side applications with Node.js and Express.js, while managing robust data storage with MongoDB. Combining technology and creativity to create an engaging user experience, ensuring accurate and enjoyable recommendations.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "gnk-text-gradient",
      },
      {
        name: "mongodb",
        color: "gnk-text-gradient",
      },
    ],
    image: peshnyar,
    source_code_link: "https://github.com/Amanj01/Peshnyar-",
  },
];

export { services, technologies, experiences, testimonials, projects };
