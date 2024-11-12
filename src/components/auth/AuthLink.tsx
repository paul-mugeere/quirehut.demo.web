"use client"

import { PersonOutlineIcon } from '../shared/icons';
import { usePathname } from 'next/navigation';
import { useSession } from "next-auth/react";
import { QuirehutLink } from "../link";

const AuthLink = () => {
    const { data: session, status } = useSession()
    const pathname = usePathname() || "/";
    const callbackUrl = encodeURIComponent(pathname);
    const authLabel = !session ? "Sign in" : "Sign out";
    const authUrl = session ? "/api/auth/signout" : `/api/auth/signin?callbackUrl=${callbackUrl}`;
    return (

        <QuirehutLink href={authUrl} className="text-sm font-sans text-core-neutral-900 gap-x-2 font-semibold">
            <div className="flex items-center gap-x-2">
                <PersonOutlineIcon /> {authLabel}
            </div>
        </QuirehutLink>
    )
}

export default AuthLink;
