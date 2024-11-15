import React from "react";
import pp from '../assets/pp.png'
import Reveal from "./Reveal";

const About = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="about">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <img
              src={pp}
              alt="Dzikri Fauzi"
              className="w-[200px] h-[200px] rounded-full md:mt-0 mt-10 md:w-[350px] md:h-[350px] border border-purple-600 border-2"
            />
          </div>
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Final-year Computer Science student focused on web development
                (MERN stack). Experienced in database management, API
                integration, and teamwork using Git and Agile. Currently
                exploring AI engineering, mobile development, and Web 3.0, with
                a goal to grow in front-end, back-end, or full-stack roles in a
                dynamic environment.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  5<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>years of experience</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  3<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>tech</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
