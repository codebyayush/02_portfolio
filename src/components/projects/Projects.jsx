import React from "react";
import './projects.css'

const Projects = () => {
  return (
    <>
      <div className="proj-header-div h-auto flex flex-col">
        <div className="flex flex-col items-center justify-center w-full mt-28">
          <h6 className="font-base text-lg">Browse my recent</h6>
          <h1 className="text-5xl font-bold mt-2">Projects</h1>
        </div>
        <div className="proj-main-div flex w-full justify-center mt-10">
          <div className="proj-div border-2 p-3 border-gray-800 flex flex-col justify-center items-center w-1/4 rounded-3xl m-2">
            <img
              src="/ecmrc.png"
              alt="ecmrc"
              className="h-80 w-80 rounded-3xl p-3 "
            />
            <h1 className="proj-title font-medium text-3xl">Ecommerce App</h1>
            <div className="proj-buttons flex w-full justify-center">
              <a href="https://fir-hosting-2fdad.web.app/" target="_blank"><button className="border-2 border-gray-900 h-12 m-4 w-32 text-center rounded-full hover:text-white hover:bg-zinc-700 transition duration-700">Live Demo</button></a>
              <a href="" target="_blank"><button className="border-2 border-gray-900 h-12 m-4 w-32 text-center rounded-full hover:text-white hover:bg-zinc-700 transition duration-700">Github</button></a>
            </div>
          </div>
          <div className="proj-div border-2 p-3 border-gray-800 flex flex-col justify-center items-center w-1/4 rounded-3xl m-2">
            <img
              src="/expense.png"
              alt="expnse"
              className="h-80 w-80 rounded-3xl p-3 "
            />
            <h1 className="proj-title font-medium text-3xl">Expense Tracker App</h1>
            <div className="proj-buttons flex w-full justify-center">
              <a href="https://expense-tracker-481f2.web.app/" target="_blank"><button className="border-2 border-gray-900 h-12 m-4  w-32 text-center rounded-full hover:text-white hover:bg-zinc-700 transition duration-700">Live Demo</button></a>
              <a href="https://github.com/codebyayush/04_expensetracker_md" target="_blank"><button className="border-2 border-gray-900 h-12 m-4  w-32 text-center rounded-full hover:text-white hover:bg-zinc-700 transition duration-700">Github</button></a>
            </div>
          </div>
          <div className="proj-div border-2 p-3 border-gray-800 flex flex-col justify-center items-center w-1/4 rounded-3xl m-2">
            <img
              src="/chat.png"
              alt="chat"
              className="h-80 w-80 rounded-3xl p-3 "
            />
            <h1 className="proj-title font-medium text-3xl">Mailbox App</h1>
            <div className="proj-buttons flex w-full justify-center">
              <a href="https://mailbox-client-md.web.app/" target="_blank"><button className="border-2 border-gray-900 h-12 m-4  w-32 text-center rounded-full hover:text-white hover:bg-zinc-700 transition duration-700">Live Demo</button></a>
              <a href="https://github.com/codebyayush/08_mailbox_client_md" target="_blank"><button className="border-2 border-gray-900 h-12 m-4  w-32 text-center rounded-full hover:text-white hover:bg-zinc-700 transition duration-700">Github</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;