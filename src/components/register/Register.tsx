'use client'
import React, { useState } from 'react'
import Inputbar from '../input/Inputbar'
import Button from '../button/Button'
import { BsGoogle } from 'react-icons/bs'
import { supabase } from '@/app/lib/client'

const Register = () => {
    const [formData, setFormData] = useState(
        {
            fullName: '',
            // companyName: '',
            // contact: '',
            // alternativeContact: '',
            email: '',
            // citizenship: '',
            // location: '',
            password: ''
        }
    )
    console.log(formData)
    const handleInputChange = (event: any) => {
        // setInputValue(value)
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleSubmit = async (e: any) => {
        // e.preventDefault()
        // try {
        //     const { data, error } = await supabase.auth.signUp({
        //         email: formData.email,
        //         password: formData.password,
        //         options: {
        //             data: {
        //                 fullName: formData.fullName,
        //                 // companyName: formData.companyName,
        //                 // contact: formData.contact,
        //                 // alternativeContact: formData.alternativeContact,
        //                 // citizenship: formData.citizenship,
        //                 // location: formData.location,
        //             }
        //         }
        //     }
        //     )
        //     if (error) throw error
        //     alert('Check your email for verification link')
        //       } catch (error) {
        //     alert(error)
        // }
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                    fullName: formData.fullName,
                }
            }
        });

        if (error) {
            console.log(error.message)
        } else {
            alert('user has signed in')
        }
    }
    return (
        <div className='flex flex-col space-y-10 bg-white px-5 sm:px-5  py-10 rounded-s-xl rounded-e-xl md:rounded-s-none md:rounded-e-[20px] max-h-[80vh] '>
            <div className='w-full '>
                <span className='flex flex-col mx-auto text-center'>
                    <p className='text-[43px] font-extrabold leading-none  text-secondary'>Halite</p>
                    <p className='text-[26px] font-extrabold leading-none text-[#A5A58D]'>Gift Store</p>
                </span>
            </div>
            <div className='flex flex-col space-y-10 overflow-y-scroll custom-scrollbar'>
                <form className='flex flex-col space-y-8 mr-2' onSubmit={handleSubmit}>
                    <Inputbar placeholder='Enter your full name' title='What is your full name?' require name='fullName' handleChange={handleInputChange} type='name' />
                    {/* <Inputbar placeholder='Enter your company name' title='What is your company name?' require name='companyName' handleChange={handleInputChange} type='name' /> */}
                    {/* <Inputbar placeholder='Enter your contact number' title='What is your contact number?' require name='contact' handleChange={handleInputChange} type='name' /> */}
                    {/* <Inputbar placeholder='Enter your alternative contact number' title='What is your alternative contact number?' name='alternativeContact' handleChange={handleInputChange} type='name' /> */}
                    <Inputbar placeholder='Enter your email address' title='What is your email address?' require name='email' handleChange={handleInputChange} type='email' />
                    {/* <Inputbar placeholder='Enter your PAN number' title='What is your legal company id?' name='pan' handleChange={handleInputChange} type='name' /> */}
                    {/* <Inputbar placeholder='Enter your citizenship number' title='What is your citizenship id?' require name='citizenship' handleChange={handleInputChange} type='name' /> */}
                    {/* <Inputbar placeholder='Enter your company location' title='Where is your company?' name='location' handleChange={handleInputChange} type='name' /> */}
                    <Inputbar placeholder='Enter a password' title='Password' require name='password' handleChange={handleInputChange} type='password' />
                    <div className='w-full flex justify-center'>
                        <div className='flex flex-col space-y-1 w-full md:w-fit'>
                            <Button
                                title='Create an account'
                                variant='primary'
                                onClick={handleSubmit}
                                type='submit'
                            />
                            <p className='text-sm text-secondary font-medium text-center'>OR</p>
                            <Button
                                licon={BsGoogle}
                                title='Return back'
                                variant='outline' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register