import React from 'react'

const HowToReach = () => {
  return (
    <>
        <div className='phone:h-64 sm:h-72 md:h-96 lg:h-100 xl:h-115 w-full flex flex-col justify-start items-center phone:pt-3 sm:pt-5 lg:pt-10 phone:gap-4 md:gap-7 lg:gap-10'>
            <h2 className='phone:text-2xl sm:text-4xl lg:text-6xl font-bold font-Montserrat cursor-pointer'>How To Reach</h2>
            <div className='phone:h-60% w-full flex flex-col items-start phone:px-5 sm:px-7 md:px-20 lg:px-28 phone:gap-4 md:gap-8'>
                <p className='phone:text-xs sm:text-s lg:text-sm font-Poppins'><span className='font-bold font-Montserrat'>By Air: </span>The Kolkata International airport better known as the Netaji Subhas Chandra Bose International airport located at Dum Dum, connects the city with all the major cities of the country as well as the World.</p>
                <p className='phone:text-xs sm:text-s lg:text-sm font-Poppins'><span className='font-bold font-Montserrat'>By Train: </span>Howrah, Sealdah and Kolkata railway stations are the three major railheads situated in the city. These railway stations are well connected to all the important cities of the country. Metro rail service also runs inside the city which helps to reach different places inside the city, which is easily available to the visitors and citizens.</p>
                <p className='phone:text-xs sm:text-s lg:text-sm font-Poppins'><span className='font-bold font-Montserrat'>By Road: </span>The state buses let the travelers to come to this city without any difficulty. There are various private buses as well to reach Kolkata from different parts of the state.</p>
            </div>
        </div>

    </>
  )
}

export default HowToReach
