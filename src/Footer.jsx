import React from 'react'

const Footer = () => {

    const handleClick = (e)=> {
        e.preventDefault();
        window.open('mailto:work.sudiptodas@gmail.com');
    }

  return (

      <>
        <div className='bg-yellow-300 phone:h-56 md:h-72 xl:h-96 w-full pt-2 flex flex-col justify-center items-center'>
            <div className='phone:h-20% phone:text-sm md:text-lg xl:text-3xl font-Poppins flex justify-center items-center'>Want to know more ?</div>
            <button className='h-20% phone:w-30% sm:w-30% rounded-md bg-blue-600 text-white font-semibold phone:text-xl hover:bg-blue-700 transition duration-300 ease-in-out' onClick={handleClick}>Mail us</button>
            <p className='phone:mt-16 lg:mt-20'>Developed by <span className='font-bold italic font-Montserrat'>Sudipto</span></p>
        </div>
      </>

  )
}

export default Footer
