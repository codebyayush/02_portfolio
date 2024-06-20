import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="cont-main-header flex justify-center items-center flex-col h-screen ">
        <div className="flex flex-col items-center justify-center w-full mt-28 ">
          <h6 className="font-base text-lg">Get in touch</h6>
          <h1 className="text-5xl font-bold mt-2">Contact Me</h1>
        </div>
        <div className="cont-main-div border-2 border-gray-700 rounded-3xl p-5 w-1/3 text-center mt-12">
          <ul className="cont-div flex w-full justify-evenly">
            <li className="flex">
              <img src="/mail.png" alt="mail" className=" -mt-2 w-12 h-12" />
              <h1 className="cont-mail text-xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
                ayushpal6939@gmail.com
              </h1>
            </li>
            <li>
              <a href="https://www.github.com/codebyayush" target="_blank">
                <img src="/github.png" alt="git" className="imgs w-10 h-10" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ayush-pal-a53348ab/"
                target="_blank"
              >
                <img
                  src="/linkedin.png"
                  alt="linkedin"
                  className="imgs w-10 h-10 "
                />
              </a>
            </li>
          </ul>
        </div>
        <ul className="cont-nav-items flex mt-52 mb-10">
          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#About">About</a>
          </li>
          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Experience">Experience</a>
          </li>

          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Projects">Projects</a>
          </li>
          <li className="cont-margin text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
