import React from 'react'
import styles from './style'
import 'animate.css';
import Image from 'next/image';
import '../app/index.css'

const Main = () => {
  return (
    <div id='Home' className={`h-[calc(100vh-100px)] ${styles.pagePaddingX} 
    flex flex-col justify-center w-full max-mdp:h-fit py-[250px] relative mavi`}>
        <div className='blue__gradient w-[50%] h-[50%] rounded-[50%] absolute top-10 right-0'></div>
        <div className='absolute top-[200px] left-0 pink__gradient w-[20%] h-[20%] rounded-[50%]'></div>
        <div id='üst' className='mt-[-150px] w-full flex flex-row justify-between items-initial flex-wrap
        max-mdp:gap-[40px]'>
            <div className='font-poppins text-white flex flex-col gap-3 max-md:text-center max-md:w-full'>
                <h1 className='text-[35px] leading-[43px] text-gradient font-bold'>Frontend React Developer!</h1>
                <p className='text-[16px] font-semibold max-md:hidden'>Hi I'm Aydoğan Uyanıkoğlu. A Frontend Developer<br />based in Istanbul/Turkey.</p>
                <p className='text-[16px] font-semibold hidden max-md:block'>Hi I'm Aydoğan Uyanıkoğlu. A Frontend Developer based in Istanbul/Turkey.</p>
                <div className="flex flex-row gap-2 max-md:justify-center">
                    <a href="https://www.linkedin.com/in/aydoğan-uyanıkoğlu-337a62285/" rel="noreferrer" target='_blank'>
                        <Image 
                        className='w-[32px] h-[32px] border-[1px] border-white p-1 rounded-[5px]' src='/assets/linkedin.svg' alt="linkdn"
                        width={30}
                        height={30}/>
                    </a>
                    <a href="https://github.com/aydoganuyanikoglu" rel="noreferrer" target='_blank'>
                        <Image 
                        className='w-[32px] h-[32px] border-[1px] 
                        border-white p-1 rounded-[5px]' src='/assets/git.png' alt="git"
                        width={30}
                        height={30}/>
                    </a> 
                </div>
            </div>
            <div className='max-md:w-full flex max-md:justify-center'>
                <Image 
                className='brightness-[60%] rounded-[50px] 
                w-[300px] h-[300px] shadow-cc myFoto' src='/assets/foto1.png' alt='vesikalik'
                width={300}
                height={300}/>
            </div>
        </div>
        <div id='alt' className='flex gap-4 mt-[80px] absolute bottom-[190px] w-full max-md:relative max-md:bottom-0 max-md:justify-center'>
            <p className='font-poppins border-r-[2px] border-white text-[18px] max-md:text-[16px] text-white pr-7 max-ss:pr-2'>Tech Stack</p>
            <div className="flex gap-5 flex-wrap">
                <Image 
                className={`${styles.icons} border-[1px] border-white 
                rounded-[5px] p-2 myHover`} 
                src='/assets/html.png' 
                alt="html"
                width={15}
                height={15}
                />
                <Image 
                className={`${styles.icons} border-[1px] border-white 
                rounded-[5px] p-2 myHover`} 
                src='/assets/css.png' 
                alt="css"
                width={15}
                height={15}
                />
                <Image 
                className={`${styles.icons} border-[1px] border-white 
                rounded-[5px] p-2 myHover`} 
                src='/assets/js.png' 
                alt="js"
                width={15}
                height={15}
                />
                <Image 
                className={`${styles.icons} border-[1px] border-white 
                rounded-[5px] p-2 myHover`} 
                src='/assets/react.png' 
                alt="react"
                width={15}
                height={15}
                />
                <Image 
                className={`${styles.icons} border-[1px] border-white 
                rounded-[5px] p-2 myHover`} 
                src='/assets/tailwind.png' 
                alt="tailwind"
                width={15}
                height={15}
                />
                <Image 
                className={`${styles.icons} border-[1px] border-white 
                rounded-[5px] p-2 myHover`} 
                src='/assets/java.png' 
                alt="java"
                width={15}
                height={15}
                />
                <Image 
                className={`${styles.icons} border-[1px] border-white 
                rounded-[5px] p-2 myHover`} 
                src='/assets/python.png' 
                alt="python"
                width={15}
                height={15}
                />
                <Image 
                className={`${styles.icons} border-[1px] border-white 
                rounded-[5px] p-2 myHover`} 
                src='/assets/c.png' 
                alt="c"
                width={15}
                height={15}
                />
            </div>
        </div>
    </div>
  )
}

export default Main