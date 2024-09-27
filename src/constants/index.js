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

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of New South Wales (UNSW), Australia",
    duration: "September 2022 - September 2024",
    description:
      "I am a skilled software engineer proficient in fundamental concepts and practices, including object-oriented design and algorithmic problem-solving. I have experience in multiple programming paradigms, with a focus on Rust for systems programming. I am skilled in front-end web development, database systems, concurrent programming, and software verification. I possess comprehensive knowledge of computer systems, human-computer interaction, and project management. I am aware of ethical considerations and professional standards in IT, with experience in collaborative development and agile methodologies. Additionally, I am capable of designing user-centered interfaces and conducting usability studies to enhance user experience.",
  },
  {
    degree: "Bachelor of Science in Information & Technology Management and Computer Science",
    institution: "University of Auckland, New Zealand",
    duration: "July 2021 - June 2022 (Transferred to UNSW)",
    description: "I have a solid foundation in computer science, with skills in programming, system architecture, and digital systems design. I developed a strong understanding of coding and system infrastructure through courses focused on programming fundamentals and systems. My additional coursework in business software and digital systems management provided practical experience with tools and systems relevant to business operations. These combined skills demonstrate my ability to work effectively in both software development and system design, highlighting a versatile technical skill set."
  },
];