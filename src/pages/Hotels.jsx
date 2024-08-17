import React from 'react'
import royalBengal from '../assets/Hotels/itc-royal-bengal.png'
import tajBengal from '../assets/Hotels/taj-bengal.png'
import grandOberoi from '../assets/Hotels/grand-oberoi.png'
import jwMarriott from '../assets/Hotels/jw-marriot.png'
import lalit from '../assets/Hotels/the-lalit.png'
import thePark from '../assets/Hotels/the-park.png'
import hhi from '../assets/Hotels/hhi.png'
import hyatt from '../assets/Hotels/hyatt.png'

const Hotels = () => {

    const itcMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/ITC+Royal+Bengal,+a+Luxury+Collection+Hotel,+Kolkata/@22.545598,88.3979384,17z/data=!3m1!4b1!4m9!3m8!1s0x3a02769e9c431c4d:0x884f3ca00471b396!5m2!4m1!1i2!8m2!3d22.545598!4d88.3979384!16s%2Fg%2F11c7t3rxt3?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const tajBengalMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Taj+Bengal,+Kolkata/@22.5376899,88.3344526,17z/data=!4m10!3m9!1s0x3a027742c5766669:0xabaefc78ba555397!5m3!1s2024-08-24!4m1!1i2!8m2!3d22.5376899!4d88.3344526!16s%2Fg%2F1q6j8wdx8?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const grandOberoiMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/The+Oberoi+Grand,+Kolkata/@22.5616631,88.3513038,17z/data=!4m10!3m9!1s0x3a02771160347adf:0x79dc7210e1ace099!5m3!1s2024-08-24!4m1!1i2!8m2!3d22.5616631!4d88.3513038!16zL20vMDlfNDQ2?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const jwMarriotMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/JW+Marriott+Hotel+Kolkata/@22.5481474,88.3991694,17z/data=!4m10!3m9!1s0x3a02769db9e49f61:0xa2117593c10c8066!5m3!1s2024-08-24!4m1!1i2!8m2!3d22.5481474!4d88.3991694!16s%2Fg%2F11b_2p605k?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const lalitMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/The+LaLiT+Great+Eastern+Kolkata/@22.5681542,88.349876,17z/data=!4m10!3m9!1s0x3a0277a695a0da53:0x122a931b2e38319f!5m3!1s2024-08-24!4m1!1i2!8m2!3d22.5681542!4d88.349876!16s%2Fm%2F0swmlx2?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const theParkMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/The+Park+Hotel/@22.5540974,88.351871,17z/data=!4m10!3m9!1s0x3a027705fba4f341:0xf382683d7139cd1a!5m3!1s2024-08-24!4m1!1i2!8m2!3d22.5540974!4d88.351871!16s%2Fg%2F11c0xs23lm?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const hhiMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Hotel+Hindusthan+International/@22.5411549,88.3506419,17z/data=!4m10!3m9!1s0x3a02771866e552c5:0x3f3dd5c85262de83!5m3!1s2024-08-24!4m1!1i2!8m2!3d22.5411549!4d88.3506419!16s%2Fg%2F11bymzzxdz?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const hyattMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Hyatt+Regency+Kolkata/@22.5706781,88.405212,17z/data=!4m10!3m9!1s0x3a0275d69f55ee75:0x4e40641064094dc7!5m3!1s2024-08-24!4m1!1i2!8m2!3d22.5706781!4d88.405212!16s%2Fm%2F0_fpjhk?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    return (

        <>
            <div className='phone:h-32 md:h-40 lg:h-60 w-full flex flex-col justify-center items-center border-b-2 border-black'>
                <p className='phone:text-sm md:text-lg lg:text-xl font-Poppins font-semibold'>Rooms & Staying in </p>
                <h2 className='font-Montserrat phone:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-yellow-400 bg-clip-text text-transparent'>KOLKATA</h2>
            </div>

            <div className='phone:h-auto w-full flex justify-center items-center phone:flex-col sm:flex-row phone:py-10 gap-4 flex-wrap'>

                {/* itc royal bengal */}

                <div className='phone:h-56 phone:w-70% sm:w-40% sm:h-60 md:h-72 xl:h-80 lg:w-30%  md:rounded-md phone:rounded-sm hover:shadow-2xl flex flex-col justify-center items-center'>
                    <div className='phone:h-50% w-80% bg-black rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={royalBengal} alt="" />
                    </div>
                    <div className='phone:h-20% md:h-15% w-80%  flex flex-col justify-center items-center'>
                        <h3 className='phone:text-s md:text-sm font-Montserrat font-bold'>ITC Royal Bengal</h3>
                        <p className='phone:text-xs font-Poppins'>1 Jbs Haldane Avenue,
                            Kolkata, West Bengal
                            700046  </p>
                    </div>
                    <div className='phone:h-10% md:h-15% w-50%  flex items-center justify-evenly'>
                        <p className='phone:text-xs bg-green-400  phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm'><span className='font-bold'>Rating: </span>4.1</p>
                        <button className='phone:text-xs bg-blue-600 cursor-pointer phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm font-bold text-white' onClick={itcMap}>Open map</button>
                    </div>
                </div>

                {/* taj bengal */}

                <div className='phone:h-56 phone:w-70% sm:w-40% sm:h-60 md:h-72 xl:h-80 lg:w-30%  md:rounded-md phone:rounded-sm hover:shadow-2xl flex flex-col justify-center items-center'>
                    <div className='phone:h-50% w-80% bg-black rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={tajBengal} alt="" />
                    </div>
                    <div className='phone:h-20% md:h-15% w-80%  flex flex-col justify-center items-center'>
                        <h3 className='phone:text-s md:text-sm font-Montserrat font-bold'>Taj Bengal</h3>
                        <p className='phone:text-xs font-Poppins'>34b, Belvedere Road Alip, Alipur,
                            Kolkata, West Bengal 700027 </p>
                    </div>
                    <div className='phone:h-10% md:h-15% w-50%  flex items-center justify-evenly'>
                        <p className='phone:text-xs bg-green-400  phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm'><span className='font-bold'>Rating: </span>4.4</p>
                        <button className='phone:text-xs bg-blue-600 cursor-pointer phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm font-bold text-white' onClick={tajBengalMap}>Open map</button>
                    </div>
                </div>

                {/* grand oberoi */}

                <div className='phone:h-56 phone:w-70% sm:w-40% sm:h-60 md:h-72 xl:h-80 lg:w-30%  md:rounded-md phone:rounded-sm hover:shadow-2xl flex flex-col justify-center items-center'>
                    <div className='phone:h-50% w-80% bg-black rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={grandOberoi} alt="" />
                    </div>
                    <div className='phone:h-20% md:h-15% w-80%  flex flex-col justify-center items-center'>
                        <h3 className='phone:text-s md:text-sm font-Montserrat font-bold'>Grand Oberoi</h3>
                        <p className='phone:text-xs font-Poppins'>The Oberoi Grand 15, Jawaharlal Nehru
                            Road, Kolkata, West Bengal 700013 </p>
                    </div>
                    <div className='phone:h-10% md:h-15% w-50%  flex items-center justify-evenly'>
                        <p className='phone:text-xs bg-green-400  phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm'><span className='font-bold'>Rating: </span>3.8</p>
                        <button className='phone:text-xs bg-blue-600 cursor-pointer phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm font-bold text-white' onClick={grandOberoiMap}>Open map</button>
                    </div>
                </div>

                {/* jw marriot */}

                <div className='phone:h-56 phone:w-70% sm:w-40% sm:h-60 md:h-72 xl:h-80 lg:w-30% md:rounded-md phone:rounded-sm hover:shadow-2xl flex flex-col justify-center items-center'>
                    <div className='phone:h-50% w-80% bg-black rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={jwMarriott} alt="" />
                    </div>
                    <div className='phone:h-20% md:h-15% w-80% flex flex-col justify-center items-center'>
                        <h3 className='phone:text-s md:text-sm font-Montserrat font-bold'>JW Marriott</h3>
                        <p className='phone:text-xs font-Poppins'>4A, J.B.S. Haldane Avenue, Kolkata,
                            West Bengal 700105  ·  </p>
                    </div>
                    <div className='phone:h-10% md:h-15% w-50% flex items-center justify-evenly'>
                        <p className='phone:text-xs bg-green-400  phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm'><span className='font-bold'>Rating: </span>4.5</p>
                        <button className='phone:text-xs bg-blue-600 cursor-pointer phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm font-bold text-white' onClick={jwMarriotMap}>Open map</button>
                    </div>
                </div>

                {/* the lalit */}

                <div className='phone:h-56 phone:w-70% sm:w-40% sm:h-60 md:h-72 xl:h-80 lg:w-30% md:rounded-md phone:rounded-sm hover:shadow-2xl flex flex-col justify-center items-center'>
                    <div className='phone:h-50% w-80% bg-black rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={lalit} alt="" />
                    </div>
                    <div className='phone:h-20% md:h-15% w-80% flex flex-col justify-center items-center'>
                        <h3 className='phone:text-s md:text-sm font-Montserrat font-bold'>ITC Royal Bengal</h3>
                        <p className='phone:text-xs font-Poppins'> 18, Hemanta Basu Sarani,
                            Dalhousie BBD Bagh, Kolkata, West
                            Bengal  </p>
                    </div>
                    <div className='phone:h-10% md:h-15% w-50% flex items-center justify-evenly'>
                        <p className='phone:text-xs bg-green-400  phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm'><span className='font-bold'>Rating: </span>3.8</p>
                        <button className='phone:text-xs bg-blue-600 cursor-pointer phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm font-bold text-white' onClick={lalitMap}>Open map</button>
                    </div>
                </div>

                {/* the park hotel */}

                <div className='phone:h-56 phone:w-70% sm:w-40% sm:h-60 md:h-72 xl:h-80 lg:w-30% md:rounded-md phone:rounded-sm hover:shadow-2xl flex flex-col justify-center items-center'>
                    <div className='phone:h-50% w-80% bg-black rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={thePark} alt="" />
                    </div>
                    <div className='phone:h-20% md:h-15% w-80% flex flex-col justify-center items-center'>
                        <h3 className='phone:text-s md:text-sm font-Montserrat font-bold'>The Park Hotel</h3>
                        <p className='phone:text-xs font-Poppins'>17 Park Street, Kolkata, West Bengal
                            700016 </p>
                    </div>
                    <div className='phone:h-10% md:h-15% w-50% flex items-center justify-evenly'>
                        <p className='phone:text-xs bg-green-400  phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm'><span className='font-bold'>Rating: </span>4.4</p>
                        <button className='phone:text-xs bg-blue-600 cursor-pointer phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm font-bold text-white' onClick={theParkMap}>Open map</button>
                    </div>
                </div>

                {/* hhi */}

                <div className='phone:h-56 phone:w-70% sm:w-40% sm:h-60 md:h-72 xl:h-80 lg:w-30% md:rounded-md phone:rounded-sm hover:shadow-2xl flex flex-col justify-center items-center'>
                    <div className='phone:h-50% w-80% bg-black rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={hhi} alt="" />
                    </div>
                    <div className='phone:h-20% md:h-15% w-80% flex flex-col justify-center items-center'>
                        <h3 className='phone:text-s md:text-sm font-Montserrat font-bold'>Hotel Hindusthan International</h3>
                        <p className='phone:text-xs font-Poppins'>235/1 Ajc Bose Road, Kolkata, West
                            Bengal 700020 </p>
                    </div>
                    <div className='phone:h-10% md:h-15% w-50% flex items-center justify-evenly'>
                        <p className='phone:text-xs bg-green-400  phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm'><span className='font-bold'>Rating: </span>4.0</p>
                        <button className='phone:text-xs bg-blue-600 cursor-pointer phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm font-bold text-white' onClick={hhiMap}>Open map</button>
                    </div>
                </div>

                {/* hyatt */}

                <div className='phone:h-56 phone:w-70% sm:w-40% sm:h-60 md:h-72 xl:h-80 lg:w-30% md:rounded-md phone:rounded-sm hover:shadow-2xl flex flex-col justify-center items-center'>
                    <div className='phone:h-50% w-80% bg-black rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={hyatt} alt="" />
                    </div>
                    <div className='phone:h-20% md:h-15% w-80% flex flex-col justify-center items-center'>
                        <h3 className='phone:text-s md:text-sm font-Montserrat font-bold'>Hyatt Regency</h3>
                        <p className='phone:text-xs font-Poppins'>Ja-1 Sector Iii, Salt Lake City, Kolkata,
                            West Bengal 700098  </p>
                    </div>
                    <div className='phone:h-10% md:h-15% w-50% flex items-center justify-evenly'>
                        <p className='phone:text-xs bg-green-400  phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm'><span className='font-bold'>Rating: </span>4.3</p>
                        <button className='phone:text-xs bg-blue-600 cursor-pointer phone:px-1 phone:py-1 md:px-2 md:py-2 xl:px-3 rounded-sm font-bold text-white' onClick={hyattMap}>Open map</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hotels
