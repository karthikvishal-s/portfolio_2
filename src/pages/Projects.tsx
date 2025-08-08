import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import kv from "../assets/kv.jpg";
import noire from "../assets/noire2.png";
import pensieve from "../assets/pen2.png";
import portfolio1 from "../assets/portfolio-1.png";
import ds from "../assets/ds.png"; // Assuming you have a data structures image
import sportshub from "../assets/sportshub.png";
import qr from "../assets/qr.png";
import auth from "../assets/auth.png"; // Assuming you have an Authenticator image
import trr from "../assets/trr2.png";
import sgpa from "../assets/sgpa.png"; // Assuming you have an SGPA calculator image
import united from "../assets/united.png";
import ssh from "../assets/ssh.png"; // Assuming you have an SSH-related image
import dh from "../assets/dh.png"; 

import movrec from "../assets/mov_rec.png"; // Assuming you have a movie recommender image
import car from "../assets/car.png"; // Assuming you have a car image
import port2 from "../assets/port2.png"; // Assuming you have a second portfolio image
import { useEffect,useState} from 'react';

const defaultPic = { src: kv };


const ProjectData = [
  {
    title: "Noire",
    description: "An E-commerce marketplace designed to empower small businesses and independant designers.",
    pic: { src: noire },
    stacks: ["NextJS","ReactJS","TailwindCSS", "NodeJS", "ExpressJS", "MongoDB","Stripe"],
    live:"https://buynoire.vercel.app/",
    code:"https://github.com/karthikvishal-s/Noire",
    time:2000
  },
  {
    title: "The Raven's Roost",
    pic: { src: trr },
    description: "A social media platform for GOT fans to connect, share, and discuss their favorite series.",
    stacks: ["NextJS", "ReactJS", "TailwindCSS","NextAuth", "NodeJS", "ExpressJS", "MongoDB","Vercel","Google OAuth" ],
    
    live:"https://varys.vercel.app/",
    code:"https://github.com/karthikvishal-s/The-Ravens-Roost",
    time:2000
  },
  {
  title: "Movie Recommender",  pic: { src: movrec },
  description: "A Movie recommendation system built using ML that suggests movies based on viewer preferences and ratings by using collaborative filtering",
  stacks: ["Streamlit", "Python", "Pandas","scikit-learn", "fuzzywuzzy", "MovieLens-100k-dataset"],
  live:"https://movie-recommendation-11.streamlit.app",
  code:"https://github.com/karthikvishal-s/Recommendation_System",
  time:2000
  },
  {
    title: "Pensieve",
    pic: { src: pensieve },
    description: "A Public Book Repository for Enthusiasts.Designed to be community-driven, this platform enables users to contribute, discover, and interact with curated book collections.",
    stacks: ["ReactJS", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"],
    live:"https://thepensieve.vercel.app/",
    code:"https://github.com/karthikvishal-s/Pensieve",
    time:2000
  },
  {
    title: "HTTP-SSH – in Progress",
    pic: { src: ssh },
    description: "This project aims to develop a remote shell system that allows users to execute operating system commands on a remote server machine using standard web technologies. Unlike traditional SSH, all communication for commands and their outputs will be facilitated over the HTTP protocol.",
    stacks: ["Go", "Rust", "Python","SHH","Telnet", "NextJS", "MongoDB","TailwindCSS","NodeJS"],
    live:"",
    code:"https://github.com/karthikvishal-s/http-ssh.rfc",
    time:2000
  },
  {
    title: "Authenticator ",
    pic: { src: auth },
    description: "This project is to kickstart secure Role-Based authentication and authorization for web applications. It provides a robust foundation for managing user roles and permissions, ensuring secure access control.",
    stacks: ["NextAuth","NextJS","ReactJS", "MongoDB","TailwindCSS","NodeJS"],
    live:"",
    code:"https://github.com/karthikvishal-s/NextAuth",
    time:2000
  },
  {
    title: "Pattern Slayer",
    pic: { src: ds },
    description:"An Interactive website designed specially for kids with Autism in Demon Slayer theme to recognize and lern visual patter with the assistance of audio direction.",
    stacks: ["ReactJS", "CSS","Html","Javascript","TailwindCSS","FramerMotion"],
    live:"https://shapesense.vercel.app/",
    code:"https://github.com/karthikvishal-s/PatternSlayer",
    time:2000

  },
  {
    title: "DocHelp - in Progress",
    pic: { src: dh },
    description: "(Still in Progress)   Designed to help doctors efficiently manage patient data in an orthopedic clinic.",
    stacks: ["VueJs", "TailwindCSS", "NodeJS", "ExpressJS", "PostgreSQL"],
    live:"/",
    code:"https://github.com/karthikvishal-s/DocHelp",
    time:2000

  },
  {
    title: "UnitED",
    pic: { src: united },
    description: "Created for the Mega Hackathon 2025 under the theme of SDE Goals, this app focuses on Goal 4 (Education), providing a safe space for students dealing with anxiety and introversion.",
    stacks:["ReactJS", "TailwindCSS","Firebase", "FireStore DB"],
    live:"/",
    code:"https://github.com/karthikvishal-s/UnitEd",
    time:2000
  },

  {
    title: "SGPA Calculator",
    pic: { src: sgpa },
    description:"A simple SGPA calculator that allows students to calculate their Semester Grade Point Average (SGPA) based on their grades and credits.",
    stacks: ["ReactJS", "CSS","Html","Javascript"],
    live:"https://sgpacalculator1.vercel.app/",
    code:"https://github.com/karthikvishal-s/SGPA_calculator",
    time:2000

  },
  {
    title: "Obstacle Avoidance Robot",
    pic: { src: car },
    description: "Built using Metallic C program, this car identifies and avoids obstacles using Ultrasonic sensor.Along with voice command features",
    stacks: ["Embedded C", "Arduino", "HC-SR04", "Voice Command"],
    live:"/",
    code:"https://github.com/karthikvishal-s/Obstacle-Avoiding-Bluetooth-Voice-Controlled-Car",
    time:2000
  },

  {
    title: "QR Generator",
    pic: { src: qr },
    description: "Built using Node and Express, this QR code generator allows users to create custom QR codes for various purposes.",
    stacks: ["NodeJS", "ExpressJS", "TailwindCSS", "MongoDB"],
    live:"/",
    code:"https://github.com/karthikvishal-s/QR-generator",
    time:2000
  },
  
  {
    title:"SportsHub",
    pic: { src: sportshub },
    description:"A FrontEnd Application for Sports Enthusiasts, providing a platform to explore and engage with various sports-related content.",
    stacks: ["HTML", "CSS", "Javascript"],
    live:"/",
    code:"https://github.com/karthikvishal-s/SportsHub",
    time:2000
  },
  {
    title: "Portfolio - 1",
    pic: { src: portfolio1 },
    description: "Personal portfolio website, showcasing various animations and transformations. Enhanced with multiple React extensions for better interactivity.",
    stacks: ["ReactJS", "TailwindCSS", "Framer Motion", "React Router", "lucide-react"],
    live:"https://karthikvishal2.vercel.app/",
    code:"https://github.com/karthikvishal-s/Portfolio",
    time:2000

  },
  
  {
    title: "Portfolio - 2",
    pic: { src: port2 },
    description: "Personal portfolio website, showcasing various animations and transformations. Enhanced with multiple React extensions for better interactivity.",
    stacks: ["ReactJS", "TailwindCSS", "Framer Motion", "React Router", "lucide-react","MaterialUI"],
    live:"https://karthikvishal.vercel.app/",
    code:"https://github.com/karthikvishal-s/portfolio_2",
    time:2000

  }
  
];

const Projects = () => {

  const [loaded,setloaded] = useState(false);

  useEffect(() => {
    setloaded(true);},[])




  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 ' : 'opacity-0 '}`}>
      <Navbar sl={2} />
      </div>
      <p className={`text-center font-raleway text-4xl mt-10 mb-10 transition-all duration-1000 bg-gradient-to-r from-[#8F00F0] to-red-500 text-transparent bg-clip-text transform transition duration-500  hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0' }`}>Projects</p>
      <div className="flex-grow p-8 flex justify-center items-start">
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-full max-w-6xl ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}>
          {ProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              pic={project.pic ?? defaultPic} // Safe fallback
              stacks={project.stacks || []}
              live={ project.live || "#"} // Default to "#" if live link is not provided
              code={project.code || "#"}  // Default to "#" if code link is not provided
              // Default to empty array if stacks are not provided
          
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
