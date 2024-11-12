import { FC } from "react";
import {ButtonProps} from './Button.types'

const PrimaryButton: FC<ButtonProps> = ({type, handleOnClick, label, state }) => {
    return (
        <button type={type} onClick={handleOnClick} disabled={state}
            className="w-full px-4 mt-2 space-x-2 h-12 text-base font-light text-white rounded-t-full rounded-b-full transition focus:ring-2 focus:ring-offset-2 focus:outline-none bg-qh-yellow-800 hover:bg-yellow-900 focus:bg-qh-yellow-800"
        >
            <span>{label}</span>
        </button>
    )

}

export default PrimaryButton;