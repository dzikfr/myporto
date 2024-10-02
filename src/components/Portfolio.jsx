import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Cashier application",
      description: "Cashier application for managing stock and payments using Java GUI",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project3,
      title: "MERN E-Commerce",
      description: "Developed a full-stack e-commerce web application using the MERN stack to manage product listings, user authentication, and payment integration.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project5,
      title: "AI Chatbot",
      description: "Developed a web application leveraging the OpenAI API to create an AI-powered chat interface.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project4,
      title: "Employee attendance management",
      description: "Managed employee attendance and leave tracking for BAKARKAM POLRI in 2024 built with MERN stack",
      links: {
        site: "#",
        github: "#",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio