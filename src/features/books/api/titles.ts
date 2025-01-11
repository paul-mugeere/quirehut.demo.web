'use server'

const titlesEndPoint =`${process.env.API_URL}/sales/titles`;
export async function getBooks() {
    const response = await fetch(titlesEndPoint);
    return await response.json();;
}

export async function getBook(bookId:string, editionId:string) {
    const response = await fetch(`${titlesEndPoint}/${bookId}/editions/${editionId}`);
    return await response.json();
}