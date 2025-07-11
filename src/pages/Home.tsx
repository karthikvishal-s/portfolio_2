import Navbar from "../components/Navbar";
import jon from "../assets/jon_snow.jpg"; // Assuming you have an image named jon_snow.jpg in the assets folder
import { FaGithub, FaLinkedin, FaEnvelope,FaMediumM  } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar sl={0} />
      <div className="flex-grow flex flex-col justify-center items-center ">
        
       <div>
       <img src={jon} width={300} className="rounded-full object-cover relative -top-15"/>
       </div>

       <div>
        <h1 className="text-4xl text-[#8F00F0] mt-10 text-center font-raleway">Karthik Vishal Subramaniyan</h1>
        <p className="text-white mt-6 font-aboreto text-xs text-center">Forging new ideas,contributing to the society</p>

        <div>
        <div className="flex justify-center items-center gap-3 mt-20 sm:gap-4">
          {/* GitHub */}
          <div className={` hover:-translate-y-1  hover:scale-120 text-xl text-center transition-all duration-[1700ms] ease-out`}>
            <motion.a
              href="https://github.com/karthikvishal-s"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5, rotate: 10 }}
              className="text-white hover:text-[#8F00F0]"
            >
              <FaGithub className="text-3xl" />
            </motion.a>
          </div>

          {/* LinkedIn */}
          <div className={`font-NewElegance hover:-translate-y-1  hover:scale-120 text-2xl text-center transition-all  duration-[1700ms] ease-out`}>
            <motion.a
              href="https://linkedin.com/in/karthik-vishal-s-851921287"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5, rotate: 10 }}
              className="text-white hover:text-[#8F00F0]">
            
            
              <FaLinkedin className="text-3xl" />
            </motion.a>
          </div>

          {/* Email */}
          <div className={`font-NewElegance hover:-translate-y-1 hover:scale-120 text-2xl text-center transition-all  duration-[1700ms] ease-out`}>
            <motion.a
              href="mailto:karthikvishal1506@gmail.com"
              whileHover={{ scale: 1.5, rotate: -10 }}
              className="text-white hover:text-[#8F00F0]"
            
            >
              <FaEnvelope className="text-3xl" />
            </motion.a>
          </div>

          {/* EmailEmail */}
          <div className={`font-NewElegance hover:-translate-y-1 hover:scale-120 text-2xl text-center transition-all  duration-[1700ms] ease-out`}>
            <motion.a
              href="mailto:karthikvishal1506@gmail.com"
              whileHover={{ scale: 1.5, rotate: -10 }}
              className="text-white hover:text-[#8F00F0]"
            >
              <FaMediumM className="text-3xl" />
            </motion.a>
          </div>

           {/* EmailEmail */}
           <div className={`font-NewElegance hover:-translate-y-1 hover:scale-120 text-2xl text-center transition-all  duration-[1700ms] ease-out`}>
            <motion.a
              href="mailto:karthikvishal1506@gmail.com"
              whileHover={{ scale: 1.5, rotate: -10 }}
              className="text-white hover:text-[#8F00F0]"
            >
              <FaXTwitter className="text-3xl" />
            </motion.a>
          </div>


        </div>
       </div>
       </div>

      </div>
    </div>
  );
};

export default Home;
