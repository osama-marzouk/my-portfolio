import React from 'react'
import Navbar from './Navbar'
import TechStack from './TechStack';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa"
const Header = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='flex flex-col justify-center items-center bg-gray-50 pt-28 px-5 lg:px-12 lg:flex-row lg:justify-between lg:mt-16 lg:items-start
            xl:justify-center xl:gap-24' id="home">
                <div className='mb-10 lg:hidden'>
                    <img src="images\mine.png"
                        className='w-56 h-auto rounded-full border-black border-2 animate-[morph_5s_ease-in-out_infinite]'
                        alt="it is me" />
                </div>
                <div>
                    <h1 className='text-center text-slate-800 font-bold text-4xl mb-5 md:text-5xl lg:text-6xl lg:text-start'>Front-End React<br></br>Developer</h1>
                    <p className=' text-lg text-center text-gray-500 mb-10 lg:text-start'>Hi, I'm Osama Marzouk. A passionate Front-end React<br className='hidden md:block'></br> Developer based in Cairo, Egypt. 📍</p>
                    <div className='flex gap-4 items-center justify-center mb-20 lg:justify-normal'>
                        <a href='https://www.linkedin.com/in/osama-marzouk-engineer/' className='active:fill-blue-600' rel='noreferrer' target='_blank'>
                            <BsLinkedin className='fill-slate-800 text-2xl active:fill-blue-600' />
                        </a>
                        <a href='https://github.com/osama-marzouk' rel='noreferrer' target='_blank'>
                            <FaGithub className='fill-slate-800 text-3xl' />
                        </a>
                    </div>
                </div>
                <div className='mb-10 hidden lg:block'>
                    <img src="images\mine.png"
                        className='w-56 h-auto rounded-full border-black border-2 lg:w-[25rem] lg:h-auto lg:-mt-9 animate-[morphLg_5s_ease-in-out_infinite]'
                        alt="it is me" />
                </div>
            </div>
            <TechStack />
        </div>
    )
}

export default Header