'use client'
import React, { useState } from 'react'
import Input from '../input/Input'
import Checkbox from '../button/Checkbox'
import Button from '../button/Button'
import { BsGoogle } from "react-icons/bs";
import Link from 'next/link'

const LoginRight = () => {
    const [formData, setFormData] = useState(
        {
            email:'',
            password:''
        }
    )
    const handleInputChange = (event: any) => {
        // setInputValue(value)
        setFormData((prevFormData)=>{
            return{
              ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }
    const handleClick=()=>{

    }
    return (
        <div className='flex flex-col space-y-7 bg-white px-5 sm:px-10 md:px-15 lg:px-[80px] xl:px-[100px] 2xl:px-[140px] py-10 rounded-s-xl rounded-e-xl md:rounded-s-none md:rounded-e-[20px]'>
            <div className='w-full '>
                <span className='flex flex-col mx-auto text-center'>
                    <p className='text-[43px] font-extrabold leading-none  text-secondary'>Halite</p>
                    <p className='text-[26px] font-extrabold leading-none text-[#A5A58D]'>Gift Store</p>
                </span>
            </div>
            <div className='flex flex-col space-y-5'>
                <form className='flex flex-col space-y-5'>
                    <Input placeholder='98*******/halite@gmail.com' title='Mobile Number/Email' require name='email' handleChange={handleInputChange} type='name' />
                    <Input placeholder='*********' title='Password' require name='password' handleChange={handleInputChange} type='password' />
                </form>
                <div className='flex flex-row justify-between w-full'>
                    <Checkbox title='Remember me' />
                    <span>
                        <Button title='Forgot password' variant='underline' />
                    </span>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='flex flex-col space-y-1 w-full md:w-fit'>
                        <Button
                            title='Login'
                            variant='primary' 
                            onClick={handleClick}/>
                        <p className='text-sm text-secondary font-medium text-center'>OR</p>
                        <Button
                            licon={BsGoogle}
                            title='Continue with gmail'
                            variant='outline' />
                    </div>
                </div>
                <div className='flex flex-row space-x-1 items-center'>
                    <p className='text-secondary text-sm font-medium'>Need an halite gift store account?</p>
                    <Link href={'/register'}>
                    <span>
                        <Button title='Create an account' variant='underline' />
                    </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginRight