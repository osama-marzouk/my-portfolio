import React from 'react'
import { RiWhatsappFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
const Contact = () => {
    return (
        <div className='py-20 px-5 md:px-10 xl:px-60' id='contact'>
            <h2 className='text-blue-600 font-bold text-lg text-center md:text-start'>CONTACT</h2>
            <p className='font-bold text-2xl text-center mb-10 md:text-start md:text-3xl'>Need help?! Hit me up! 👇</p>
            <div className='flex flex-col justify-center gap-6 md:flex-row md:justify-normal md:gap-20'>
                <div className='flex flex-col justify-center items-center gap-3 md:flex-row'>
                    <div className='w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center'>
                        <RiWhatsappFill className='text-3xl fill-blue-600' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='font-bold text-lg'>Whatsapp/Phone</h2>
                        <a href='https://wa.me/201068155457' className='text-lg text-gray-500'>201068155457</a>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 md:flex-row'>
                    <div className='w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center'>
                        <MdEmail className='text-3xl fill-blue-600' />
                    </div>
                    <div>
                        <h2 className='font-bold text-lg text-center'>Email</h2>
                        <a href="mailto:osamamarzou8@gmail.com" className='text-lg text-gray-500'>osamamarzou8@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact