import {NavigationItems} from "@/features/shared/components/links/NavigationItems";
import {NavigationItem} from "@/features/shared/components/links/Links.types";
import BaseLink from "@/features/shared/components/links/BaseLink";

const NavigationLinks = () => {
    return(
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 pt-6">
            <ul className="flex">
                {
                    NavigationItems.map((item: NavigationItem, key: number) => (
                        <li key={key}  className="flex items-center pr-5">
                            <BaseLink href={item.url}>{item.text}</BaseLink>
                        </li>
                    ))
                }
            </ul>
            
        </nav>
    )
}
export default NavigationLinks;