import { Link } from "react-router-dom";
import {Github,Globe,ChevronRight} from'lucide-react';



type ProjectCardProps = {
    title: string;
    description: string;
    pic:{src:string};
    stacks: string[];
  };
  
  const ProjectCard = ({ title, description,pic,stacks }: ProjectCardProps) => {
    return (
      <div className="bg-black hover:scale-110 border border-gray-700 rounded-4xl p-4  mb-4 w-full max-w-xl transition delay-50 duration-400 hover:bg-[#222224]">
        <h2 className="text-xl font-semibold text-white text-center">{title}</h2>
        <img src={pic.src} alt="Project Thumbnail" className="w-full h-48 object-cover rounded-full mt-2" />

        <div>
          <div className="flex text-center justify-center items-center flex-wrap mt-4">
          
            {stacks.map((stack,index)=>
            <div>
              <span key={index} className="inline-block bg-[#400e69] text-center text-white text-[9px] font-raleway px-2 py-1 rounded mr-2 mt-2">{stack}</span>
            </div>
            )}
          </div>
        </div>

        <p className="text-white mt-4 text-center font-raleway text-xs">{description}</p>
        <div>
        <div className="flex text-center justify-center items-center mt-4 space-x-4">
            <Link to={"http://google.com"} className="hover:scale-110 transition delay-50 duration-400 hover:text-blue-500"><button className="flex px-3 py-2 rounded-full mt2 ">
                
            <Globe className="w-5 h-5 relative -bottom-0 text-blue-500" />  <p className="ml-2 relative -top-0">Live</p>  <ChevronRight className="w-6 h-6 relative"/> </button>
                
            </Link>
           
            </div>
            <div className="flex text-center justify-center items-center space-x-4">
            <Link to={"http://google.com"} className="hover:scale-110 transition delay-50 duration-400 hover:text-red-500"><button className="flex px-3 py-2 rounded-full  ">
                
            <Github className="w-5 h-5 relative -bottom-0 text-red-500" />  <p className="ml-2 relative -top-0">Code</p> <ChevronRight className="w-6 h-6 relative"/></button>
                
            </Link>
           
            </div>
        </div>
        
        
      </div>
    );
  };
  
  export default ProjectCard;
  