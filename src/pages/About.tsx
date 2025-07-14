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
          <motion.img
            src={karthik}
            alt="Karthik Vishal"
            className="w-40 h-40 rounded-full object-cover border-4 border-gradient-to-r from-[#8F00F0] to-red-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <p className="text-lg text-justify leading-relaxed">
            I’m <span className="font-semibold text-[#8F00F0]">Karthik Vishal Subramaniyan</span>, a third-year Computer Science student at Amrita Vishwa Vidyapeetham. I specialize in Full Stack Development and love solving real-world problems through code. Whether it’s building e-commerce platforms like <span className="text-red-400 font-semibold">Noire</span> or student-centric apps like <span className="text-red-400 font-semibold">UnitED</span>, I enjoy crafting meaningful software experiences. I aim to grow through corporate experience, and eventually start my own tech venture.
          </p>
        </div>

        {/* Education */}
        <section className="mb-12 border p-4 rounded-lg bg-white/10">
          <h2 className="text-2xl font-semibold text-[#8F00F0] mb-3">🎓 Education</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>B.Tech in Computer Science and Engineering – Amrita Vishwa Vidyapeetham (2022–2026)</li>
            <li>CGPA: 8.45/10 (as of Semester 4)</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-12 border p-4 rounded-lg bg-white/10">
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
