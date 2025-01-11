import BookDetails from '@/features/books/components';
import { BookFormat } from '@/features/books/types/Book.types';
import { getBook } from '@/features/books/api/titles';
import React from "react";

export default async function Page(props: {
    params: Promise<{ bookId: string, editionId: string }>
  }){
    const {bookId, editionId} = await props.params
    let result = await getBook(bookId, editionId)
    let bookDetails = result.details;
    return (
        <div className="w-full m-auto">
            <BookDetails
                authors={bookDetails.authors}
                bookId={bookId}
                editionId ={editionId}
                title={bookDetails.title}
                coverImageUrl={bookDetails.coverImageUrl}
                format={bookDetails.format as BookFormat}
                publicationDate={bookDetails.publicationDate}
                language={bookDetails.language}
                />
        </div>

    )
}