import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import StackIcon from 'tech-stack-icons';
import { motion, type Variants } from 'framer-motion'; // Import 'Variants' type
import { Tilt } from 'react-tilt';

// Important: Ensure you have these packages installed:
// npm install framer-motion react-tilt tech-stack-icons
// If you face dependency errors on deployment (like @types/react conflicts),
// remember to configure Vercel's build command:
// npm install --legacy-peer-deps && npm run build
// OR set environment variable: NPM_CONFIG_LEGACY_PEER_DEPS = true

type Certification = {
  title: string;
  link: string;
  platform: string;
  color: string;
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

// Map StackIcon names to display names, especially for problematic ones or for better readability
const iconDisplayNames: { [key: string]: string } = {
  "cplusplus": "C++", // Corrected from "c++"
  "js": "JavaScript", // Corrected from "js"
  "gcloud": "Google Cloud", // Corrected from "gcloud"
  "nextjs2": "Next.js", // If you meant nextjs, this is a common typo. Using 'nextjs' is better.
  "copilotgithub": "GitHub Copilot", // Assuming this is the intended display
  // Add other mappings if you find more icons aren't displaying nicely
};


type SkillSectionProps = {
  title: string;
  icons: string[];
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Framer Motion variants for staggered animations
  const containerVariants: Variants = { // Explicitly type as Variants
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = { // Explicitly type as Variants
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };


  const iconClass = 'w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-125';

  const SkillSection: React.FC<SkillSectionProps> = ({ title, icons }) => (
    <motion.div className="mb-10 p-6 rounded-xl transition border border-gray-700 translate-all duration-500 bg-[#824eba] hover:bg-[#8c59c2] hover:scale-110 shadow-2xl backdrop-blur-sm"
      variants={itemVariants}
      initial="hidden"
      animate="show"
    >
      <h3 className="flex justify-center text-center text-2xl font-bold mb-6 text-white  border-b-2 border-black pb-2 inline-block">
        {title}
      </h3>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-6 justify-items-center mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {icons.map((name: string, idx: number) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex flex-col items-center group cursor-pointer"
          >
            <StackIcon name={name} className={iconClass} />
            <p className="text-center transition text-sm mt-5 text-white group-hover:text-black  transition-all duration-600 capitalize">
              {iconDisplayNames[name] || name.replace(/([A-Z])/g, ' $1').trim()}
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

      

      <motion.div
        className={`flex-grow flex justify-center items-center p-4 relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div className="w-full max-w-7xl p-6 flex flex-col gap-12">
        <div className='relative -top-10'>
        <Navbar sl={3} />
        </div>

          {/* Heading */}
          <motion.h1
            className="text-center font-raleway text-4xl relative -top-10  transition-all duration-1000 bg-gradient-to-r from-[#8F00F0] to-red-500 text-transparent bg-clip-text transform transition duration-500  hover:scale-110"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Tech Stack
          </motion.h1>



          {/* Grouped Skills */}
          <motion.div className="space-y-12" variants={containerVariants}>
            <SkillSection title="Languages" icons={["python", "java", "c++", "typescript", "bash", "haskell"]} />
            <SkillSection title="Frontend" icons={["html5", "css3", "js", "react", "nextjs", "vuejs", "tailwindcss", "materialui", "framer", "shadcnui"]} />
            <SkillSection title="Backend & Databases" icons={["nodejs", "django","expressjs", "pytorch", "mongodb", "mongoose", "mysql", "postgresql"]} />
            <SkillSection title="DevOps & Cloud" icons={["gcloud","streamlit", "docker", "kubernetes", "vercel", "netlify", "ubuntu"]} />
            <SkillSection title="Tools & Essentials" icons={["git", "github", "vscode", "postman", "figma", "notion", "electron", "markdown", "homebrew","cypress","jest"]} />
          </motion.div>

          {/* Certifications Section */}
          <div className="mt-20">
          <motion.h1
            className="text-center font-raleway text-4xl mb-20  transition-all duration-1000 bg-gradient-to-r from-[#8F00F0] to-red-500 text-transparent bg-clip-text transform transition duration-500  hover:scale-110"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Professional Certificates
          </motion.h1>
           

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {certifications.map((cert: Certification, idx: number) => (
                <Tilt key={idx} options={{ max: 55, scale: 1.05, speed: 400 }}>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-xl p-8 shadow-2xl transform transition-all duration-500 ease-in-out cursor-pointer
                      bg-gradient-to-br from-orange-700 to-black border border-gray-700 hover:border-purple-500
                      hover:shadow-purple-500/30 group relative overflow-hidden h-60 w-80`}
                    variants={itemVariants}
                  >
                    <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 group-hover:border-purple-500 pointer-events-none"></div>

                    <h3 className="text-xl font-semibold mb-3 text-purple-400 group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </h3>
                   
                    <div className="text-sm italic opacity-80 mt-16 text-gray-400">
                      Offered by <span className="font-medium text-purple-200">{cert.platform}</span>
                    </div>
                  </motion.a>
                </Tilt>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Footer (Optional) */}


      {/* Reminder: Place blob animation styles in your global CSS file */}
    </div>
  );
};

export default Skills;