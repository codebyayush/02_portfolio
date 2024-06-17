import React from "react";
import './mediaquery.css';

const Home = () => {
  return (
    <>
      <div id="home-div" className=" flex h-screen items-center justify-center text-center">
        <div className="m-10">
          <img id="main-img" src="/me.png" className="h-96 w-96 rounded-full shadow-xl" alt="" />
        </div>
        <div>
          <p className="text-lg m-2">Hello, I'm</p>
          <h1 className="text-4xl font-semibold m-2">Ayush Pal</h1>
          <h2 className="text-2xl font-bold m-4 text-gray-500">Frontend Developer</h2>
          <div className="m-3">
            <button className="border border-black rounded-full mr-4 font-medium p-3 m-1 hover:text-white hover:bg-zinc-700 transition duration-700">Download CV</button>
            <button className=" rounded-full bg-zinc-700 text-white font-medium  p-3  hover:text-black hover:bg-white border border-black transition duration-700">Contact Info</button>
          </div>
          <div className="flex h-10 justify-center">
            <img src="/linkedin.png" alt="" className="m-1 mr-3"/>
            <img src="/github.png" alt="" className="m-1 "/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
