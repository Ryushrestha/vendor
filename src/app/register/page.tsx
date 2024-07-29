import LoginLeft from '@/components/login-components/LoginLeft'
import Register from '@/components/register/Register'
import React from 'react'

const page = () => {
    return (
        <div className={`h-screen flex justify-center padding-x bg-[#FFEFE3] items-center `}>
        <div className='grid grid-cols-6 my-auto max-w-[95rem] w-full'>
                <div className='hidden md:grid md:col-span-3 h-full'>
                    <LoginLeft />
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <Register/>
                </div>
            </div>
        </div>
    )
}

export default page
