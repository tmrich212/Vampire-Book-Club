import React, {createContext, useReducer} from 'react';
import { bookReducer } from '../reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer( bookReducer, [])

    // const addBooks = (title, author) => {
    //     setBooks([...books, {title, author, id: v1()}]);
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id ))
    // }

    return (
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}
 
export default BookContextProvider;