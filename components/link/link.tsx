import Link from 'next/link'
import { ReactNode } from 'react'

interface QuireLinkProps {
    href: string
    children: ReactNode
    className?: string
}
const QuireLink = ({ href, children, className }: QuireLinkProps) => {
    return (
        <Link className={`text-qh-yellow-600 hover:text-qh-yellow-800 ${className}`} href={href}>
            {children}
        </Link>
    )
}

export default QuireLink;