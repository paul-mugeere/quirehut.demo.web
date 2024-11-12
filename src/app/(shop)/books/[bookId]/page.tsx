import BookDetails from '@/components/books';
import React from "react";

export default function Page({params}: { params: { slug: string } }) {
    return (
        <div className="w-full m-auto">
            <BookDetails
                author={"test-author"}
                id={params.slug}
                title={"test-title"}
                imgUrl={""}
                format={"Audiobook"}
                price={400}
                language={"en-US"}/>
        </div>

    )
}