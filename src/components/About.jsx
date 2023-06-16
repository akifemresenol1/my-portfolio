import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Akif Emre Şenol, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I'm still at the junior level in frontend development, but I am
              determined to work in this field and improve my skills. In
              addition to being familiar with React.JS, I also have experience
              in basic web technologies such as HTML, CSS and JavaScript. I hope
              you get to know me better and if you want to reach me or talk
              about your projects, please feel free to contact me. Thanks!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
