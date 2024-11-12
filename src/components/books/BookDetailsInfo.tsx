import BookImage from "@/components/books/BookImage";
import {ProductContext} from "@/components/books/Book.types";
import BookDetailsHeader from "@/components/books/BookDetailsHeader";
import BookDetailsPublication from "@/components/books/BookDetailsPublication";
import BookDetailsDescription from "@/components/books/BookDetailsDescription";
import React from "react";

const BookDetailsInfo =()=> {
    return <div className="book-details col-span-2">
        <div className="w-full grid grid-cols-3 gap-10">
            <div className="w-full flex flex-col items-center col-span-1">
                <BookImage context={ProductContext.ProductDetails}></BookImage>
            </div>
            <div className="w-full items-start col-span-2">
                <BookDetailsHeader/>
                <BookDetailsPublication/>
                <BookDetailsDescription/>
            </div>
        </div>
    </div>;
}

export default BookDetailsInfo;