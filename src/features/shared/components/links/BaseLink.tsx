import Link from 'next/link'
import {ReactNode} from "react";

export interface BaseLinkProps {
    href: string
    children: ReactNode
    className?: string
}

const BaseLink = ({ href, children, className }: BaseLinkProps) => {
    return (
        <Link className={`text-qh-yellow-600 hover:text-qh-yellow-800 ${className}`} href={href}>
            {children}
        </Link>
    )
}

export default BaseLink;