import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav id="desktop-nav" className="flex justify-around p-10  w-full fixed">
        <div className="text-3xl hover:cursor-default">
          <a href="#Homepage">Ayush Pal</a>
        </div>

        <ul className="flex" id="desknav-menu">
          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#About">About</a>
          </li>
          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Projects">Projects</a>
          </li>
          <li className="mr-10 text-2xl  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      
      <nav
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
      </nav>
    </>
  );
};

export default Navbar;
