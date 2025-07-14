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
        <div className="w-full max-w-5xl rounded-xl p-6 flex flex-col gap-4">
        <div className='text-center text-4xl font-bold mb-8'>
              Tech Stacks
            </div>
          
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
            <div>
              <div className='text-3xl font-bold text-center mb-4 mt-20'>
              Certifications 
              </div>
              <div className='mt-10 text-center'>
                <a
                  href="https://www.coursera.org/professional-certificates/meta-back-end-developer?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_meta-back-end-developer_meta_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_24-01_x&campaignid=20930047084&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&creativeid=&assetgroupid=6487026877&targetid=&extensionid=&placement=&gad_source=1&gad_campaignid=20930048362&gbraid=0AAAAADdKX6bb5PgVxbLLR0Xa13007BvAc&gclid=CjwKCAjw1dLDBhBoEiwAQNRiQRftmVldcH2zUZ2Ln3bQycy6O948930-3jv1IEq725Y0vVTqUyal8hoClbgQAvD_BwE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 "
                >
                  META Backend Developer Professional Certificate
                </a><br></br>
                <a
                  href="https://www.coursera.org/learn/ai-for-everyone?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_ai-for-everyone_deeplearning-ai_ftcof_learn_cx_dr_bau_gg_sem_pr_in_all_m_hyb_24-05_x&campaignid=21252004702&adgroupid=161814720916&device=c&keyword=ai%20for%20everyone%20course&matchtype=p&network=g&devicemodel=&creativeid=698051746296&assetgroupid=&targetid=kwd-838325155104&extensionid=&placement=&gad_source=1&gad_campaignid=21252004702&gbraid=0AAAAADdKX6aNZEeFqvBij3IudOKxuwYFs&gclid=CjwKCAjw1dLDBhBoEiwAQNRiQV5aq6PCCiHX5dnrCvR5SJlq0eM4PbJFk8YgWiFIdIQtXskweseUMRoCpvwQAvD_BwE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  AI For Everyone - (Coursera)
                </a><br></br>
                <a
                  href="https://www.hackerrank.com/certificates/7f3d9d1c4e8f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Web Development Intern/Mentorship @ LaunchED Global
                </a>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
