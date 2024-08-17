import React from 'react'
import { useNavigate } from 'react-router-dom'
import princepGhat from './assets/places/princep-ghat-landscape.jpg'
import princepGhat2 from './assets/places/princep-ghat-landscape-2.jpg'
import princepGhat3 from './assets/places/princep-ghat-landscape-3.jpg'
import princepGhat4 from './assets/places/princep-ghat-landscape-4.png'

const HeroPage3 = () => {
  
        const mapUrl = "https://www.google.co.in/maps/place/Princep+ghat/@22.5555474,88.331186,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277007b098a45:0x6d0c403c12ab6b32!8m2!3d22.5555474!4d88.331186!16s%2Fg%2F11y2yz0hv5?entry=ttu";

        const handleClick = ()=> {
            window.open(mapUrl,'-blank');
        }
    

    return (
    
    <>
        <div className='phone:h-40 sm:h-56 lg:h-120 xl:h-120 w-full bg-black flex items-center border-b-2 border-yellow-200'>
            <div className=' h-full lg:h-60% phone:w-40% relative flex flex-col items-center justify-center gap-3 overflow-hidden'>
                <div className='absolute left-0 bg-gradient-to-r from-black to-transparent h-full phone:w-20% z-50'></div>
                    <div className=' phone:h-30% sm:h-40% w-90% xl:h-30% rounded-sm flex justify-between animate-scrollHorizontal'>
                        <div className='bg-white h-full w-40% rounded-sm overflow-hidden'>
                            <img className='h-full w-full object-cover' src={princepGhat} alt="" />
                        </div>
                        <div className='bg-white h-full w-50% rounded-sm overflow-hidden'>
                        <img className='h-full w-full object-cover' src={princepGhat2} alt="" />
                        </div>
                    </div>
                    <div className=' phone:h-30% sm:h-40% xl:h-30% w-90% rounded-sm flex justify-between animate-scrollHorizontalOpposite'>
                    <div className='bg-white h-full w-30% rounded-sm overflow-hidden'>
                    <img className='h-full w-full object-cover' src={princepGhat3} alt="" />
                    </div>
                    <div className='bg-white h-full w-60% rounded-sm overflow-hidden'>
                    <img className='h-full w-full object-cover' src={princepGhat4} alt="" />
                    </div>
                    </div>
                <div className='absolute right-0 bg-gradient-to-l from-black to-transparent h-full phone:w-20% z-50'></div>
            </div>
            
            <div className=' h-full phone:w-60% flex flex-col justify-center items-end'>
                <div className='phone:h-16 flex flex-col justify-center items-start phone:px-5 sm:px-8 lg:px-11 xl:px-14'>
                    <p className='phone:text-sm text-white sm:text-lg lg:text-2xl xl:text-3xl'>Catch the sunset at</p>
                    <h3 className='phone:text-xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold font-Montserrat bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent'>PRINCEP GHAT</h3>
                </div>
                <div className='phone:h-5 lg:h-10 xl:h-10 w-full phone:text-s flex justify-end phone:px-6 phone:gap-3 sm:mt-4 sm:px-8 lg:mt-6 lg:px-12 xl:px-16 xl:mt-9'>
                    <button className='bg-blue-600 text-white px-2 lg:px-7 xl:px-8 phone:text-xs lg:text-lg xl:text-sm text-center rounded-sm cursor-pointer'>Know more...</button>
                    <button className='bg-red-600 text-white px-2 lg:px-7 xl:px-8 phone:text-xs lg:text-lg xl:text-sm text-center rounded-sm cursor-pointer' onClick={handleClick}>Open map</button>
                </div>
            
            </div>
        </div>
    </>
    
  )
}

export default HeroPage3
