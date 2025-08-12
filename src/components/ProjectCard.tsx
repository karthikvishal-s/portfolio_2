import { Link } from "react-router-dom";
import { Github, Globe, ChevronRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  pic: { src: string };
  stacks: string[];
  live: string;
  code: string;
};

const ProjectCard = ({ title, description, pic, stacks, live, code }: ProjectCardProps) => {
  return (
    <div className="bg-black group border border-gray-700 rounded-4xl p-4 mb-4 w-full max-w-4xl transition-transform duration-800 hover:scale-105 hover:bg-[#222224]">
      <h2 className="text-2xl font-oran text-white text-center">{title}</h2>

      {/* Image zoom effect */}
      <div className="overflow-hidden rounded-full mt-2">
        <img
          src={pic.src}
          alt="Project Thumbnail"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Tech stacks */}
      <div className="flex justify-center items-center flex-wrap mt-4">
        {stacks.map((stack, index) => (
          <span
            key={index}
            className="inline-block bg-[#400e69] text-white text-[9px] font-raleway px-2 py-1 rounded mr-2 mt-2"
          >
            {stack}
          </span>
        ))}
      </div>

      <p className="text-white mt-4 text-center font-raleway text-xs">{description}</p>

      {/* Live link */}
      <div className="mt-4 space-y-3">
        <div className="flex justify-center">
          <Link to={live} className="hover:scale-110 transition delay-50 duration-400 hover:text-blue-500">
            <button className="flex px-3 py-2 rounded-full">
              <Globe className="w-5 h-5 text-blue-500" />
              <p className="ml-2">Live</p>
              <ChevronRight className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Code link */}
        <div className="flex justify-center">
          <Link to={code} className="hover:scale-110 transition delay-50 duration-400 hover:text-red-500">
            <button className="flex px-3 py-2 rounded-full">
              <Github className="w-5 h-5 text-red-500" />
              <p className="ml-2">Code</p>
              <ChevronRight className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
