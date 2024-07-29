import React, { createElement, FC, MouseEvent } from 'react'
import { IconType } from 'react-icons';
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

interface ButtonProps {
    title: string
    variant: 'primary' | 'secondary' | 'outline' | 'emergency' | 'underline'
    licon?: IconType
    ricon?: IconType
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    type?:'button' | 'submit' | 'reset'; 
}
const Button: FC<ButtonProps> = ({ title, variant = 'primary' ,licon,ricon,onClick,type ='button'}) => {
    const styling = () => {
        switch (variant) {
            case 'primary':
                return 'text-white bg-primary font-medium text-lg hover:bg-primary-dark space-x-2 px-4 py-1'
            case 'secondary':
                return 'text-white bg-secondary font-medium text-lg hover:bg-secondary-dark space-x-2 px-4 py-1'
            case 'outline':
                return 'text-primary hover:text-white  bg-none border border-primary font-medium text-lg hover:bg-primary-dark space-x-2 px-4 py-1'
            case 'emergency':
                return 'text-white bg-emergency font-medium text-lg hover:bg-emergency-dark space-x-2 px-4 py-1'
                   case 'underline':
                return 'text-primary font-medium text-base hover:underline px-1 '
        }
    }
    return (
        <button type={type} className={`${styling()} flex flex-row items-center justify-center   h-fit rounded-lg w-full cursor-pointer`} onClick={onClick}>
            {
                licon && createElement(licon, { className: 'button-icon my-auto' })
            }
            <span>{title ? title : 'read more'}</span>
            {
                ricon && createElement(ricon, { className: 'button-icon my-auto' })
            }        
            </button>
    )
}

export default Button