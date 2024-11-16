import React from "react";
import { DiJavascript1, DiReact, DiMysql, DiRedis } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { MdOutlineWebhook } from "react-icons/md";
import {
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiPostman,
  SiInkscape,
  SiCoreldraw,
  SiTailwindcss,
  SiVite,
  SiVisualstudiocode,
  SiDaisyui,
  SiPassport
} from "react-icons/si";
import { FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { LiaFigma } from "react-icons/lia";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Fullstack Web",
    technologies: [
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" />, },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "ReactJS", icon: <DiReact className="text-blue-500" /> },
      { name: "NextJS", icon: <RiNextjsFill className="text-gray-700" /> },
      { name: "ExpressJS", icon: <SiExpress className="text-green-500" /> },
      { name: "NodeJS", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <DiMysql className="text-blue-500" /> },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-500" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Postman", icon: <SiPostman className="text-red-500" /> },
      { name: "WebHook", icon: <MdOutlineWebhook className="text-gray-500" /> },
      { name: "Figma", icon: <LiaFigma className="text-gray-500" /> },
      { name: "Inkscape", icon: <SiInkscape className="text-gray-500" /> },
      { name: "CorelDraw", icon: <SiCoreldraw className="text-gray-500" /> },
    ],
  },
  {
    category: "Others",
    technologies: [
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
      { name: "DaisyUI", icon: <SiDaisyui className="text-sky-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Vite", icon: <SiVite className="text-blue-700" /> },
      { name: "VSCode", icon: <SiVisualstudiocode className="text-blue-500" /> },
      { name: "Redis", icon: <DiRedis className="text-red-500" /> },
      { name: "Passport", icon: <SiPassport className="text-gray-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="items-center mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I have an intermediate of the following technologies
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
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
  );
};

export default Skills;
