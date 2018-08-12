import React from 'react';
import Book from './Book'
import Cover from './foo.png'

const Shelf = (props)=> {
    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTilte}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
        {
            /*filter books by it's shelf and maping to render*/ 
            props.onShelfBooks.filter(book => book.shelf === props.bookCategory).map(book => (
                <li key={book.id}>
                    <Book                              
                        title ={book.title}
                        authors ={book.authors}
                        style = {{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${book.imageLinks?
                                book.imageLinks.smallThumbnail:Cover})`, 
                            backgroundSize:'cover'    
                        }}
                      
                        bookshelf = {props.bookCategory}
                        updateShelf ={props.updateShelf}
                        book ={book} 
                    /> 
                </li>

            ))
        }
        </ol>
        </div>
    </div>
    )
}

export default Shelf;




