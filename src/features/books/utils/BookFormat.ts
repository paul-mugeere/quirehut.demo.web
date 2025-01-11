import { BookFormat } from "@/features/books/types/Book.types";

export const getFormat = (format: string) => {
    const bookFormat: BookFormat = BookFormat[format as keyof typeof BookFormat];
    return bookFormat != undefined ? bookFormat : BookFormat.Unknown
}