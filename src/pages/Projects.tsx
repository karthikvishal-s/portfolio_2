import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import kv from "../assets/kv.jpg";

const defaultPic = { src: kv };

const ProjectData = [
  {
    title: "Noire",
    description: "An E-commerce marketplace designed to empower small businesses and independant designers.",
    pic: { src: kv },
    stacks: ["NextJS","ReactJS","TailwindCSS", "NodeJS", "ExpressJS", "MongoDB","Stripe"]
  },
  {
    title: "The Raven's Roost",
    description: "A social media platform for GOT fans to connect, share, and discuss their favorite series.",
    stacks: ["NextJS", "ReactJS", "TailwindCSS","NextAuth", "NodeJS", "ExpressJS", "MongoDB","Vercel","Google OAuth" ],
  },
  {
    title: "Pensieve",
    description: "A Public Book Repository for Enthusiasts.Designed to be community-driven, this platform enables users to contribute, discover, and interact with curated book collections.",
    stacks: ["ReactJS", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"]
  },
  {
    title: "DocHelp - in Progress",
    description: "(Still in Progress)   Designed to help doctors efficiently manage patient data in an orthopedic clinic.",
    stacks: ["VueJs", "TailwindCSS", "NodeJS", "ExpressJS", "PostgreSQL"]

  },
  {
    title: "UnitED",
    description: "Created for the Mega Hackathon 2025 under the theme of SDE Goals, this app focuses on Goal 4 (Education), providing a safe space for students dealing with anxiety and introversion.",
    stacks:["ReactJS", "TailwindCSS","Firebase", "FireStore DB"]
  },
  {
    title: "QR Generator",
    description: "Built using Node and Express, this QR code generator allows users to create custom QR codes for various purposes.",
    stacks: ["NodeJS", "ExpressJS", "TailwindCSS", "MongoDB"]
  },
  
  {
    title:"SportsHub",
    description:"A FrontEnd Application for Sports Enthusiasts, providing a platform to explore and engage with various sports-related content.",
    stacks: ["HTML", "CSS", "Javascript"]
  },
  {
    title: "Portfolio - 1",
    description: "Personal portfolio website, showcasing various animations and transformations. Enhanced with multiple React extensions for better interactivity.",
    stacks: ["ReactJS", "TailwindCSS", "Framer Motion", "React Router", "lucide-react"]

  },
  
  {
    title: "Portfolio - 2",
    description: "Personal portfolio website, showcasing various animations and transformations. Enhanced with multiple React extensions for better interactivity.",
    stacks: ["ReactJS", "TailwindCSS", "Framer Motion", "React Router", "lucide-react","MaterialUI"]

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
              stacks={project.stacks || []} // Default to empty array if stacks are not provided
          
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
