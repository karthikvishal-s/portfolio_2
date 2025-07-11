import Navbar from '../components/Navbar'

const skills = [
  "py", "java", "cpp", "c", "html", "css", "js", "ts",
  "react", "nextjs", "nodejs", "express", "mongodb", "mysql",
  "tailwind", "redux", "vite", "firebase", "vercel", "postman",
  "haskell", "git", "github", "vscode", "figma", "electron",
  "notion", "linux", "bash", "powershell"
];

const Skills = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar sl={3} />

      <div className="flex-grow flex justify-center items-center text-2xl p-4">
        <div className="w-full max-w-5xl rounded-xl p-6 flex flex-col justify-center items-center gap-4">
          
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <img
                key={skill}
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt={skill}
                className="w-22 h-22 transition duration-300  hover:grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
