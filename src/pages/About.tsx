import Navbar from '../components/Navbar'
import karthik from "../assets/kv.jpg";
import { motion } from "framer-motion";

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
        <strong>Data Structures & -xs orithms</strong> to strengthen my problem-solving foundation.
      </p>

      <h3 className="text-2xl font-semibold text-white dark:text-white mb-4">🚀 Projects I’ve Built</h3>
      <ul className="list-disc list-inside text-white dark:text-gray-300 space-y-2 mb-6">
        <li>
          <strong>Caster+</strong> – A secure platform to track big spendings, gold price fluctuations, and insurance coverage.
        </li>
        <li>
          <strong>Pensieve</strong> – A personal memory vault that helps users store, organize, and revisit valuable thoughts and moments.
        </li>
        <li>
          <strong>TRR</strong> – A real estate showcase platform with a clean, professional UI for verified property listings.
        </li>
      </ul>

      <p className="text-xs  text-white dark:text-gray-300 leading-relaxed mb-6">
        ⚙️ <strong>Tech I Use:</strong> React, Next.js, Tailwind CSS, Firebase, MongoDB, Express, Node.js, TypeScript, PostgreSQL, Python, Git, Framer Motion
      </p>

      <p className="text-xs  text-white dark:text-gray-300 leading-relaxed mb-6">
        📈 <strong>Currently Exploring:</strong> Advanced ML, chatbot development, AI + fullstack integration, and system design for scalable applications.
      </p>

      <p className="text-xs  text-white dark:text-gray-300 leading-relaxed mb-6">
        🏏 When I’m not coding, I love playing <strong>badminton</strong> and perfecting my <strong>cover drives</strong> on the cricket field — because balance matters, both in life and in code.
      </p>

      <p className="text-xl font-semibold text-white dark:text-white mt-10">
        “Learning fast. Building smart. Growing consistently.”
      </p>
    </section>
          </p>
        </div>

        {/* Education */}
        <section className="mb-12 border p-4 rounded-xs  bg-white/10">
          <h2 className="text-2xl font-semibold text-[#8F00F0] mb-3">🎓 Education</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>B.Tech in Computer Science and Engineering – Amrita Vishwa Vidyapeetham (2022–2026)</li>
            <li>CGPA: 8.45/10 (as of Semester 4)</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-12 border p-4 rounded-xs  bg-white/10">
          <h2 className="text-2xl font-semibold text-red-400 mb-3">💼 Experience</h2>
          <div className="space-y-4">
            <div>
              <strong>Web Development Intern – LaunchED Global</strong>
              <p className="text-sm">Apr 2025 – Present · Remote</p>
              <p>Working on a Cab Booking Portal with real-time vendor collaboration, PostgreSQL backend, and Node/NextJS architecture.</p>
            </div>
            <div>
              <strong>Hackathons – Amazon HackOn, Mega Hackathon 2025</strong>
              <p>Built end-to-end apps with real-world use cases under tight deadlines. Focused on Goal 4 (Education) in UnitED.</p>
            </div>
          </div>
        </section>



  


        {/* Connect */}
        <section>
          <h2 className="text-2xl font-semibold text-red-400 mb-3">📡 Connect With Me</h2>
          <p>
            Feel free to reach out on <a href="https://github.com/karthikvishal-s" className="text-[#8F00F0] underline">GitHub</a>, <a href="https://linkedin.com/in/karthik-vishal-s-851921287" className="text-[#8F00F0] underline">LinkedIn</a> or mail me at <a href="mailto:karthikvishal1506@gmail.com" className="text-[#8F00F0] underline">karthikvishal1506@gmail.com</a>.
          </p>
        </section>

      </div>
    </div>
  );
}

export default About;
