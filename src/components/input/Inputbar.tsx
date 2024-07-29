import React, { FC } from 'react'
interface InputProps {
    title: string
    placeholder: string
    require?: boolean
    name: string
    onInputChange?: any
    type:string
    handleChange:any
}
const Inputbar: FC<InputProps> = ({ title, placeholder, require, name, handleChange,type}) => {
    // const handleChange=(event : any)=>{
    //     const updatedValue=event.target.value
    //     onInputChange(updatedValue)
    // }
    return (
        <div className='flex flex-col space-y-2 bg-white'>
            <span className='bg-white ml-2'>
                <label className='text-lg font-medium  bg-white leading-none text-secondary flex flex-row space-x-1'>{title} {require ? <p className='text-emergency'>*</p> : ''}</label>
            </span>

            <input required={require ? true : false}
            type={type}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                className='p-2.5 rounded-md transition-colors duration-300 border-2 border-grey hover:border-primary focus:outline-none focus:border-primary  text-base text-secondary placeholder:text-base ' />
        </div>
    )
}

export default Inputbar