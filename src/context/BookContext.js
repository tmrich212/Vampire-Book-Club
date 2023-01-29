import React, {createContext, useState} from 'react';
import { v1 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'interview with the vampire', author: 'anne rice', id: 1},
        {title: 'queen of the damned', author: 'anne rice', id: 2},
    ])

    const addBooks = (title, author) => {
        setBooks([...books, {title, author, id: v1()}]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id ))
    }

    return (
        <BookContext.Provider value={{books, addBooks, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}
 
export default BookContextProvider;