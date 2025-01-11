import React from "react";
import { getFormat } from "@/features/books/utils/BookFormat";

interface BookDetailsPublicationProps {
    year: number,
    format: string,
    language: string
}
const BookDetailsPublication = (props: BookDetailsPublicationProps) => {


    return <div className="product-details-format text-sm font-medium">
        <ul className="flex flex-row gap-x-2 mt-1">
            <li>{props.year} |</li>
            <li>{getFormat(props.format)} |</li>
            <li>{props.language}</li>
        </ul>
    </div>;
}

export default BookDetailsPublication;