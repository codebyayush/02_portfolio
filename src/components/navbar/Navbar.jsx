import React from "react";

const Navbar = () => {
  return (
    <>
        <div className="flex justify-around p-10 text-3xl w-full fixed">
          <div className="text-3xl hover:cursor-default">Ayush Pal</div>
          
          <div className="flex">
            <button className="mr-10  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">About</button>
            <button className="mr-10  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">Projects</button>
            <button className="mr-10  hover:text-gray-500 hover:duration-300 hover:underline-offset-8 hover:underline">Contact</button>
          </div>
        </div>
    </>
  );
};

export default Navbar;
