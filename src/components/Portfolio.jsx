import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project5,
      title: "Web Tools",
      description: "There are lots of tools that can be used to make the job easier.",
      links: {
        site: "https://random-web-tools.vercel.app/",
        github: "https://github.com/dzikfr/web-tools",
      },
    },
    {
      img: project3,
      title: "MERN E-Commerce",
      description: "Developed a full-stack e-commerce web application using the MERN stack to manage product listings, user authentication, and payment integration.",
      links: {
        site: "https://mern-ecommerce-fe-five.vercel.app/",
        github: "https://github.com/dzikfr/mern-ecommerce",
      },
    },
    {
      img: project2,
      title: "UI Store Website",
      description: "Create UI based on the figma design that have responsive and interactive features",
      links: {
        site: "https://fe-sisko.vercel.app/",
        github: "https://github.com/dzikfr/fe-sisko",
      },
    },
    {
      img: project4,
      title: "Employee attendance and leave management",
      description: "Managed employee attendance and leave tracking for BAKARKAM POLRI in 2024 built with MERN stack",
      links: {
        site: "#",
        github: "https://github.com/dzikfr/aplikasi-absensi-baharkam-2024",
      },
    },
    {
      img: project1,
      title: "Cashier application",
      description: "Cashier application for managing stock and payments using Java GUI",
      links: {
        site: "#",
        github: "https://github.com/dzikfr/aplikasi-kasir-java",
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
                            target='_blank'
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            Demo
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