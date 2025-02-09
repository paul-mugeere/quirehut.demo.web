'use client'

import {CartOutlineIcon} from "@/features/shared/components/icons";
import {BaseButton} from "@/features/shared/components/buttons";
import React, {useState, FC} from "react";

const ShoppingCartDrawer: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen(!isOpen);
    return (
        <div className="shopping-drawer">
            <BaseButton onClick={toggleDrawer} className="text-sm font-sans gap-x-2 font-semibold">
                <div className="flex items-center gap-x-2">
                    <CartOutlineIcon/>Cart
                </div>
            </BaseButton>
            <div className={`fixed top-0 right-0 w-96 h-screen bg-white shadow-lg transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Your cart | 1 item</h2>
                    
                </div>
                <BaseButton onClick={toggleDrawer} className="text-sm font-sans absolute top-4 right-4 font-semibold">
                    Close
                </BaseButton>
            </div>
        </div>
    )
}

export default ShoppingCartDrawer;