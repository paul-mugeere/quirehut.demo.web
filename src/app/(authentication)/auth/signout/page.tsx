'use client'

import { SignoutButton } from "@/components/signout";

export default function Signout() {
    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-lg leading-tight tracking-tight text-gray-900 md:text-xl">
                Are you sure you want to sign out?
            </h1>

            <SignoutButton callbackUrl="/"/>
        </div>
    )
}