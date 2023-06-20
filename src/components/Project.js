import React from 'react'
import { FaGithub } from "react-icons/fa"
import { BsBoxArrowUpRight } from 'react-icons/bs'
const Project = ({ title, src, content, codeUrl, liveUrl }) => {

    return (
        <div className='bg-white rounded-lg shadow-md py-4 px-5 mb-10'>
            <img src={src} alt={title} className='rounded-md' />
            <div>
                <h1 className='font-bold text-lg text-center mb-5'>{title}</h1>
                <p className='text-lg text-gray-500 text-center font-medium mb-5 md:w-80 md:mx-auto'>{content}</p>
                <div className="flex gap-12 justify-center">
                    <div >
                        <a href={codeUrl} rel='noreferrer' target='_blank' className='flex items-center gap-2 active:text-blue-600'>
                            <p className='text-lg font-semibold active:text-blue-600'>Code</p>
                            <FaGithub className='text-2xl active:fill-blue-600' />
                        </a>
                    </div>
                    <div >
                        <a href={liveUrl} rel='noreferrer' target='_blank' className='flex items-center gap-2 active:text-blue-600'>
                            <p className='text-lg font-semibold active:text-blue-600'>Life Demo</p>
                            <BsBoxArrowUpRight className='text-xl active:fill-blue-600' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project