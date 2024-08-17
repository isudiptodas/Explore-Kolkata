import React from 'react'
import esplanade from './assets/places/esplanade.jpg'
import tea from './assets/places/tea.jpg'
import tea2 from './assets/places/tea-2.jpeg'
import grandOberoi from './assets/Hotels/grand-oberoi.png'
const HeroPage2 = () => {
  
        const mapUrl = "https://www.google.co.in/maps/place/Esplanade+Market/@22.561082,88.3496572,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027760b4949643:0xb8f3e9b46b3c67f4!8m2!3d22.5610771!4d88.3522321!16s%2Fg%2F11fncvx4yl?entry=ttu";

        const handleClick = ()=> {
            window.open(mapUrl,'-blank');
        }
    

    return (
    
    <>
        <div className='bg-black phone:h-44 sm:h-56 lg:h-120 xl:h-120 flex justify-center items-center border-b-2 border-yellow-200'>
            <div className='bg-black h-full w-70% flex flex-col justify-center'>
                <div className='phone:h-16 flex flex-col justify-center items-start phone:px-5 sm:px-8 lg:px-11 xl:px-14'>
                    <p className='phone:text-sm text-white sm:text-lg lg:text-2xl xl:text-3xl'>Sip a cup of nostalgia at</p>
                    <h3 className='phone:text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold font-Montserrat bg-gradient-to-r from-blue-700 via-purple-500 to-purple-800 bg-clip-text text-transparent'>ESPLANADE</h3>
                </div>
                <div className='phone:h-5 lg:h-10 xl:h-10 w-full phone:text-s flex phone:px-6 phone:gap-3 sm:mt-4 sm:px-8 lg:mt-6 lg:px-12 xl:px-16 xl:mt-9'>
                    <button className='bg-blue-600 text-white px-2 lg:px-7 xl:px-8 phone:text-xs lg:text-lg xl:text-lg text-center rounded-sm cursor-pointer'>Know more...</button>
                    <button className='bg-red-600 text-white px-2 lg:px-7 xl:px-8 phone:text-xs lg:text-lg xl:text-lg text-center rounded-sm cursor-pointer' onClick={handleClick}>Open map</button>
                </div>
            </div>

            <div className=' h-70% lg:h-60% w-40% flex flex-wrap justify-evenly overflow-hidden relative'>
                <div className='absolute h-30% w-full bg-gradient-to-b from-black to-transparent top-0 z-50'></div>
                   <div className=' h-full w-40% flex flex-col justify-evenly animate-scrollVertical'>
                        <div className='bg-black w-full h-50% rounded-sm overflow-hidden'>
                            <img className='h-full w-full object-cover' src={esplanade} />
                        </div>
                        <div className='bg-black w-full h-30% rounded-sm overflow-hidden'>
                            <img className='h-full w-full object-cover' src={tea} />
                        </div>
                   </div>
                   <div className=' h-full w-40% flex flex-col justify-evenly animate-scrollVerticalOpposite'>
                   <div className='bg-black w-full h-30% rounded-sm overflow-hidden'>
                            <img className='h-full w-full object-cover' src={tea2} />
                        </div>
                        <div className='bg-black w-full h-50% rounded-sm overflow-hidden'>
                            <img className='h-full w-full object-cover' src={grandOberoi} />
                        </div>
                   </div>
                <div className='absolute h-30% w-full bg-gradient-to-t from-black to-transparent bottom-0 z-50'></div>
            </div>
        </div>
    </>
    
  )
}

export default HeroPage2
