import React from "react"
import { DiJavascript1, DiReact, DiJava, DiNetbeans} from "react-icons/di"
import { RiNextjsFill, RiFlutterFill } from "react-icons/ri";
import { SiDart, SiAndroidstudio, SiExpress, SiNodedotjs, SiMongodb } from "react-icons/si";
import { MdPivotTableChart } from "react-icons/md";
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Fullstack Web',
      technologies: [
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'MongoDB', icon: <SiMongodb className='text-green-500'/> },
        { name: 'ExpressJS', icon: <SiExpress className='text-green-500'/> },
        { name: 'ReactJS', icon: <DiReact className='text-blue-500' /> },
        { name: 'NodeJS', icon: <SiNodedotjs className='text-green-500'/> },
        { name: 'NextJS', icon: <RiNextjsFill className='text-gray-700'/> },
      ],
    },
    {
      category: 'Multi-Platform',
      technologies: [
        { name: 'Dart', icon: <SiDart className='text-blue-500'/> },
        { name: 'Flutter', icon: <RiFlutterFill className='text-blue-500'/> },
        { name: 'Android Studio', icon: <SiAndroidstudio className='text-blue-500'/> },
      ],
    },
    {
      category: 'Java Desktop',
      technologies: [
        { name: 'Java', icon: <DiJava className='text-red-500'/> },
        { name: 'Netbeans', icon: <DiNetbeans className='text-blue-500'/> },
        { name: 'Pivot', icon: <MdPivotTableChart className='text-blue-500'/> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="items-center mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
        I have an intermediate of the following technologies
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
