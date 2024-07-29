import React, { FC } from 'react'
interface CheckboxProps {
    title: string
}
const Checkbox: FC<CheckboxProps> = ({ title }) => {
    return (
        <div className='flex flex-row space-x-1'>
            <label className="flex items-center cursor-pointer space-x-2">
                <input
                    type="checkbox"
                    // checked={isChecked}
                    // onChange={handleChange}
                    className="sr-only"
                />
                <div
                    className={`w-5 h-5 flex items-center justify-center border border-primary rounded-sm transition-colors duration-300 focus:outline-none `}>
                    {/* {isChecked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )} */}
                </div>
                <span className="text-secondary text-sm font-medium">{title}</span>
            </label>
        </div>
    )
}

export default Checkbox