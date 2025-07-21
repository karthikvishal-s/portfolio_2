import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const skills = [
  "py", "java", "cpp", "c", "html", "css", "js", "ts",
  "react", "nextjs", "nodejs", "express", "mongodb", "mysql",
  "tailwind", "redux", "vite", "firebase","gcp","postgres", "vercel", "postman",
  "haskell", "git", "github", "vscode", "figma", "electron",
  "notion", "linux", "bash", "powershell"
];

const certifications = [
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

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // fade in delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col   transition-all duration-500 ease-in-out">
      <Navbar sl={3} />

      <div className={`flex-grow flex justify-center items-center p-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full max-w-6xl p-6 flex flex-col gap-6">

          {/* Tech Stacks Heading */}
          <h1 className="text-center text-4xl mb-6 bg-gradient-to-r from-[#8F00F0] to-red-500 text-transparent bg-clip-text transform transition duration-500  hover:scale-110">
           Tech Stacks
          </h1>

          {/* Skill Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <img
                key={skill}
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt={skill}
                className="w-16 h-16 transition duration-300 hover:scale-110 hover:grayscale"
              />
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mt-20 mb-10 bg-gradient-to-r from-[#8F00F0] to-red-500 text-transparent bg-clip-text transform transition duration-500  hover:scale-110 ">
               Certifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {certifications.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-110 bg-black border border-gray-500`}
                >
                  <div className="text-lg font-semibold mb-2 text-purple-500 text-center hover:text-white">
                    {cert.title}
                  </div>
                  <div className="text-sm italic opacity-90 mt-10">
                    Offered via {cert.platform}
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
