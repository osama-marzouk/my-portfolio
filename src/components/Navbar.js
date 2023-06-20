import React, { useRef } from 'react'
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md'
const Navbar = () => {

    const list = useRef()

    return (
        <div className={`px-8 py-5 flex items-center justify-between shadow-md z-20 fixed top-0 left-0 right-0 bg-white lg:px-12`}>
            <div>
                <a href='/h' className='font-bold text-xl '>OsamaMarzouk</a>
            </div>
            <div ref={list} className={`bg-white flex justify-center items-center -translate-x-full fixed top-0 left-0 right-0 bottom-0 
            duration-300 lg:static lg:translate-x-0`}>
                <MdClose className='text-3xl absolute top-7 right-9 lg:hidden' onClick={() => list.current.classList.add('-translate-x-full')} />
                <ul className='text-2xl font-semibold flex flex-col gap-10 text-center lg:flex-row lg:text-xl lg:gap-6'>
                    <li onClick={() => { list.current.classList.add('-translate-x-full'); window.location.replace("/#home") }}>Home</li>
                    <li onClick={() => { list.current.classList.add('-translate-x-full'); window.location.replace("/#about") }}>About</li>
                    <li onClick={() => { list.current.classList.add('-translate-x-full'); window.location.replace("/#projects") }}>Projects</li>
                    <li onClick={() => { list.current.classList.add('-translate-x-full'); window.location.replace("/#contact") }}>Contact</li>
                </ul>
            </div>
            <div className='lg:hidden'>
                <FiMenu className='text-3xl ' onClick={() => list.current.classList.remove('-translate-x-full')} />
            </div>
        </div>
    )
}

export default Navbar