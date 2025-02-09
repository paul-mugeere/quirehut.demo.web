import React, {FC, ReactNode} from "react";
import {twMerge} from 'tailwind-merge'

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
const BaseButton: FC<BaseButtonProps> = ({type, onClick, children, disabled, className}: BaseButtonProps) => {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            disabled={disabled} 
            className={twMerge(`text-qh-yellow-600 hover:text-qh-yellow-800`,className)}>
            {children}
        </button>
    )
}

export default BaseButton;