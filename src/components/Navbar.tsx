import { Link } from "react-router-dom";


const Navbar = ({ sl }:{sl:number }) => {
  return (
    <div className="w-full flex justify-center items-center h-20  sm:h-24 ">
      <div className=" flex items-center md:space-x-6 space-x-3 px-6 py-3 rounded-full md:border border-gray-800 bg-black shadow-md font-raleway font-bold ">
      <Link to="/">
          <p className={` transition-all duration-300 hover:scale-110 hover:text-[#FF03F0] ${sl==0?'text-[#EF00FF]':'text-[#8F00FF]'}`} > Home </p>
        </Link>
        <Link to="/about">
          <p className={` transition-all duration-300 hover:scale-110 hover:text-[#FF03F0] ${sl==1?'text-[#EF00FF]':'text-[#8F00FF]'}`} >About</p>
        </Link>
        <Link to="/projects">
          <p className={` transition-all duration-300 hover:scale-110 hover:text-[#FF03F0] ${sl==2?'text-[#EF00FF]':'text-[#8F00FF]'}`}>Projects</p>
        </Link>
        <Link to="/skills">
          <p className={` transition-all duration-300 hover:scale-110 hover:text-[#FF03F0] ${sl==3?'text-[#EF00FF]':'text-[#8F00FF]'}`}>Skills</p>
        </Link>
        <Link to="/interests">
          <p className={` transition-all duration-300 hover:scale-110 hover:text-[#FF03F0] ${sl==4?'text-[#EF00FF]':'text-[#8F00FF]'}`}>Resume</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
