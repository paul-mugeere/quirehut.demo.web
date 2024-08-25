import { QuireLink } from "../link";


const NavigationLinks = () => {
    return (
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 pt-6">
            <div className="flex lg:flex-1">
                <QuireLink href="/books">Books</QuireLink>
            </div>
        </nav>
    )
}
export default NavigationLinks;