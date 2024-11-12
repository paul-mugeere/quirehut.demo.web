'use client'

import {useRouter} from "next/navigation";
import {FC} from 'react';
import {BookItemProps} from "./Book.types";
import BookImage from "./BookImage";

const BookItem: FC<BookItemProps> = ({id, title, author, format, language, price, imgUrl}) => {
    const router = useRouter();
    const handleBookItemClick = (id: string) => {
        router.push(`/books/${id}`)
    }

    return (
        <div className='
        book-item 
        bg-qh-slate-50 
        w-full h-full 
        px-3 py-3 rounded-md 
        drop-shadow-lg 
        transition ease-in-out delay-120 
        hover:-translate-y-1 
        hover:scale-100 
        hover:shadow-lg 
        hover:cursor-pointer
        duration-300'
             onClick={() => handleBookItemClick(id)}>
            <div className='w-full flex flex-col items-center'>
                <BookImage title={title} imgUrl={imgUrl}/>
            </div>
            <div className='w-full flex flex-col items-left mt-5 ml-4 gap-3'>
                <div className="flex flex-col ">
                    <p>{title}</p>
                    <p className='text-sm text-slate-500'>{author}</p>
                    <p className='text-sm text-slate-500'>{format} | {language}</p>
                </div>
                <div className="price focus-within:shadow-lg">
                    <p className='text-xl'>{price},-</p>
                </div>
            </div>
        </div>
    );
}

export default BookItem;
