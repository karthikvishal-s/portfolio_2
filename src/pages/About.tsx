import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';


const About = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">


      
      <Navbar sl={1} />

      <div className="flex-grow px-4 sm:px-8 py-12 max-w-5xl mx-auto text-white font-raleway">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#8F00F0] to-red-500 text-transparent bg-clip-text mb-10 flex items-center justify-center gap-2">
  <span>Hi, I'm Karthik</span>
  <motion.span
    animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    className="inline-block origin-[70%_70%] text-white"
    role="img"
    aria-label="waving hand"
  >
    👋🏻
  </motion.span>
</h1>

      

        {/* Profile */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-">
          
          <p className="text-xs  text-justify leading-relaxed">
          <motion.div
  className="flex flex-col md:flex-row items-center gap-8 mb-12"
  initial={{ opacity: 0, y: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.6, ease: "easeOut" }}
>
<section className="max-w-4xl mx-auto px-6 py-12">

<p className="text-sm  text-white dark:text-white leading-relaxed mb-6">
  What started as curiosity for how websites work soon turned into a full-blown passion for building them. I began with{" "}
  <strong className='text-green-500'>HTML, CSS, and JavaScript</strong>, and over time, leveled up into fullstack development using{" "}
  <strong className='text-green-500'>React</strong>, <strong className='text-green-500'>Next.js</strong>, <strong className='text-green-500'>Tailwind</strong>, <strong>Node.js</strong>,{" "}
  <strong className='text-green-500'>Express</strong>, and <strong className='text-green-500'>Firebase</strong>. I’ve also embraced modern tools like{" "}
  <strong className='text-green-500'>TypeScript</strong> and <strong className='text-green-500'>Shadcn UI</strong> to build scalable, accessible, and clean UIs.
</p>

<p className="text-sm  text-white dark:text-gray-300 leading-relaxed mb-6">
  I'm on a journey to become a <strong className='text-green-500'>Fullstack + AI Engineer</strong> — combining frontend finesse, backend power, and the intelligence of{" "}
  <strong className='text-green-500'>AI & ML</strong>. From writing clean REST APIs to exploring <strong className='text-green-500'>PyTorch</strong> and building AI-enhanced features,
  I enjoy bridging real-world problems with smart solutions. I also actively practice{" "}
  <strong className='text-green-500'>Data Structures & Algorithms</strong> to strengthen my problem-solving foundation.
</p>



<p className="text-sm  text-white dark:text-gray-300 leading-relaxed mb-6">
  <strong className='text-green-500'>Currently Exploring:</strong> Advanced ML, chatbot development, AI + fullstack integration, and system design for scalable applications.
</p>

<p className="text-sm text-white dark:text-gray-300 leading-relaxed mb-6">
   When I’m not coding, I love playing <strong>badminton</strong> and swinging my <strong>bat</strong> on the cricket field
</p>


</section>

</motion.div>

          </p>
        </div>

      {/* Education */}
      <motion.div
  className="flex flex-col md:flex-row items-center gap-8 mb-12"
  initial={{ opacity: 0, y: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.6, ease: "easeOut" }}>
<section className="mb-12">
  <h2 className="text-center text-3xl font-semibold bg-gradient-to-r from-[#8F00F0] to-pink-500 text-transparent bg-clip-text mb-8 text-center underline-animation">
 Education
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white text-center">
    
    {/* 10th Standard */}
    <div className="border border-gray-500 p-6 rounded-lg shadow-md hover:scale-110 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-[#8F00F0] mb-2 text-center">10th Grade</h3>
      <p className="text-sm">Mount Zion International School</p>
      <p className="text-sm text-gray-300">Board: CBSE</p>
      <p className="mt-2 text-sm font-medium">Score: <span className="text-green-400">94.2%</span></p>
      <p className="text-xs text-gray-400 mt-1">Year: 2021</p>
    </div>

    {/* 12th Standard */}
    <div className="border border-gray-500 p-6 rounded-lg shadow-md hover:scale-110 transition duration-300">
      <h3 className="text-xl font-semibold text-[#8F00F0] mb-2 text-center">12th Grade</h3>
      <p className="text-sm">Thamarai International School</p>
      <p className="text-sm text-gray-300">Stream: PCM with Computer Science</p>
      <p className="mt-2 text-sm font-medium">Score: <span className="text-green-400">88.8%</span></p>
      <p className="text-xs text-gray-400 mt-1">Year: 2023</p>
    </div>

    {/* College */}
    <div className="border border-gray-500 p-6 rounded-lg shadow-md hover:scale-110 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-[#8F00F0] mb-2 text-center">B.Tech – CSE</h3>
      <p className="text-sm">Amrita Vishwa Vidyapeetham</p>
      <p className="text-sm text-gray-300">Batch: 2023–2027</p>
      <p className="mt-2 text-sm font-medium">CGPA: <span className="text-green-400">8.45 / 10</span></p>
      <p className="text-xs text-gray-400 mt-1">Current: End of Semester 4</p>
    </div>

  </div>
</section>
</motion.div>








  


        {/* Connect */}
        {/* Competitive Examinations */}
<motion.div
  className="flex flex-col md:flex-row items-center gap-8 mb-12 lg:ml-20"
  initial={{ opacity: 0, y: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.6, ease: "easeOut" }}>
<section className="mb-12">
  <h2 className="text-center text-3xl font-semibold bg-gradient-to-r from-[#8F00F0] to-pink-500 text-transparent bg-clip-text mb-8 underline-animation">
 Competitive Examinations
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white text-center">
    
    {/* JEE Mains */}
    <div className="border border-gray-500 p-6 rounded-lg shadow-md hover:scale-110 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-[#8F00F0] mb-2 text-center">JEE Mains</h3>
      <p className="text-sm">National Testing Agency</p>
      
      <p className="text-sm text-gray-300">Paper: B.E/B.Tech</p>
      <p className="mt-2 text-sm font-medium">Percentile: <span className="text-green-400">96.99%</span></p>
      <p className="text-xs text-gray-400 mt-1">Year: 2023</p>
    </div>

    {/* JEE Advanced */}
    <div className="border border-gray-500 p-6 rounded-lg shadow-md hover:scale-110 transition duration-300">
      <h3 className="text-xl font-semibold text-[#8F00F0] mb-2 text-center">JEE Advanced</h3>
      <p className="text-sm">IIT Guwahati</p>
     
      <p className="mt-2 text-sm font-medium">Rank: <span className="text-green-400">23041</span></p>
      <p className="text-xs text-gray-400 mt-1">Year: 2023</p>
    </div>

    {/* VITEEE */}
    <div className="border border-gray-500 p-6 rounded-lg shadow-md hover:scale-110 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-[#8F00F0] mb-2 text-center">AEEE</h3>
      <p className="text-sm">Amrita Vishwa Vidypeetham</p>

      <p className="mt-2 text-sm font-medium">Rank: <span className="text-green-400">513</span></p>
      <p className="text-xs text-gray-400 mt-1">Year: 2023</p>
    </div>

  </div>
</section>
</motion.div>
       


      </div>
    </div>
  );
}

export default About;
