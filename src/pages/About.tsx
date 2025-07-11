import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar sl={1} />
      <div className="flex-grow flex justify-center items-center text-2xl">
        <div className="w-full max-w-3xl aspect-[7/5] border flex ">
          Contents
        </div>
      </div>
    </div>
  )
}

export default About
