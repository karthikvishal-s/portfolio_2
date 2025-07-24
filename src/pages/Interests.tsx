import Navbar from '../components/Navbar'
import resume from '../assets/resume_sss.png'

const Interests = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-black">
      <Navbar sl={4} />
      <div className="flex-grow flex flex-col items-center justify-center p-4">

        {/* Responsive Image Wrapper */}
        <div className="w-full max-w-6xl h-auto overflow-hidden rounded-lg shadow-lg">
          <img
            src={resume}
            alt="Karthik Vishal Resume"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Download Button */}
        <a
          href="src/assets/KarthikVishal.pdf"
          download
          className="mt-6 px-6 py-2 bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          Download 
        </a>
      </div>
    </div>
  )
}

export default Interests
