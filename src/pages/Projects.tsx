import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import kv from "../assets/kv.jpg";

const defaultPic = { src: kv };

const ProjectData = [
  {
    title: "Project 1",
    description: "This is the first project.",
    pic: { src: kv }
  },
  {
    title: "Project 2",
    description: "This is the second project."
  },
  {
    title: "Project 3",
    description: "This is the third project."
  },
  {
    title: "Project 4",
    description: "This is the fourth project."
  },
  {
    title: "Project 5",
    description: "This is the fifth project."
  },
  {
    title: "Project 6",
    description: "This is the sixth project."
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar sl={2} />
      <div className="flex-grow p-8 flex justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full max-w-2xl">
          {ProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              pic={project.pic ?? defaultPic} // Safe fallback
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
