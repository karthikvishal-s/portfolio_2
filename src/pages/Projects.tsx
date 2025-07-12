import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import kv from "../assets/kv.jpg";
import noire from "../assets/noire2.png";
import pensieve from "../assets/pen2.png";
import portfolio1 from "../assets/portfolio-1.png";
import sportshub from "../assets/sportshub.png";
import qr from "../assets/qr.png";
import trr from "../assets/trr2.png";
import united from "../assets/united.png";
import dh from "../assets/dh.png"; 
import port2 from "../assets/port2.png"; // Assuming you have a second portfolio image

const defaultPic = { src: kv };

const ProjectData = [
  {
    title: "Noire",
    description: "An E-commerce marketplace designed to empower small businesses and independant designers.",
    pic: { src: noire },
    stacks: ["NextJS","ReactJS","TailwindCSS", "NodeJS", "ExpressJS", "MongoDB","Stripe"],
    live:"https://buynoire.vercel.app/",
    code:"https://github.com/karthikvishal-s/Noire"
  },
  {
    title: "The Raven's Roost",
    pic: { src: trr },
    description: "A social media platform for GOT fans to connect, share, and discuss their favorite series.",
    stacks: ["NextJS", "ReactJS", "TailwindCSS","NextAuth", "NodeJS", "ExpressJS", "MongoDB","Vercel","Google OAuth" ],
    
    live:"https://varys.vercel.app/",
    code:"https://github.com/karthikvishal-s/The-Ravens-Roost"
  },
  {
    title: "Pensieve",
    pic: { src: pensieve },
    description: "A Public Book Repository for Enthusiasts.Designed to be community-driven, this platform enables users to contribute, discover, and interact with curated book collections.",
    stacks: ["ReactJS", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"],
    live:"https://thepensieve.vercel.app/",
    code:"https://github.com/karthikvishal-s/Pensieve"
  },
  {
    title: "DocHelp - in Progress",
    pic: { src: dh },
    description: "(Still in Progress)   Designed to help doctors efficiently manage patient data in an orthopedic clinic.",
    stacks: ["VueJs", "TailwindCSS", "NodeJS", "ExpressJS", "PostgreSQL"],
    live:"https://buynoire.vercel.app/",
    code:"https://github.com/karthikvishal-s/DocHelp"

  },
  {
    title: "UnitED",
    pic: { src: united },
    description: "Created for the Mega Hackathon 2025 under the theme of SDE Goals, this app focuses on Goal 4 (Education), providing a safe space for students dealing with anxiety and introversion.",
    stacks:["ReactJS", "TailwindCSS","Firebase", "FireStore DB"],
    live:"https://buynoire.vercel.app/",
    code:"https://github.com/karthikvishal-s/UnitEd"
  },
  {
    title: "QR Generator",
    pic: { src: qr },
    description: "Built using Node and Express, this QR code generator allows users to create custom QR codes for various purposes.",
    stacks: ["NodeJS", "ExpressJS", "TailwindCSS", "MongoDB"],
    live:"https://buynoire.vercel.app/",
    code:"https://github.com/karthikvishal-s/QR-generator"
  },
  
  {
    title:"SportsHub",
    pic: { src: sportshub },
    description:"A FrontEnd Application for Sports Enthusiasts, providing a platform to explore and engage with various sports-related content.",
    stacks: ["HTML", "CSS", "Javascript"],
    live:"https://buynoire.vercel.app/",
    code:"https://github.com/karthikvishal-s/SportsHub"
  },
  {
    title: "Portfolio - 1",
    pic: { src: portfolio1 },
    description: "Personal portfolio website, showcasing various animations and transformations. Enhanced with multiple React extensions for better interactivity.",
    stacks: ["ReactJS", "TailwindCSS", "Framer Motion", "React Router", "lucide-react"],
    live:"https://karthikvishal-s.vercel.app/",
    code:"https://github.com/karthikvishal-s/Portfolio"

  },
  
  {
    title: "Portfolio - 2",
    pic: { src: port2 },
    description: "Personal portfolio website, showcasing various animations and transformations. Enhanced with multiple React extensions for better interactivity.",
    stacks: ["ReactJS", "TailwindCSS", "Framer Motion", "React Router", "lucide-react","MaterialUI"],
    live:"https://buynoire.vercel.app/",
    code:"https://github.com/karthikvishal-s/Noire"

  }
  
];

const Projects = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar sl={2} />
      <p className='text-center font-raleway text-4xl mt-10 mb-10'>Projects</p>
      <div className="flex-grow p-8 flex justify-center items-start">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-full max-w-6xl">
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
