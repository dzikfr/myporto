import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='max-w-[1200px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Dzikri Fauzi</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/dzikfr"><FaGithubSquare /></a>
                <a href="https://www.instagram.com/dzikrifauzr"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/dzikri-fauzi-ramdhani-1612a2308/"><FaLinkedin /></a>
            </div>

        </div>

        <p className='text-gray-400'>@{year} Zixx.Fr</p>
    </div>
  )
}

export default Footer