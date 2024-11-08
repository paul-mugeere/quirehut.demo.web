import {FC} from 'react';
import {ButtonProps} from './Button.types'

const SecondaryButton:FC<ButtonProps> =({type,handleOnClick,state,label})=>{
    return (
        <button type={type} onClick={handleOnClick} disabled={state}
                className="w-full px-4 mt-2 space-x-2 h-12 text-base font-light text-qh-yellow-600 rounded-t-full rounded-b-full outline outline-1 outline-yellow-600 transition focus:ring-2 focus:ring-offset-2  hover:bg-yellow-800 hover:text-white hover:outline-none"
        >
            <span>{label}</span>
        </button>
    );
}

export default SecondaryButton;