import React, { Component } from 'react';
import Book from './Book'
import Cover from './foo.png'


class Shelf extends Component {

render() {
const {onShelfBooks,updateShelf,shelfTilte,bookCategory} = this.props

    return ( 
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTilte}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {
                /*filter books by it's shelf and maping to render*/ 
                onShelfBooks.filter(book => book.shelf === bookCategory).map(book => (
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
                          
                            bookshelf = {bookCategory}
                            updateShelf ={updateShelf}
                            book ={book} 
                        /> 
                    </li>

                ))
            }
            </ol>
            </div>
        </div>
      );
    }
} 
export default Shelf;




