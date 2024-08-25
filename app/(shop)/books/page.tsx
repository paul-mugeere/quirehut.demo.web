'use client'

import { useRouter } from "next/navigation"
import { BookCard } from "@/components/book"

export default function Books() {
    const router = useRouter();
    const handleBookItemClick =(id:string)=>{
        router.push(`/books/${id}`)
    }
    return (
        <div>
            <div className="book-list grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
                <BookCard handleOnClick={handleBookItemClick} id='1' title='The Great Gatsby' author='F. Scott Fitzgerald' format='Paperback' language='English' price={10} imgUrl='' />
                <BookCard handleOnClick={handleBookItemClick} id='2' title='Design Patterns' author='Eric Evans' format='Hardcover' language='English' price={10} imgUrl='' />
                <BookCard handleOnClick={handleBookItemClick} id='3' title='Clean Code' author='F. Scott Fitzgerald' format='Hardcover' language='English' price={10} imgUrl='' />
                <BookCard handleOnClick={handleBookItemClick} id='4' title='God i Norsk' author='F. Scott Fitzgerald' format='Paperback' language='English' price={10} imgUrl='' />
            </div>
        </div>
    )
}
