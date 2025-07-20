import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import { FaGithub, FaLinkedin, FaEnvelope, FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import karthik from "../assets/kv.jpg"; // Make sure this path and extension are correct

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loaded,setloaded] = useState(false);


  useEffect(()=>{
    setloaded(true);

  },[])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-black text-white relative overflow-hidden">
      {/* Mouse-following purple glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-0"
        animate={{
          background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(103, 37, 133, 0.26), transparent 
          100%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      {/* Navbar */}
      <div className={`transition-all duration-3000 ${loaded ? 'opacity-100 ' : 'opacity-0 '}`}>
      <Navbar sl={0} />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10 px-4 mt-40 md:mt-60">
        {/* Profile Image */}
        <div >
          <img
            src={karthik}
            width={190}
            className={`rounded-full object-cover relative -top-15 transition-all duration-4000 ${loaded? 'opacity-100 ' : 'opacity-0 '}`}
            alt="Karthik Vishal"
          />
        </div>

        {/* Title & Tagline */}
        <div className="text-center">
          <h1 className={`text-4xl font-raleway bg-gradient-to-r from-[#8F00F0] to-red-500 bg-clip-text text-transparent transition-all duration-3000  ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[70%]'}`}>
            Karthik Vishal Subramaniyan
          </h1>
          <p className={`text-white mt-6 font-raleway text-sm transition-all duration-4000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[70%]'} `}>
            Forging new ideas, contributing to the society
          </p>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-3 mt-20 sm:gap-4">
            {/* GitHub */}
            <motion.a
              href="https://github.com/karthikvishal-s"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5, rotate: 10 }}
              className={`text-white hover:text-[#8F00F0] transition-all duration-3000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[70%]'}`}
            >
              <FaGithub className="text-3xl" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/karthik-vishal-s-851921287"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5, rotate: 10 }}
              className={`text-white hover:text-[#8F00F0] transition-all duration-3000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[70%]'}`}
            >
              <FaLinkedin className="text-3xl" />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:karthikvishal1506@gmail.com"
              whileHover={{ scale: 1.5, rotate: -10 }}
              className={`text-white hover:text-[#8F00F0] transition-all duration-3000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[70%]'}`}
            >
              <FaEnvelope className="text-3xl" />
            </motion.a>

            {/* Medium */}
            <motion.a
              href="https://medium.com/@karthikvishal1506"
              whileHover={{ scale: 1.5, rotate: -10 }}
              className={`text-white hover:text-[#8F00F0] transition-all duration-3000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[70%]'}`}
            >
              <FaMediumM className="text-3xl" />
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="https://x.com/KarthikVis66697"
              whileHover={{ scale: 1.5, rotate: -10 }}
              className={`text-white hover:text-[#8F00F0] transition-all duration-3000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[70%]'}`}
            >
              <FaXTwitter className="text-3xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
