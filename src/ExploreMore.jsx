import React from 'react'

const ExploreMore = () => {
  return (
    
      <>
        <div className='phone:h-40 sm:h-56 lg:h-72 xl:h-96 w-full bg-white flex flex-col justify-evenly items-center phone:pb-3 sm:pb-5 xl:pb-10'>
            <div className='bg-white phone:h-40% w-full font-Montserrat flex flex-col justify-end items-center'>
                <p className='phone:text-s sm:text-sm lg:text-lg'>Explore more at</p>
                <h3 className='phone:text-3xl sm:text-5xl lg:text-7xl font-bold'>KOLKATA</h3>
            </div>
            <div className=' phone:h-40% w-full relative flex overflow-hidden flex-wrap justify-evenly gap-2 items-center'>
                <div className='absolute h-full phone:w-30% bg-gradient-to-r from-white to-transparent left-0 z-50'></div>
                    <div className='phone:h-40% phone:w-full flex justify-evenly animate-leftScroll gap-2'>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Howrah</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Science City</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Rajbari</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Maidan</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Nakhoda</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Princep Ghat</div>
                    </div>

                    

                    <div className='phone:h-40% phone:w-full flex justify-evenly gap-2 animate-rightScroll'>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs'>Belur Math</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Biswa Bangla Gate</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Park Street</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Nandan</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Eco Park</div>
                         <div className='phone:h-80% lg:h-full phone:w-24 lg:w-36 bg-yellow-400 rounded-sm hover:bg-yellow-500 font-Poppins flex justify-center items-center phone:text-xs lg:text-s'>Indian Museum</div>
                    </div>
                <div className='absolute h-full phone:w-30% bg-gradient-to-l from-white to-transparent right-0 z-50'></div>
            </div>
        </div>
      </>
    
  )
}

export default ExploreMore
