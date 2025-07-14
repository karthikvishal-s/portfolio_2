import Navbar from '../components/Navbar'
import resume from '../assets/resume_ss.png'

const Interests = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar sl={4} />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
    
        

        <img
          src={resume}
          alt="Karthik Vishal Resume"
          className="w-full max-w-6xl rounded-lg shadow-lg object-contain"
        />


        <a
          href="/KarthikVishal-Resume.pdf"
          download
          className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Download 
        </a>
      </div>
    </div>
  )
}

export default Interests
