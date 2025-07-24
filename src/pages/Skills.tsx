import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import StackIcon from 'tech-stack-icons';
import { motion } from 'framer-motion'; // For animations
import { Tilt } from 'react-tilt'; // For a subtle 3D tilt effect

// --- Package Installation Guide ---
// If you don't have these already, install them:
// npm install framer-motion react-tilt
// or
// yarn add framer-motion react-tilt
// ---------------------------------

type Certification = {
  title: string;
  link: string;
  platform: string;
  color: string; // Keeping for potential future use if custom background is desired
};

const certifications: Certification[] = [
  {
    title: "META Backend Developer Professional Certificate",
    link: "https://www.coursera.org/professional-certificates/meta-back-end-developer",
    platform: "Coursera",
    color: "bg-gradient-to-r from-purple-400 to-blue-500"
  },
  {
    title: "AI For Everyone - (Nontechnical course)",
    link: "https://www.coursera.org/learn/ai-for-everyone",
    platform: "Coursera",
    color: "bg-gradient-to-r from-yellow-400 to-red-500"
  },
  {
    title: "Web Development Intern/Mentorship",
    link: "https://www.hackerrank.com/certificates/7f3d9d1c4e8f",
    platform: "LaunchEd Global",
    color: "bg-gradient-to-r from-green-400 to-blue-600"
  },
  {
    title: "The Complete Full Stack Web Development Bootcamp",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp",
    platform: "Udemy",
    color: "bg-gradient-to-r from-green-400 to-blue-600"
  }
];

type SkillSectionProps = {
  title: string;
  icons: string[];
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Small delay to ensure fade-in transition works on mount
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const iconClass = 'hover:scale-125 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20'; // Slightly larger icons on hover

  const SkillSection: React.FC<SkillSectionProps> = ({ title, icons }) => (
    <motion.div className="mb-10 p-6 rounded-xl transition border border-gray-700 translate-all duration-500 bg-[#824eba] hover:bg-[#8c59c2] hover:scale-110 shadow-2xl backdrop-blur-sm"
      variants={itemVariants} // Apply item animation to the section container
    >
      <h3 className="text-2xl font-bold mb-6 text-white border-b-2 border-purple-600 pb-2 inline-block">
        {title}
      </h3>
      <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-6 justify-items-center"
        variants={containerVariants} // Staggered animation for icons within the section
        initial="hidden"
        animate="show"
      >
        {icons.map((name: string, idx: number) => (
          <motion.div key={idx} variants={itemVariants}> {/* Apply item animation to each icon */}
            <StackIcon name={name} className={iconClass} />
            <p className="text-center text-sm mt-2 text-white capitalize">
              {name.replace(/([A-Z])/g, ' $1').trim()} {/* Makes "nextjs2" -> "Nextjs2" for display */}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-100 font-sans relative overflow-hidden">
      {/* Background Gradients/Shapes for aesthetic */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <Navbar sl={3} />

      <motion.div
        className={`flex-grow flex justify-center items-center p-4 relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        initial="hidden"
        animate="show"
        variants={containerVariants} // Initial animation for the whole content area
      >
        <div className="w-full max-w-7xl p-6 flex flex-col gap-12">

          {/* Heading */}
          <motion.h1
            className="text-center font-raleway text-4xl   transition-all duration-1000 bg-gradient-to-r from-[#8F00F0] to-red-500 text-transparent bg-clip-text transform transition duration-500  hover:scale-110"
           
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            Tech Stacks
          </motion.h1>

        

          {/* Grouped Skills */}
          <motion.div className="space-y-12" variants={containerVariants}>
            <SkillSection title="Languages" icons={["python", "java", "c++", "typescript", "bash", "haskell"]} />
            <SkillSection title="Frontend" icons={["html5", "css3", "js", "react", "nextjs", "vuejs", "tailwindcss", "materialui", "framer", "shadcnui"]} />
            <SkillSection title="Backend & Databases" icons={["nodejs", "django", "pytorch", "mongodb", "mongoose", "mysql", "postgresql"]} />
            <SkillSection title="DevOps & Cloud" icons={["gcloud", "docker", "kubernetes", "vercel", "netlify", "ubuntu"]} />
            <SkillSection title="Tools & Essentials" icons={["git", "github", "vscode", "postman", "figma", "notion", "electron", "markdown", "homebrew"]} />
          </motion.div>

          {/* Certifications Section */}
          <div className="mt-20">
            <motion.h2
              className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text drop-shadow-lg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Professional Certifications
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {certifications.map((cert: Certification, idx: number) => (
                <Tilt key={idx} options={{ max: 55, scale: 1.15, speed: 900 }}>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-xl p-8 shadow-2xl transform transition-all duration-500 ease-in-out cursor-pointer
                      bg-gradient-to-br from-gray-600 to-gray-900 border border-gray-700 hover:border-purple-500
                      hover:shadow-purple-500/30 group relative overflow-hidden`}
                    variants={itemVariants}
                  >
                    {/* Subtle border animation on hover */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 group-hover:border-purple-500 pointer-events-none"></div>

                    <h3 className="text-xl font-semibold mb-3 text-purple-500 group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      This certification validated my expertise in {cert.title.includes("Backend") ? "server-side development" : cert.title.includes("AI") ? "artificial intelligence concepts" : "web development fundamentals"}.
                    </p>
                    <div className="text-sm italic opacity-80 mt-6 text-gray-400">
                      Offered by <span className="font-medium text-purple-200">{cert.platform}</span>
                    </div>
                  </motion.a>
                </Tilt>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    

      {/* Tailwind CSS keyframes for blob animation */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.4, 0.4, 0.8);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Skills;