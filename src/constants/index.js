import myfridge from "../assets/myfridge.png";
import nerdstation from "../assets/nerdstation.png";
import cotam from "../assets/cotam.png";
import portfolio from "../assets/portfolio.png";
export const PROJECTS = [
    {
        id: 1,
        name: "Personal Portfolio",
        description: "A simple portfolio website written with React and Tailwindcss so I can display my skills, projects, and my contact information",
        image: portfolio, 
        githubLink: "https://github.com/Leo-Zarni01/portfolio",
    },
    {
        id: 2,
        name: "MyFridge",
        description: "Food management application that scans receipts to offer healthy grocery shopping tips and sends expiration numbers",
        image: myfridge,
        githubLink: "https://github.com/edbert-fl/my_fridge",
    },
    {
        id: 3,
        name: "Nerd Station",
        description: "Nerd Station 🤓 is a web app that we thoughtfully designed to help university students overcome common hurdles that hinder their academic progress. It has a diverse range of features where each demonstrates a strategy to help students overcome the lack of motivation assosciated with studies.",
        image: nerdstation,
        githubLink: "https://github.com/MerryRosalie/gdsc-hackathon-2023",
    },
    {
        id: 4,
        name: "Capstone Project - Successful Outcomes",
        description: "A MERN stack (MongoDB, Express, React.js, Node.js) web application that maps course learning outcomes to Bloom’s Taxonomy, enabling educational institutions to analyze and improve program effectiveness, with a focus on data analytics, cognitive assessment, and accreditation support",
        image: cotam,
        // conditional rendering for this object because cannot show github link
    }

]