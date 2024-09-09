import React from 'react'
import styles from './style'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={`w-full h-[100px] ${styles.pagePaddingX} flex flex-row items-center 
    justify-between max-ss:flex-col max-ss:justify-initial max-ss:py-4`}>
      <div className='text-white h-full flex flex-row items-center text-[13px] max-ss:text-[10.5px] font-poppins font-bold w-fit'>
        <span>Copyright</span>
        <span>
          <Image 
          className='w-[12px] h-[12px] mt-[-1px] mx-1' src='/assets/copyright.png' alt="copyright"
          width={10}
          height={10}/></span>
        <span>2023. All rights are reserved.</span>
      </div>
      <div id='logos' className='flex flex-row gap-3'>
        <Image 
        className={`${styles.iconskucuk} icons-class cursor-pointer`} 
        src='/assets/instagram.svg' alt="insta" 
        width={15}
        height={15}/>
        <Image 
        className={`${styles.iconskucuk} icons-class cursor-pointer`} 
        src='/assets/facebook.svg' alt="face" 
        width={15}
        height={15}/>
        <Image 
        className={`${styles.iconskucuk} icons-class cursor-pointer`} 
        src='/assets/twitter.svg' alt="twitter" 
        width={15}
        height={15}/>
        <Image 
        className={`${styles.iconskucuk} icons-class cursor-pointer`} 
        src='/assets/linkedin.svg' alt="linkdn" 
        width={15}
        height={15}/>
      </div>
    </div>
  )
}

export default Footer