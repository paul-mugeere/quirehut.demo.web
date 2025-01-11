
export enum ProductContext {
    ProductCard,
    ProductDetails
}

export enum BookFormat {
    hardPaper = "Hardpaper",
    paperBack = "Paperback",
    audioBook = "Audiobook",
    ebook = "E-book",
    Unknown = "Unknown format"
}

export interface BookAuthor {
    id: string;
    fullname: string;
}
