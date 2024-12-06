import React, { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import api from "../assets/api.png"; 
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.jpeg";
import project7 from "../assets/project7.jpeg";
import project8 from "../assets/project8.png";

// Web Projects
const projectsWeb = [
  {
    img: project5,
    title: "Web Tools",
    description:
      "There are lots of tools that can be used to make the job easier.",
    links: {
      site: "https://random-web-tools.vercel.app/",
      github: "https://github.com/dzikfr/web-tools",
    },
  },
  {
    img: project4,
    title: "Employee attendance and leave management",
    description:
      "Managed employee attendance and leave tracking for BAKARKAM POLRI in 2024 built with MERN stack",
    links: {
      site: "https://aplikasi-absensi-baharkam-2024-3mx7.vercel.app",
      github: "https://github.com/dzikfr/aplikasi-absensi-baharkam-2024",
    },
  },
  {
    img: project3,
    title: "MERN E-Commerce",
    description:
      "Developed a full-stack e-commerce web application using the MERN stack to manage product listings, user authentication, and payment integration.",
    links: {
      site: "https://mern-ecommerce-fe-five.vercel.app",
      github: "https://github.com/dzikfr/mern-ecommerce",
    },
  },
  {
    img: project2,
    title: "UI Store Website",
    description:
      "Create UI based on the figma design that have responsive and interactive features",
    links: {
      site: "https://fe-sisko.vercel.app/",
      github: "https://github.com/dzikfr/fe-sisko",
    },
  },
];

// Mobile Projects
const projectsMobile = [
  {
    img: project6,
    title: "Weather App Prediction",
    description:
      "A mobile application that predicts the weather based on user location and user input.",
    links: {
      github: "https://github.com/dzikfr/music-player-RN",
    },
  },
  {
    img: project7,
    title: "Music Player App",
    description: "A mobile application that plays music based on user file.",
    links: {
      github: "https://github.com/dzikfr/WeatherAppRN",
    },
  },
];

// API Project
const projectsAPI = [
  {
    title: "Attendance Project API",
    description: "A RESTful API for attendance project that manages employe, admin, attendance adn leave.",
    links: {
      site: "https://aplikasi-absensi-baharkam-2024.vercel.app/",
      github:
        "https://github.com/dzikfr/aplikasi-absensi-baharkam-2024/tree/main/backend",
    },
  },
  {
    title: "E-Commerce API",
    description: "A RESTful API for e-commerce project that manages product, user, and payment.",
    links: {
      site: "https://mern-ecommerce-fe-five.vercel.app",
      github:
        "https://github.com/dzikfr/ziishop/tree/main/backend",
    },
  },
];

// Planning
const projectsPlanning = [
  {
    img: project8,
    title: "Attendance Project Planning Database",
    description: "A RESTful API for attendance project.",
    links: {
      site: "https://aplikasi-absensi-baharkam-2024-3mx7.vercel.app",
      github:
        "https://github.com/dzikfr/aplikasi-absensi-baharkam-2024/tree/main/planning",
    },
  },
];

// Desktop Projects
const projectsDesktop = [
  {
    img: project1,
    title: "Cashier application",
    description:
      "Cashier application for managing stock and payments using Java GUI",
    links: {
      site: "#",
      github: "https://github.com/dzikfr/aplikasi-kasir-java",
    },
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("web");

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <Reveal key={index}>
        <div
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={project.img? project.img : api}
              alt={project.title}
              className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                Demo
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    ));
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("web")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "web"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Web
        </button>
        <button
          onClick={() => setActiveTab("mobile")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "mobile"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Mobile
        </button>
        <button
          onClick={() => setActiveTab("api")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "api"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          API
        </button>
        <button
          onClick={() => setActiveTab("planning")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "planning"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Plan
        </button>
        <button
          onClick={() => setActiveTab("desktop")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "desktop"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Desktop
        </button>
      </div>

      {/* Render Projects */}
      <div>
        {activeTab === "web" && renderProjects(projectsWeb)}
        {activeTab === "mobile" && renderProjects(projectsMobile)}
        {activeTab === "api" && renderProjects(projectsAPI)}
        {activeTab === "planning" && renderProjects(projectsPlanning)}
        {activeTab === "desktop" && renderProjects(projectsDesktop)}
      </div>
    </div>
  );
};

export default Portfolio;
