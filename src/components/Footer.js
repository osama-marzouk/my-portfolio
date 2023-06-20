import React from 'react'
import { FaGithub } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-[#2D2E32] py-14 px-5 flex flex-col gap-4 md:flex-row md:px-10 md:justify-between xl:px-60'>
            <div>
                <p className='font-bold text-xl text-center text-white'>Copyright © 2023. All rights are reserved</p>
            </div>
            <div className='flex gap-5 justify-center items-center'>
                <a href='https://www.linkedin.com/in/osama-marzouk-engineer/' rel='noreferrer' target='_blank'>
                    <BsLinkedin className='fill-white text-2xl' />
                </a>
                <a href='https://github.com/osama-marzouk' rel='noreferrer' target='_blank'>
                    <FaGithub className='fill-white text-2xl' />
                </a>
            </div>
        </div>
    )
}

export default Footer;