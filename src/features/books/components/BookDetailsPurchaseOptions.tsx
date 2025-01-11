import {PrimaryButton, SecondaryButton} from "@/features/shared/components/buttons";
import React from "react";

const BookDetailsPurchaseOptions =()=> {
    return <div className="add-to-cart col-span-1 bg-qh-slate-50 rounded-2xl p-7 gap-y-14">
        <div className="w-full grid grid-cols-1 gap-3">
            <h1 className="text-3xl font-bold">339,-</h1>
            <div>
                <p>Available in stock: 8</p>
                <p>Normal delivery time 1-2 working days.</p>
            </div>
            <PrimaryButton label={"Add to cart"}/>
            <SecondaryButton label={"Buy with Vipps"}/>
        </div>
    </div>;
}

export default BookDetailsPurchaseOptions