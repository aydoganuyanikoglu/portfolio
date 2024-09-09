import React from 'react'
import styles from './style'
import { projects } from '../app/const'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id='Projects' className={`text-white font-poppins min-h-[100vh] h-fit py-[100px] ${styles.pagePaddingX} relative`}>
      <div className='white__gradient w-[35%] h-[35%] rounded-[50%] absolute bottom-0 right-0'></div>
        <div className='flex flex-col gap-[20px] h-[100%] justify-center'>
          <div className='top'>
            <h1 className={`${styles.pageHeadingTop}`}>MY PROJECTS</h1>
            <h1 className={`${styles.pageHeadingBottom} text-gradient`}>Unique Development!</h1>
          </div>
          {projects.map((project,index) => (
              <div key={project.id} className={`w-[700px] max-md:w-full h-[300px] bg-black rounded-[50px] 
              flex flex-row items-center gap-3 max-md:flex-col max-md:h-fit max-md:py-5 max-md:px-3 justify-center max-md:justify-initial 
              border-[3px] border-white`}>
                  <Image 
                  className='w-[250px] h-[250px] max-md:h-[200px] max-md:max-w-[350px] py-3 px-3 rounded-[30px] brightness-50 
                  border-white border-[2px]' 
                  src={project.url} alt={project.name}
                  width={300}
                  height={300}
                  />
                  <div className='w-[50%] max-md:w-full h-[full] py-3 text-center
                   text-white px-6 flex flex-col justify-center gap-6 max-md:h-fit max-md:py-[40px]'>
                    <h1 className='text-[15px] font-bold'>{project.name}</h1>
                    <p className='text-[13px]'>{project.paragraph}</p>
                    <div className="w-full flex flex-row justify-between px-10 max-md:justify-center max-md:gap-[100px] max-ss:gap-[40px]">
                      <a href={project.urlgit} rel="noreferrer" target='_blank' className='flex flex-row gap-2 items-center'>
                        <p className='text-[14px]'>Code</p>
                        <Image 
                        className='h-[24px] w-[24px] border-[1px] 
                        border-white p-1 rounded-[5px]' 
                        src='/assets/git.png' alt="git" 
                        width={15}
                        height={15}/>
                      </a>
                      <a href={project.livedemo} rel="noreferrer" className='flex flex-row gap-2 items-center'>
                        <p className='text-[14px]'>Live Demo</p>
                        <Image 
                        className='h-[24px] w-[24px] border-[1px]
                         border-white p-1 rounded-[5px]' src='/assets/gotopage.png' alt=""
                         width={15}
                         height={15}/>
                        </a>
                    </div>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}

export default Projects