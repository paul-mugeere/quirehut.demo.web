import React from "react";
import BookItem from "./BookItem";
import {getBooks} from '@/features/books/api/titles';
import {BookItemProps} from "@/features/books/components/BookItem";

const BookList = async () => {
    let result = await getBooks();
    let books = result.titles;
    return (
        <div>
            <div className="book-list grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
                {
                    books.map((book:BookItemProps) => (
                        <BookItem key={book.bookId} {...book} />
                    ))
                }
            </div>
        </div>
    )
}

export default BookList;