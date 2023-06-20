import React from 'react'

const TechStack = () => {
    return (
        <div className="bg-gray-50 pb-20 lg:bg-white lg:px-12 lg:pt-10 lg:flex lg:items-center lg:gap-20 xl:px-60 lg:pb-5">
            <div className='pb-3 mb-10 lg:mb-0 lg:pb-0'>
                <p className='text-lg font-semibold text-center border-b-2 border-gray-400 w-[6rem] pb-1 mx-auto lg:mx-0 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-4 lg:w-[8rem]'>Tech Stack</p>
            </div>
            <div className='flex gap-5 flex-wrap justify-center'>
                <div className='w-20 h-20 shadow-md rounded-full flex items-center bg-white'>
                    <img className='w-14 mx-auto' src='https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png' alt='' />
                </div>
                <div className='w-20 h-20 shadow-md rounded-full flex items-center bg-white'>
                    <img className='w-10 mx-auto' src='https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png' alt='' />
                </div>
                <div className='w-20 h-20 shadow-md rounded-full flex items-center bg-white'>
                    <img className='w-10 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='' />
                </div>
                <div className='w-20 h-20 shadow-md rounded-full flex items-center bg-white'>
                    <img className='w-10 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
                </div>
                <div className='w-20 h-20 shadow-md rounded-full flex items-center bg-white'>
                    <img className='w-10 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='' />
                </div>
            </div>
        </div>
    )
}

export default TechStack