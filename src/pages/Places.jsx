import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";
import howrah from '../assets/places/howrah-landscape.jpg'
import nakhoda from '../assets/places/nakhoda-landscape.jpg'
import kumartuli from '../assets/places/kumartuli-landscape.jpg'
import iskcon from '../assets/places/iskcon-landscape-1.jpg'
import ecoPark from '../assets/places/eco-park-landscape.jpg'
import biswaBangla from '../assets/places/biswa-bangla-gate.jpg'
import birla from '../assets/places/birla-planetarium.jpg'
import waxMuseum from '../assets/places/mother-s-wax-museum.jpg'
import scienceCity from '../assets/places/science-city-landscape.jpg'
import nandan from '../assets/places/nandan-landscape.jpg'
import princepGhat from '../assets/places/princep-ghat-landscape-2.jpg'
import esplanade from '../assets/places/esplanade.jpg'
import niccoPark from '../assets/places/nicco-park-landscape.jpg'
import victoria from '../assets/places/victoria-landscape-2.png'
import maidan from '../assets/places/maidan-landscape-2.jpg'
import coffeHouse from '../assets/places/coffee-house.jpg'
import church from '../assets/places/church-landscape-2.jpg'
import indianMuseum from '../assets/places/musuem-landscape.jpg'

const Places = () => {

    const howrahMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Howrah+Bridge/@22.5850384,88.3469648,16z/data=!3m1!4b1!4m6!3m5!1s0x3a0277bfbb1eeb1b:0xc9840aaa8c411199!8m2!3d22.5851433!4d88.3468005!16zL20vMDV0czV5?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const nakhodaMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Nakhoda+Masjid/@22.577457,88.3562588,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277b1b0c0b993:0x2d436551231224e9!8m2!3d22.577457!4d88.3562588!16s%2Fm%2F09gf6sx?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const kumartuliMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Kumartuli,+Hatkhola,+Kolkata,+West+Bengal+700005/@22.599724,88.3608521,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277cd65815801:0x6aae5326ef7c58fd!8m2!3d22.6000017!4d88.3612679!16s%2Fm%2F02vyz9_?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const ecoParkMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Eco+Park/@22.603134,88.4671428,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027544e22a5b6f:0xf22acb90ceebe765!8m2!3d22.603134!4d88.4671428!16s%2Fm%2F0p3pdg5?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const iskconMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/ISKCON+Kolkata+Sri+Sri+Radha+Govinda+Temple/@22.543685,88.3536524,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02779898c72db1:0xb7ca25edf2759887!8m2!3d22.543685!4d88.3536524!16s%2Fg%2F11h2m80swn?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const biswaBanglaMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Biswa+Bangla+Gate/@22.578647,88.4718067,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02757023e0d4d3:0x50236d4275482829!8m2!3d22.578647!4d88.4718067!16s%2Fg%2F11f08yysxk?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const birlaMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/M.P.+Birla+Planetarium/@22.5455141,88.3473163,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02771466bc8ae3:0xdfa2377553ae8f0c!8m2!3d22.5455141!4d88.3473163!16zL20vMDdzM25r?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const waxMuseumMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Mother's+Wax+Museum/@22.59947,88.47223,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275004730d413:0x6d0b70425042a73c!8m2!3d22.59947!4d88.47223!16s%2Fg%2F11vwwdptss?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const scienceCityMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/SCIENCE+CITY,+JBS+Haldane+Ave,+East+Topsia,+Topsia,+Kolkata,+West+Bengal+700046/@22.5400946,88.395977,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027695c0747d51:0xb870cf594185d727!8m2!3d22.541459!4d88.3963857!16s%2Fg%2F11bw3htzjy?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const nandanMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Nandan,+West+Bengal+Film+Centre/@22.5423054,88.3456183,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02773d082e49c5:0x696d25c1090aa5bc!8m2!3d22.5423054!4d88.3456183!16s%2Fg%2F1td1bvcl?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const princepMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Princep+ghat/@22.5555474,88.331186,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277007b098a45:0x6d0c403c12ab6b32!8m2!3d22.5555474!4d88.331186!16s%2Fg%2F11y2yz0hv5?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const esplanadeMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Esplanade+Market/@22.5610771,88.3522321,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027760b4949643:0xb8f3e9b46b3c67f4!8m2!3d22.5610771!4d88.3522321!16s%2Fg%2F11fncvx4yl?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const niccoParkMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/NICCO+PARK,+HM+Block,+Sector+IV,+Bidhannagar,+West+Bengal/@22.5707443,88.4217657,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275b6080b1da9:0x91a9a825c7d1de79!8m2!3d22.5711851!4d88.4216066!16s%2Fg%2F11bw3xmv3v?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const victoriaMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Victoria+Memorial/@22.5448082,88.3425578,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02771346ae015d:0xb540e4bce39763!8m2!3d22.5448082!4d88.3425578!16zL20vMDM3NTJy?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const maidanMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Maidan,+Kolkata,+West+Bengal+700071/@22.5500259,88.3453131,14z/data=!3m1!4b1!4m6!3m5!1s0x3a027712f2366f17:0xd1a9282afe684738!8m2!3d22.5500263!4d88.3453131!16s%2Fg%2F11bvtjr65y?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const coffeeHouseMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Indian+Coffee+House/@22.5760756,88.363998,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02764d5e20e8df:0xdc64330f0f594a5c!8m2!3d22.5760756!4d88.363998!16s%2Fm%2F02rmh__?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const churchMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/St.+Paul's+Cathedral/@22.5442706,88.3466532,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02771442588f31:0x646622ccc71971e5!8m2!3d22.5442706!4d88.3466532!16zL20vMGM0M184?entry=ttu";
        window.open(mapUrl, '-blank');
    }

    const indianMuseumMap = () => {
        const mapUrl = "https://www.google.co.in/maps/place/Indian+Museum/@22.5578858,88.3511268,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02771160347adf:0x9fd70619f94d0bac!8m2!3d22.5578858!4d88.3511268!16zL20vMDM3NGtu?entry=ttu";
        window.open(mapUrl, '-blank');
    }


    return (
        <>
            <div className='phone:h-28 sm:h-36 lg:h-56 w-full border-b-2 border-black flex flex-col justify-center items-center'>
                <p className='font-Poppins phone:text-sm font-semibold lg:text-lg xl:text-2xl'>Places to visit in</p>
                <h2 className='font-Montserrat phone:text-4xl sm:text-6xl lg:text-8xl bg-yellow-400 bg-clip-text text-transparent font-bold'>KOLKATA</h2>
            </div>

            {/* howrah */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>
                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={howrah} />
                    </div>
                </div>
                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-start'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Howrah Bridge</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins'>Howrah Bridge, also known as Rabindra Setu, is an iconic cantilever bridge over the
                        Hooghly River, connecting Kolkata and Howrah. Built in 1943, it is one of the busiest
                        bridges in the world, renowned for its engineering marvel and cultural significance. The
                        bridge offers stunning views of the river and Kolkata's skyline, especially when
                        illuminated at night.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={howrahMap}>Open map <CgArrowTopRight /></button>
                </div>
            </div>

            {/* nakhoda masjid */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>

                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-end'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Nakhoda Masjid</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins text-end'>Nakhoda Masjid, located in the Burrabazar area of Kolkata, is the largest mosque in the
                        city. Built in 1926, its grand architecture features an impressive red sandstone façade
                        and intricate designs. As a major religious and cultural center, it attracts both
                        worshippers and tourists, offering a glimpse into the city's rich Islamic heritage.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={nakhodaMap}>Open map <CgArrowTopRight /></button>
                </div>

                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl  overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={nakhoda} />
                    </div>
                </div>
            </div>

            {/* kumartuli */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>
                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={kumartuli} />
                    </div>
                </div>
                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-start'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Kumartuli</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins'>Kumartuli is a traditional potters' quarter in Kolkata, renowned for its skilled artisans
                        who craft exquisite clay idols, particularly for the Durga Puja festival. This historic area
                        attracts visitors with its vibrant atmosphere and the opportunity to witness the
                        intricate process of idol-making. Kumartuli is a cultural gem that showcases Kolkata's
                        rich artistic heritage.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={kumartuliMap}>Open map <CgArrowTopRight /></button>
                </div>
            </div>

            {/* iskcon */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>

                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-end'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Iskcon Temple</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins text-end'>ISKCON Kolkata, also known as the Sri Sri Radha Govind Temple, is one of the prominent
                        centers of the International Society for Krishna Consciousness (ISKCON). Located in the
                        heart of Kolkata, this temple is dedicated to Lord Krishna and Radha. It serves as a
                        spiritual oasis, offering daily prayers, kirtans (devotional singing), and Bhagavad Gita
                        classes. The temple also engages in various charitable activities, including food
                        distribution programs for the underprivileged.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={iskconMap}>Open map <CgArrowTopRight /></button>
                </div>

                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl  overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={iskcon} />
                    </div>
                </div>
            </div>

            {/* eco park */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>
                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={ecoPark} />
                    </div>
                </div>
                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-start'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Eco Park</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins'>Eco Park, located in New Town, Kolkata, is one of the largest urban parks in India,
                        spanning over 480 acres. It features a diverse range of attractions and activities,
                        making it a popular destination for both locals and tourists. The park is designed
                        around a large water body and offers themed gardens such as the Butterfly Garden,
                        Rose Garden, and Seven Wonders of the World replicas. Visitors can enjoy boating,
                        cycling, and walking trails, as well as various recreational facilities like amphitheaters,
                        playgrounds, and food courts. Eco Park provides a perfect blend of natural beauty and
                        modern amenities, catering to all age groups.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={ecoParkMap}>Open map <CgArrowTopRight /></button>
                </div>
            </div>

            {/* Biswa bangla gate */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>

                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-end'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Biswa Bangla Gate</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins text-end'>Biswa Bangla Gate, also known as the Kolkata Gate, is a striking architectural landmark
                        located in New Town, Kolkata. This modern structure features a circular viewing gallery
                        suspended 55 meters above the ground, offering panoramic views of the city. Opened in 2019,
                        the gate also houses a restaurant in the sky, where visitors can enjoy a meal while taking in
                        the scenic vistas. The Biswa Bangla Gate stands as a symbol of Kolkata's progress and
                        contemporary urban development, blending aesthetics with functionality to create a unique
                        attraction for both locals and tourists.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={biswaBanglaMap}>Open map <CgArrowTopRight /></button>
                </div>

                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl  overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={biswaBangla} />
                    </div>
                </div>
            </div>

            {/* birla planetarium */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>
                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={birla} />
                    </div>
                </div>
                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-start'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Birla Planetarium</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins'>Birla Planetarium in Kolkata is one of Asia's largest planetariums, offering immersive
                        shows about astronomy and space. Established in 1963, it features a domed theater
                        where visitors can enjoy educational and entertaining presentations about celestial
                        phenomena and the universe. The planetarium is a popular destination for students,
                        families, and science enthusiasts.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={birlaMap}>Open map <CgArrowTopRight /></button>
                </div>
            </div>

            {/* wax museum */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>

                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-end'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Mothers Wax Museum</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins text-end'>Mother's Wax Museum, located in New Town, Kolkata, is a popular attraction that features
                        lifelike wax statues of famous personalities from various fields. Established in 2014, the
                        museum is named in honor of Mother Teresa and showcases over 50 wax figures, including
                        historical figures, Bollywood stars, sports icons, and cultural legends. The museum's well crafted statues and interactive exhibits provide an engaging experience for visitors of all ages.
                        With its modern design and panoramic views of Eco Park from its upper floors, Mother's Wax
                        Museum offers both entertainment and inspiration
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={waxMuseumMap}>Open map <CgArrowTopRight /></button>
                </div>

                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl  overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={waxMuseum} />
                    </div>
                </div>
            </div>

            {/* science city */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>
                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={scienceCity} />
                    </div>
                </div>
                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-start'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Science City</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins'>Science City Kolkata is a leading science museum and educational complex, blending
                        entertainment with education. It features interactive exhibits, a space theater, a digital
                        planetarium, and a variety of outdoor science displays. Visitors can explore the wonders
                        of science through engaging activities, making it a popular destination for students,
                        families, and science enthusiasts in Kolkata and beyond.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={scienceCityMap}>Open map <CgArrowTopRight /></button>
                </div>
            </div>

            {/* Nandan */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>

                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-end'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Nandan</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins text-end'>Nandan, located in Kolkata, is a prestigious cultural complex dedicated to cinema and the arts.
                        Established in 1985 by the Government of West Bengal, it was inaugurated by the legendary
                        filmmaker Satyajit Ray. Nandan hosts film festivals, screenings, and cultural events, becoming
                        a hub for cinephiles and artists. The complex aims to promote cinematic excellence and
                        cultural exchange, making it a significant landmark in Kolkata's cultural landscape.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={nandanMap}>Open map <CgArrowTopRight /></button>
                </div>

                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl  overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={nandan} />
                    </div>
                </div>
            </div>

            {/* princep ghat */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>
                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={princepGhat} />
                    </div>
                </div>
                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-start'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Princep Ghat</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins'>Prinsep Ghat is a historic and picturesque waterfront promenade located along the
                        Hooghly River in South Kolkata. Built in 1841, the ghat is named after James Prinsep, a
                        British antiquarian and epigraphist. It features elegant Corinthian columns and a
                        beautiful gazebo, making it a popular spot for leisurely walks and scenic views of the
                        river. The area is renowned for its serene ambiance, well maintained gardens, and
                        cultural significance, offering a glimpse into Kolkata's colonial past and providing a
                        tranquil escape from the city's hustle and bustle.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={princepMap}>Open map <CgArrowTopRight /></button>
                </div>
            </div>

            {/* esplanade */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>

                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-end'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Esplanade</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins text-end'>Esplanade is a major commercial and transportation hub in Kolkata, known for its bustling
                        streets and vibrant atmosphere. Located in the heart of the city, it features a mix of historic
                        landmarks, shopping areas, and cultural institutions. Key attractions include the iconic Metro
                        Cinema, the Indian Museum, and various markets, making Esplanade a lively and central area
                        in Kolkata's urban landscape.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={esplanadeMap}>Open map <CgArrowTopRight /></button>
                </div>

                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl  overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={esplanade} />
                    </div>
                </div>
            </div>

            {/* nicco park */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>
                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={niccoPark} />
                    </div>
                </div>
                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-start'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Nicco Park</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins'>Nicco Park, located in Salt Lake City, Kolkata, is a family-friendly amusement park that
                        has been a popular attraction since its opening in 1991. Often referred to as the
                        "Disneyland of West Bengal," it offers a variety of rides and attractions suitable for all
                        age groups. Highlights include water rides, a giant cyclone roller coaster, a 4D movie
                        theater, and an array of funfair games. The park also features an educational tour,
                        showcasing the science behind its rides and attractions. With its blend of entertainment
                        and education, Nicco Park is a perfect destination for a fun-filled day with family and
                        friends
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={niccoParkMap}>Open map <CgArrowTopRight /></button>
                </div>
            </div>

            {/* victoria */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>

                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-end'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Victoria Memorial</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins text-end'>Victoria Memorial is a grand marble building in Kolkata dedicated to Queen Victoria,
                        completed in 1921. Set amidst lush gardens, it houses a museum showcasing British
                        colonial artifacts and historical exhibits. The monument is renowned for its stunning
                        architecture, combining elements of British and Mughal styles, and is a popular
                        attraction for both tourists and locals.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={victoriaMap}>Open map <CgArrowTopRight /></button>
                </div>

                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl  overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={victoria} />
                    </div>
                </div>
            </div>

            {/* maidan */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>
                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={maidan} />
                    </div>
                </div>
                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-start'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Maidan</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins'>Maidan is a vast urban park in the heart of Kolkata, often referred to as the "lungs of
                        the city." This sprawling green space offers a peaceful retreat from the bustling city life
                        and is popular for recreational activities such as jogging, picnicking, and sports. The
                        Maidan area also hosts various events and cultural festivals, making it a central hub
                        for both relaxation and social gatherings.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={maidanMap}>Open map <CgArrowTopRight /></button>
                </div>
            </div>

            {/* coffee house */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>

                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-end'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Indian Coffee House</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins text-end'>The Indian Coffee House on College Street is a historic café in Kolkata, renowned for its
                        intellectual ambiance and vibrant discussions. Established in 1942, it has been a
                        popular meeting place for students, writers, and artists. The café's old-world charm
                        and affordable menu make it a beloved spot for fostering creativity and debate
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={coffeeHouseMap}>Open map <CgArrowTopRight /></button>
                </div>

                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl  overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={coffeHouse} />
                    </div>
                </div>
            </div>

            {/* church */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>
                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={church} />
                    </div>
                </div>
                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-start'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>St. Pauls Cathedral</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins'>St. Paul's Cathedral in Kolkata is a stunning example of Gothic Revival architecture, known for
                        its majestic spires and beautiful stained glass windows. Completed in 1847, it is one of the
                        oldest cathedrals in the city and serves as the seat of the Bishop of Kolkata. The cathedral's
                        serene ambiance and intricate design make it a significant landmark and a popular spot for
                        visitors and worshippers alike.
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={churchMap}>Open map <CgArrowTopRight /></button>
                </div>
            </div>

            {/* indian museum */}

            <div className='bg-white phone:h-40 md:h-56 flex lg:h-72 xl:h-96'>

                <div className='h-full phone:w-60%  phone:px-4 md:px-10 flex flex-col justify-center items-end'>
                    <h3 className='phone:text-lg md:text-2xl lg:text-4xl font-Montserrat font-bold'>Indian Museum</h3>
                    <p className='phone:text-xxs md:text-xs lg:text-s font-Poppins text-end'>The Indian Museum, established in 1814, is one of the oldest and largest museums in
                        India. Located in Kolkata, it houses an extensive collection of artifacts, including
                        ancient sculptures, fossils, and coins. The museum's diverse exhibits span various fields
                        such as archaeology, anthropology, and art, making it a key cultural and educational
                        institution in the city
                    </p>
                    <button className='flex justify-evenly items-center phone:h-3 phone:w-10 lg:h-5 lg:w-14 xl:h-7 xl:w-16 rounded-sm border-none phone:mt-2 phone:text-xxs lg:text-xs bg-blue-500 hover:bg-blue-700 text-white' onClick={indianMuseumMap}>Open map <CgArrowTopRight /></button>
                </div>

                <div className='h-full phone:w-40%  flex justify-center items-center'>
                    <div className='phone:h-60% w-80% rounded-md lg:rounded-xl  overflow-hidden'>
                        <img className='object-cover hover:scale-110 duration-300 ease-in-out h-full w-full' src={indianMuseum} />
                    </div>
                </div>
            </div>




        </>
    )
}

export default Places
