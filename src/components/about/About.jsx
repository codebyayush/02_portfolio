import React from "react";
import './about.css';

const About = () => {
  return (
    <div id="main-div" className="flex flex-col h-full ">
      <div className="flex flex-col items-center justify-center w-full mt-28">
        <h6 className="font-base text-lg">Get to know more</h6>
        <h1 className="text-5xl font-bold mt-2">About Me</h1>
      </div>
      <div id="content-div" className="mt-14 flex justify-evenly">
        <div className="">
            <img
                id="my-image"
                src="/2_.png"
                alt="me"
                className="h-96 w-96 rounded-md shadow-2xl "
            />
        </div>
        <div id="div-1" className="w-1/2">
          <div id="main-scholar" className="flex justify-center m-2">
            <div className="scholar mr-10 border-2 p-5 border-gray-700 rounded-3xl w-1/2 text-center flex flex-col items-center">
              <img src="/scholar.png" alt="scholar" className="h-14 w-14" />
              <h1 className="text-gray-900 text-xl font-bold">Education</h1>
              <h4 className="text-gray-800 text-lg">Bachelor of Technology</h4>
              <h4 className="text-gray-800 text-lg">
                (Electrical & Electronics)
              </h4>
            </div>
            <div  className="scholar border-2 p-5 border-gray-700 rounded-3xl w-1/2 text-center flex flex-col items-center">
              <img src="/scholar.png" alt="scholar" className="h-14 w-14" />
              <h1 className="text-gray-900 text-xl font-bold">Courses</h1>
              <h4 className="text-gray-800 text-lg">
                Front-end Developer Course from Sharpener.tech
              </h4>
              <h4 className="text-gray-800 text-lg">Python Full Stack Developer Course Certification</h4>
            </div>
          </div>
          <div id="text-content" className="mt-7">
            <p  className="text-lg text-gray-700">
                Hello! My name is Ayush, and I'm a front-end developer. I love
                creating user-friendly websites and focus on making them easy to
                use. My expertise includes <strong>JavaScript</strong>,{" "}
                <strong>Python</strong>, frameworks such as
                <strong> React.js & Next.js</strong>. I have experience with
                responsive design. I am also familiar with version control systems
                like <strong>Git & GitHub</strong>.
                <br /><br />
                In addition to my technical
                skills, I am a strong communicator and a quick learner. I enjoy
                problem-solving and take pride in writing clean, efficient code. I
                am enthusiastic about contributing to projects that make a real
                impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
