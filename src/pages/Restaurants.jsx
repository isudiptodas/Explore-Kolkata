import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import saffronTree from '../assets/Restaurants/the-saffron-tree.jpg'
import ohCalcutta from '../assets/Restaurants/oh-calcutta.jpeg'
import edenPavilion from '../assets/Restaurants/eden-pavilion.png'
import cafeMezunna from '../assets/Restaurants/cafe-mezunna.png'
import flameGrill from '../assets/Restaurants/flame-grill.png'
import peshawri from '../assets/Restaurants/peshawri.png'
import oudh from '../assets/Restaurants/oudh-1590.png'
import mainland from '../assets/Restaurants/mainland-china.png'
import barbequeNation from '../assets/Restaurants/barbeque-nation.png'
import roastery from '../assets/Restaurants/roastery.png'
import watersideCafe from '../assets/Restaurants/waterside-cafe.png'

const Restaurants = () => {

    const saffronTreeMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/The+Saffron+Tree/@22.5139331,88.3535827,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0271de3fbdb269:0x753e86928d24828!8m2!3d22.5139331!4d88.3535827!16s%2Fg%2F11f5t43g2q?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const ohCalcuttaMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Oh!+Calcutta/@22.5382366,88.3513031,17z/data=!3m2!4b1!5s0x3a02773d0d67f56b:0xc6c48ae54cc7cab7!4m6!3m5!1s0x3a027719c50f88b5:0x3b328d63bea258d0!8m2!3d22.5382366!4d88.3513031!16s%2Fg%2F1vxctv48?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const edenPavilionMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Eden+Pavilion+-+ITC+Sonar/@22.5442808,88.398153,17z/data=!3m1!4b1!4m9!3m8!1s0x3a0276dd2cf216d3:0xbcb93cdc02a9681a!5m2!4m1!1i2!8m2!3d22.5442808!4d88.398153!16s%2Fg%2F1tmbtjq_?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const cafeMezunnaMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Cafe+Mezzuna/@22.5383333,88.3513889,17z/data=!3m2!4b1!5s0x3a02773d0d67f56b:0xc6c48ae54cc7cab7!4m6!3m5!1s0x3a02773d1239e1cf:0x769463a8d380a897!8m2!3d22.5383333!4d88.3513889!16s%2Fg%2F1z44xykq7?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const flameGrillMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Flame+And+Grill+South+City/@22.5016059,88.3611755,17z/data=!3m2!4b1!5s0x3a0270d8dd65ff0d:0x905a1a7a7e89a591!4m6!3m5!1s0x3a0270d861e7b079:0x63182bb2f39e0a1a!8m2!3d22.5016059!4d88.3611755!16s%2Fg%2F11c43r4dv8?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const peshawriMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Peshawri+-ITC+Sonar/@22.5442808,88.398153,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0276bb95555555:0x4ca0234c087028e3!8m2!3d22.5442808!4d88.398153!16s%2Fg%2F1t_wms40?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const oudhMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Oudh+1590+Saltlake/@22.592061,88.4118045,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275e88fd76271:0x8b9c841ebefd8c5d!8m2!3d22.592061!4d88.4118045!16s%2Fg%2F11b8090s2d?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const mainlandMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Mainland+China/@22.5016667,88.3611111,17z/data=!3m2!4b1!5s0x3a0270d8dd65ff0d:0x905a1a7a7e89a591!4m6!3m5!1s0x3a0270da281592ab:0x97f521f3b808774c!8m2!3d22.5016667!4d88.3611111!16s%2Fg%2F1tn0468f?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const barbequeMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Barbeque+Nation-+Park+Street,+Kolkata/@22.5510199,88.353816,17z/data=!3m2!4b1!5s0x398f7b0345b8bee1:0xd8114339ed33619!4m6!3m5!1s0x3a02771ab9c1dd6f:0xc3badd8c0672dca9!8m2!3d22.5510199!4d88.353816!16s%2Fg%2F11bt_kphz2?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const roasteryMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Roastery+coffee+house+!+Kolkata/@22.5182932,88.3627753,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02777c361d678b:0x89d3d016c4a04da1!8m2!3d22.5182932!4d88.3627753!16s%2Fg%2F11h423gn2p?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    const watersideMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Waterside+Cafe/@22.5706759,88.4053301,17z/data=!3m2!4b1!5s0x3a0275d695544f3f:0x861ac778c279f9be!4m6!3m5!1s0x3a0275c1513d0b19:0xb3c40336ea2d5c97!8m2!3d22.5706759!4d88.4053301!16s%2Fg%2F1tsbkjyq?entry=ttu"
        window.open(mapUrl, '-blank');
    }

    return (
        <>
            <div className='phone:h-32 md:h-40 lg:h-60 w-full flex flex-col justify-center items-center border-b-2 border-black'>
                <p className='phone:text-sm md:text-lg lg:text-xl font-Poppins font-semibold'>Restaurants in</p>
                <h2 className='font-Montserrat phone:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-yellow-400 bg-clip-text text-transparent'>KOLKATA</h2>
            </div>

            {/* saffron tree */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={saffronTree} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>The Saffron Tree</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>100, Raja Basanta Roy Road,
                            Southern Avenue, Kolkata,
                            West Bengal </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>4.1</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={saffronTreeMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* oh calcutta */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={ohCalcutta} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Oh Calcutta</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>3rd Floor, Silver Spring Arcade, E.M.
                            Bypass, Science City Area, Kolkata,
                            West Bengal</p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>4.4</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={ohCalcuttaMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* eden pavilion */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={edenPavilion} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Eden Pavilion</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>1, JBS Haldane Avenue, Tangra, Kolkata,
                            West Bengal 700046 </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>4.7</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={edenPavilionMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* cafe mezunna */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={cafeMezunna} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Cafe Mezunna</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>10/3, 4th Floor, Forum Mall, Elgin
                            Road, Elgin, Kolkata, West Bengal </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>3.8</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={cafeMezunnaMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* flame and grill */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={flameGrill} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Flame & Grills</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>375, 3rd Floor, South City Mall,
                            Prince Anwar Shah Road, Kolkata,
                            West Bengal  </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>4.0</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={flameGrillMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* peshawri */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={peshawri} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Peshawri</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>JBS Haldane Avenue, ITC Sonar Hotel,
                            Opposite Science City, Kolkata, West
                            Bengal 700046 </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>3.8</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={peshawriMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* oudh 1590 */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={oudh} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Oudh 1590</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>Shop 23/B, Desapriya Park, Kolkata,
                            West Bengal · </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>3.7</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={oudhMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mainland china */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={mainland} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Mainland China</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>3rd Floor, Silver Spring Arcade, E.M.
                            Bypass, Science City Area, Kolkata,
                            West Bengal  </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>4.2</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={mainlandMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* barbeque nation */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={barbequeNation} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Barbeque Nation</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>Unit Ccnt C0201, Plot AA IID/A, Second
                            Floor, City Center, Mouza Noapara, New
                            Town, Kolkata, West Bengal  </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>4.6</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={barbequeMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* waterside cafe */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={watersideCafe} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Waterside Cafe</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>Hyatt Regency, JA 1, Sector 3, Salt
                            Lake, Kolkata, West Bengal 700098  </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>4.0</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={watersideMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* roastery */}

            <div className='phone:h-48 sm:h-52 lg:h-64 xl:h-72 w-full flex justify-center items-center'>
                <div className='h-60% w-90% rounded-md bg-black flex justify-evenly items-center phone:px-2'>
                    <div className=' w-30% md:w-20% h-70% rounded-md overflow-hidden'>
                        <img className='h-full w-full object-cover hover:scale-110 duration-200 ease-in-out' src={roastery} alt="" />
                    </div>
                    <div className='h-70% w-50%  flex flex-col phone:px-2 phone:py-2 text-white'>
                        <h3 className='font-bold phone:text-sm sm:text-lg lg:text-3xl font-Montserrat'>Roastery Coffee House</h3>
                        <p className='font-Poppins phone:text-xs sm:text-s lg:text-lg text-gray-300'>70 B, Calcutta South India Club,
                            Gariahat, Kolkata, West Bengal
                            700029  · </p>
                    </div>
                    <div className='h-70% w-20% '>
                        <div className=' w-full h-50% flex flex-col justify-center items-center'>
                            <IoStarSharp className='lg:h-7 lg:w-8' color='green' />
                            <p className='phone:text-sm lg:text-lg font-bold text-white'>3.7</p>
                        </div>
                        <div className=' w-full h-50% flex justify-center items-center'>
                            <button className='bg-blue-500 phone:h-4 phone:w-8 sm:h-5 sm:w-10 md:h-7 md:w-12 md:text-xs lg:h-8 lg:w-16 lg:text-s xl:h-11 xl:w-24 xl:text-sm phone:rounded-sm text-white font-semibold phone:text-xxs hover:bg-blue-700' onClick={roasteryMap}>Open map</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurants
