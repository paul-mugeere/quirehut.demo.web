import React from "react";

export default async function Page(props: {
    params: Promise<{ bookId: string, editionId: string }>
  }){
    const params = await props.params
    return (
        <div className="w-full m-auto">
            {/* <BookDetails
                author={"test-author"}
                id={params.slug}
                title={"test-title"}
                imgUrl={""}
                format={"Audiobook"}
                price={400}
                language={"en-US"}
                /> */}
        </div>

    )
}