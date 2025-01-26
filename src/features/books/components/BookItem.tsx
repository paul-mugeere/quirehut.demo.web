'use client'

import {useRouter} from "next/navigation";
import {FC} from 'react';
import BookImage from "./BookImage";
import Authors from "./Authors";
import {BookFormat} from "../types/Book.types";
import {BookAuthor} from "../types/Book.types";
import { getFormat } from "@/features/books/utils/BookFormat";

export interface BookItemProps {
    bookId: string;
    editionId: string,
    title: string;
    authors: BookAuthor[];
    format: BookFormat;
    language: string;
    price: number;
    coverImageUrl: string;
}

const BookItem: FC<BookItemProps> = (book:BookItemProps) => {
    const router = useRouter();
    const handleBookItemClick = (bookId: string, editionId: string) => {
        router.push(`/books/${bookId}/editions/${editionId}`)
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
             onClick={() => handleBookItemClick(book.bookId, book.editionId)}>
            <div className='w-full flex flex-col items-center'>
                <BookImage title={book.title} coverImageUrl={book.coverImageUrl}/>
            </div>
            <div className='w-full flex flex-col items-left mt-5 ml-4 gap-3'>
                <div className="flex flex-col ">
                    <p>{book.title}</p>
                    <p className='text-sm text-slate-500'><Authors authors={book.authors}/></p>
                    <p className='text-sm text-slate-500'>{getFormat(book.format)} | {book.language}</p>
                </div>
                <div className="price focus-within:shadow-lg">
                    <p className='text-xl'>{book.price},-</p>
                </div>
            </div>
        </div>
    );
}

export default BookItem;
