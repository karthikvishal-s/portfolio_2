import Navbar from '../components/Navbar'


const About = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">


      
      <Navbar sl={1} />

      <div className="flex-grow px-4 sm:px-8 py-12 max-w-5xl mx-auto text-white font-raleway">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#8F00F0] to-red-500 text-transparent bg-clip-text mb-10">
          About Me
        </h1>

        {/* Profile */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          
          <p className="text-xs  text-justify leading-relaxed">
          <section className="max-w-4xl mx-auto px-6 py-12">

      <p className="text-xs  text-white dark:text-white leading-relaxed mb-6">
        What started as curiosity for how websites work soon turned into a full-blown passion for building them. I began with{" "}
        <strong>HTML, CSS, and JavaScript</strong>, and over time, leveled up into fullstack development using{" "}
        <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind</strong>, <strong>Node.js</strong>,{" "}
        <strong>Express</strong>, and <strong>Firebase</strong>. I’ve also embraced modern tools like{" "}
        <strong>TypeScript</strong> and <strong>Shadcn UI</strong> to build scalable, accessible, and clean UIs.
      </p>

      <p className="text-xs  text-white dark:text-gray-300 leading-relaxed mb-6">
        I'm on a journey to become a <strong>Fullstack + AI Engineer</strong> — combining frontend finesse, backend power, and the intelligence of{" "}
        <strong>AI & ML</strong>. From writing clean REST APIs to exploring <strong>PyTorch</strong> and building AI-enhanced features,
        I enjoy bridging real-world problems with smart solutions. I also actively practice{" "}
        <strong>Data Structures & Algorithms</strong> to strengthen my problem-solving foundation.
      </p>

      

      <p className="text-xs  text-white dark:text-gray-300 leading-relaxed mb-6">
        <strong>Currently Exploring:</strong> Advanced ML, chatbot development, AI + fullstack integration, and system design for scalable applications.
      </p>

      <p className="text-xs  text-white dark:text-gray-300 leading-relaxed mb-6">
         When I’m not coding, I love playing <strong>badminton</strong> and swinging my <strong>bat</strong> on the cricket field
      </p>

      <p className="text-xl font-semibold text-white dark:text-white mt-10">
        “Learning fast. Building smart. Growing consistently.”
      </p>
    </section>
          </p>
        </div>

      {/* Education */}
<section className="mb-12">
  <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#8F00F0] to-pink-500 text-transparent bg-clip-text mb-8 text-center">
 Education
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
    
    {/* 10th Standard */}
    <div className="bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-[#8F00F0] mb-2">10th Grade</h3>
      <p className="text-sm">Mount Zion International School</p>
      <p className="text-sm text-gray-300">Board: CBSE</p>
      <p className="mt-2 text-sm font-medium">Score: <span className="text-green-400">94.2%</span></p>
      <p className="text-xs text-gray-400 mt-1">Year: 2020</p>
    </div>

    {/* 12th Standard */}
    <div className="bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-[#8F00F0] mb-2">12th Grade</h3>
      <p className="text-sm">Mount Zion International School</p>
      <p className="text-sm text-gray-300">Stream: PCM with Computer Science</p>
      <p className="mt-2 text-sm font-medium">Score: <span className="text-green-400">88.8%</span></p>
      <p className="text-xs text-gray-400 mt-1">Year: 2022</p>
    </div>

    {/* College */}
    <div className="bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-[#8F00F0] mb-2">B.Tech – CSE</h3>
      <p className="text-sm">Amrita Vishwa Vidyapeetham</p>
      <p className="text-sm text-gray-300">Batch: 2023–2027</p>
      <p className="mt-2 text-sm font-medium">CGPA: <span className="text-green-400">8.45 / 10</span></p>
      <p className="text-xs text-gray-400 mt-1">Current: End of Semester 4</p>
    </div>

  </div>
</section>


{/* Achievements */}
<section className="mb-12  p-6 rounded-md  shadow-md text-center">
  <h2 className="text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-400 text-transparent bg-clip-text mb-6">
Achievements
  </h2>
  <ul className="list-disc list-inside space-y-3 text-white text-sm leading-relaxed">
    
    {/* New Academic Achievements */}
    <li><strong>JEE Mains:</strong> Scored <span className="text-green-400">96.99 percentile</span> (2022)</li>
    <li><strong>JEE Advanced:</strong> Qualified with <span className="text-green-400">AIR 23,609</span></li>
    <li><strong>AEEE (Amrita Entrance Exam):</strong> Scored <span className="text-green-400">Rank 509</span></li>
    <li><strong>Spell Bee International:</strong> Achieved <span className="text-green-400">International-Level Certification</span></li>
    <li><strong>Business-Cultural Quiz Winner:</strong> Winner at <span className="text-yellow-400">Dhruva, IIM Trichy</span> </li>
  </ul>
</section>





  


        {/* Connect */}
<section className="mt-16  p-6 sm:p-10 shadow-md backdrop-blur-md">
  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#8F00F0] mb-6 text-center">
     Connect With Me
  </h2>

  <p className="text-sm sm:text-base text-center text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
    Always excited to collaborate on impactful projects, talk tech, or just connect. Feel free to reach out on any of the platforms below:
  </p>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
    {/* GitHub */}
    <a
      href="https://github.com/karthikvishal-s"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-[#8F00F0]/80 transition text-white border border-white/10"
    >
     
      <span>GitHub</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/karthik-vishal-s-851921287"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-blue-600/80 transition text-white border border-white/10"
    >
      
      <span>LinkedIn</span>
    </a>

    {/* Email */}
    <a
      href="mailto:karthikvishal1506@gmail.com"
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-rose-500/80 transition text-white border border-white/10"
    >
      
      <span>Email</span>
    </a>
  </div>
</section>


      </div>
    </div>
  );
}

export default About;
