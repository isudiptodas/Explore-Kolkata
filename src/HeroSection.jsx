import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
        <div className='bg-white phone:h-60 sm:h-72 md:h-100 lg:h-115 phone:w-full flex flex-col items-center phone:py-5 phone:gap-3 relative'>
           
            <div className='bg-yellow-300 phone:h-10 sm:h-20 lg:my-3 w-90% relative flex phone:text-xs font-bold font-Poppins items-center justify-evenly'>
                <div className='absolute h-full w-20% bg-gradient-to-r from-white to-transparent left-0'></div>
                   
                    <p className='sm:text-s lg:text-sm z-50'>
                        <Link to="/about">About Kolkata</Link>
                    </p>
                    <p className='sm:text-s lg:text-sm z-50'>
                        <Link to="/places">Places to visit</Link>
                    </p>
                    <p className='sm:text-s lg:text-sm z-50'>
                        <Link to="/restaurants">Restaurants</Link>
                    </p>
                    <p className='sm:text-s lg:text-sm z-50'>
                        <Link to="/hotels">Rooms & Stays</Link>
                    </p>
                <div className='absolute h-full w-20% bg-gradient-to-l from-white to-transparent right-0'></div>
            </div>

            <div className='bg-white h-48 sm:h-56 md:my-8 w-full relative'>
                
                <div className='bg-white phone:h-36 lg:h-56w-full flex flex-col items-center justify-center'>
                    <p className='font-light font-Poppins phone:text-sm xl:mt-24 xl:text-lg'>WELCOME TO</p>
                    <h1 className='phone:text-6xl font-Montserrat font-bold z-30 md:text-8xl xl:text-9xl'>KOLKATA</h1>
                    <p className='font-semibold font-Poppins phone:text-sm tracking-widest xl:text-lg'>The City Of Joy</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default HeroSection
