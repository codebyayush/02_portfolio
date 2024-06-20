import React, { useState } from "react";
import "./navbar.css";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav id="desktop-nav" className="flex justify-around p-10 w-full fixed">
        <div className="text-3xl hover:cursor-default">
          <a href="#Homepage">Ayush Pal</a>
        </div>
        <ul className="flex" id="desknav-menu">
          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#About">About</a>
          </li>
          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Experience">Experience</a>
          </li>
          
          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Projects">Projects</a>
          </li>
          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav id="hamnav" className="hidden w-full p-5 fixed">
        <div id="ham-div" className=" w-full flex justify-between">
          <div className="text-3xl hover:cursor-default">
            <a href="#Homepage">Ayush Pal</a>
          </div>
          <ToggleButton setActive={setActive} active={active} />
        </div>
        {active && (
            <ul className="hidden " id="hamnav-menu">
              <li className="p-2 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
                <a href="#About" onClick={() => setActive((p) => !p)}>
                  About
                </a>
              </li>
              <li className="p-2 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
                <a href="#Experience" onClick={() => setActive((p) => !p)}>
                  Experience 
                </a>
              </li>
              <li className="p-2 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
                <a href="#Projects" onClick={() => setActive((p) => !p)}>
                  Projects
                </a>
              </li>
              <li className="p-2 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
                <a href="#Contact" onClick={() => setActive((p) => !p)}>
                  Contact
                </a>
              </li>
            </ul>
          )}
      </nav>

      {/* <nav
        id="hamburger-nav"
        className="hidden justify-around p-10 w-full fixed"
      >
        <div className="text-3xl hover:cursor-default">
          <a href="#Homepage">Ayush Pal</a>
        </div>

        <ul className="flex" id="hamnav-menu">
          <li className="mr-10 text-2xl hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#About">About</a>
          </li>
          <li className="mr-10 text-2xl hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Projects">Projects</a>
          </li>
          <li className="mr-10 text-2xl hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default Navbar;
