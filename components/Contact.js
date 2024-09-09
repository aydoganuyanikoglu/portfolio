import React from 'react'
import styles from './style'
import Image from 'next/image'

const Contact = () => {
  return (
    <div id='Contact' className={` h-[100vh] w-full font-poppins ${styles.pagePaddingX} flex flex-col justify-center text-white`}>
      <div className='top'>
        <h1 className={`${styles.pageHeadingTop}`}>CONTACT</h1>
        <h1 className={`${styles.pageHeadingBottom} text-gradient`}>You can use my information down below to reach me!</h1>
      </div>
      <div className="mt-10 flex justify-between w-full flex-wrap max-md:flex-col gap-5">
        <div className='flex gap-3 items-center'>
            <div>
              <Image className={`w-[25px] h-[17px]`} src='/assets/mail.svg' width={15} height={15} alt="mail"/>
            </div>
            <div>
              <h1 className='text-[16px] font-bold'>Mail</h1>
              <p className='text-[13px]'>aydogan.u18@gmail.com</p>
            </div>
        </div>
        <div className='flex gap-3 items-center'>
            <div>
              <Image className={`w-[25px] h-[17px]`} src='/assets/phone.svg' width={15} height={15} alt="phone"/>
            </div>
            <div>
              <h1 className='text-[16px] font-bold'>Phone Number</h1>
              <p className='text-[13px]'>+90 (534) 888 93 24</p>
            </div>
        </div>
        <div className='flex gap-3 items-center'>
            <div>
              <Image className={`w-[25px] h-[17px]`} src='/assets/location.svg' width={15} height={15} alt="location"/>
            </div>
            <div>
              <h1 className='text-[16px] font-bold'>Location</h1>
              <p className='text-[13px]'>Istanbul/Turkey</p>
            </div>
        </div>
        <div className='flex gap-3 items-center'>
            <div>
              <Image className={`w-[25px] h-[17px]`} src='/assets/instagram.svg' width={15} height={15} alt="instagram"/>
            </div>
            <div>
              <h1 className='text-[16px] font-bold'>Instagram</h1>
              <p className='text-[13px]'>aydogan.u3418</p>
            </div>
        </div>
    
  
      </div>
    </div>
  )
}

export default Contact