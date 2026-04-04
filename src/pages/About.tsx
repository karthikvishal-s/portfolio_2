import Navbar from '../components/Navbar'
import { motion } from 'framer-motion';
import fidelityLogo from '../assets/fidelity_logo.png';


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


        {/* Fidelity Internship Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-14 relative"
        >
          {/* Ambient glow blobs */}
          <div className="absolute -top-10 -left-10 w-52 h-52 rounded-full bg-[#8F00F0] opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-green-500 opacity-10 blur-3xl pointer-events-none" />

          {/* Card */}
          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[#8F00F0] via-purple-500 to-green-500 shadow-2xl shadow-purple-900/40">
            <div className="rounded-2xl bg-[#0a0a0a] px-8 py-8">

              {/* Top row: logo + badge */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Logo pill */}
                  <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 flex items-center shadow-lg shadow-green-900/30 backdrop-blur-sm">
                    <img src={fidelityLogo} alt="Fidelity Investments" className="h-16 object-contain opacity-90" />
                  </div>
                </div>
                {/* Internship badge */}
                <span className="shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#8F00F0] to-green-500 text-white shadow-md">
                  LEAP Intern · Summer 2026
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text mb-1">
                Fidelity Investments
              </h2>
              <p className="text-green-400 text-sm font-semibold mb-4 tracking-wide">
                LEAP Internship &nbsp;·&nbsp; Chennai, India
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-[#8F00F0]/60 via-white/10 to-transparent mb-5" />

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Selected for Fidelity's prestigious <strong className="text-white">LEAP (Learning Experiential Advancement Program)</strong> internship —
                a highly competitive program designed for top engineering talent. Based out of the{' '}
                <strong className="text-green-400">Chennai</strong> office, I am contributing to real-world financial technology initiatives,
                collaborating with cross-functional teams, and building solutions that impact millions of investors globally.
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Role', value: 'LEAP Intern' },
                  { label: 'Location', value: 'Chennai, India' },
                  { label: 'Duration', value: 'Summer 2026' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center hover:border-purple-500/60 hover:bg-white/[0.08] transition duration-300">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

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
                <p className="mt-2 text-sm font-medium">CGPA: <span className="text-green-400">8.53 / 10</span></p>
                <p className="text-xs text-gray-400 mt-1">Current: End of Semester 5</p>
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
