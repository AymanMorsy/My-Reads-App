import React, { Component } from 'react';
import Book from './Book'


class Shelf extends Component {
render() { 
    const {category,title,updateShelf,books} = this.props       
    let bookCategory ;
    if(books.length){
        bookCategory = books.filter((book)=>  book.shelf === category)      
    }

    return ( 
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    bookCategory && bookCategory.map(book => (                        
                            <li key = {book.id}>
                                <Book 
                                    style ={{ 
                                        width: 128, 
                                        height: 192, 
                                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail :'https://image.ibb.co/jXn9Ae/Cover_Coming_Soon.png'})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                        }}
                                    author = {book.authors ? book.authors.toString() : 'Unknown!'}
                                    bookTitle = {book.title}
                                    category = {category}
                                    update = {(e) => {updateShelf(book, e.target.value)}}
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




