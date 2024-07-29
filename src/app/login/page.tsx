import LoginLeft from '@/components/login-components/LoginLeft'
import React from 'react'
import bg from '../assets/images/backgroundimage.png'
import LoginRight from '@/components/login-components/LoginRight'
const page = () => {
    return (
        <div className={`h-screen flex justify-center padding-x bg-[#FFEFE3] items-center `} >
            <div className='grid grid-cols-6 my-auto max-w-[95rem] mx-auto'>
                <span className='hidden md:grid md:col-span-3 h-full'>
                    <LoginLeft />
                </span>
                <span className='col-span-6 md:col-span-3'>
                    <LoginRight />
                </span>
            </div>
        </div>
    )
}

export default page