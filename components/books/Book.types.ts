export interface BookItemProps {
    id: string;
    title: string;
    author: string;
    format: "Paperback" | "Hardcover" | "E-book" | "Audiobook";
    language: string;
    price: number;
    imgUrl: string;
}

export interface BookImageProps {
    title: string;
    imgUrl: string;
    context: ProductContext
}

export enum ProductContext {
    ProductCard,
    ProductDetails
}
