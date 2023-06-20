import React from 'react'
import frontEndImg from '../images/front-end-img.svg';
import workingImg from '../images/working-img.png'
const About = () => {
    return (
        <div className='py-12 px-5 lg:px-12 lg:flex lg:gap-10 xl:px-60' id='about'>
            <div className='z-10 pb-10 relative'>
                <img className='rounded-lg w-96 mx-auto lg:mx-0 lg:w-[215rem] lg:h-[22rem]' src="https://careerkarma.com/blog/wp-content/uploads/2022/04/Top-Tips-to-Create-the-Best-Desk-Setup-for-Programmers.jpg" alt='about' />
                <div className='hidden md:block absolute right-24 bottom-1 lg:-bottom-4 xl:bottom-5 2xl:-bottom-3 lg:-right-9 rounded-full bg-white'>
                    <img src={frontEndImg} alt="front-end" className='w-36 animate-spin-slow' />
                    <img src={workingImg} alt="working" className='w-16 absolute top-9 left-10' />
                </div>
            </div>
            <div className='-mt-4'>
                <h2 className='text-blue-600 font-bold text-lg text-center lg:text-start'>ABOUT ME</h2>
                <p className='font-bold text-3xl text-center mb-10 lg:text-start lg:mb-5'>A dedicated Front-end Developer<br></br> based in Cairo, Egypt. 📍</p>
                <p className='text-lg text-center text-gray-500 md:mx-24 lg:text-start lg:mx-0'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in
                    HTML,CSS, JavaScript, React and Tailwind. I excel in designing and maintaining
                    responsive websites that offer a smooth user experience. My expertise lies in
                    crafting dynamic, engaging interfaces through writing clean and optimized code
                    and utilizing cutting-edge development tools and techniques.
                    I am also a team player who thrives in collaborating with cross-functional
                    teams to produce outstanding web applications.
                </p>
            </div>
        </div>
    )
}

export default About