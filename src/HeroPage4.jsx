import React from 'react'
import { useNavigate } from 'react-router-dom'
import vm from './assets/places/victoria-portrait.jpg'
import vm2 from './assets/places/victoria-landscape.jpg'
import vm3 from './assets/places/victoria-landscape-2.png'
import vm4 from './assets/places/victoria-landscape-4.png'

const HeroPage4 = () => {

    const mapUrl = "https://www.google.co.in/maps/place/Victoria+Memorial/@22.5448131,88.3399829,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02771346ae015d:0xb540e4bce39763!8m2!3d22.5448082!4d88.3425578!16zL20vMDM3NTJy?entry=ttu"

    function handleClick(){
        window.open(mapUrl,'-blank');
    }

  return (
    <>
        <div className='bg-black phone:h-44 sm:h-56 lg:h-120 xl:h-120 flex justify-center items-center border-b-2 border-yellow-200'>
            
        <div className='bg-black h-full w-70% flex flex-col phone:gap-2 sm:gap-0 justify-center'>
                <div className='phone:h-16 flex flex-col justify-center items-start phone:px-5 sm:px-8 lg:px-11 xl:px-14'>
                    <p className='phone:text-sm text-white sm:text-lg lg:text-2xl xl:text-3xl'>Stroll through history at</p>
                    <h3 className=' phone:text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold font-Montserrat bg-gradient-to-r  from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent'>VICTORIA MEMORIAL</h3>
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
                            <img className='h-full w-full object-cover' src={vm} />
                        </div>
                        <div className='bg-black w-full h-30% rounded-sm overflow-hidden'>
                            <img className='h-full w-full object-cover' src={vm2} />
                        </div>
                   </div>
                   <div className=' h-full w-40% flex flex-col justify-evenly animate-scrollVerticalOpposite'>
                   <div className='bg-black w-full h-30% rounded-sm overflow-hidden'>
                            <img className='h-full w-full object-cover' src={vm3} />
                        </div>
                        <div className='bg-black w-full h-50% rounded-sm overflow-hidden'>
                            <img className='h-full w-full object-cover' src={vm4} />
                        </div>
                   </div>
                <div className='absolute h-30% w-full bg-gradient-to-t from-black to-transparent bottom-0 z-50'></div>
            </div>
           
        </div>

    </>
  )
}

export default HeroPage4
