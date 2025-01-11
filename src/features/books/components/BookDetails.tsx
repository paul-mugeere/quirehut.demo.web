import React from "react";
import BookDetailsPurchaseOptions from "./BookDetailsPurchaseOptions";
import { BookAuthor, ProductContext } from "../types/Book.types";
import BookImage from "./BookImage";
import BookDetailsHeader from "./BookDetailsHeader";
import BookDetailsPublication from "./BookDetailsPublication";
import BookDetailsDescription from "./BookDetailsDescription";

interface BookItemDetailsProps {
    authors: BookAuthor[]
    bookId: string
    editionId: string,
    title: string,
    coverImageUrl: string,
    format: string,
    publicationDate: number,
    language: string,
    description: string
}

const BookDetails = ({title="",authors=[],publicationDate=0,language = "", description, format = '', coverImageUrl }: Partial<BookItemDetailsProps>) => {
    return (
        <div className="grid grid-cols-3 gap-10">
            <div className="book-details col-span-2">
                <div className="w-full grid grid-cols-3 gap-10">
                    <div className="w-full flex flex-col items-center col-span-1">
                        <BookImage title={title} coverImageUrl={coverImageUrl} context={ProductContext.ProductDetails}></BookImage>
                    </div>
                    <div className="w-full items-start col-span-2">
                        <BookDetailsHeader title={title} subTitle={authors.length? authors[0].fullname:""} />
                        <BookDetailsPublication year={publicationDate} language={language} format={format}/>
                        <BookDetailsDescription description={description} />
                    </div>
                </div>
            </div>
            <BookDetailsPurchaseOptions />
        </div>
    )
};

export default BookDetails;