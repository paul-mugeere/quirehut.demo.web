import React from "react";
import BookItem from "./BookItem";

interface ProductListProps {

}

const BookList: React.FC<ProductListProps> = ({}) => {
    return (
        <div>
            <div className="book-list grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
                <BookItem id='1' title='The Great Gatsby' author='F. Scott Fitzgerald' format='Paperback'
                          language='English' price={10} imgUrl=''/>
                <BookItem id='2' title='Design Patterns' author='Eric Evans' format='Hardcover' language='English'
                          price={10} imgUrl=''/>
                <BookItem id='3' title='Clean Code' author='F. Scott Fitzgerald' format='Hardcover' language='English'
                          price={10} imgUrl=''/>
                <BookItem id='4' title='God i Norsk' author='F. Scott Fitzgerald' format='Paperback' language='English'
                          price={10} imgUrl=''/>
            </div>
        </div>
    )
}

export default BookList;