import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
      company: 'WINNING SOFT',
      job : 'Junior Developer - Fulltime',
      period: 'January 2025 - Present',
      description: 'Writes code, fixes bugs, and contributes to software development',
    },
    {
      company: 'BAHARKAM POLRI',
      job : 'Junior Backend Developer - Internship',
      period: 'September 2024 - December',
      description: 'Developed REST API endpoints and request-handling controllers using Node.js, Express, and Mongoose.',
    },
    {
      company: 'Eduwork',
      job : 'Fullstack - Project Internship',
      period: 'August 2024 - November 2024',
      description: 'Implemented MVC architecture and REST APIs with ExpressJS; designed responsive views using ReactJS.',
    },
    {
      company: 'Digital print karya grafika',
      job : 'Graphic Designer - Part Time',
      period: 'January 2022 - January 2024',
      description: 'Created product mockups and templates in CorelDRAW, optimizing design for high-quality printing and team collaboration',
    },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto' id='experience'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal key={index}>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'><b>{experience.job}</b></p>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience