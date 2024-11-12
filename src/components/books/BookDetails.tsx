import React from "react";
import {BookItemProps} from "./Book.types";
import BookDetailsPurchaseOptions from "./BookDetailsPurchaseOptions";
import BookDetailsInfo from "./BookDetailsInfo";

const BookDetails = ({}:Partial<BookItemProps>) => {
    return (
        <div className="grid grid-cols-3 gap-10">
            <BookDetailsInfo/>
            <BookDetailsPurchaseOptions/>
        </div>
    )
};

export default BookDetails;