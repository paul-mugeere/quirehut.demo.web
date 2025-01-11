import { BookAuthor } from "../types/Book.types";

interface BookAuthorProps{
    authors:BookAuthor[]
}

const Authors = ({authors}:BookAuthorProps) => {

    return (
       authors.map((author:BookAuthor) => (
            <span key={author.id}>{author.fullname} </span>
        ))
    )
}

export default Authors;