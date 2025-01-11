import React from "react";

interface BookDetailsHeaderProps{
    title: string
    subTitle?: string
}
const BookDetailsHeader = ({title="Unknown", subTitle}: BookDetailsHeaderProps) => {
    return <div className="product-details-title">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <h2 className="text-sm font-medium">{subTitle}</h2>
    </div>;
}

export default BookDetailsHeader;