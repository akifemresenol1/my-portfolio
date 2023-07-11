import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#221b42]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="sm:text-7xl text-yellow-500">Welcome.</p>
        <h1 className="text-4xl sm:text-4xl font-bold text-[#ebeff9]">
          My name is Akif Emre Şenol
        </h1>
        <h2 className="text-4xl sm:text-3xl font-bold pb-4 text-[#9fadd8]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#a9aebc] py-4 max-w-[700px] border-t-[3px] border-yellow-600">
          I’m a frontend developer based in Turkey. Currently, I’m focused on
          building responsive web applications. And I love what I do.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500">
            <Link to="project" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
