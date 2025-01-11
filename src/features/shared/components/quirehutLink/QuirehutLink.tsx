import Link from 'next/link'
import { QuirehutLinkProps } from './QuirehutLink.types'

const QuirehutLink = ({ href, children, className }: QuirehutLinkProps) => {
    return (
        <Link className={`text-qh-yellow-600 hover:text-qh-yellow-800 ${className}`} href={href}>
            {children}
        </Link>
    )
}

export default QuirehutLink;