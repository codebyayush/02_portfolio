import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <>
      <div id='main-header' className='h-auto flex flex-col mb-14'>
      <div id='header' className="flex flex-col items-center justify-center w-full mt-28">
        <h6 className="font-base text-lg">Explore My</h6>
        <h1 className="text-5xl font-bold mt-2">Experience</h1>
      </div>
          <div id='main-div' className='flex w-full justify-center'>
            <div id='child-1'  className=' border-2 border-gray-700 rounded-3xl mt-10 p-5 w-1/3 m-3'>
                <h1 id='header-1' className='text-3xl font-bold text-center '>Frontend Development</h1>
                <div id='skills' className='mt-5'>
                    <div id='article-container'>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2 className='font-medium '>HTML</h2>
                          <h2>Experienced</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>CSS</h2>
                          <h2>Intermediate</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>Javascript</h2>
                          <h2>Intermediate</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>Python</h2>
                          <h2>Intermediate</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>React.js</h2>
                          <h2>Experienced</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>Next.js</h2>
                          <h2>Intermediate</h2>
                        </div>
                    </article>
                    </div>
                </div>         
            </div>
            <div id='child-2' className=' border-2 border-gray-700 rounded-3xl mt-10 p-5 w-1/3 m-3'>
                <h1 id='header-2' className='text-3xl font-bold text-center '>Frontend Development</h1>
                <div id='skills' className='mt-5'>
                    <div id='article-container'>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2 className='font-medium '>HTML</h2>
                          <h2>Experienced</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>CSS</h2>
                          <h2>Intermediate</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>Javascript</h2>
                          <h2>Intermediate</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>Python</h2>
                          <h2>Intermediate</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>React.js</h2>
                          <h2>Experienced</h2>
                        </div>
                    </article>
                    <article>
                        <img src="/correct.png" alt="correct" className='h-7 w-7 mt-2'/>
                        <div >
                          <h2  className='font-medium '>Next.js</h2>
                          <h2>Intermediate</h2>
                        </div>
                    </article>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Experience;