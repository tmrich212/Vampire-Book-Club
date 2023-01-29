import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
        <ul className='books'>
            { books.map(book => {
                return ( <BookDetails book={book} key={book.id}/>)})}
        </ul>
        </div> 
     ) : (
        <div className="empty">No books to read, hello free time!</div>
     )
}
 
export default BookList;